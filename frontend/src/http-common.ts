import axios from "axios";

export default axios.create( {
  baseURL : "http://localhost:8555/api/v1",
} );
