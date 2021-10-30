import axios from "axios";
// console.log(
//   process.env.REACT_APP_API_BASE_URL,
//   "process.env.REACT_APP_API_BASE_URL"
// );
const getAxiosIns = (token: string) =>
  axios.create({
    baseURL: process.env.REACT_APP_YT_API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

export default getAxiosIns;
