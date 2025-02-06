import React, { useState } from "react";
import { register } from "../../utils/api.js";
import { Link, useHistory } from "react-router-dom";
import Nav from "../Navbar";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const history = useHistory();

  const validateEmail = (email) => {
    const pattern =
      /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    const result = pattern.test(email);
    setEmailError(!result);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "firstname") {
      setFirstName(value);
      setFirstNameError(value === "");
    }

    if (name === "lastname") {
      setLastName(value);
      setLastNameError(value === "");
    }

    if (name === "email") {
      setEmail(value);
      validateEmail(value);
    }

    if (name === "password") {
      setPassword(value);
      setPasswordError(value.length <= 5);
    }

    if (!firstNameError && !lastNameError && !emailError && !passwordError) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    const data = { firstName, lastName, email, password };
    register(data).then(() => {
      history.push("/login");
    });
  };

  return (
    <div>
      <Nav />
      <div className="container mx-auto mt-5">
        <div className="card card-login mx-auto mt-5 shadow-lg rounded-lg">
          <div className="card-header text-primary text-center text-xl font-bold">
            Register here
          </div>
          <div className="card-body">
            <form onSubmit={submitForm}>
              <div className="form-group mb-4">
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter first name"
                  value={firstName}
                  onChange={handleChange}
                />
                {firstNameError && (
                  <span className="text-red-500 text-sm">
                    Please enter a first name
                  </span>
                )}
              </div>

              <div className="form-group mb-4">
                <label
                  htmlFor="lastname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter last name"
                  value={lastName}
                  onChange={handleChange}
                />
                {lastNameError && (
                  <span className="text-red-500 text-sm">
                    Please enter a last name
                  </span>
                )}
              </div>

              <div className="form-group mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleChange}
                />
                {emailError && (
                  <span className="text-red-500 text-sm">
                    Please enter a valid email address
                  </span>
                )}
              </div>

              <div className="form-group mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
                  placeholder="Password"
                  value={password}
                  onChange={handleChange}
                />
                {passwordError && (
                  <span className="text-red-500 text-sm">
                    Your password must be at least 6 characters
                  </span>
                )}
              </div>

              <button
                type="submit"
                className={`w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  isDisabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isDisabled}
              >
                Signup
              </button>
            </form>
            <p className="my-1 text-center text-primary">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
