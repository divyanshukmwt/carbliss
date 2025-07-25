import React, { useState } from 'react';

const Login = () => {
  const [mode, setMode] = useState("login"); // "login" or "signup"

  const toggleMode = () => {
    setMode((prev) => (prev === "login" ? "signup" : "login"));
  };

  const headingText = mode === "login" ? "Welcome back!" : "Don’t be shy. Hit us up and we’ll get back to you!";
  const leftTitle = mode === "login" ? "Welcome back " : "Get in touch ";
  const leftPara1 = mode === "login"
    ? "Login to access your account and continue enjoying the experience."
    : "Sign up and become a part of our amazing community!";
  const leftPara2 = mode === "login"
    ? "We’ve missed you. Let’s get you logged in!"
    : "It only takes a minute to join us.";

  return (
    <div className='h-screen w-full flex flex-col lg:flex-row pt-[1rem] justify-center items-center bg-[#f2f2f2]'>

      {/* Mobile View */}
      <div className='mobile-view h-full w-full flex flex-col justify-evenly items-center px-5 md:hidden'>
        <div className='text-center flex flex-col items-center'>
          <h1 className='text-4xl font-bold text-[#333]'>{leftTitle}</h1>
          <div className='h-fit p-3 w-[80%] '>
            <p className='text-sm font-medium mt-2 text-[#666]'>{leftPara1}</p>
          </div>
          <p className='text-sm font-medium text-[#666]'>{leftPara2}</p>
        </div>
        <div className="loginPageFormContainer flex flex-col items-center mt-5 w-[90%] rounded-2xl bg-white shadow-lg p-5">
          <h1 className='font-bold text-xl text-[#222] text-center'>{headingText}</h1>
          <form className='w-full flex flex-col mt-5'>
            <input type="text" placeholder="Enter your name" className='h-10 pl-5 mb-3 w-full bg-[#f9f9f9] rounded-full border border-gray-300 focus:bg-white focus:outline-none' />
            <input type="text" placeholder="Enter your email" className='h-10 pl-5 mb-3 w-full bg-[#f9f9f9] rounded-full border border-gray-300 focus:bg-white focus:outline-none' />
            <input type="password" placeholder="Password" className='h-10 pl-5 mb-3 w-full bg-[#f9f9f9] rounded-full border border-gray-300 focus:bg-white focus:outline-none' />
            {mode === "signup" && (
              <input type="password" placeholder="Confirm Password" className='h-10 pl-5 mb-3 w-full bg-[#f9f9f9] rounded-full border border-gray-300 focus:bg-white focus:outline-none' />
            )}
            <button className='font-semibold text-lg h-10 w-full bg-[#4F46E5] text-white text-center rounded-full'>
              {mode === "login" ? "Login" : "Sign up"}
            </button>
          </form>
          <p className="mt-3 text-sm text-[#444] font-medium cursor-pointer" onClick={toggleMode}>
            {mode === "login" ? "Don't have an account? Sign up" : "Already have an account? Login"}
          </p>
        </div>
      </div>

      {/* Tablet View */}
      <div className='tablet-view hidden md:flex md:w-full flex-col justify-center items-center px-5 lg:hidden'>
        <div className='text-center flex flex-col items-center'>
          <h1 className='text-5xl font-bold text-[#333]'>{leftTitle}</h1>
          <div className='h-fit p-3 w-[60%]'>
            <p className='text-sm font-medium mt-2 text-[#666]'>{leftPara1}</p>
          </div>
          <p className='text-sm font-medium text-[#666]'>{leftPara2}</p>
        </div>
        <div className="loginPageFormContainer flex flex-col items-center mt-5 w-[70%] bg-white shadow-xl rounded-3xl p-5">
          <h1 className='font-bold text-2xl text-[#222] text-center'>{headingText}</h1>
          <form className='w-full flex flex-col mt-5'>
            <input type="text" placeholder="Enter your name" className='h-10 pl-5 mb-3 w-full bg-[#f9f9f9] rounded-full border border-gray-300 focus:bg-white focus:outline-none' />
            <input type="text" placeholder="Enter your email" className='h-10 pl-5 mb-3 w-full bg-[#f9f9f9] rounded-full border border-gray-300 focus:bg-white focus:outline-none' />
            <input type="password" placeholder="Password" className='h-10 pl-5 mb-3 w-full bg-[#f9f9f9] rounded-full border border-gray-300 focus:bg-white focus:outline-none' />
            {mode === "signup" && (
              <input type="password" placeholder="Confirm Password" className='h-10 pl-5 mb-3 w-full bg-[#f9f9f9] rounded-full border border-gray-300 focus:bg-white focus:outline-none' />
            )}
            <button className='font-semibold text-lg h-10 w-full bg-[#4F46E5] text-white text-center rounded-full'>
              {mode === "login" ? "Login" : "Sign up"}
            </button>
          </form>
          <p className="mt-3 text-sm text-[#444] font-medium cursor-pointer" onClick={toggleMode}>
            {mode === "login" ? "Don't have an account? Sign up" : "Already have an account? Login"}
          </p>
        </div>
      </div>

      {/* Desktop View */}
      <div className='desktop-view hidden lg:flex lg:w-full lg:h-full gap-5 justify-center px-5'>
        <div className='loginPage1Part h-full flex flex-col gap-5 justify-center'>
          <div className='w-fit'>
            <h1 className='text-6xl font-bold text-[#333]'>{leftTitle}</h1>
          </div>
          <div className='w-[50%]'>
            <p className='text-sm font-medium text-[#555]'>{leftPara1}</p>
          </div>
          <div>
            <p className='text-sm font-medium text-[#555]'>{leftPara2}</p>
          </div>
        </div>

        <div className='loginPage2Part h-full flex flex-col gap-5 justify-center w-[50%] items-center'>
          <div className="loginPageFormContainer flex flex-col items-center h-[40vw] w-[90%] overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div className='text-center p-5'>
              <h1 className='font-bold text-3xl text-[#222]'>
                {mode === "login" ? "Login" : "Sign up"}
              </h1>
            </div>

            <div className='loginPage2Form w-full h-[80%]'>
              <form className='w-full h-full flex flex-col justify-center items-center'>
                <div className='h-fit w-full flex flex-col items-center justify-center p-3 gap-4'>
                  <input type="text" placeholder="Enter your name" className='h-12 pl-5 w-[75%] bg-[#f9f9f9] rounded-full border border-gray-300 focus:bg-white focus:outline-none' />
                  <input type="text" placeholder="Enter your email" className='h-12 pl-5 w-[75%] bg-[#f9f9f9] rounded-full border border-gray-300 focus:bg-white focus:outline-none' />
                </div>
                <div className='h-fit w-full flex items-center justify-center p-3 gap-4'>
                  <input type="password" placeholder="Password" className='h-12 pl-5 w-[35%] bg-[#f9f9f9] rounded-full border border-gray-300 focus:bg-white focus:outline-none' />
                  {mode === "signup" && (
                    <input type="password" placeholder="Confirm Password" className='h-12 pl-5 w-[35%] bg-[#f9f9f9] rounded-full border border-gray-300 focus:bg-white focus:outline-none' />
                  )}
                </div>
                <div className='h-fit w-full flex items-center justify-center p-3 gap-4'>
                  <button className='font-semibold text-xl h-12 w-[30%] bg-[#4F46E5] text-white text-center rounded-full'>
                    {mode === "login" ? "Login" : "Sign up"}
                  </button>
                </div>
              </form>
              <p className="text-sm text-[#444] font-medium text-center cursor-pointer" onClick={toggleMode}>
                {mode === "login" ? "Don't have an account? Sign up" : "Already have an account? Login"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
