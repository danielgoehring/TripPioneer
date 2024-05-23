import axios from "axios";

export const fetchImages = async () => {
  try {
    const response = await axios.get("http://localhost:5000/images");
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};

//reference

// useEffect(() => {
//   const fetchImages = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/images");
//       console.log(response.data);
//       setImages(response.data);
//     } catch (error) {
//       console.error("Error fetching images:", error);
//     }
//   };

//   fetchImages();
// }, []);
