import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

  // Define state to store the fetched data
  function Modules(){
    const [data, setData] = useState(false); 


    useEffect(()=>{
        // our code goes here
        fetchModuleData();
    },[]);

    const fetchModuleData = async () => {
        try{
            const response = await fetch('http://127.0.0.1:8000/api/module/')
            if(!response.ok){
                throw new Error('something went wrong')
            }
            const data = await response.json();
            setData(data);

        }    catch (error){
                console.log('Error fetching data:', error)
        }
    }

    
    const renderData = modules => {
        return (
        <ul>
            {modules.map(module =>(
                <li key={module.code}>
                <Link to={`/Singlemodules/${module.code}`}>{module.full_name}</Link>
                    <ul>
                        <li>
                            <strong>Code:</strong> {module.code}
                        </li>
                    </ul>
                </li>
            ))}
        </ul>
        )

    }
    return (
      
            
                <div>
                    <h2>Modules:</h2>
                    {data && renderData(data)}
                </div>
          
          
      
    )
}






export default Modules;

