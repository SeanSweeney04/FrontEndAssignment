import React, { useState, useEffect } from 'react';
import { useParams, Link} from 'react-router-dom';

  // Define state to store the fetched data
  function Singlecohort(){
    const [cohort, setCohort] = useState(false); 
    const [students, setStudent] = useState([]); 
    const {cohortID} = useParams()


    useEffect(()=>{
        // our code goes here
        fetchData();
    },[cohortID]);
    const fetchData = async() => {
        const cohortResponse = await fetch(`http://127.0.0.1:8000/api/cohort/${cohortID}`)
        if(!cohortResponse.ok){
            throw new Error('Cohort request failed')
        }
        const cohortData = await cohortResponse.json();
        setCohort(cohortData);

        const studentResponse = await fetch(`http://127.0.0.1:8000/api/student/?cohort=${cohortID}`)
        if(!studentResponse.ok){
            throw new Error('Student request failed')
        }
        const studentData = await studentResponse.json();
        setStudent(studentData);


    }
    return (
        <div>
            {cohort && (
                <div>
                    <h2>{cohort.id}</h2>
                    <p><Link to={`/SingleCohortModules/${cohort.id}`}>View Modules for this Cohort</Link></p>
                    <p>Degree: {cohort.degree}</p>
                    
                </div>
            )}

            <h2>Students</h2>
            <ul>
                {students.map(student => (
                    <li key={student.student_id}>{student.first_name} {student.last_name}</li>
                ))}
            </ul>
        </div>
    )
}
   

 



export default Singlecohort;

