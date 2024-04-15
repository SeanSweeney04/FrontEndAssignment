import React, { useState , useEffect} from 'react';
import { useParams} from 'react-router-dom';

  // Define state to store the fetched data
  function SingleStudent(){
    const [student, setStudent] = useState(false); 
    

    const {studentID} = useParams()


    useEffect(()=>{
        // our code goes here
        fetchData();
    },[studentID]);
    const fetchData = async() => {
        const studentResponse = await fetch(`http://127.0.0.1:8000/api/student${studentID}`)
        if(!studentResponse.ok){
            throw new Error('student request failed')
        }
        const studentData = await studentResponse.json();
        setStudent(studentData);

        
    }
    return (
        <div>
            {student && (
                <div>
                    <h2>{student.first_name}</h2>
                    <h2>{student.last_name}</h2>

                </div>
            )}
            
        </div>
    )
}
   



export default SingleStudent;

