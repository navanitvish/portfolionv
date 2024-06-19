import React from 'react';
import { GoDotFill } from "react-icons/go";
const recommendations = [
  {
    rating: 5,
    title: 'Great Quality!',
    description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet....',
    name: 'James Gouse',
    profession: 'Graphic Designer',
    image: '/src/assets/Avtart.jpg' // Replace with actual image URL
  },
  {
    rating: 5,
    title: 'Amazing Work!',
    description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet....',
    name: 'Tiana Philips',
    profession: 'Photographer',
    image: '/src/assets/UserIMG.jpg' // Replace with actual image URL
  },
  {
    rating: 5,
    title: 'Great Quality!',
    description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet....',
    name: 'Talan Westervelt',
    profession: 'Business Man',
    image: '/src/assets/Avtart.jpg' // Replace with actual image URL
  }
];

const Testinonial = () => {
  return (
    <div className=" p-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Recommendations</h2>
      <p className="text-gray-600 mb-8">Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit. Lorem Ipsum</p>
      <div className="flex justify-between gap-4">
        {recommendations.map((recommendation, index) => (
          <div key={index} className="bg-gray-100  p-4 rounded-lg ">
            <div className="flex items-center mb-8">
              {Array(recommendation.rating)
                .fill()
                .map((_, i) => (
                  <span key={i} className="text-[#FFB400]">
                    &#9733;
                  </span>
                ))}
            </div>
            <h3 className="text-lg font-bold mb-2">{recommendation.title}</h3>
            <p className="text-gray-600 mb-4">{recommendation.description}</p>
            <div className="flex items-center">
              <img src={recommendation.image} alt={recommendation.name} className="w-14 h-14 rounded-full mr-4 object-cover" />
              <div>
                <p className="text-gray-800 font-semibold">{recommendation.name}</p>
                <p className="text-gray-600">{recommendation.profession}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <span className="text-[#FFB400] w-4 h-4"><GoDotFill /></span>
        <span className="text-[#FFB400]"><GoDotFill /></span>
        <span className="text-[#FFB400]"><GoDotFill /></span>
      </div>
    </div>
  );
};

export default Testinonial;