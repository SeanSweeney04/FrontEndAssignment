import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';

  // Define state to store the fetched data
  function SingleCohortModules(){
    const [modules, setModule] = useState(false); 
    const {cohortID} = useParams()


    useEffect(()=>{
        // our code goes here
        fetchData();
    },[cohortID]);
    const fetchData = async() => {
        const moduleResponse = await fetch(`http://127.0.0.1:8000/api/module/?delivered_to=${cohortID}`)
        if(!moduleResponse.ok){
            throw new Error('module request failed')
        }
        const moduleData = await moduleResponse.json();
        setModule(moduleData);

       


    }
    return (
        <div>
            {modules && (
                <div>
                    <h2>Modules for {cohortID}</h2>
                    {modules.map(module => (
                        <li key={module.id}>
                        {module.code}
                        
                        </li>
                    ))}
                    
                </div>
            )}

           
        </div>
    )
}
   

 



export default SingleCohortModules;

