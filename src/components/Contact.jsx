import React from 'react';

export default function Contact() {
    return (
        <div id="contactpg">
            <div class="mb-3" >
                <h2>Contant Us</h2>
                <h4>We want to hear from you!</h4>
                <label for="fullName" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="fullNameForm" placeholder="FirstAnd LastName" />
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="emailFormControlInput" placeholder="name@example.com" />
            </div>
            <div class="mb-3 " width="50px">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" ></textarea>
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3">Submit</button>
            </div>
        </div>
    )
}
