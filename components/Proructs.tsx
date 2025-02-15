import React from "react";

export default function Proructs() {
  return (
    <div className="relative w-full">
      <div className="text-center pt-52 pb-12">
        <h2 className="font-bold text-4xl mb-4 text-purple-50">
          محصولات یام یام مارکت
        </h2>
      </div>

      <section className="w-full grid grid-cols-2 lg:grid-cols-3 justify-items-center justify-center mx-auto gap-x-1 gap-y-4 sm:gap-8 mt-10 mb-5">
        <div className="w-36 xs:w-40 sm:w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Product"
              className="w-full h-52 sm:h-80 sm:w-72 object-cover rounded-t-xl"
            />
            <div className="p-3 w-full">
              <span className="text-gray-400 mr-3 uppercase text-xs">اسم</span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                پر فروش ها
              </p>
            </div>
          </a>
        </div>

        <div className="w-36 xs:w-40 sm:w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Product"
              className="w-full h-52 sm:h-80 sm:w-72 object-cover rounded-t-xl"
            />
            <div className="p-3 w-full">
              <span className="text-gray-400 mr-3 uppercase text-xs">اسم</span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                پر فروش ها
              </p>
            </div>
          </a>
        </div>

        <div className="w-36 xs:w-40 sm:w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1651950537598-373e4358d321?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Product"
              className="w-full h-52 sm:h-80 sm:w-72 object-cover rounded-t-xl"
            />
            <div className="p-3 w-full">
              <span className="text-gray-400 mr-3 uppercase text-xs">اسم</span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                پر فروش ها
              </p>
            </div>
          </a>
        </div>

        <div className="w-36 xs:w-40 sm:w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Product"
              className="w-full h-52 sm:h-80 sm:w-72 object-cover rounded-t-xl"
            />
            <div className="p-3 w-full">
              <span className="text-gray-400 mr-3 uppercase text-xs">اسم</span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                پر فروش ها
              </p>
            </div>
          </a>
        </div>

        <div className="w-36 xs:w-40 sm:w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Product"
              className="w-full h-52 sm:h-80 sm:w-72 object-cover rounded-t-xl"
            />
            <div className="p-3 w-full">
              <span className="text-gray-400 mr-3 uppercase text-xs">اسم</span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                پر فروش ها
              </p>
            </div>
          </a>
        </div>

        <div className="w-36 min-[320px]:w-40 sm:w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Product"
              className="w-full h-52 sm:h-80 sm:w-72 object-cover rounded-t-xl"
            />
            <div className="p-3 w-full">
              <span className="text-gray-400 mr-3 uppercase text-xs">اسم</span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                پر فروش ها
              </p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
