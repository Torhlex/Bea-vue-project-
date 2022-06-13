<template>
  <div class="LoginBody">
      <div class="overall">
          <div class="formArea">
            <h1>Login</h1>
            <form>
              <div class="form-field">
                <input type="BfreeID or Email-address" placeholder="BfreeID or Email address" required />
              </div>
              <div class="form-field">
                <input type="Password" placeholder="Password" required />
            </form>
             </div>
              <div class="passwordreset">         
              <h4>Forgot password? <a onClick="location.href='ForgotPassword.html'">Reset password</a></h4>
              </div>
              <div class="Login">
                <button class="btn" type="Login" > <a onClick="location.href='HomePage.html'">Login</a></button>
              </div>             
             <div class="CreateAcct">         
              <h4>Click to <a onClick="location.href='SignUp.html'">Create an account</a></h4>
            </div>
        </div>
     </div>
</template>

<style scoped>
.LoginBody {
  background-color: #fff;
  background-blend-mode: soft-light;
  background-size: cover;
  background-position: center center !important;
  background-attachment: fixed;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

.BfreeLogo {
  padding: 15px;
}

img{
  cursor: pointer;
}

.overall {
  background-size: cover;
  background-position: center center !important;
  background-attachment: fixed;
  top: 20%;
  left: 36%;
  position: absolute;

}
 h4 {
  text-align: center;
}

h1 {
  /* color: black; */
  text-align: center;
  padding-bottom: 15px;
}

.formArea {
  color: #090808;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

form {
  width: 450px;
}

form .form-field::before {
  font-size: 30px;
  position: absolute;
  left: 15px;
  top: 16px;
  color: #ffffff;
  content: " ";
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
}

form .form-field:nth-child(1)::before {
  background-image: url(https://api.iconify.design/mdi:email-open.svg?color=%23ffffff);
  width: 23px;
  height: 23px;
  top: 12px;
  left: 10px;
}

form .form-field:nth-child(2)::before {
  background-image: url(https://api.iconify.design/uil:lock-alt.svg?color=%23ffffff);
  width: 23px;
  height: 23px;
  top: 12px;
  left: 10px;
}

form .form-field {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
}

input:-webkit-autofill {
  box-shadow: 0 0 0 50px rgba(50, 95, 153, 0.974) inset; /* Change the color to your own background color */
  -webkit-text-fill-color: rgb(255, 255, 255);
}

form input {
  font-family: inherit;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 8px;
  background-color: rgba(50, 95, 153, 0.974);
  display: block;
  padding: 15px 25px;
  font-size: 13px;
  color: #ffffff;
  text-indent: 30px;
}

::placeholder {
  color: white;
}

button  {
  outline: none;
  border: none;
  cursor: pointer;
  margin: 0 auto;
  padding: 0.9rem 2.5rem;
  text-align: center;
  font-weight: bold;
  background-color: rgba(75, 136, 216, 0.974);
  color: rgba(255, 255, 255, 0.974);
  border-radius: 8px;
  font-size: 16px;
}

.btn a{
  color: white;
}
.Login {
text-align: center;
margin-top: 20px;
 }

.passwordreset a{
  cursor: pointer;
  text-decoration: none;
    font-size: 13px;
  color: rgba(50, 95, 153, 0.974);
}

.CreateAcct a {
  color: rgba(50, 95, 153, 0.974);
  cursor: pointer;
  text-decoration: none;
    font-size: 13px;
}

 .btn:hover {
        background-color: rgba(50, 95, 153, 0.974);
        color: #ffffff;
      }
</style>

