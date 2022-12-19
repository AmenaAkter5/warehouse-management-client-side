import { useEffect, useState } from "react";


const useInventories = () => {


    // inventory items data load state
    const [items, setItems] = useState([]);


    // data loaded state
    const [dataLoaded, setDataLoaded] = useState(false);


    // fetch data
    useEffect(() => {

        fetch('https://warehouse-management-server-side-production-6978.up.railway.app/fruits')
            .then(res => res.json())
            .then(data => {
                setItems(data)
                setDataLoaded(true)
            })

    }, [items])

    return { items, dataLoaded, setItems };
};

export default useInventories;