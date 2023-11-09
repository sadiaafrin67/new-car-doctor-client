// import { useEffect, useState } from "react";
import useServices from "../../../Hooks/useServices";
import Service from "./Service";


const Services = () => {
    
    const services = useServices();

    // without fetch custom hook steps
    // const [services, setServices] = useState([]);

    // useEffect(() => {
    //     fetch('https://new-car-doctor-server-psi.vercel.app/services')
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [])

    

    return (
        <div className="mt-4">
            <div className="text-center">
               <h3 className="text-3xl text-orange-600 font-bold">Our Services</h3> 
               <h2 className="text-5xl font-bold">Our Service Area</h2>
               <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable</p>
            </div>

            <div>
                <p>seivices {services.length}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;