import axios from "axios";
import ENDPOINTS from "../../api/endpoints";
const signUpService = async (formData) => {
  try {
    console.log("formData", formData);
    const response = await axios.post(ENDPOINTS?.dev?.["LOGIN_MODULE"].SIGN_UP, formData); // Pass formData instead of undefined `data`
    console.log("response", response);
    return response;
  } catch (error) {
    console.log("Error in signUpService", error);
    throw error;
  }
};

export default signUpService;
