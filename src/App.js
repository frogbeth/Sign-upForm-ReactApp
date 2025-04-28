import './App.css';
import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // chatgpt was used to help me learn how to add usestate to my existing html.

  const handleSubmit = (e) => {
    e.preventDefault(); // info is logged to the console, not displayed on the page.
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Phone:', phone);
  }; 

  return (
    <div className="App">
      <div className="PhotoSide">
        <img src="/flowerimg.jpg" alt="Flower background image" />
        <p id="creditText">
          Photo by <a href="https://unsplash.com/@lucasvphotos">LucasVPhotos</a> on{' '}
          <a href="https://unsplash.com/">Unsplash</a>
        </p>
      </div>
      <div className="SignupSide">
        <header className="App-header">
          <h2>
            This is not a real online service! You know you need something like this in
            your life to help you realize your deepest dreams. Sign up now to get started.
            <br />
            <br />
            You know you want to.
          </h2>
        </header>
        <div className="SignupForm">
          <h2>Let's do this!</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fname">FIRST NAME:</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  maxLength="50"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lname">LAST NAME:</label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  maxLength="50"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">EMAIL:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">PHONE NUMBER:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="pwd">PASSWORD:</label>
                <input
                  type="password"
                  id="pwd"
                  name="pwd"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="pwdCheck">CONFIRM PASSWORD:</label>
                <input
                  type="password"
                  id="pwdCheck"
                  name="pwdCheck"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit">Create Account</button>
          </form>
        </div>
        <h3>Already have an account? Log in</h3> {/*"log in" is not clickable; if this were a full site I would have linked the login page*/}
      </div>
    </div>
  );
}
export default App;