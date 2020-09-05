/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginWithEmailAndPassword } from "../../actions/authActions";
import { useForm } from "../../hooks/useForm";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const [values, handleChanges] = useForm({
    email: "brayan@gmail.com",
    password: "123456",
  });
  const { email, password } = values;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginWithEmailAndPassword(email, password));
  };
  return (
    <div className="container-form">
      <form onSubmit={handleSubmit} className="login">
        <h1>Login Form</h1>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={handleChanges}
          type="email"
          id="email"
          name="email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={handleChanges}
          type="password"
          id="password"
          name="password"
          required
        />
        <button type="submit">Login</button>
        <Link className="create-account" to="/auth/register">
          Create a new Account
        </Link>
      </form>
    </div>
  );
};
