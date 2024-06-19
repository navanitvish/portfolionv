import React from "react";

const Blog = () => {
  return (
    <>
      <section className=" pb-10 pt-20 dark:bg-dark lg:pb-20 ">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Our Blogs
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Our Recent News
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="ml-6 flex flex-wrap gap-4">
            <BlogCard
              date="Nov 22, 2023"
              CardTitle="Make Business card"
              CardDescription="The place is close to Barceloneta Beach and bus stop just 2 min by walk
              and near to Naviglio where you can enjoy the main night life in
              Barcelona."
              image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
            />
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="How to make web tempates"
              CardDescription="The place is close to Barceloneta Beach and bus stop just 2 min by walk
              and near to Naviglio where you can enjoy the main night life in
              Barcelona."
              image="https://i.ibb.co/Y23YC07/image-02.jpg"
            />
            <BlogCard
              date="jan 22, 2024"
              CardTitle="How to make Flyer Design"
              CardDescription="The place is close to Barceloneta Beach and bus stop just 2 min by walk
              and near to Naviglio where you can enjoy the main night life in
              Barcelona."
              image="https://i.ibb.co/7jdcnwn/image-03.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

const BlogCard = ({ image, date, CardTitle, CardDescription }) => {
  return (
    <div >
      <div className="relative flex flex-col  mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-[290px] ">
        <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40 ">
          <img src={image} alt="card-image" className="object-cover" />
        </div>
        <div className="p-6">
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {CardTitle}
          </h5>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            {CardDescription}
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};
