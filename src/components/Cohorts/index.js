import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

  // Define state to store the fetched data
  function Cohorts(){
    const [data, setData] = useState(false); 


    useEffect(()=>{
        // our code goes here
        fetchCohortData();
    },[]);

    const fetchCohortData = async () => {
        try{
            const response = await fetch('http://127.0.0.1:8000/api/cohort/')
            if(!response.ok){
                throw new Error('something went wrong')
            }
            const data = await response.json();
            setData(data);

        }    catch (error){
                console.log('Error fetching data:', error)
        }
    }

    
    const renderData = cohorts => {
        return (
        <ul>
            {cohorts.map(cohorts =>(
                <li key={cohorts.id}>
                <Link to={`/Singlecohorts/${cohorts.id}`}>{cohorts.id}</Link>
                    <ul>
                        <li>
                            <strong>Name:</strong> {cohorts.name}
                        </li>
                    </ul>
                </li>
            ))}
        </ul>
        )

    }
    return (
      
            
                <div>
                    <h2>Cohorts:</h2>
                    {data && renderData(data)}
                </div>
          
          
      
    )
}






export default Cohorts;

