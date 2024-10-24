// const axios = require('axios');
import axios from 'axios';
export const postCall = async (params) => {
    try {
      // Check if the apiEndpoint is defined
      if (!params?.apiEndpoint) {
        throw new Error("API Endpoint is undefined or missing.");
      }
  
      console.log("API Endpoint:", params?.apiEndpoint); // Debugging log
      console.log("Data being sent:", params?.data); // Debugging log
  
      // Perform the post request
      const response = await axios.post(params.apiEndpoint, params.data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      return response;
    } catch (error) {
      console.error("Error inside postCall", error);
      throw error;
    }
  };
  
export const getCall = async(params) => {
    try {
      console.log("///////",params);
        const response = await axios.get(params?.apiEndpoint, {params : params?.data});
        console.log("Response in getCall",response);
        return response?.data;
    } catch (error) {
        console.log("Error inside getCall",error);
        throw error;
    }
};
