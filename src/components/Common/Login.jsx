import React, { useState } from 'react';

const Login = () => {
  const [mode, setMode] = useState("login");

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
    <div className='h-screen w-full flex flex-col lg:flex-row pt-[1rem] justify-center items-center bg-[#FFF2E7]'>

      {/* Mobile View */}
      <div className='mobile-view h-full w-full flex flex-col justify-evenly items-center px-5 md:hidden'>
        <div className='text-center flex flex-col items-center font-[antonio]'>
          <h1 className='text-4xl font-bold text-[#1C0F05]'>{leftTitle}</h1>
          <div className='h-fit p-3 w-[80%]'>
            <p className='text-sm font-medium mt-2 text-[#50382E]'>{leftPara1}</p>
          </div>
          <p className='text-sm font-medium text-[#50382E]'>{leftPara2}</p>
        </div>
        <div className="loginPageFormContainer flex flex-col items-center mt-5 w-[90%] rounded-2xl bg-[#FFE5D0] shadow-lg p-5 font-[proxima]">
          <h1 className='font-bold text-xl text-[#1C0F05] text-center'>{headingText}</h1>
          <form className='w-full flex flex-col mt-5'>
            <input type="text" placeholder="Enter your name" className='h-10 pl-5 mb-3 w-full bg-[#FFF4EC] text-[#1C0F05] rounded-full border border-[#e0cfc3] focus:outline-none' />
            <input type="text" placeholder="Enter your email" className='h-10 pl-5 mb-3 w-full bg-[#FFF4EC] text-[#1C0F05] rounded-full border border-[#e0cfc3] focus:outline-none' />
            <input type="password" placeholder="Password" className='h-10 pl-5 mb-3 w-full bg-[#FFF4EC] text-[#1C0F05] rounded-full border border-[#e0cfc3] focus:outline-none' />
            {mode === "signup" && (
              <input type="password" placeholder="Confirm Password" className='h-10 pl-5 mb-3 w-full bg-[#FFF4EC] text-[#1C0F05] rounded-full border border-[#e0cfc3] focus:outline-none' />
            )}
            <button className='font-semibold text-lg h-10 w-full bg-[#F9B870] text-[#1C0F05] text-center rounded-full hover:bg-[#e8a963] transition'>
              {mode === "login" ? "Login" : "Sign up"}
            </button>
          </form>
          <p className="mt-3 text-sm text-[#50382E] font-medium cursor-pointer" onClick={toggleMode}>
            {mode === "login" ? "Don't have an account? Sign up" : "Already have an account? Login"}
          </p>
        </div>
      </div>

      {/* Tablet View */}
      <div className='tablet-view hidden md:flex md:w-full flex-col justify-center items-center px-5 lg:hidden'>
        <div className='text-center flex flex-col items-center font-[antonio]'>
          <h1 className='text-5xl font-bold text-[#1C0F05]'>{leftTitle}</h1>
          <div className='h-fit p-3 w-[60%]'>
            <p className='text-sm font-medium mt-2 text-[#50382E]'>{leftPara1}</p>
          </div>
          <p className='text-sm font-medium text-[#50382E]'>{leftPara2}</p>
        </div>
        <div className="loginPageFormContainer flex flex-col items-center mt-5 w-[70%] bg-[#FFE5D0] shadow-xl rounded-3xl p-5 font-[proxima]">
          <h1 className='font-bold text-2xl text-[#1C0F05] text-center'>{headingText}</h1>
          <form className='w-full flex flex-col mt-5'>
            <input type="text" placeholder="Enter your name" className='h-10 pl-5 mb-3 w-full bg-[#FFF4EC] text-[#1C0F05] rounded-full border border-[#e0cfc3] focus:outline-none' />
            <input type="text" placeholder="Enter your email" className='h-10 pl-5 mb-3 w-full bg-[#FFF4EC] text-[#1C0F05] rounded-full border border-[#e0cfc3] focus:outline-none' />
            <input type="password" placeholder="Password" className='h-10 pl-5 mb-3 w-full bg-[#FFF4EC] text-[#1C0F05] rounded-full border border-[#e0cfc3] focus:outline-none' />
            {mode === "signup" && (
              <input type="password" placeholder="Confirm Password" className='h-10 pl-5 mb-3 w-full bg-[#FFF4EC] text-[#1C0F05] rounded-full border border-[#e0cfc3] focus:outline-none' />
            )}
            <button className='font-semibold text-lg h-10 w-full bg-[#F9B870] text-[#1C0F05] text-center rounded-full hover:bg-[#e8a963] transition'>
              {mode === "login" ? "Login" : "Sign up"}
            </button>
          </form>
          <p className="mt-3 text-sm text-[#50382E] font-medium cursor-pointer" onClick={toggleMode}>
            {mode === "login" ? "Don't have an account? Sign up" : "Already have an account? Login"}
          </p>
        </div>
      </div>

      {/* Desktop View */}
      <div className='desktop-view hidden lg:flex lg:w-full lg:h-full gap-5 justify-center px-5'>
        <div className='loginPage1Part h-full flex flex-col gap-5 justify-center font-[antonio]'>
          <div className='w-fit'>
            <h1 className='text-6xl font-bold text-[#1C0F05]'>{leftTitle}</h1>
          </div>
          <div className='w-[50%]'>
            <p className='text-sm font-medium text-[#50382E]'>{leftPara1}</p>
          </div>
          <div>
            <p className='text-sm font-medium text-[#50382E]'>{leftPara2}</p>
          </div>
        </div>

        <div className='loginPage2Part h-full flex flex-col gap-5 justify-center w-[50%] items-center font-[proxima]'>
          <div className="loginPageFormContainer flex flex-col items-center h-[40vw] w-[90%] overflow-hidden rounded-3xl bg-[#FFE5D0] shadow-2xl">
            <div className='text-center p-5'>
              <h1 className='font-bold text-3xl text-[#1C0F05]'>
                {mode === "login" ? "Login" : "Sign up"}
              </h1>
            </div>

            <div className='loginPage2Form w-full h-[80%]'>
              <form className='w-full h-full flex flex-col justify-center items-center'>
                <div className='h-fit w-full flex flex-col items-center justify-center p-3 gap-4'>
                  <input type="text" placeholder="Enter your name" className='h-12 pl-5 w-[75%] bg-[#FFF4EC] text-[#1C0F05] rounded-full border border-[#e0cfc3] focus:outline-none' />
                  <input type="text" placeholder="Enter your email" className='h-12 pl-5 w-[75%] bg-[#FFF4EC] text-[#1C0F05] rounded-full border border-[#e0cfc3] focus:outline-none' />
                </div>
                <div className='h-fit w-full flex items-center justify-center p-3 gap-4'>
                  <input type="password" placeholder="Password" className='h-12 pl-5 w-[35%] bg-[#FFF4EC] text-[#1C0F05] rounded-full border border-[#e0cfc3] focus:outline-none' />
                  {mode === "signup" && (
                    <input type="password" placeholder="Confirm Password" className='h-12 pl-5 w-[35%] bg-[#FFF4EC] text-[#1C0F05] rounded-full border border-[#e0cfc3] focus:outline-none' />
                  )}
                </div>
                <div className='h-fit w-full flex items-center justify-center p-3 gap-4'>
                  <button className='font-semibold text-xl h-12 w-[30%] bg-[#F9B870] text-[#1C0F05] text-center rounded-full hover:bg-[#e8a963] transition'>
                    {mode === "login" ? "Login" : "Sign up"}
                  </button>
                </div>
              </form>
              <p className="text-sm text-[#50382E] font-medium text-center cursor-pointer" onClick={toggleMode}>
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
