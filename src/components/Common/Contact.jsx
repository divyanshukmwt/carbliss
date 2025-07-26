import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row justify-center items-center bg-[#FFF2E7] text-[#1C0F05]">
      {/* Left Content - Desktop */}
      <div className="hidden font-[antonio] lg:flex w-full lg:w-1/2 h-full flex-col justify-center items-center px-20 space-y-3">
        <h1 className="text-6xl font-bold text-left w-full">Get in touch</h1>
        <p className="text-left w-full text-[#50382E] text-lg font-medium">
          Let’s connect and talk about your next big thing.
        </p>
        <p className="text-left w-full text-[#50382E] text-lg font-medium">
          We’re just one message away.
        </p>
      </div>

      {/* Right Form - Desktop */}
      <div className="hidden font-[proxima] lg:flex w-full lg:w-1/2 h-full justify-center items-center p-16">
        <div className="bg-[#FFE5D0] w-full max-w-[500px] rounded-3xl shadow-xl p-10 space-y-6">
          <h2 className="text-2xl font-semibold text-center text-[#1C0F05]">
            Don’t be shy. <br /> Hit us up and we’ll get back to you!
          </h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-[#FFF4EC] text-[#1C0F05] rounded-full px-5 py-3 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-[#FFF4EC] text-[#1C0F05] rounded-full px-5 py-3 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="bg-[#FFF4EC] text-[#1C0F05] rounded-xl px-5 py-3 focus:outline-none resize-none"
            />
            <button
              type="submit"
              className="bg-[#F9B870] text-[#1C0F05] rounded-xl py-3 font-semibold hover:bg-[#e3a963] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden w-full px-6 py-10 flex flex-col justify-evenly items-center gap-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-[#1C0F05]">Get in <br /> touch</h1>
          <p className="text-[#50382E] text-sm font-medium max-w-[80%] mx-auto">
            Let’s connect and talk about your next big thing.
          </p>
          <p className="text-[#50382E] text-sm font-medium">
            We’re just one message away.
          </p>
        </div>
        <div className="w-full bg-[#FFE5D0] p-6 rounded-2xl space-y-4">
          <h2 className="text-xl font-semibold text-[#1C0F05] text-center">
            Don’t be shy. <br />Hit us up and we’ll get back to you!
          </h2>
          <form className="flex flex-col space-y-3">
            <input type="text" placeholder="Your Name" className="bg-[#FFF4EC] text-[#1C0F05] rounded-full h-10 px-5 focus:outline-none" />
            <input type="email" placeholder="Your Email" className="bg-[#FFF4EC] text-[#1C0F05] rounded-full h-10 px-5 focus:outline-none" />
            <textarea placeholder="Your Message" rows={4} className="bg-[#FFF4EC] text-[#1C0F05] rounded-xl px-5 py-2 focus:outline-none resize-none" />
            <button type="submit" className="bg-[#F9B870] text-[#1C0F05] rounded-xl h-10 font-semibold hover:bg-[#e3a963] transition">Submit</button>
          </form>
        </div>
      </div>

      {/* Tablet View */}
      <div className="hidden md:flex lg:hidden w-full px-10 py-14 flex-col items-center gap-8">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-[#1C0F05]">Get in touch</h1>
          <p className="text-[#50382E] text-sm font-medium">
            Let’s connect and talk about your next big thing. <br />
            We’re just one message away.
          </p>
        </div>
        <div className="w-full bg-[#FFE5D0] p-8 rounded-2xl space-y-4 max-w-[500px]">
          <h2 className="text-xl font-semibold text-[#1C0F05] text-center">
            Don’t be shy. Hit us up!
          </h2>
          <form className="flex flex-col space-y-3">
            <input type="text" placeholder="Your Name" className="bg-[#FFF4EC] text-[#1C0F05] rounded-full h-10 px-5 focus:outline-none" />
            <input type="email" placeholder="Your Email" className="bg-[#FFF4EC] text-[#1C0F05] rounded-full h-10 px-5 focus:outline-none" />
            <textarea placeholder="Your Message" rows={4} className="bg-[#FFF4EC] text-[#1C0F05] rounded-xl px-5 py-2 focus:outline-none resize-none" />
            <button type="submit" className="bg-[#F9B870] text-[#1C0F05] rounded-xl h-10 font-semibold hover:bg-[#e3a963] transition">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
