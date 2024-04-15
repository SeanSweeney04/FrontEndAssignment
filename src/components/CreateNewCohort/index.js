import React, { useState, useEffect } from 'react';

function CreateNewCohortPage(){
    const [degreeData, setDegreeData] = useState({
        id: '',
        year: '',
        degree: '',
        name: '',
    })
    const handleInputChange = event => {
        const {name, value} = event.target;
        setDegreeData(prevdata => ({
            ...prevdata, [name]: value 
        }))
    }
    const handleSubmit = async event => {
        event.preventDefault();
        try{
            const response = await fetch('http://127.0.0.1:8000/api/cohort/', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(degreeData),
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

        <h1>Create new cohort</h1>
        <form action = "/action_page.php" onSubmit={handleSubmit}>
            <div class = "mb-3">
                <label htmlFor='id'>ID:</label>
                <input type = "text"
                class = "form-control"
                id = "id"
                name = "id"
                value = {degreeData.id}
                onChange = {handleInputChange}
                required />

            </div>
            <div class = "mb-3">
                <label htmlFor='year'>year:</label>
                <textarea
                class = "form-control"
                id = "year"
                name = "year"
                value = {degreeData.year}
                onChange = {handleInputChange}
                required />
            </div>
            <div class = "mb-3">
                <label htmlFor='degree'>degree:</label>
                <textarea
                class = "form-control"
                id = "degree"
                name = "degree"
                value = {degreeData.degree}
                onChange = {handleInputChange}
                required />
            </div >
            
            <div class = "mb-3">
           
                <label htmlFor='name'>name:</label>
                <textarea
                class = "form-control"
                id = "name"
                name = "name"
                value = {degreeData.name}
                onChange = {handleInputChange}
                required />
            </div>
            
            
            <button type="submit" class="btn btn-primary">Create new cohort</button>
        </form>
    </div>
)
}

export default CreateNewCohortPage;

