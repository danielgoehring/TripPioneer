import React, { useState, useEffect } from "react";
import axios from "axios";
import { fetchImages } from "../services/api";
import "../App.css";
import "../index.css";
import beachicon from "../assets/beachicon.png";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Listing({
  checkInDate,
  checkOutDate,
  guestAmount,
  dateSync,
  daysBetween,
  handleGuestAmount,
}) {
  const [images, setImages] = useState([{ url: beachicon }]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [toggleMobileCalendar, setToggleMobileCalendar] = useState(false);

  const { id } = useParams();

  console.log(guestAmount);
  const today = new Date().toISOString().split("T")[0];

  const handleGetCheckinDays = (event) => {
    const checkinDate = new Date(event.target.value);
    setCheckinDays(checkinDate);
    dateSync(event.target.value, checkOutDate);
  };

  const handleGetCheckoutDays = (event) => {
    const checkoutDate = new Date(event.target.value);
    setCheckoutDays(checkoutDate);
    dateSync(checkInDate, event.target.value);
  };

  const showDatesMobile = () => {};

  const listingTotal = useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchImages();
        setImages(data);
        const image = data.find((img) => img._id === id);
        setSelectedImage(image);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchData();
  }, [id]);

  const navigate = useNavigate();

  const handleReserveClick = () => {
    navigate("/receipt", {
      state: {
        checkInDate,
        checkOutDate,
        guestAmount,
        daysBetween,
        selectedImage,
      },
    });
  };

  function formatDateString(dateString) {
    const [year, month, day] = dateString.split("-");
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString("en-US", { month: "long", day: "numeric" });
  }

  const formattedCheckInDate = formatDateString(checkInDate);
  const formattedCheckOutDate = formatDateString(checkOutDate);
  // const formattedCheckInDate = new Date(checkInDate).toLocaleDateString(
  //   "en-US",
  //   { month: "long", day: "numeric" }
  // );
  // const formattedCheckOutDate = new Date(checkOutDate).toLocaleDateString(
  //   "en-US",
  //   { month: "long", day: "numeric" }
  // );

  return (
    <>
      <div className="border border-slate-100 mx-4 mt-6 dispNoneListing"></div>
      <div className="px-44 listing-sm">
        {/* <a href="/" class="arrow-link hideHomeLink">
          Home
        </a> */}

        <div className="flex justify-between px-4 mt-6 dispNone">
          {selectedImage ? (
            <>
              <div className="text-3xl font-semibold dispNoneListing">
                {selectedImage.listingTitle}
              </div>
            </>
          ) : (
            <div>Image not found.</div>
          )}

          <div className="flex">
            <div className="flex items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-box-arrow-up dispNone"
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
              <div className="ml-1 underline dispNone">Share</div>
            </div>
            <div className="flex items-center ml-4 dispNone">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-hand-thumbs-up "
                  viewBox="0 0 16 16"
                >
                  <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                </svg>
              </div>
              <div className="ml-1 underline dispNone">Save</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div
            className="absolute top-4 left-4 cursor-pointer z-10 hideHomeLink"
            onClick={() => navigate("/")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="white"
              class="bi bi-arrow-left-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
            </svg>
          </div>
          <div className="grid grid-cols-4 grid-rows-2 gap-2 p-4 pt-6 nm">
            {selectedImage ? (
              <>
                <div className="col-span-2 row-span-2 ">
                  <img
                    src={selectedImage.url}
                    alt="1"
                    className="w-full h-full object-cover listing-img1 nm-img"
                  />
                </div>
                <div className="col-span-2 row-span-1 grid grid-cols-2 gap-2 dispNone">
                  <img
                    src={selectedImage.housepic1}
                    alt="2"
                    className="w-full h-full object-cover listing-img2"
                  />
                  <img
                    src={selectedImage.housepic2}
                    alt="3"
                    className="w-full h-full object-cover listing-img3"
                  />
                </div>
                <div className="col-span-2 row-span-1 grid grid-cols-2 gap-2 dispNone">
                  <img
                    src={selectedImage.housepic3}
                    alt="4"
                    className="w-full h-full object-cover listing-img4"
                  />
                  <img
                    src={selectedImage.housepic4}
                    alt="5"
                    className="w-full h-full object-cover listing-img5"
                  />
                </div>
              </>
            ) : (
              <div>Image not found.</div>
            )}
          </div>
        </div>

        <div className="flex">
          {selectedImage ? (
            <>
              <div>
                <div className="px-4 pd-right">
                  {/* Listing description //////////////// */}
                  <div className="text-2xl font-semibold text-left ">
                    {/* Entire house in Athens, Georgia */}
                    {selectedImage.listingTitleDes}
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
                    <div className="font-semibold">{selectedImage.rating}</div>
                    <div className="pb-2 mx-1">.</div>
                    <div className="font-semibold underline">
                      {selectedImage.reviews} reviews
                    </div>
                  </div>
                </div>
                <div className="border border-slate-100 mx-4 mt-6 "></div>

                <div className="flex items-center my-2 ml-3">
                  <div className=" overflow-hidden rounded-full">
                    <img
                      className="object-cover w-12"
                      src={selectedImage.profilePic}
                      alt="beach"
                    />
                  </div>
                  <div className="mt-2 ml-5">
                    <div className="font-semibold margin-bt">
                      Hosted by Daniel Goehring
                    </div>
                    <div className="flex items-center">
                      <div className="text-gray-500 sm-text">Superhost</div>
                      <div className="pb-2 mx-1">.</div>
                      <div className="text-gray-500 sm-text">
                        8 years hosting
                      </div>
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
                      <div className="text-gray-500 sm-text pd-right2">
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
                    <div className="font-semibold">
                      Free cancellation before Jul 4
                    </div>
                    <div className="flex items-center">
                      <div className="text-gray-500 sm-text">
                        Get a full refund if you change your mind
                      </div>
                    </div>
                  </div>
                  <div className="border border-slate-100 mx-4 mt-6 "></div>
                </div>
                <div className="border border-slate-100 mx-4 mt-6 pd-right2 wd-change"></div>
                <div className="">
                  <div className="w-3/4 p-4 pr-4 wd-change">
                    <p>{selectedImage.listingDes}</p>
                  </div>
                </div>
                <div className="pl-4 font-semibold underline mb-12 wd-change">
                  Show more
                </div>
                <div className="border border-slate-100 mx-4 mt-6 mb-12 "></div>

                {/* secondary images ///////////// */}
                <div className="pl-4">
                  <div className="">
                    <div className="text-2xl font-semibold txt-sm">
                      Where you'll sleep
                    </div>
                    {/* <div className="flex m-left items-center dispNone">
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
                    </div> */}
                  </div>

                  <div className="flex justify-start 2 mt-6">
                    <div className="">
                      <img
                        src={selectedImage.bed1}
                        alt="Stairs"
                        className="w-64 h-52 object-cover rounded-lg imageSized"
                      />
                      <div className="font-semibold mt-4">Bedroom 1</div>
                      <div>4 double beds</div>
                    </div>

                    <div className="img-2">
                      <img
                        src={selectedImage.bed2}
                        alt="Bedroom"
                        className="w-64 h-52 object-cover rounded-lg imageSized"
                      />
                      <div className="img-mr">
                        <div className="font-semibold mt-4">Bedroom 2</div>
                        <div>1 queen bed</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border border-slate-100 mx-4 mt-6 mb-12"></div>
                <div className="pl-4">
                  <div className="text-2xl font-semibold mb-4">
                    What this place offers
                  </div>
                  <div className="flex items-center sm-lake">
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
                    <div className="flex items-center mb-2 hd-reserveCard">
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
                      <div className="kitchen-margin">Kitchen</div>
                    </div>
                  </div>
                  <div className="flex items-center mb-2 ">
                    <div className="ml-1">
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
                    <div className="ml-5 margin-icons1">Wifi</div>
                    {/* ////////////// */}
                    <div className="flex items-center mb-2 hd-reserveCard">
                      <div className="parking-margin">
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
                      <div className="parking2-margin">
                        Free parking on premises
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="ml-1">
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
                    <div className="ml-5 margin-icons2">Pool</div>
                    {/* ////////////// */}
                    <div className="flex items-center mb-2 hd-reserveCard">
                      <div className="tv-margin">
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
                      <div className="ml-5 ">55 Inch HDTV</div>
                    </div>
                  </div>
                  <div className="flex items-center mb-2 hd-reserveCard">
                    <div className="ml-1">
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
                    <div className="ml-5 margin-icons3">
                      Free washer - in unit
                    </div>
                    {/* ////////////// */}
                    <div className="flex items-center mb-2">
                      <div className="dryer-margin">
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
                      <div className="ml-5">Free dryer - In unit</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="ml-1">
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
                    <div className="central-margin margin-icons4">
                      Central air conditioning
                    </div>
                    {/* ////////////// */}
                    <div className="flex items-center mb-2 hd-reserveCard ">
                      <div className="dryer-margin ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="currentColor"
                          class="bi bi-brightness-alt-high "
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5m-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4m0 1a3 3 0 0 1 2.959 2.5H5.04A3 3 0 0 1 8 8" />
                        </svg>
                      </div>
                      <div className="lake-margin ">Lake access</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div>Image not found.</div>
          )}

          {/* ////// reserve dates card */}
          {/* Right Section - Reserve Card */}

          <div className="p-4 pl-20 sticky top-4 hd-reserveCard dispNone">
            <div className="border p-4 shadow-lg rounded-lg reserve-container dispReserve dispNone">
              <div className="text-2xl font-semibold mb-6 dispNone">
                {selectedImage ? (
                  <>
                    ${selectedImage.price}{" "}
                    <span className="text-sm font-normal">night</span>
                  </>
                ) : (
                  <div>Image not found.</div>
                )}
              </div>
              <div className="border rounded-lg ">
                <div className="flex justify-between ">
                  <div className="border-b p-2">
                    <label className="block text-xs font-semibold ">
                      CHECK-IN
                    </label>
                    <input
                      type="date"
                      className=" p-1 w-full"
                      value={checkInDate}
                      onChange={(event) =>
                        dateSync(event.target.value, checkOutDate)
                      }
                      min={today}
                    />
                  </div>
                  <div className="border-l border-b p-2">
                    <label className="block text-xs font-semibold">
                      CHECK-OUT
                    </label>
                    <input
                      type="date"
                      className=" p-1 w-full "
                      value={checkOutDate}
                      onChange={(event) =>
                        dateSync(checkInDate, event.target.value)
                      }
                      min={today}
                    />
                  </div>
                </div>
                <div className="mt-4 p-2">
                  <label className="block text-xs font-semibold">GUESTS</label>
                  <select
                    className="py-1 w-full"
                    value={guestAmount}
                    onChange={(event) => {
                      handleGuestAmount(event.target.value);
                    }}
                  >
                    <option value="1 guest">1 guest</option>
                    <option value="2 guests">2 guests</option>
                    <option value="3 guests">3 guests</option>
                    <option value="4 guests">4 guests</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <button
                  className="bg-emerald-500 text-white py-2.5 px-4 rounded w-full font-bold mb-2"
                  onClick={handleReserveClick}
                >
                  Reserve
                </button>
              </div>
              <div className="text-center">
                <div className="text-sm mb-6">You won't be charged yet</div>
              </div>
              {selectedImage ? (
                <>
                  <div className="mt-4 ">
                    <div className="flex justify-between mb-2">
                      <div className="underline">
                        ${selectedImage.price} x {daysBetween} nights
                      </div>
                      <div>${selectedImage.price * daysBetween}</div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="underline">Cleaning fee</div>
                      <div>$150</div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="underline">Service fee</div>
                      <div className="mb-4">$371</div>
                    </div>
                    <div className="flex justify-between font-bold border-t pt-2 mt-2 ">
                      <div className="mt-2">Total before taxes</div>
                      <div className="mt-2">
                        ${selectedImage.price * daysBetween + 150 + 371}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div>Image not found.</div>
              )}
            </div>
          </div>
        </div>

        {/* ////stop */}

        {/* Reserve Card Mobile View */}

        <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-lg border border-t border-gray-300 hideMobileCard">
          {toggleMobileCalendar === true ? (
            <>
              <div className="border rounded-lg ">
                <div className=" justify-between mb-">
                  <div className="border-b p-2">
                    <label className="block text-xs font-semibold ">
                      CHECK-IN
                    </label>
                    <input
                      type="date"
                      className=" p-1 w-full"
                      value={checkInDate}
                      onChange={(event) =>
                        dateSync(event.target.value, checkOutDate)
                      }
                      min={today}
                    />
                  </div>
                  <div className="border-l border-b p-2">
                    <label className="block text-xs font-semibold">
                      CHECKOUT
                    </label>
                    <input
                      type="date"
                      className=" p-1 w-full "
                      value={checkOutDate}
                      onChange={(event) =>
                        dateSync(checkInDate, event.target.value)
                      }
                      min={today}
                    />
                  </div>
                </div>
                <div className="mt-2 p-2">
                  <label className="block text-xs font-semibold">GUESTS</label>
                  <select
                    className="py-1 w-full"
                    value={guestAmount}
                    onChange={(event) => {
                      handleGuestAmount(event.target.value);
                    }}
                  >
                    <option value="1 guest">1 guest</option>
                    <option value="2 guests">2 guests</option>
                    <option value="3 guests">3 guests</option>
                    <option value="4 guests">4 guests</option>
                  </select>
                </div>
              </div>
            </>
          ) : null}

          <div className="flex justify-between items-center max-w-screen-lg mx-auto mt-2">
            <div className="text-xl font-semibold">
              {selectedImage ? (
                <>
                  ${selectedImage.price}{" "}
                  <span className="text-sm font-normal"> night</span>
                </>
              ) : (
                <div>Image not found.</div>
              )}
              <div className="text-sm">
                {formattedCheckInDate === "Invalid Date" ||
                formattedCheckOutDate === "Invalid Date" ||
                !formattedCheckInDate ||
                !formattedCheckOutDate ? (
                  <a>
                    <div
                      className="underline cursor-pointer"
                      onClick={() =>
                        setToggleMobileCalendar(!toggleMobileCalendar)
                      }
                    >
                      Choose dates
                    </div>
                  </a>
                ) : (
                  <div
                    className="cursor-pointer"
                    onClick={() =>
                      setToggleMobileCalendar(!toggleMobileCalendar)
                    }
                  >
                    {formattedCheckInDate} - {formattedCheckOutDate}
                    <br />
                  </div>
                )}
              </div>
            </div>
            <div>
              <button
                className="bg-emerald-500 text-white py-2.5 px-6 rounded font-bold"
                onClick={handleReserveClick}
              >
                Reserve
              </button>
            </div>
          </div>
        </div>

        <div className="border border-slate-100 mx-4 mt-6 mb-8 hd-reserveCard"></div>
        <div className="flex items-center pl-4 hd-reserveCard">
          <div className="mr-2 mt-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              fill="currentColor"
              class="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </div>
          {selectedImage ? (
            <>
              <div className="font-semibold text-2xl">
                {selectedImage.rating}
              </div>
              <div className="pb-5 mx-1 text-4xl">.</div>
              <div className="font-semibold text-2xl">
                {selectedImage.reviews} reviews
              </div>
            </>
          ) : (
            <div>Image not found.</div>
          )}
        </div>
        <div className="flex hd-reserveCard ">
          <div className="pl-4 mt-4 border-r-2 border-gray-200 mr-2">
            <div className="font-semibold mr-14 ">Cleanliness</div>
            <div className="text-xl font-semibold m-b1">4.7</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-stars"
                viewBox="0 0 16 16"
              >
                <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
              </svg>
            </div>
          </div>

          <div className="pl-4 mt-4 border-r-2 border-gray-200 mr-2">
            <div className="font-semibold mr-14">Accuracy</div>
            <div className="text-xl font-semibold m-b2">4.9 </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-check-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
              </svg>
            </div>
          </div>
          <div className="pl-4 mt-4 border-r-2 border-gray-200 mr-2">
            <div className="font-semibold mr-14">Check-in</div>
            <div className="text-xl font-semibold m-b3">5.0</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-key"
                viewBox="0 0 16 16"
              >
                <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5" />
                <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
              </svg>
            </div>
          </div>
          <div className="pl-4 mt-4 border-r-2 border-gray-200 mr-2">
            <div className="font-semibold mr-14">Communication</div>
            <div className="text-xl font-semibold m-b4">4.9</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                class="bi bi-chat-left"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              </svg>
            </div>
          </div>
          <div className="pl-4 mt-4 border-r-2 border-gray-200 mr-2">
            <div className="font-semibold mr-14">Location</div>
            <div className="text-xl font-semibold m-b5">4.9</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                class="bi bi-map"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V1.11l-4 .8v12.98z"
                />
              </svg>
            </div>
          </div>
          <div className="pl-4 mt-4">
            <div className="font-semibold">Value</div>
            <div className="text-xl font-semibold m-b6">4.8</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                fill="currentColor"
                class="bi bi-tag"
                viewBox="0 0 16 16"
              >
                <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0" />
                <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1m0 5.586 7 7L13.586 9l-7-7H2z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="border border-slate-100 mx-4 mt-6 mb-12 dispNone"></div>

        {/* REVIEWS //////////////// */}

        {selectedImage ? (
          <>
            <div className="grid grid-cols-2 gap-4 dispNone">
              {/* Review 1 */}
              <div className="review1 p-4 ">
                <div className="flex items-center mb-1.5">
                  <div className="overflow-hidden rounded-full">
                    <img
                      className="object-cover w-12 h-12"
                      src={selectedImage.reviewpic1}
                      alt="beach"
                    />
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold">Sam</div>
                    <div className="text-gray-500 text-sm">
                      Atlanta, Georgia
                    </div>
                  </div>
                </div>
                <div className="flex items-center ">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="currentColor"
                      className="bi bi-star-fill "
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  ))}
                  <div className="pb-2 mx-1">.</div>

                  <div className="font-semibold">April 2024</div>
                  <div className="pb-2 mx-1">.</div>

                  <div className="text-gray-500">Stayed a few nights</div>
                </div>
                <div className="mb-2">{selectedImage.review1}</div>
                <div className="font-semibold underline mt-6">Show more</div>
              </div>

              {/* Repeat similar structure for the other 5 reviews */}

              {/* Review 2 */}
              <div className="review1 p-4 ">
                <div className="flex items-center mb-1.5">
                  <div className="overflow-hidden rounded-full">
                    <img
                      className="object-cover w-12 h-12"
                      src={selectedImage.reviewpic2}
                      alt="beach"
                    />
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold">Mary</div>
                    <div className="text-gray-500 text-sm">
                      New York, New York
                    </div>
                  </div>
                </div>
                <div className="flex items-center ">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="currentColor"
                      className="bi bi-star-fill "
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  ))}
                  <div className="pb-2 mx-1">.</div>

                  <div className="font-semibold ">March 2024</div>
                  <div className="pb-2 mx-1">.</div>

                  <div className="text-gray-500">Stayed a few nights</div>
                </div>
                <div>{selectedImage.review2}</div>
                <div className="font-semibold underline mt-6">Show more</div>
              </div>

              {/* Add additional reviews as needed */}
            </div>
            <div className="grid grid-cols-2 gap-4 dispNone">
              {/* Review 1 */}
              <div className="review1 p-4 ">
                <div className="flex items-center mb-1.5">
                  <div className="overflow-hidden rounded-full">
                    <img
                      className="object-cover w-12 h-12"
                      src={selectedImage.reviewpic3}
                      alt="beach"
                    />
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold">Taylor</div>
                    <div className="text-gray-500 text-sm">
                      Atlanta, Georgia
                    </div>
                  </div>
                </div>
                <div className="flex items-center ">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="currentColor"
                      className="bi bi-star-fill "
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  ))}
                  <div className="pb-2 mx-1">.</div>

                  <div className="font-semibold ">April 2024</div>
                  <div className="pb-2 mx-1">.</div>

                  <div className="text-gray-500">Stayed a few nights</div>
                </div>
                <div className="mb-2">{selectedImage.review3}</div>
                <div className="font-semibold underline mt-6">Show more</div>
              </div>

              {/* Repeat similar structure for the other 5 reviews */}

              {/* Review 2 */}
              <div className="review1 p-4 ">
                <div className="flex items-center mb-1.5">
                  <div className="overflow-hidden rounded-full">
                    <img
                      className="object-cover w-12 h-12"
                      src={selectedImage.reviewpic4}
                      alt="beach"
                    />
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold">Jessica</div>
                    <div className="text-gray-500 text-sm">
                      New York, New York
                    </div>
                  </div>
                </div>
                <div className="flex items-center ">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="currentColor"
                      className="bi bi-star-fill "
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  ))}
                  <div className="pb-2 mx-1">.</div>

                  <div className="font-semibold">March 2024</div>
                  <div className="pb-2 mx-1">.</div>

                  <div className="text-gray-500">Stayed a few nights</div>
                </div>
                <div>{selectedImage.review4}</div>
                <div className="font-semibold underline mt-6">Show more</div>
              </div>

              {/* Add additional reviews as needed */}
            </div>
            <div className="grid grid-cols-2 gap-4 dispNone">
              {/* Review 1 */}
              <div className="review1 p-4 ">
                <div className="flex items-center mb-1.5">
                  <div className="overflow-hidden rounded-full">
                    <img
                      className="object-cover w-12 h-12"
                      src={selectedImage.reviewpic5}
                      alt="beach"
                    />
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold">Alvin</div>
                    <div className="text-gray-500 text-sm">
                      Atlanta, Georgia
                    </div>
                  </div>
                </div>
                <div className="flex items-center ">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="currentColor"
                      className="bi bi-star-fill "
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  ))}
                  <div className="pb-2 mx-1">.</div>

                  <div className="font-semibold ">April 2024</div>
                  <div className="pb-2 mx-1">.</div>

                  <div className="text-gray-500">Stayed a few nights</div>
                </div>
                <div className="mb-2">{selectedImage.review5}</div>
                <div className="font-semibold underline mt-6">Show more</div>
              </div>

              {/* Repeat similar structure for the other 5 reviews */}

              {/* Review 2 */}
              <div className="review1 p-4 ">
                <div className="flex items-center mb-1.5">
                  <div className="overflow-hidden rounded-full">
                    <img
                      className="object-cover w-12 h-12"
                      src={selectedImage.reviewpic6}
                      alt="beach"
                    />
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold">Thomas</div>
                    <div className="text-gray-500 text-sm">
                      New York, New York
                    </div>
                  </div>
                </div>
                <div className="flex items-center ">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="currentColor"
                      className="bi bi-star-fill "
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  ))}
                  <div className="pb-2 mx-1">.</div>

                  <div className="font-semibold ">March 2024</div>
                  <div className="pb-2 mx-1">.</div>

                  <div className="text-gray-500">Stayed a few nights</div>
                </div>
                <div>{selectedImage.review6}</div>
                <div className="font-semibold underline mt-6">Show more</div>
              </div>

              {/* Add additional reviews as needed */}
            </div>
          </>
        ) : (
          <div>Image not found.</div>
        )}

        <button className="border font-semibold border-black rounded-md mt-6 mb-6 ml-4 py-3 px-6">
          Show all 134 reviews
        </button>

        <div className="border border-slate-100 mx-4 mt-6 mb-12"></div>

        {/* Neighborhood highlights  */}
        <div className="pl-4">
          <div className="text-2xl font-semibold mb-4">
            Neighborhood highlights
          </div>
          {selectedImage ? (
            <>
              <div className="pd-right3">{selectedImage.highlights}</div>
            </>
          ) : (
            <div>Image not found.</div>
          )}

          <div className="font-semibold underline mt-4">Show more</div>

          <div className="border border-slate-100 mt-6 mb-12 mr-4"></div>
        </div>

        {/* Meet your host */}
        <div className="pl-4 mt-12 mb-6">
          <div className="text-2xl font-semibold mb-6">Meet your Host</div>
          <div className="host-container rounded-2xl pd-right3">
            <div className="flex flex-sm">
              <div className="">
                <div className="bg-white shadow-xl flex items-center rounded-3xl p-6 pl-smm max-w-96">
                  <div className="ml-8 mr-20 flex flex-col items-center">
                    {selectedImage ? (
                      <>
                        <div className="overflow-hidden rounded-full">
                          <img
                            className="object-cover w-20 h-20"
                            src={selectedImage.profilePic}
                            alt="beach"
                          />
                        </div>
                      </>
                    ) : (
                      <div>Image not found.</div>
                    )}

                    <div className="text-3xl font-bold">Daniel</div>
                    <div className="flex items-center">
                      <div className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          fill="currentColor"
                          class="bi bi-trophy-fill mr-1"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935" />
                        </svg>
                      </div>
                      <div>Superhost</div>
                    </div>
                  </div>
                  <div className="my-6">
                    <div className="text-2xl font-bold">186</div>
                    <div className="text-sm">reviews</div>
                    <div className="border border-slate-100  my-2"></div>
                    <div className="flex items-center">
                      <div className="text-2xl font-bold">4.8</div>
                      <div className="mr-1 ml-1 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          fill="currentColor"
                          class="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </div>
                    </div>

                    <div className="text-sm">rating</div>
                    <div className="border border-slate-100  mt-6 my-2"></div>

                    <div className="text-2xl font-bold">5</div>
                    <div className="text-sm">Years hosting</div>
                  </div>
                </div>
                <div className="flex mt-8 mb-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      class="bi bi-lightbulb mr-4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1" />
                    </svg>
                  </div>
                  <div>Born in the 90's</div>
                </div>
                <div className="flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      class="bi bi-mortarboard mr-4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z" />
                      <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z" />
                    </svg>
                  </div>
                  <div>Where I went to school: Kennesaw State Unitversity</div>
                </div>
                <div className="font-semibold underline mt-6">Show more</div>
              </div>

              <div className="ml-20 ms-small">
                <div className="text-xl font-semibold mb-2">
                  Daniel is a Superhost
                </div>
                <div className="sl-2">
                  Superhosts are experienced, highly rated hosts who are
                  commited to providing great stay for guests
                </div>
                <div className="text-xl font-semibold mb-2 mt-8">
                  Host details
                </div>
                <div>Response rate: 85%</div>
                <div className="mb-12">Responds within an hour</div>
                <button className="py-4 px-6 bg-black text-white font-semibold rounded-md">
                  Message Host
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* /////////////////////// */}
        {/* Things to know */}
        <div className="border border-slate-100 mx-4 mt-6 mb-12"></div>

        <div className="text-2xl font-semibold pl-4 mt-12 mb-6">
          Things to know
        </div>

        <div className="pl-4 flex justify-between pb-8 changeDirection">
          <div>
            <div className="font-semibold mb-2">House rules</div>
            <div className="mb-2">Check in after 4:00 PM</div>
            <div className="mb-2">Check out before 10:00 AM</div>
            <div className="mb-4">8 guests maximum</div>
            <div className="font-semibold underline pb-8">Show more</div>
          </div>

          <div>
            <div className="font-semibold mb-2">Safety & property</div>
            <div className="mb-2">Carbon monoxide alarm not reported</div>
            <div className="mb-2">Smoke alarm</div>
            <div className="mb-4">Must climb stairs</div>
            <div className="mb-2 font-semibold underline pb-8">Show more</div>
          </div>

          <div>
            <div className="font-semibold mb-2">Cancellation policy</div>
            <div className="mb-2">Free cancellation before Aug 3.</div>
            <div className="mb-4">
              Review the Host's full cancellation policy
            </div>

            <div className="font-semibold underline">Show more</div>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
}

export default Listing;
