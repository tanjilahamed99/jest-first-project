"use client";
import { useState } from "react";

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (name && email) {
        setSubmitted(true);
      }
    };


  return (
    <form
      className="bg-purple-400 text-white w-[400px] h-[400px] p-5 flex flex-col gap-5 justify-center mx-auto items-center "
      onSubmit={handleSubmit}
    >
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-black p-2"
        />
      </label>
      <label>
        Email:
        <input
          type="test"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-black p-2"
        />
      </label>
      <button type="submit" className="text-purple-500 bg-white rounded-lg p-3">
        Submit
      </button>
      {submitted && <p>Form submitted successfully!</p>}
    </form>
  );
};

export default Form;
