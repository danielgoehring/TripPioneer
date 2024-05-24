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

        <div className="flex items-center my-2 ml-3">
          <div className=" overflow-hidden rounded-full">
            <img
              className="object-cover w-10 h-10 mr-7"
              src={beachicon}
              alt="beach"
            />
          </div>
          <div className="mt-2">
            <div className="font-semibold margin-bt">Hosted by Daniel</div>
            <div className="flex items-center">
              <div className="text-gray-500 sm-text">Superhost</div>
              <div className="pb-2 mx-1">.</div>
              <div className="text-gray-500 sm-text">6 years hosting</div>
            </div>
          </div>
        </div>
        <div className="border border-slate-100 mx-4 mt-3.5"></div>
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
              <div className="text-gray-500 sm-text">
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
              class="bi bi-columns mr-8"
              viewBox="0 0 16 16 "
            >
              <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm8.5 0v8H15V2zm0 9v3H15v-3zm-1-9H1v3h6.5zM1 14h6.5V6H1z" />
            </svg>
          </div>
          <div>
            <div className="font-semibold">Daniel is a Superhost.</div>
            <div className="flex items-center">
              <div className="text-gray-500 sm-text">
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
              <div className="text-gray-500 sm-text">
                Get a full refund if you change your mind
              </div>
            </div>
          </div>
          <div className="border border-slate-100 mx-4 mt-6"></div>
        </div>
        <div className="border border-slate-100 mx-4 mt-6"></div>
        <div className="flex">
          <div className="w-1/2 p-4 pr-4">
            <p>
              Situated on the peaceful shores of Lake Athens in Georgia, this
              delightful lake house serves as a perfect escape for nature lovers
              and outdoor enthusiasts alike. Recently upgraded to combine
              contemporary comforts with rustic appeal, the property offers
              stunning views of the tranquil lake and its verdant surroundings.
              Guests can enjoy a range of activities, such as fishing, early
              morning paddleboarding, or a relaxing swim in the pristine waters
              of this scenic lake. The property features a generous 1,500 sq
              foot dock outfitted with 2 paddleboards, a pedal boat, a full-size
              rowboat, optional jet ski rental, and a stone firepit ideal for
              evening get-togethers and stargazing.
            </p>
          </div>
        </div>
        <div className="pl-4 font-semibold underline mb-12">Show more</div>
        <div className="border border-slate-100 mx-4 mt-6 mb-12"></div>
        <div className="pl-4">
          <div className="flex">
            <div className="text-2xl font-semibold">Where you'll sleep</div>
            <div className="flex m-left items-center">
              <div>1/2</div>
              <div className="flex">
                <div className="mx-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    class="bi bi-arrow-left-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    class="bi bi-arrow-right-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-start w-1/2 mt-6">
            <div className="w-1/2 pr-2">
              <img
                src={firstImage.url}
                alt="Stairs"
                className="w-full h-52 object-cover rounded-lg"
              />
              <div className="font-semibold mt-4">Bedroom 1</div>
              <div>4 double beds</div>
            </div>

            <div className="w-1/2 pl-2">
              <img
                src={firstImage.url}
                alt="Bedroom"
                className="w-full h-52 object-cover rounded-lg"
              />
              <div className="font-semibold mt-4">Bedroom 2</div>
              <div>1 queen bed</div>
            </div>
          </div>
        </div>
        <div className="border border-slate-100 mx-4 mt-6 mb-12"></div>
        <div>
          <div className="text-2xl font-semibold mb-4">
            What this place offers
          </div>
          <div className="flex items-center mb-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-brightness-alt-high"
                viewBox="0 0 16 16"
              >
                <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5m-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4m0 1a3 3 0 0 1 2.959 2.5H5.04A3 3 0 0 1 8 8" />
              </svg>
            </div>
            <div className="ml-4 mr-52">Lake access</div>
            {/* ////////////// */}
            <div className="flex items-center mb-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  class="bi bi-brightness-alt-high"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5m-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4m0 1a3 3 0 0 1 2.959 2.5H5.04A3 3 0 0 1 8 8" />
                </svg>
              </div>
              <div className="ml-4">Kitchen</div>
            </div>
          </div>
          <div className="flex items-center mb-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-wifi"
                viewBox="0 0 16 16"
              >
                <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.44 12.44 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.52.52 0 0 0 .668.05A11.45 11.45 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049" />
                <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.46 9.46 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065m-2.183 2.183c.226-.226.185-.605-.1-.75A6.5 6.5 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.5 5.5 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091zM9.06 12.44c.196-.196.198-.52-.04-.66A2 2 0 0 0 8 11.5a2 2 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z" />
              </svg>
            </div>
            <div className="ml-4 margin-icons1">Wifi</div>
            {/* ////////////// */}
            <div className="flex items-center mb-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-cart2"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                </svg>
              </div>
              <div className="ml-4">Free parking on premises</div>
            </div>
          </div>
          <div className="flex items-center mb-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-cup"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M.11 3.187A.5.5 0 0 1 .5 3h13a.5.5 0 0 1 .488.608l-.22.991a3.001 3.001 0 0 1-1.3 5.854l-.132.59A2.5 2.5 0 0 1 9.896 13H4.104a2.5 2.5 0 0 1-2.44-1.958L.012 3.608a.5.5 0 0 1 .098-.42Zm12.574 6.288a2 2 0 0 0 .866-3.899zM1.124 4l1.516 6.825A1.5 1.5 0 0 0 4.104 12h5.792a1.5 1.5 0 0 0 1.464-1.175L12.877 4H1.123Z"
                />
              </svg>
            </div>
            <div className="ml-4 margin-icons2">Pool</div>
            {/* ////////////// */}
            <div className="flex items-center mb-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-tv"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2" />
                </svg>
              </div>
              <div className="ml-4 ">55 Inch HDTV</div>
            </div>
          </div>
          <div className="flex items-center mb-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-bucket"
                viewBox="0 0 16 16"
              >
                <path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5m1.005 0a4.5 4.5 0 0 1 8.945 0zm9.892 1-1.286 8.574a.5.5 0 0 1-.494.426H4.36a.5.5 0 0 1-.494-.426L2.58 6h10.838z" />
              </svg>
            </div>
            <div className="ml-4 margin-icons3">Free washer - in unit</div>
            {/* ////////////// */}
            <div className="flex items-center mb-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  class="bi bi-bucket"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5m1.005 0a4.5 4.5 0 0 1 8.945 0zm9.892 1-1.286 8.574a.5.5 0 0 1-.494.426H4.36a.5.5 0 0 1-.494-.426L2.58 6h10.838z" />
                </svg>
              </div>
              <div className="ml-4">Free dryer - In unit</div>
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-snow"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a.5.5 0 0 1-.5-.5v-1.293l-.646.647a.5.5 0 0 1-.707-.708L7.5 12.793V8.866l-3.4 1.963-.496 1.85a.5.5 0 1 1-.966-.26l.237-.882-1.12.646a.5.5 0 0 1-.5-.866l1.12-.646-.884-.237a.5.5 0 1 1 .26-.966l1.848.495L7 8 3.6 6.037l-1.85.495a.5.5 0 0 1-.258-.966l.883-.237-1.12-.646a.5.5 0 1 1 .5-.866l1.12.646-.237-.883a.5.5 0 1 1 .966-.258l.495 1.849L7.5 7.134V3.207L6.147 1.854a.5.5 0 1 1 .707-.708l.646.647V.5a.5.5 0 1 1 1 0v1.293l.647-.647a.5.5 0 1 1 .707.708L8.5 3.207v3.927l3.4-1.963.496-1.85a.5.5 0 1 1 .966.26l-.236.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.883.237a.5.5 0 1 1-.26.966l-1.848-.495L9 8l3.4 1.963 1.849-.495a.5.5 0 0 1 .259.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.236.883a.5.5 0 1 1-.966.258l-.495-1.849-3.4-1.963v3.927l1.353 1.353a.5.5 0 0 1-.707.708l-.647-.647V15.5a.5.5 0 0 1-.5.5z" />
              </svg>
            </div>
            <div className="ml-4 margin-icons4">Central air conditioning</div>
            {/* ////////////// */}
            <div className="flex items-center mb-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  class="bi bi-brightness-alt-high"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5m-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4m0 1a3 3 0 0 1 2.959 2.5H5.04A3 3 0 0 1 8 8" />
                </svg>
              </div>
              <div className="ml-4">Lake access</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Listing;
