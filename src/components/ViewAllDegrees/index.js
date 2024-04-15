import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

  // Define state to store the fetched data
  function Degrees(){
    const [data, setData] = useState(false); 


    useEffect(()=>{
        // our code goes here
        fetchDegreeData();
    },[]);

    const fetchDegreeData = async () => {
        try{
            const response = await fetch('http://127.0.0.1:8000/api/degree/')
            if(!response.ok){
                throw new Error('something went wrong')
            }
            const data = await response.json();
            setData(data);

        }    catch (error){
                console.log('Error fetching data:', error)
        }
    }

    
    const renderData = degrees => {
        return (
        <ul>
            {degrees.map(degree =>(
                <li key={degree.shortcode}>
                <Link to={`/Singledegrees/${degree.shortcode}`}>{degree.full_name}</Link>
                    <ul>
                        <li>
                            <strong>Shortcode:</strong> {degree.shortcode}
                        </li>
                    </ul>
                </li>
            ))}
        </ul>
        )

    }
    return (
      
            
                <div>
                    <h2>Degrees:</h2>
                    {data && renderData(data)}
                </div>
          
          
      
    )
}






export default Degrees;

