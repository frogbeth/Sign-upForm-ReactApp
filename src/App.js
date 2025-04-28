import './App.css';

function App() {
  return (
    <div className="App">
      <div className="PhotoSide">
        <img src="/flowerimg.jpg" alt="Flower background image"></img>
        <p  id="creditText">Photo by<a href="https://unsplash.com/@lucasvphotos">LucasVPhotos </a>
        on <a href="https://unsplash.com/">Unsplash</a></p>
      </div>
      <div className="SignupSide">
        <header className="App-header">
          <h2>This is not a real online service! You know you need
            something like this in your life to help you realize
            your deepest dreams. Sign up now to get started. <br></br>
            <br></br>
            You know you want to.
          </h2>
        </header>
        <div className="SignupForm">
          <h2>Let's do this!</h2>
          <form>
            <form>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fname">FIRST NAME:</label>
                  <input type="text" id="fname" name="fname" maxLength="50" required />
                </div>
                <div className="form-group">
                  <label htmlFor="lname">LAST NAME:</label>
                  <input type="text" id="lname" name="lname" maxLength="50" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">EMAIL:</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">PHONE NUMBER:</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="pwd">PASSWORD:</label>
                  <input type="password" id="pwd" name="pwd" required />
                </div>
                <div className="form-group">
                  <label htmlFor="pwdCheck">CONFIRM PASSWORD:</label>
                  <input type="password" id="pwdCheck" name="pwdCheck" required />
                </div>
              </div>
            </form>

          </form>
        </div>
        <button type="button">Create Account</button>
        <h3>Already have an account? Log in</h3>
      </div>
    </div>
  );
}

export default App;