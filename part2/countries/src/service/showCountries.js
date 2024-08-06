

const displayCountrie = (con) => {
    let countrie = con[0];
    let filteredCountrie = [];
    Object.entries(countrie).map(([key,value]) => {
        if(key.toString() == "name") {
            filteredCountrie.push({"name":value})
        }else if (key.toString() == "area") {
            filteredCountrie.push({"area":value})
        }else if(key.toString() == "capital") {
            filteredCountrie.push({"capital":value[0]})
        }else if(key.toString() == "languages") {
            let lang = [];
            Object.entries(value).map(([key,value]) => {
                lang.push(value);
            })
            filteredCountrie.push({"languages":lang});
        }else if(key.toString() == "flag") {
            filteredCountrie.push({"flag":value})
        }
    })

    let finalFilteredCountrie = filteredCountrie.map((obj,i) => {
    
        if(obj.name != undefined) {
            return (
                <li key={i}> <h1> {obj.name}</h1>  </li>
            )
        }else if(obj.area != undefined) {
            return (
                <li key={i}> {obj.area} </li>
            )
        }else if(obj.capital != undefined) {
            return (
                <li key={i}> {obj.capital} </li>

            )
        }else if(obj.languages != undefined) {
            return (
                <li key={i}> {obj.languages} </li>

            )
        }else if(obj.flag != undefined) {
            return (
                <li key={i}> {obj.flag} </li>

            )
        }
    } )

    console.log(finalFilteredCountrie,"the final final")
    // return filteredCountrie;
}

export default displayCountrie;