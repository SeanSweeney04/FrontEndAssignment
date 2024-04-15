import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';

  // Define state to store the fetched data
  function Singlemodules(){
    const [module, setModule] = useState(false); 
    const {moduleID} = useParams()


    useEffect(()=>{
        // our code goes here
        fetchData();
    },[moduleID]);
    const fetchData = async() => {
        const moduleResponse = await fetch(`http://127.0.0.1:8000/api/module/${moduleID}/ `)
        if(!moduleResponse.ok){
            throw new Error('module request failed')
        }
        const moduleData = await moduleResponse.json();
        setModule(moduleData);

       


    }
    return (
        <div>
            {module && (
                <div>
                    <h2>{module.code}</h2>
                    <p>Full name: {module.full_name}</p>
                    <p>Delivered to: {module.delivered_to}</p>
                </div>
            )}
           
        </div>
    )
}
   



export default Singlemodules;

