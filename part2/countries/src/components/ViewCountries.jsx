import { useEffect, useState } from "react";
import axios from "axios";
import { findCountrie } from "../service/searchCountrie";
import displayCountrie from "../service/showCountries";


const ViewCountries = () => {
    const [countrie, setCountrie] = useState('');
    const [countries, setCountries] = useState(null);
    const [filtered, setFiltered] = useState([]);
    const [names, setNames] = useState([]);





    const onSearch = (e) => {
        e.preventDefault();


        if (countries !== null) {
            let result1 = findCountrie(e.target.value, countries)
            let result2 = result1.map(con => <li key={con.area}>{con.name.common}</li>)
            setFiltered(result1)
            setNames(result2)
            console.log(result2, "this is result 2")


            setCountrie(e.target.value)







        }

    }


    useEffect(() => {
        (async () => {
            if (countries) {
                console.log(countries)
                console.log("it is here")


            } else {
                await axios
                    .get('https://studies.cs.helsinki.fi/restcountries/api/all')
                    .then(res => {

                        setCountries(res.data)
                    })
                    .catch(err => {
                        console.log(err.message)
                    })
            }

        })();
    }, []);

    return (
        <div>
            <h1>Find Countries</h1>
            <h2>Search for countrie</h2>
            <input value={countrie} onChange={onSearch} />
            <div>
                {(filtered.length > 10 )? "Too many matches for qeury" : (filtered.length == 1)? displayCountrie(filtered): <ul>{names}</ul>}


            </div>

            {console.log(filtered, "here is the filtered now ok")}
        </div>
    )







}







export default ViewCountries;

