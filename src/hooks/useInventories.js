import { useEffect, useState } from "react";


const useInventories = () => {

    // inventory items data load state
    const [items, setItems] = useState([]);

    // data load state
    const [dataLoaded, setDataLoaded] = useState(false);


    // fetch data
    useEffect(() => {
        fetch('https://pure-cliffs-64798.herokuapp.com/fruits')
            .then(res => res.json())
            .then(data => {
                setItems(data)
                setDataLoaded(true)
            })
    }, [])

    return { items, dataLoaded, setItems };
};

export default useInventories;