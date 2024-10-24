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

const deleteToast = async (response) => {
  console.log("resposne",response);
  if(response?.data?.msg === 'Product Deleted Successfully'){
    console.log("1")
    toast.success('Product Deleted Successfully',{
      duration: 5000,
      position: 'top-left',
      style: {
        background: '#4ade80',
        color: '#fff',
      }
    })
  }
}
export {authToast , deleteToast};
