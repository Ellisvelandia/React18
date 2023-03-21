import React, { useState } from "react";

const UseStateObject = () => {
  const [persons, setPersons] = useState({
    name: "Ellis",
    age: 29,
    hobby: "writting code",
  });

  const displayPerson = () => {
    // setPersons({name:"cris", age: 28, hobby: "doing code"})
    setPersons({ ...persons, name: "crisanto" });
  };

  const { age, name, hobby } = persons;

  return (
    <div className="w-full flex my-4 mx-auto justify-center items-center">
      <div className="max-w-6xl shadow-2xl border flex flex-col p-8">
        <h3>{name}</h3>
        <h3>{age}</h3>
        <h3>{hobby}</h3>
        <button onClick={displayPerson}>show join</button>
      </div>
    </div>
  );
};

export default UseStateObject;
