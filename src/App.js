import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="PhotoSide">
        <p>picture is here</p>
        <p id="creditText">Photo by LucasVPhotos on Unsplash</p>
      </div>
      <div className="SignupSide">
      <header className="App-header">
        <h2>This is not a real online service! You know you need
          something like this in your life to help you realize
          your deepest dreams. Sign up now to get started. <br></br>
          You know you want to.
        </h2>
      </header>
      <div className="SignupForm">
        <h2>Let's do this!</h2>
        <form>
          <label for="fname">FIRST NAME:</label><br></br>
          <input type="text" id="fname" name="fname" maxlength="50" required></input><br></br>

          <label for="lname">LAST NAME:</label><br></br>
          <input type="text" id="lname" name="lname" maxlength="50" required></input><br></br>

          <label for="email">EMAIL:</label><br></br>
          <input type="email" id="email" name="email" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            required></input><br></br>

          <label for="number">PHONE NUMBER:</label><br></br>
          <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required></input><br></br>

          <label for="pwd">PASSWORD:</label><br></br>
          <input type="password" id="pwd" name="pwd" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 
            or more characters"></input><br></br>

          <label for="pwdCheck">CONFIRM PASSWORD:</label><br></br>
          <input type="password" id="pwdCheck" name="pwdCheck" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 
            or more characters"></input><br></br>
        </form>
      </div>
      <button type="button">Create Account</button>
      <h3>Already have an account? Log in</h3>
      </div>
    </div>
  );
}

export default App;
