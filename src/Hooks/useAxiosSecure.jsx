import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";


export const axiosSecure = axios.create({
    // in module
    // baseURL: 'https://new-car-doctor-server-psi.vercel.app',

    // in bonus module
    baseURL: 'http://localhost:5000',
    
    withCredentials: true
})

const useAxiosSecure = () => {

    const {logout} = useAuth()
    const navigate = useNavigate()

    useEffect( () => {
        axiosSecure.interceptors.response.use(res => {
            return res
        }, error => {
            console.log('error tracked in the interceptor', error.response)
            if(error.response.status === 401 || error.response.status === 403){
                console.log('logout the user')
                logout()
                .then(() => {
                    navigate('/login')
                })
                .catch(err => {
                    console.log(err)
                })
            }
        })
    }, [])

    return axiosSecure
};

export default useAxiosSecure;