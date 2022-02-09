import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    function handleChange(event){
        setFormData({
            ...formData, [event.target.name]: event.target.value,
        })
    }
    function handleSubmit(event){
        event.preventDefault();
        fetch("http://localhost:3000/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                "name": formData.name,
                "email": formData.email,
                "message": formData.message
            }
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
    }

    return (
        <form id="contactpg" onSubmit={handleSubmit}>
            <div class="mb-3" >
                <h2>Contant Us</h2>
                <h4>We want to hear from you!</h4>
                <label for="fullName" class="form-label">Full Name</label>
                <input type="text" class="form-control" value={formData.name} onChange={handleChange} placeholder="FirstAnd LastName" />
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" value={formData.email} onChange={handleChange} placeholder="name@example.com" />
            </div>
            <div class="mb-3 " width="50px">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" rows="3" value={formData.message} onChange={handleChange}></textarea>
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3">Submit</button>
            </div>
        </form>
    )
}
