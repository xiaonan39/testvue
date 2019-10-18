import Axios from "axios";

Axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);

//抛出
export default Axios;
