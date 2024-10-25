"use client";

import { useState } from "react";

export default function Contact({ requestMethod }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div className=" container m-auto flex flex-col lg:px-28 xl:px-72 ">
      <div className="heading text-3xl font-bold my-6 text-center mt-12">Cotact us</div>
        <div className="right px-4 py-2 flex flex-col gap-6 lg:py-8 lg:px-12 xl:px-28">
          <div className="name flex flex-col gap-4 md:flex-row">
            <div className="firstname md:w-1/2">
              <label htmlFor="last" className="block mb-2">
                First Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name=""
                id="last"
                className="w-full px-2 py-1 outline-zinc-600 outline-1 ring-1 rounded-sm ring-neutral-400"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div className="lastname md:w-1/2">
              <label htmlFor="name" className="block mb-2">
                Last Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name=""
                id="name"
                className="w-full px-2 py-1 outline-zinc-600 outline-1 ring-1 rounded-sm ring-neutral-400"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="email">
            <label htmlFor="email" className="block mb-2">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              name=""
              id="email"
              className="w-full px-2 py-1 outline-zinc-600 outline-1 ring-1 rounded-sm ring-neutral-400"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="phone">
            <label htmlFor="phone" className="block mb-2">
              Phone number
            </label>
            <input
              type="number"
              name=""
              id="phone"
              className="w-full px-2 py-1 outline-zinc-600 outline-1 ring-1 rounded-sm ring-neutral-400"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <div className="messege">
            <label htmlFor="msg" className="block mb-2">
              Message
            </label>
            <textarea
              name=""
              id="msg"
              className="w-full h-52 px-2 py-1 outline-zinc-600 outline-1 ring-1 rounded-sm ring-neutral-400"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
          </div>

          <button
            className="text-white px-4 py-2 rounded-md bg-primary w-full font-semibold"
            onClick={() => {
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}
