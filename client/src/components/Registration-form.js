import React, { useRef, useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // add this line to import the styles

function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [validFirstName, setValidFirstName] = useState(false);
  const [firstNameFocus, setFirstNameFocus] = useState(false);
  const [firstNameError, setFirstNameError] = useState('');

  const [lastName, setLastName] = useState('');
  const [validLastName, setValidLastName] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);
  const [lastNameError, setLastNameError] = useState('');

  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [emailError, setEmailError] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validFirstName) {
      setFirstNameError('Please enter a valid first name.');
    } else {
      setFirstNameError('');
    }

    if (!validLastName) {
      setLastNameError('Please enter a valid last name.');
    } else {
      setLastNameError('');
    }

    if (!validEmail) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }

    if (!validPassword) {
      setPasswordError('Please enter a valid password (must be at least 8 characters and include at least one uppercase letter, one lowercase letter, and one number).');
    } else {
      setPasswordError('');
    }

    if (validFirstName && validLastName && validEmail && validPassword) {
      // Handle successful form submission here
      setSuccess(true);
    } else {
      setErrorMessage('Please fill out all fields correctly.');
    }
  };

  const validateFirstName = (value) => {
    setFirstName(value);
    setValidFirstName(value.trim() !== '');
  };

  const validateLastName = (value) => {
    setLastName(value);
    setValidLastName(value.trim() !== '');
  };

  const validateEmail = (value) => {
    setEmail(value);
    setValidEmail(emailRegex.test(value));
  };

  const validatePassword = (value) => {
    setPassword(value);
    setValidPassword(passwordRegex.test(value));
  };
  return (
    <MDBContainer fluid style={{ width: '50%' }}>
      <div className="p-5 bg-image"
        style={{
          backgroundImage:
            'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)',
          height: '300px',
        }}
      ></div>

      <MDBCard className="mx-5 mb-5 p-5 shadow-5"
        style={{
          marginTop: '-100px',
          background: 'hsla(0, 0%, 100%, 0.8)',
          backdropFilter: 'blur(30px)',
        }}
      >
        <MDBCardBody className="p-5 text-center">
          <h2 className="fw-bold mb-5">Sign up now</h2>

          <form onSubmit={handleSubmit}>
            <MDBRow>
              <MDBCol col="6">
                <MDBInput
                  ref={firstNameRef} wrapperClass="mb-4" label="First name" id="firstName" type="text" value={firstName} onChange={(event) => validateFirstName(event.target.value)} onFocus={() => setFirstNameFocus(true)} onBlur={() => setFirstNameFocus(false)} invalid={firstNameFocus && !validFirstName ? "true" : "false"} required
                />
                {firstNameFocus && !validFirstName && (
                  <div className="form-error" style={{color: 'red'}} >{firstNameError}</div>
                )}
              </MDBCol>
              <MDBCol col="6">
                <MDBInput
                  ref={lastNameRef} wrapperClass="mb-4" label="Last name" id="lastName" type="text" value={lastName} onChange={(event) => validateLastName(event.target.value)} onFocus={() => setLastNameFocus(true)} onBlur={() => setLastNameFocus(false)} invalid={lastNameFocus && !validLastName ? "true" : "false"} required
                />
                {lastNameFocus && !validLastName && (
                  <div className="form-error" style={{color: 'red'}}>{lastNameError}</div>
                )}
              </MDBCol>
            </MDBRow>

            <MDBInput ref={emailRef} wrapperClass="mb-4" label="Email" id="email" type="email" value={email} onChange={(event) => validateEmail(event.target.value)} onFocus={() => setEmailFocus(true)} onBlur={() => setEmailFocus(false)} invalid={emailFocus && !validEmail ? "true" : "false"} required
            />
            {emailFocus && !validEmail && (
              <div className="form-error" style={{color: 'red'}} >{emailError}</div>
            )}
            <MDBInput ref={passwordRef} wrapperClass="mb-4" label="Password" id="password" type="password" value={password} onChange={(event) => validatePassword(event.target.value)} onFocus={() => setPasswordFocus(true)} onBlur={() => setPasswordFocus(false)} invalid={passwordFocus && !validPassword ? "true" : "false"} required
            />
            {passwordFocus && !validPassword && (
              <div className="form-error" style={{color: 'red'}}>{passwordError}</div>
            )}

            <MDBCheckbox label="I agree to the terms and conditions" id="terms" required />

            <MDBBtn color="primary" type="submit" className="mt-4">
              Register
            </MDBBtn>
          </form>

          {errorMessage && (
            <div className="mt-3 text-danger">{errorMessage}</div>
          )}

          {success && (
            <div className="mt-3 text-success">Registration successful!</div>
          )}
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default RegistrationForm;