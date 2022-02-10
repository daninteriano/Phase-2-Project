import React, { useState } from 'react';


export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    function handleChange(event) {
        setFormData({
            ...formData, [event.target.name]: event.target.value
        });
    }
    function handleSubmit(event) {
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
        <div className='container '>
            <form onSubmit={handleSubmit} className="container d-flex justify-content-center rounded bg-warning border border-warning h-100 w-100 my-5 p-5" >
                <h2>Contact Us</h2>
                <div class="mb-3 px-4">
                    <label for="nameFormControlInput" class="form-label pt-2">
                        Full Name
                    </label>
                    <input type="text" class="form-control" placeholder="Full Name" value={formData.name} 
                    onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})} />
                    <label for="emailFormControlInput" class="form-label pt-2">
                        Email address
                    </label>
                    <input type="email" value={formData.email} class="form-control" placeholder="name@example.com" onChange={(e) => setFormData(e.target.value)} />
                </div>
                <div class="mb-3 px-4 w-100">
                    <label for="textFormControlInput" class="form-label">
                        Message
                    </label>
                    <textarea class="form-control " rows="3" value={formData.message} onChange={(e) => setFormData(e.target.value)} ></textarea>
                    <button type="submit" class="btn btn-primary px-3 mt-3">
                        Submit
                    </button>
                </div>
            </form>
            <div className='container d-flex flex-wrap bg-warning'>
                <i class="fa fa-envelope m-4"> daninteriano@yahoo.com</i>
                <i class="fa fa-phone m-4"> 212-342-0001</i>
                <i class="fa fa-location-smile m-4"> * Brooklyn, New York</i>
            </div>
        </div>
    )
}
