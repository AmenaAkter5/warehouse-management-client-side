import { useEffect, useState } from "react";
import axios from "axios";


const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {

        const getToken = async () => {
            const email = user?.user?.email;
            if (email) {
                const { data } = await axios.post('http://localhost:5000/login', { email })
                // console.log(data);
                setToken(data.accessToken);
                localStorage.setItem('accessToken', data.accessToken);
            }
        }
        getToken();
    }, [user])

    return [token, setToken];
};

export default useToken;