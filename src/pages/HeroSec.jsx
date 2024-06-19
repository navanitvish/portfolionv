import React from 'react';

const HeroSec = () => {
  return (
    <div className="flex items-center justify-center h-[490px] bg-white ">
      <div className="px-8 mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-[40px] font-bold  w-full">I'm Navanit Vishwakarma</h1>
            <h2 className="text-[40px] font-semibold mb-4"><span className='text-[#FFB400]'>Front-end</span> Developer</h2>
            <p className="text-gray-600 mb-6">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Et,
              Volutpat Feugiat Placerat Lobortis. Natoque Rutrum Semper Sed
              Suspendisse Nunc Lectus.
            </p>
            <button className="bg-[#FFB400] hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
              Hire Me
            </button>
          </div>
          <div className="md:w-1/1 px-16 ">
            <img
              src="/src/assets/UserIMG.jpg"
              alt="Rayan Adlrdard"
              className=" rounded-lg w-[310px] h-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;