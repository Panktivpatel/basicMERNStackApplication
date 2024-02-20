import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import './Style.css';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmpassword: '',
      });
    
      const [errors, setErrors] = useState({});
    
      const handleChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }));
      };
    
      const validateForm = () => {
        const { firstName, lastName, email, password, confirmpassword } = formData;
        const errors = {};
    
        // Validate first name
        if (!firstName.trim()) {
          errors.firstName = 'First name is required';
        }
    
        // Validate last name
        if (!lastName.trim()) {
          errors.lastName = 'Last name is required';
        }
    
        // Validate email
        if (!email.trim()) {
          errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          errors.email = 'Invalid email format';
        }
    
        // Validate password
        if (!password.trim()) {
          errors.password = 'Password is required';
        } else if (password.length < 6) {
          errors.password = 'Password should be at least 6 characters long';
        }
    
        // Validate Confirm password
        if(password !== confirmpassword){
          errors.confirmpassword = 'Both passwords should match';
        }
    
        setErrors(errors);
    
        // Return true if there are no errors, false otherwise
        return Object.keys(errors).length === 0;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (validateForm()) {
          navigate('/profile');
        }
      };

  return (
    <div>
      <div class="container">
        <div class="col-lg-6 col-md-6 forms-container">
            <div class="register">
              <form class="sign-up-form" onSubmit={handleSubmit}>
                <h1 class="title">Register</h1>
                <div class="input-field">
                  <div class="icon">
                  <FontAwesomeIcon icon={faUser} />
                  </div>
                  <input id='firstName' name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Name" required></input>
                  {errors.firstName && <span>{errors.firstName}</span>}
                </div>
                <div class="input-field">
                <div class="icon">
                  <FontAwesomeIcon icon={faUser} />
                  </div>
                  <input id='lastName' name="lastName" value={formData.lastName} onChange={handleChange} placeholder="LastName" required></input>
                  {errors.lastName && <span>{errors.lastName}</span>}
                </div>
                <div class="input-field">
                <div class="icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <input type="email" id='email' name="email" value={formData.email} onChange={handleChange} placeholder="Email" required></input>
                  {errors.email && <span>{errors.email}</span>}
                </div>
                <div class="input-field">
                <div class="icon">
                  <FontAwesomeIcon icon={faLock} />
                  </div>
                  <input type="password" id='password' name="password" value={formData.password} onChange={handleChange} placeholder="Password" required></input>
                  {errors.password && <span>{errors.password}</span>}
                </div>
                <div class="input-field">
                <div class="icon">
                  <FontAwesomeIcon icon={faLock} />
                  </div>
                  <input type="password" id='confirmpassword' name="confirmpassword" value={formData.confirmpassword} onChange={handleChange} placeholder="Password" required></input>
                  {errors.confirmpassword && <span>{errors.confirmpassword}</span>}
                </div>
                <button type="submit" class="button">Register</button>
              </form>
            </div>
        </div>

        <div class="col-lg-6 col-md-6 panels-container">
        <div class="panel">
          <img src="doctor.svg" class="image" alt="" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default RegistrationForm;