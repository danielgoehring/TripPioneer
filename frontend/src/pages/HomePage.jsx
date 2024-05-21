import React, { useState, useEffect } from "react";
import axios from "axios";
import beachicon from "../assets/beachicon.png";
import mountainicon from "../assets/mountainicon.png";
import lakehouseicon from "../assets/lakehouseicon.png";
import campingicon from "../assets/campingicon.png";

import "../App.css";

function HomePage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:5000/images");
        console.log(response.data); // Debugging line
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <>
      <div className="border border-slate-100 mt-6"></div>

      <div className="mt-7 flex justify-center items center">
        <div className="mx-6 border-b-2 border-transparent hover:border-slate-400 transition duration-300">
          <div className="ml-5">
            <img
              className="beach-icon cursor-pointer  "
              src={beachicon}
              alt="beach"
            />
          </div>

          <div className="text-slate-500 text-sm cursor-pointer">
            Beach house
          </div>
        </div>
        <div className="mx-6 mt-1.5 border-b-2 border-transparent hover:border-slate-400 transition duration-300">
          <div className="ml-8">
            <img
              className="mountain-icon cursor-pointer"
              src={mountainicon}
              alt="mountain"
            />
          </div>
          <div className="text-slate-500 text-sm mountain-house cursor-pointer">
            Mountain house
          </div>
        </div>
        <div className="mx-6 mt-2 border-b-2 border-transparent hover:border-slate-400 transition duration-300">
          <div className="ml-4">
            <img
              className="lakehouse-icon cursor-pointer"
              src={lakehouseicon}
              alt="lakehouse"
            />
          </div>

          <div className="text-slate-500 text-sm cursor-pointer">
            Lake house
          </div>
        </div>
        <div className="mx-6 mt-1 border-b-2 border-transparent hover:border-slate-400 transition duration-300">
          <div className="ml-4">
            <img
              className="camping-icon cursor-pointer"
              src={campingicon}
              alt="camping"
            />
          </div>

          <div className="text-slate-500 text-sm cursor-pointer">
            Camp sites
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image) => {
              console.log("Rendering photo:", image);
              return (
                <div
                  key={image._id}
                  className="relative w-full h-80 mb-28 cursor-pointer"
                >
                  <img
                    src={image.url}
                    alt="S3 Image"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                  <div className="text-left">
                    <div className="font-semibold mt-2">
                      {image.description}
                    </div>
                    <div className="text-slate-500 text-sm">
                      {image.distance}
                    </div>
                    <div className="text-slate-500 text-sm">{image.dates}</div>
                    <div className="font-semibold">${image.price} night</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
