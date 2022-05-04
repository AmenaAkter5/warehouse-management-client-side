import { useEffect, useState } from "react";


const useInventories = () => {

    // inventory items data load state
    const [items, setItems] = useState([]);

    // data fetch
    /* useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []) */

    useEffect(() => {
        fetch('https://pure-cliffs-64798.herokuapp.com/fruits')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return [items, setItems];
};

export default useInventories;