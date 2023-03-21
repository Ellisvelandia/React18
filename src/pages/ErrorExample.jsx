import React, { useState } from "react";

const users = [
  {
    id: 1,
    name: "cris",
    age: 20,
  },
  {
    id: 2,
    name: "cristo",
    age: 25,
  },
  {
    id: 3,
    name: "elking",
    age: 30,
  },
  {
    id: 4,
    name: "crisanto",
    age: 29,
  },
];

const ErrorExample = () => {
  const [persons, setPersons] = useState(users);

  const removeItem = (id) => {
    console.log(id);
    const newPerson = persons.filter((user) => user.id !== id);
    setPersons(newPerson);
  };

  const clearAllItems = () => {
    setPersons([]);
  };

  return (
    <div className="flex flex-col w-full px-10 gap-2 mt-20 mb-4 justify-center items-center">
      <div className="flex md:max-w-6xl w-full gap-2">
        {persons.map((user) => (
          <div
            className="w-[500px] rounded shadow-2xl text-base font-semibold justify-center items-center border gap-5 flex flex-col my-4 mx-auto text-center py-2"
            key={user.id}
          >
            <h2>{user.name}</h2>
            <span>{user.age}</span>
            <button
              className="shadow-2xl p-2 border w-20 bg-red-600 text-white  font-bold rounded"
              type="button"
              onClick={() => removeItem(user.id)}
            >
              remove
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="shadow-2xl p-2 border w-20 bg-red-600 text-white  font-bold rounded"
        onClick={clearAllItems}
      >
        clear
      </button>
    </div>
  );
};

export default ErrorExample;
