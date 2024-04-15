import React, { useState, useEffect } from 'react';
import './index.css'

function SetModuleGrade(){
    const [gradeData, setGradeData] = useState({
        id: '',
        module: '',
        ca_mark: '',
        exam_mark: '',
        cohort: '',
        total_grade:'',
        student:'',

        
    })
    const handleInputChange = event => {
        const {name, value} = event.target;
        setGradeData(prevdata => ({
            ...prevdata, [name]: value 
        }))
    }
    const handleSubmit = async event => {
        event.preventDefault();
        try{
            const response = await fetch('http://127.0.0.1:8000/api/grade?/student', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(gradeData),
        });
        if(!response.ok){
            throw new Error('Something went wrong')
        }
        } catch(error){
            console.log(error)
        }
    }

return (
    
    <div class = "mb-3 mt-3">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
        <h1>Set grade</h1>
        <form action = "/action_page.php" onSubmit={handleSubmit}>
            <div class = "mb-3">
                <label htmlFor='id' class = "form-label">ID: </label>
                <input type = "text"
                class = "form-control"
                id = "id"
                name = "id"
                value = {gradeData.id}
                onChange = {handleInputChange}
                required />

            </div>
            <div class = "mb-3">
                <label htmlFor='module' class = "form-label">Module:</label>
                <textarea
                class = "form-control"

                id = "module"
                name = "module"
                value = {gradeData.module}
                onChange = {handleInputChange}
                required />
            </div>
            <div class = "mb-3">
                <label htmlFor='ca_mark'  class = "form-label">CA Mark:</label>
                <textarea
                id = "ca_mark"
                class = "form-control"

                name = "ca_mark"
                value = {gradeData.ca_mark}
                onChange = {handleInputChange}
                required />
            </div>
            <div class = "mb-3">
                <label htmlFor='exam_mark' class = "form-label">Exam Mark:</label>
                <textarea
                class = "form-control"

                id = "exam_mark"
                name = "exam_mark"
                value = {gradeData.exam_mark}
                onChange = {handleInputChange}
                required />
            </div>

            <div class = "mb-3">
                <label htmlFor='cohort' class = "form-label">Cohort:</label>
                <textarea
                class = "form-control"
                id = "cohort"
                name = "cohort"
                value = {gradeData.cohort}
                onChange = {handleInputChange}
                required />
            </div>

            <div class = "mb-3">
                <label htmlFor='total_grade' class = "form-label">Total Grade:</label>
                <textarea
                class = "form-control"
                id = "total_grade"
                name = "total_grade"
                value = {gradeData.total_grade}
                onChange = {handleInputChange}
                required />
            </div>

            <div class = "mb-3">
                <label htmlFor='student' class = "form-label">Student:</label>
                <textarea
                class = "form-control"
                id = "student"
                name = "student"
                value = {gradeData.student}
                onChange = {handleInputChange}
                required />
            </div>
            <button type="submit" class="btn btn-primary">Set module grade</button>
        </form>
    </div>
)
}

export default SetModuleGrade;

