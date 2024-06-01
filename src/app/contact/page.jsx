"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
          console.log(error);
        }
      );
  };
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hi";
  return (
    <motion.div
      className=" h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="h-1/5 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😁
          </div>
        </div>
        <form
          onSubmit={sendEmail}
          ref={form}
          className=" h-4/5 lg:h-full lg:w-1/2 bg-purple-200 rounded-xl text-xl flex flex-col gap-8 justify-center p-4 lg:p-24"
        >
          <span>Dear Yogender</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message"
          ></textarea>
          <span>My mail address is:</span>
          <input
            className="bg-transparent border-b-2 border-b-black outline-none"
            name="user_email"
            type="email"
          />
          <span>Regards</span>
          <button className="bg-red-200 rounded font-semibold text-gray-600 p-4">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold italic underline">
              Message sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-500 font-semibold">
              Something Went Wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
