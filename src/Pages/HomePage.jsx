import React, { useState } from "react";
import { useNavigate } from "react-router";

const HomePage = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  function handleForm(e) {
    e.preventDefault();
    navigate(`/${inputValue.toLowerCase()}`);
  }

  return (
    <>
      <section className="flex items-center justify-center flex-col min-h-screen">
        <h2>Hello</h2>
        <h3>click on Image</h3>
        <img
          className="w-72 object-contain"
          src="https://thumbs.dreamstime.com/b/wood-cube-best-wishes-text-glitter-best-wishes-text-cube-105878587.jpg"
          onClick={() => {
            navigate("kaushar");
          }}
        />
      </section>
      <form
        onSubmit={handleForm}
        className="flex justify-center items-center border-black gap-5"
      >
        <input
          required
          name="msg"
          className="px-2 py-1  outline-none border border-gray-400 focus:border-gray-900 rounded"
          placeholder="Enter Your Name"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          type="submit"
          disabled={!inputValue ? true : false}
          className={`py-1.5 px-5  border border-gray rounded ${
            inputValue.length < 2
              ? "bg-gray-300 text-gray-400 cursor-not-allowed"
              : "bg-red-400 text-white cursor-pointer"
          }`}
        >
          wish
        </button>
      </form>
    </>
  );
};

export default HomePage;
