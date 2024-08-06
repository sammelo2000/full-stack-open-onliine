import displayCountrie from "./showCountries"




const findCountrie = (input,countries) => {
    const result =  countries.filter(con => {
        if (con.name.common.toLowerCase().includes(input.toLowerCase()) ) {
            return con;
        }
    }) 
    console.log(result,"result from findcoutrie")

    return result;



}


export {findCountrie}