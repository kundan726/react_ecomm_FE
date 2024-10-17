import axios from "axios";
import ENDPOINTS from "../../api/endpoints";
import authToast from "../../toast/authToast";
const loginService = async (formData) => {
    try {
        console.log("formData",formData)
        const loginApiResponse = await axios.post(ENDPOINTS?.dev?.LOGIN_MODULE?.LOGIN,formData);
        console.log("loginApiResponse",loginApiResponse);
        authToast(loginApiResponse);
        return loginApiResponse;
    } catch (error) {
        console.log("Error in loginService",error)
    }
};

export default loginService;
