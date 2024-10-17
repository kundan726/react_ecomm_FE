import { toast } from 'react-hot-toast';

const authToast = (response) => {
  console.log("response in authToast", response);

  if (response?.data?.msg === 'Login successful') {
    toast.success('Login Successful', {
      duration: 3000,
      position: 'top-center',
      style: {
        background: '#4ade80',
        color: '#fff',
      }
    });
  } else {
    toast.error("Invalid Credential", {
      duration: 3000,
      position: "top-right",
      style: {
        background: '#f87171',
        color: '#fff',
      },
    });
  }
};

export default authToast;
