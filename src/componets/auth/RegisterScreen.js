/** @format */

import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { useDispatch } from "react-redux";
import { createWithEmailAndPassword } from "../../actions/authActions";

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState({
    msg: "",
    valid: true,
  });
  const [values, handleChanges] = useForm({
    name: "Brayan",
    email: "brayan@gmail.com",
    password: "123456",
    password2: "123456",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    validForm();
    if (validForm()) {
      setIsValid({ msg: "", valid: true });
      dispatch(
        createWithEmailAndPassword(values.email, values.password, values.name)
      );
    }
  };

  const validForm = () => {
    if (values.name.trim().length < 1) {
      setIsValid({ msg: "You need to provide a name", valid: false });
      return false;
    } else if (!validator.isEmail(values.email.trim())) {
      setIsValid({ msg: "You need to provide a valid email", valid: false });
      return false;
    } else if (values.password.trim() !== values.password2.trim()) {
      setIsValid({ msg: "Password are not the same", valid: false });
      return false;
    }
    return true;
  };
  return (
    <div className="container-form">
      <form onSubmit={handleSubmit} className="sign-up">
        <h1>Sign up</h1>
        <span>{!isValid.valid ? isValid.msg : null}</span>
        <label htmlFor="name">Name</label>
        <input
          value={values.name}
          onChange={handleChanges}
          type="name"
          id="name"
          name="name"
        />
        <label htmlFor="email">Email</label>
        <input
          value={values.email}
          onChange={handleChanges}
          type="email"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={values.password}
          onChange={handleChanges}
          type="password"
          id="password"
          name="password"
        />
        <label htmlFor="password2">Confirm password</label>
        <input
          value={values.password2}
          onChange={handleChanges}
          type="password"
          id="password2"
          name="password2"
        />
        <button disabled={false} type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};
