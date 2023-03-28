import React, { useState } from "react";
import InputForm from "./InputForm/InputForm";
import signinImage from "../../assets/signup.jpg";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const initialState = {
  fullName: "",
  username: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  avatarURL: "",
};
const Auth = () => {
  const [form, setForm] = useState(initialState);

  const [isSignup, setIsSignup] = useState(true);
  const handleChange = (e) =>
    setForm((state) => ({ ...state, [e.target.name]: e.target.value }));

  const switchMode = () => setIsSignup(!isSignup);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p>{isSignup ? "Sign Up" : "Sign In"}</p>
          <form onSubmit={handleSubmit}>
            {isSignup && (
              <InputForm
                name={"fullName"}
                handleChange={handleChange}
                required
                label={"Full Name"}
                placeholder="Full Name"
              />
            )}

            <InputForm
              name="username"
              handleChange={handleChange}
              required
              placeholder="Username"
              label="Username"
            />

            {isSignup && (
              <InputForm
                name={"phoneNumber"}
                handleChange={handleChange}
                label={"Phone Number"}
                placeholder="Phone Number"
              />
            )}

            {isSignup && (
              <InputForm
                name={"avatarURL"}
                handleChange={handleChange}
                label={"Avatar URL"}
                placeholder="Avatar URL"
              />
            )}

            <InputForm
              name="password"
              handleChange={handleChange}
              required
              type="password"
              placeholder="Password"
              label="Password"
            />

            {isSignup && (
              <InputForm
                name="confirmPassword"
                handleChange={handleChange}
                required
                type="password"
                placeholder="Confirm Password"
                label="Confirm Password"
              />
            )}
            <div className="auth__form-container_fields-content_button">
              <button>{isSignup ? "Sign Up" : "Sign In"}</button>
            </div>
          </form>
          <div className="auth__form-container_fields-account">
            <p>
              {isSignup
                ? "Already have an account? "
                : "Don't have an account? "}
              <span onClick={switchMode}>
                {isSignup ? "Sign In" : "Sign Up"}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="auth__form-container_image">
        <img src={signinImage} alt="sign in" />
      </div>
    </div>
  );
};

export default Auth;
