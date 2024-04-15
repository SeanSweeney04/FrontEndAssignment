import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';

  // Define state to store the fetched data
  function Singledegrees(){
    const [degree, setDegree] = useState(false); 
    const [cohorts, setCohort] = useState([]); 

    const {degreeID} = useParams()


    useEffect(()=>{
        // our code goes here
        fetchData();
    },[degreeID]);
    const fetchData = async() => {
        const degreeResponse = await fetch(`http://127.0.0.1:8000/api/degree/${degreeID}`)
        if(!degreeResponse.ok){
            throw new Error('Degree request failed')
        }
        const degreeData = await degreeResponse.json();
        setDegree(degreeData);

        const cohortResponse = await fetch(`http://127.0.0.1:8000/api/cohort/?degree=${degreeID}`)
        if(!cohortResponse.ok){
            throw new Error('Cohort request failed')
        }
        const cohortData = await cohortResponse.json();
        setCohort(cohortData);


    }
    return (
        <div>
            {degree && (
                <div>
                    <h2>{degree.full_name}</h2>
                    <p>Shortcode: {degree.shortcode}</p>
                </div>
            )}
            <h2>Cohorts</h2>
            <ul>
                {cohorts.map(cohort => (
                    <li key={cohort.id}>{cohort.name}</li>
                ))}
            </ul>
        </div>
    )
}
   



export default Singledegrees;

