import React from "react";
import { FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa6";
import image1 from "../assets/Avtart.jpg";
const ProfileCard = () => {

  const languages = [
    { name: 'Hindi', percentage: 100 },
    { name: 'English', percentage: 80 },
    { name: 'Bhojpuri', percentage: 60 },
  ];

  return (
    <div className="w-[250px] bg-white shadow-md rounded-lg p-6 h-[85rem]">
      <div className="flex flex-col items-center mb-4 gap-8">
        <img
          className="w-[150px] h-[150px] object-cover  rounded-full mr-4"
          src={image1}
          alt="Avatar"
        />
        <div>
          <h2 className="text-xl text-center font-semibold">
            Navanit vishwakarma
          </h2>
          <p className="text-gray-600 text-center">Front-End Developer</p>
        </div>
      </div>

      <div className="mb-4">
        <div className="  flex justify-center items-center mb-5">
          <span className="bg-yellow-500 rounded-full p-2  mr-2">
            <FaFacebookF />
          </span>
          <span className="bg-yellow-500 rounded-full p-2 mr-2">
            <IoLogoInstagram />
          </span>
          <span className="bg-yellow-500 rounded-full p-2 mr-2">
            <FaTwitter />
          </span>
          <span className="bg-yellow-500 rounded-full p-2 mr-2">
            <BiLogoLinkedin />
          </span>
          <span className="bg-yellow-500 rounded-full p-2 mr-2">
            <FaYoutube />
          </span>
          <span className="bg-yellow-500 rounded-full p-2 mr-2">
            <FaGithub />
          </span>
          {/* Repeat for the number of ratings */}
        </div>
        <div className="w-full h-[1px] bg-black mb-4 "></div>
        <div className="flex justify-between items-center mb-2">
          <span className="mr-2 bg-green-400">Age:</span>
          <span className="text-gray-600">21</span>
        </div>

        <div className="flex justify-between items-center mb-2">
          <span className="mr-2 bg-green-400">Residence:</span>
          <span className="text-gray-600"> Indian</span>
        </div>

        <div className="flex justify-between items-center mb-2">
          <span className="mr-2 bg-green-400">freelancer:</span>
          <span className="text-blue-600">Avilable</span>
        </div>

        <div className="flex justify-between items-center mb-2">
          <span className="mr-2 bg-green-400">Location:</span>
          <span className="text-gray-600">Ghaziabad</span>
        </div>
      </div>
      <div className="w-full h-[1px] bg-black mb-4 "></div>
      
      <div className="space-y-4">
      <h2 className="text-lg font-semibold">Languages</h2>
      {languages.map((language, index) => (
        <div key={index} className="flex  items-center">
          <span className="w-20 font-semibold">{language.name}</span>
          <div className="h-2 flex-1 bg-gray-200 rounded-full mr-2">
            <div
              className="bg-yellow-500 h-2  rounded-full"
              style={{ width: `${language.percentage}%` }}
            ></div>
          </div>
          <span className="w-8 text-right">{language.percentage}%</span>
        </div>
      ))}
    </div>
      <div className="w-full h-[1px] bg-black mb-4 "></div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Skills</h3>
        <div className="flex items-center mb-1">
          <span className="mr-2">HTML</span>
          <div className="bg-green-200 rounded-full h-2 w-full">
            <div
              className="bg-green-500 rounded-full h-2"
              style={{ width: "85%" }}
            ></div>
          </div>
        </div>

        <div className="flex items-center mb-1">
          <span className="mr-2">CSS</span>
          <div className="bg-green-200 rounded-full h-2 w-full">
            <div
              className="bg-green-500 rounded-full h-2"
              style={{ width: "85%" }}
            ></div>
          </div>
        </div>

        <div className="flex items-center mb-1">
          <span className="mr-2">Javascript</span>
          <div className="bg-green-200 rounded-full h-2 w-full">
            <div
              className="bg-green-500 rounded-full h-2"
              style={{ width: "85%" }}
            ></div>
          </div>
        </div>

        <div className="flex items-center mb-1">
          <span className="mr-2">React.js</span>
          <div className="bg-green-200 rounded-full h-2 w-full">
            <div
              className="bg-green-500 rounded-full h-2"
              style={{ width: "85%" }}
            ></div>
          </div>
        </div>

        <div className="flex items-center mb-1">
          <span className="mr-2">Taliwind</span>
          <div className="bg-green-200 rounded-full h-2 w-full">
            <div
              className="bg-green-500 rounded-full h-2"
              style={{ width: "85%" }}
            ></div>
          </div>
        </div>

        <div className="flex items-center mb-1">
          <span className="mr-2">Redux</span>
          <div className="bg-green-200 rounded-full h-2 w-full">
            <div
              className="bg-green-500 rounded-full h-2"
              style={{ width: "85%" }}
            ></div>
          </div>
        </div>
        {/* Repeat for other skills */}
      </div>
      <div className="w-full h-[1px] bg-black mb-4 "></div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-4">Extra Skills</h3>
        <ul className="list-disc list-inside">
          <li>Bootstrap, Materialize</li>
          <li>Stylus, Sass, Less</li>
          <li>Node, Webpack, Grunt</li>
          <li>Git Knowledge</li>
        </ul>
      </div>
      <div className="w-full h-[1px] bg-black mb-6 "></div>
      <div className="flex justify-center items-center">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4  rounded mt-4  ">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
