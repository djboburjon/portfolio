import React from "react";
import 'animate.css';

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form method="POST" action="https://getform.io/f/ebpdvxwb" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
          <span className="inline-block animate__animated animate__slideInDown">Contact</span>
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email - djboburdev@gmail.com
          </p>
        </div>
        <input
          className="p-2 bg-[#ccd6f6] animate__animated animate__rubberBand"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] animate__animated animate__rubberBand"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea className="p-2 bg-[#ccd6f6] animate__animated animate__zoomIn" name="message" rows="10" placeholder="Message"></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">Let's Collaborate</button>
      </form>
    </div>
  );
}

export default Contact;
