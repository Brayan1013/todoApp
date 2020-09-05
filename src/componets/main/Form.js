/** @format */

import React from "react";
import { useForm } from "../../hooks/useForm";

export const Form = () => {
  const [values, handleChanges] = useForm({
    title: "",
    body: "",
    date: new Date().getTime(),
  });
  return (
    <div className="form-container">
      <form>
        <h1 className="title-form">Add a task</h1>
        <label htmlFor="title">Title</label>
        <input
          onChange={handleChanges}
          value={values.title}
          type="text"
          name="title"
          id="titles"
        />
        <label htmlFor="body">Body</label>
        <textarea
          onChange={handleChanges}
          value={values.body}
          name="body"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button className="btn-form">Save</button>
      </form>
    </div>
  );
};
