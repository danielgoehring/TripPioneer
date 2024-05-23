import React, { useState, useEffect } from "react";
import axios from "axios";
import { fetchImages } from "../services/api";
import "../App.css";
import beachicon from "../assets/beachicon.png";

function Listing() {
  const [images, setImages] = useState([{ url: beachicon }]);

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

  const firstImage = images[0];
  return (
    <>
      <div className="border border-slate-100 mx-4 mt-6"></div>
      <div className="flex justify-between px-4 mt-6">
        <div className="text-3xl font-semibold">Lake Rock Mountain Home</div>
        <div className="flex">
          <div className="flex items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-box-arrow-up"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1z"
                />
                <path
                  fill-rule="evenodd"
                  d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708z"
                />
              </svg>
            </div>
            <div className="ml-1 underline">Share</div>
          </div>
          <div className="flex items-center ml-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-hand-thumbs-up"
                viewBox="0 0 16 16"
              >
                <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
              </svg>
            </div>
            <div className="ml-1">Save</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-2 p-4 pt-6">
        <div className="col-span-2 row-span-2 ">
          <img
            src={firstImage.url}
            alt="1"
            className="w-full h-full object-cover listing-img1"
          />
        </div>
        <div className="col-span-2 row-span-1 grid grid-cols-2 gap-2">
          <img
            src={firstImage.url}
            alt="2"
            className="w-full h-full object-cover listing-img2"
          />
          <img
            src={firstImage.url}
            alt="3"
            className="w-full h-full object-cover listing-img3"
          />
        </div>
        <div className="col-span-2 row-span-1 grid grid-cols-2 gap-2">
          <img
            src={firstImage.url}
            alt="4"
            className="w-full h-full object-cover listing-img4"
          />
          <img
            src={firstImage.url}
            alt="5"
            className="w-full h-full object-cover listing-img5"
          />
        </div>
      </div>
      <div>
        <div className="px-4">
          <div className="text-2xl font-semibold text-left">
            Entire house in Athens, Georgia
          </div>
          <div className="flex items-center">
            <div>4 guests</div>
            <div className="pb-2 mx-1">.</div>
            <div>4 bedrooms</div>
            <div className="pb-2 mx-1">.</div>
            <div>8 beds</div>
            <div className="pb-2 mx-1">.</div>
            <div>4 baths</div>
          </div>
          <div className="flex items-center">
            <div className="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </div>
            <div className="font-semibold">3.78</div>
            <div className="pb-2 mx-1">.</div>
            <div className="font-semibold underline">124 reviews</div>
          </div>
        </div>
        <div className="border border-slate-100 mx-4 mt-6"></div>

        <div className="flex items-center my-4 ml-3">
          <div className=" overflow-hidden rounded-full">
            <img
              className="object-cover w-10 h-10 mr-7"
              src={beachicon}
              alt="beach"
            />
          </div>
          <div>
            <div className="font-semibold">Hosted by Daniel</div>
            <div className="flex items-center">
              <div className="text-gray-500">Superhost</div>
              <div className="pb-2 mx-1">.</div>
              <div className="text-gray-500">6 years hosting</div>
            </div>
          </div>
        </div>
        <div className="border border-slate-100 mx-4 mt-6"></div>
        <div className="flex items-center my-4 marginr">
          <div className="ml-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-door-closed mr-8"
              viewBox="0 0 16 16"
            >
              <path d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3zm1 13h8V2H4z" />
              <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
            </svg>
          </div>
          <div>
            <div className="font-semibold">Self check-in</div>
            <div className="flex items-center">
              <div className="text-gray-500">
                Check yourself in with the keypad
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center my-4 marginr">
          <div className="ml-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              class="bi bi-wallet mr-8"
              viewBox="0 0 16 16"
            >
              <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a2 2 0 0 1-1-.268M1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1" />
            </svg>
          </div>
          <div>
            <div className="font-semibold">Daniel is a Superhost.</div>
            <div className="flex items-center">
              <div className="text-gray-500">
                Superhosts are experienced, highly rated Hosts.
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center my-4 marginr">
          <div className="ml-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              class="bi bi-calendar4 mr-8"
              viewBox="0 0 16 16"
            >
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
            </svg>
          </div>
          <div>
            <div className="font-semibold">Free cancellation before Jul 4</div>
            <div className="flex items-center">
              <div className="text-gray-500">
                Get a full refund if you change your mind
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Listing;
