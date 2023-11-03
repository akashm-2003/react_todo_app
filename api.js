import axios from "./axios";

export const applyApi = async (url, method, data) => {

  let headersList = {
    "Accept": "*/*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  };

  let bodyContent = JSON.stringify(data);

  let reqOptions = {
    url: url,
    method: method,
    headers: headersList,
    data: bodyContent,
  };
  try {
    let response = await axios.request(reqOptions);
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    console.log(err);
    throw new Error(err.response.data.message);
  }
};
