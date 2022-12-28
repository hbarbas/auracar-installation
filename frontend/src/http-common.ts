import axios from "axios";

export default axios.create( {
  baseURL : process.env.VUE_APP_BACKEND_URL + "/api/v1",
} );
