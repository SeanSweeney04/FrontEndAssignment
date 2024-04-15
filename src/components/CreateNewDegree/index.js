import React, { useState, useEffect } from 'react';

function CreateNewDegreePage(){
    const [degreeData, setDegreeData] = useState({
        full_name: '',
        shortcode: '',

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
            const response = await fetch('http://127.0.0.1:8000/api/degree/', {
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

        <h1>Create new degree</h1>
        <form action = "/action_page.php" onSubmit={handleSubmit}>
            <div class = "mb-3">
                <label htmlFor='full_name'>Name:</label>
                <input type = "text"
                class = "form-control"
                id = "full_name"
                name = "full_name"
                value = {degreeData.full_name}
                onChange = {handleInputChange}
                required />

            </div>
            <div class = "mb-3">
                <label htmlFor='shortcode' class = "form-label">shortcode:</label>
                <textarea
                class = "form-control"
                id = "shortcode"
                name = "shortcode"
                value = {degreeData.shortcode}
                onChange = {handleInputChange}
                required />
            </div>
            <button type="submit" class="btn btn-primary">Create new degree</button>
        </form>
    </div>
)
}

export default CreateNewDegreePage;

