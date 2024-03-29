import { useEffect, useState } from "react";
import axios from "axios";


const useToken = user => {

    // token load state
    const [token, setToken] = useState('');


    // fetch data
    useEffect(() => {

        const getToken = async () => {
            const email = user?.user?.email;
            if (email) {
                const { data } = await axios.post('https://warehouse-management-server-side-production-6978.up.railway.app/login', { email })
                setToken(data.accessToken);
                localStorage.setItem('accessToken', data.accessToken);
            }
        }
        getToken();
    }, [user])

    return [token, setToken];
};

export default useToken;