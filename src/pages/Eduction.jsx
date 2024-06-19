import React from "react";

const certificateData = [
  {
    title: "Krishna Engineering college",
    course: "Information Technology",
    student: "Sep 2020 - June 2024",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Amet Dapibus Nibh Ut Faucibus Nunc, Egestas Id Amet Porttitor. Pulvinar Quisque Sed Amet, Nulla Nunc. Eleifend Sodales Posuere Fusce Tempus Etiam Et Pellentesque. Molestie Risus Enim Neque Eget Dui.",
  },
  {
    title: "Programming Course",
    course: "Certificate Of Java Training",
    student: "Jan 10th - Dec 2021",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Amet Dapibus Nibh Ut Faucibus Nunc, Egestas Id Amet Porttitor. Pulvinar Quisque Sed Amet, Nulla Nunc. Eleifend Sodales Posuere Fusce Tempus Etiam Et Pellentesque. Molestie Risus Enim Neque Eget Dui.",
  },
  {
    title: "Web Developer Courses",
    course: "Certificate Of Web Training",
    student: "Jan 10th - Dec 2021",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Amet Dapibus Nibh Ut Faucibus Nunc, Egestas Id Amet Porttitor. Pulvinar Quisque Sed Amet, Nulla Nunc. Eleifend Sodales Posuere Fusce Tempus Etiam Et Pellentesque. Molestie Risus Enim Neque Eget Dui.",
  },
];

const Eduction = () => {
  return (
    <div className="">
      <div className="m-4">
        <h1 className="text-4xl text-center font-bold mb-4 text-[black]">
          Education
        </h1>
        <p className=" text-center text-md ">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md">
        {certificateData.map((certificate, index) => (
          <div key={index} className="mb-8 flex">
            <div className="w-[400px]">
              <h2 className="text-xl font-bold mb-2">{certificate.title}</h2>

              <p className="text-gray-600 mb-2">
                Student {" "} {""}
                <span className="font-semibold bg-[#FFB400]">{certificate.student}</span>
              </p>
            </div>
            <div className="w-[500px]">
              <h3 className="text-lg mb-2">{certificate.course}</h3>
              <p className="text-gray-700">{certificate.description}</p>
            </div>
            <div>
                <hr />
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Eduction;
