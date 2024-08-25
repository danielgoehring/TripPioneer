import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import beachicon from "../assets/beachicon.png";
import mountainicon from "../assets/mountainicon.png";
import lakehouseicon from "../assets/lakehouseicon.png";
import campingicon from "../assets/campingicon.png";
import { fetchImages } from "../services/api";
import "../App.css";
import "../index.css";

function HomePage({ text, selectedOption }) {
  const [images, setImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(text || "all");

  const handleCategory = (category) => {
    setSelectedCategory(category);
  };

  const filterCategories =
    selectedCategory === "all"
      ? images
      : images.filter((image) => image.type === selectedCategory);

  const navigate = useNavigate();

  const handleImage = (id) => {
    navigate(`/listing/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchImages();
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (text) {
      setSelectedCategory(text);
    }
  }, [text]);

  return (
    <>
      <div className="border border-slate-100 mt-6 dispNone"></div>
      <div className="mt-6 flex justify-center items center mb-2">
        <div
          className="mx-6 border-b-2 border-transparent hover:border-slate-400 transition duration-300 iconBorder"
          onClick={() => handleCategory("beach")}
        >
          <div className="ml-5 img-m">
            <img
              className="beach-icon cursor-pointer iconImg1"
              src={beachicon}
              alt="beach"
            />
          </div>

          <div className="text-slate-500 text-sm cursor-pointer iconText ">
            Beach house
          </div>
        </div>
        <div
          className="mx-6 mt-1.5 border-b-2 border-transparent hover:border-slate-400 transition duration-300 iconBorder"
          onClick={() => handleCategory("mountain")}
        >
          <div className="ml-8 img-m">
            <img
              className="mountain-icon cursor-pointer iconImg2"
              src={mountainicon}
              alt="mountain"
            />
          </div>
          <div className="text-slate-500 text-sm mountain-house cursor-pointer iconText ">
            Mountain house
          </div>
        </div>
        <div
          className="mx-6 mt-2 border-b-2 border-transparent hover:border-slate-400 transition duration-300 iconBorder"
          onClick={() => handleCategory("lake")}
        >
          <div className="ml-4 img-m">
            <img
              className="lakehouse-icon cursor-pointer iconImg3"
              src={lakehouseicon}
              alt="lakehouse"
            />
          </div>

          <div className="text-slate-500 text-sm cursor-pointer iconText">
            Lake house
          </div>
        </div>
        <div
          className="mx-6 mt-1 border-b-2 border-transparent hover:border-slate-400 transition duration-300 iconBorder"
          onClick={() => handleCategory("camp")}
        >
          <div className="ml-4 img-m">
            <img
              className="camping-icon cursor-pointer iconImg4"
              src={campingicon}
              alt="camping"
            />
          </div>

          <div className="text-slate-500 text-sm cursor-pointer iconText ">
            Camp sites
          </div>
        </div>
      </div>

      <div className="border border-slate-100 mt-4 mb-2 dispMobile"></div>
      <div className="px-20 gallery-sm">
        <div className="container mx-auto pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filterCategories.map((image) => {
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
                    onClick={() => handleImage(image._id)}
                  />
                  <div className="flex justify-between ">
                    <div className="text-left">
                      <div className="font-semibold mt-2">
                        {image.description}
                      </div>
                      <div className="text-slate-500 text-sm">
                        {image.distance}
                      </div>
                      <div className="text-slate-500 text-sm">
                        {image.dates}
                      </div>
                      <div className="font-semibold">${image.price} night</div>
                    </div>
                    <div className="flex mt-[8px]">
                      <div className="mt-[6px] mr-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          fill="currentColor"
                          class="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </div>
                      <div className="tracking-widest">{image.rating}</div>
                    </div>
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
