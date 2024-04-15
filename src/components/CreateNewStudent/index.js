import React, { useState, useEffect } from 'react';

function CreateNewStudentPage(){
    const [studentData, setStudentData] = useState({
        student_id: '',
        first_name: '',
        last_name: '',
        email: '',
    })
    const handleInputChange = event => {
        const {name, value} = event.target;
        setStudentData(prevdata => ({
            ...prevdata, [name]: value 
        }))
    }
    const handleSubmit = async event => {
        event.preventDefault();
        try{
            const response = await fetch('http://127.0.0.1:8000/api/student/', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(studentData),
        });
        if(!response.ok){
            throw new Error('Something went wrong')
        }
        } catch(error){
            console.log(error)
        }
    }

return (

    <div class="mb-3 mt-3">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>

        <h1>Create new student</h1>
        <form action = "/action_page.php" onSubmit={handleSubmit}>
            <div class = "mb-3">
                <label htmlFor='student_id' class = "form-label">ID: </label>
                <input type = "text"
                class = "form-control"
                id = "student_id"
                name = "student_id"
                value = {studentData.student_id}
                onChange = {handleInputChange}
                required />

            </div>
            <div class = "mb-3">
                <label htmlFor='first_name' class = "form-label">First name:</label>
                <textarea
                class = "form-control"
                id = "first_name"
                name = "first_name"
                value = {studentData.first_name}
                onChange = {handleInputChange}
                required />
            </div>
            <div class = "mb-3">
                <label htmlFor='last_name' class = "form-label">Last name:</label>
                <textarea
                class = "form-control"
                id = "last_name"
                name = "last_name"
                value = {studentData.last_name}
                onChange = {handleInputChange}
                required />
            </div>
            <div class = "mb-3">
                <label htmlFor='cohort' class = "form-label">Cohort:</label>
                <textarea
                class = "form-control"
                id = "cohort"
                name = "cohort"
                value = {studentData.cohort}
                onChange = {handleInputChange}
                required />
            </div>

            <div class = "mb-3">
                <label htmlFor='email' class = "form-label">Email:</label>
                <textarea
                class = "form-control"
                id = "email"
                name = "email"
                value = {studentData.email}
                onChange = {handleInputChange}
                required />
            </div>

            <button type="submit" class="btn btn-primary">Create new student</button>
            
        </form>
    </div>
)
}

export default CreateNewStudentPage;

