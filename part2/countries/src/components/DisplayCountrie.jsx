

const DisplayCountrie = (props) => {
    console.log(props.filtered, "here is the props")
    const { filtered } = props;
    let countrie = filtered[0];
    let filteredCountrie = [];
    Object.entries(countrie).map(([key, value]) => {
        if (key.toString() == "name") {
            filteredCountrie.push({ "name": value.common })
        } else if (key.toString() == "area") {
            filteredCountrie.push({ "area": value })
        } else if (key.toString() == "capital") {
            filteredCountrie.push({ "capital": value[0] })
        } else if (key.toString() == "languages") {
            let lang = [];
            Object.entries(value).map(([key, value]) => {
                lang.push(value);
            })
            filteredCountrie.push({ "languages": lang });
        } else if (key.toString() == "flag") {
            filteredCountrie.push({ "flag": value })


        }
    })

    const finalFilteredCountrie = filteredCountrie.map((obj, i) => {
        return (
            <li key={i}>
                <h3>
                    {
                        Object.entries(obj).map(([key, value]) => {
                            return `${key}:${value}`
                        })
                    }
                </h3>
            </li>
        )
    })

    console.log(JSON.stringify(filteredCountrie))


    // console.log(finalFilteredCountrie,"the final final")
    return (
        <div>
            <ul>{finalFilteredCountrie}</ul>
        </div>
    );
}

export default DisplayCountrie;