import Axios from "axios";

function setHeader(token) {
  if (token) {
    Axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete Axios.defaults.headers.common["Authorization"];
  }
}
export default setHeader;
