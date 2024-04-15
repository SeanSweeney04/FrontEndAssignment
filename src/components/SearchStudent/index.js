import React,{useState, useEffect} from "react";
const SearchStudent = () => {
    const [studentID, setStudentID] = useState('');
    const [studentData, setStudentData] = useState(null);
    const [modulesAndGrades, setModulesAndGrades] = useState([]);

    const handleInputChange = (event) => {
        setStudentID(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const studentResponse = await fetch(`http://127.0.0.1:8000/api/student/${studentID}/`)
            if(!studentResponse.ok){
                throw new Error('Error fetching data')
            }

            const studentData = await studentResponse.json()
            setStudentData(studentData);
        
            const gradesResponse = await fetch(`http://127.0.0.1:8000/api/grade/?student=${studentID}`)
            if(!gradesResponse.ok){
                throw new Error('Error fetching grades')
            }

            const gradesData = await gradesResponse.json()
            setModulesAndGrades(gradesData);


            
          
        }  catch(error){
            console.log('Error fetching data:', error)
        }

    }

    return(
        <div class = "mt-3 mb-3">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>

            <form onSubmit={handleSubmit}>
                <label htmlFor="studentID" action = "/action_page.php">Enter student id </label> 
                <input type="text" class = "form-control" id="studentID" value={studentID} onChange={handleInputChange} />
                <button type="submit" class="btn btn-primary">Search</button>
            </form>
            {studentData && (
                <div>
                    <h2>Student Info:</h2>
                    <p>ID: {studentData.student_id}</p>
                    <p>Name: {studentData.first_name} {studentData.last_name} </p>


                </div>
            )}
            {modulesAndGrades.length > 0 && (
                <div>
                <p>Grades data: {modulesAndGrades.ca_mark}</p>

                    <ul>
                        <div>
                            {modulesAndGrades.map((item) => (
                                <li key={item.id}>
                                    Module: {item.module} <br/>
                                    CA Mark: {item.ca_mark} <br/>
                                    Exam Mark: {item.exam_mark} <br/>
                                    Total grade: {item.total_grade} <br/>

                                </li>
                            ))}
                        </div>
                    </ul>
                </div>
            )}
        </div>
    )

}

export default SearchStudent;