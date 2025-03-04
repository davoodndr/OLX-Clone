import axios from "axios";

export const uploadImage = async (file:File) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "olx_image");  
    formData.append("cloud_name", process.env.CLOUD_NAME as string);   

    // Send the image data to Cloudinary
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/image/upload`,
      formData,
      {
        headers: {
          "Content-Type": 'multipart/form-data'
        }
      }

    );

    return response.data.url;  // Return the image URL from Cloudinary response

  } catch (error:any) {
    console.error("Error uploading image: ", error.message);
    throw new Error(error.message);
  }
};