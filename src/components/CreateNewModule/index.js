import React, { useState, useEffect } from 'react';

function CreateNewModulePage(){
    const [ModuleData, setModuleData] = useState({
        code: '',
        full_name: '',
        delivered_to: '',
        ca_split: '',
    })
    const handleInputChange = event => {
        const {name, value} = event.target;
        setModuleData(prevdata => ({
            ...prevdata, [name]: value 
        }))
    }
    const handleSubmit = async event => {
        event.preventDefault();
        try{
            const response = await fetch('http://127.0.0.1:8000/api/module/', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ModuleData),
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

        <h1>Create new module</h1>
        <form action = "/action_page.php" onSubmit={handleSubmit}>
            <div class = "mb-3">
                <label htmlFor='code' class = "form-label">Code:</label>
                <input type = "text"
                class = "form-control"

                id = "code"
                name = "code"
                value = {ModuleData.code}
                onChange = {handleInputChange}
                required />

            </div>
            <div class = "mb-3">
                <label htmlFor='full_name' class = "form-label">Full name:</label>
                <textarea
                class = "form-control"
                id = "full_name"
                name = "full_name"
                value = {ModuleData.full_name}
                onChange = {handleInputChange}
                required />
            </div>
            <div class = "mb-3">
                <label htmlFor='delivered_to'  class = "form-label">Delivered to:</label>
                <textarea
                class = "form-control"
                id = "delivered_to"
                name = "delivered_to"
                value = {ModuleData.delivered_to}
                onChange = {handleInputChange}
                required />
            </div>
            <div class = "mb-3">
                <label htmlFor='ca_split'  class = "form-label">Ca Split:</label>
                <textarea
                class = "form-control"
                id = "ca_split"
                name = "ca_split"
                value = {ModuleData.ca_split}
                onChange = {handleInputChange}
                required />
            </div>
            <button type="submit" class="btn btn-primary">Create new module</button>
        </form>
    </div>
)
}

export default CreateNewModulePage;

