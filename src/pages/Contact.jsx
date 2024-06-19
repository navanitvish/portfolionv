import React, { useState } from "react";

function Contact() {
  const initialState = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Implement form submission logic here (e.g., send data to server)
    console.log("Form submitted:", formData);

    // Reset form after submission (optional)
    setFormData(initialState);
  };

  return (
    <div>
      <div className=" flex flex-row m-4">
        <div className="m-6">
          <h2 className="text-2xl font-bold p-4">Leave us your info</h2>

          <div className="w-[470px] bg-white p-6">
            <form onSubmit={handleSubmit} className="flex flex-col w-full">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Your Full Name ( Required)
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-[#E5E5E5] appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Your Email ( Required)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-[#E5E5E5] appearance-none border rounded w-full  py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-[#E5E5E5] appearance-none border rounded w-full  py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="10"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-[#E5E5E5] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <div>
            <div>
              <h2 className="text-2xl font-bold p-4">Contact information</h2>
            </div>
          </div>
          <div className="bg-white w-[300px]  h-[155px] m-6 p-6  ">
           <div className=" flex justify-center items-center mx-auto  bg-[#FFB400] w-[40px] h-[40px] rounded-full">
           <img
              src="/src/assets/location.png"
              alt=""
              className=" flex justify-center items-center mx-auto"
            />
           </div>
            <div className="m-4">
              <p className="flex flex-row justify-between">
                Country: <span>India</span>
              </p>
              <p className="flex flex-row justify-between">
                City: <span>Deoria</span>
              </p>
              <p className="flex flex-row justify-between">
                State: <span>Utter Pardesh</span>
              </p>
            </div>
          </div>

          <div className="bg-white w-[300px] h-[155px]  m-6 p-6  ">
           <div className=" flex justify-center items-center mx-auto  bg-[#FFB400] w-[40px] h-[40px] rounded-full">
           <img
              src="/src/assets/mail.png"
              alt=""
              className=" flex justify-center items-center mx-auto"
            />
           </div>
            <div className="m-4">
              <p className="flex flex-row justify-between">
                Email:{" "}
                <span>
                  <a href="">navanitvishwakarma790@gmail.com</a>
                </span>
              </p>
              <p className="flex flex-row justify-between">
                Instagram:{" "}
                <span>
                  <a href="">navanit_vishwakarma</a>
                </span>
              </p>
              <p className="flex flex-row justify-between">
                Github:{" "}
                <span>
                  <a href="">navanitvishwh</a>
                </span>
              </p>
            </div>
          </div>
        

          <div className="bg-white w-[300px]  h-[155px] m-6 p-6  ">
           <div className=" flex justify-center items-center mx-auto  bg-[#FFB400] w-[40px] h-[40px] rounded-full">
           <img
              src="/src/assets/Mobile.png"
              alt=""
              className=" "
            />
           </div>
            <div className="m-4">
              <p className="flex flex-row justify-between">
                Support Service: <span>+ 153366</span>
              </p>
              <p className="flex flex-row justify-between">
                Office: <span>+91 95555353894</span>
              </p>
              <p className="flex flex-row justify-between">
                Personal: <span>+91 9555353894</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
