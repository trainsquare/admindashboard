const endpoint = `${process.env.API_PREFIX}/api/auth`;
import axios from "axios";
const login = (payload) => {
    const config = {
      method: "POST",
      url: `${endpoint}/login`,
      data: payload,
      withCredentials: true,
      crossdomain: true,
      headers: {
        "Content-Type": "application/json",
        SameSite: "None",
        Secure: true,
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
      },
    };
    return axios(config);
  };

  const registerAdmin = (payload) => {
    const config = {
      method: "POST",
      url: `${endpoint}/login`,
      data: payload,
      withCredentials: true,
      crossdomain: true,
      headers: {
        "Content-Type": "application/json",
        SameSite: "None",
        Secure: true,
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
      },
    };
    return axios(config);
  };

  const promoteToAdmin = (payload) => {
    const config = {
      method: "POST",
      url: `${endpoint}/addtoAdmin`,
      data: payload,
      withCredentials: true,
      crossdomain: true,
      headers: {
        "Content-Type": "application/json",
        SameSite: "None",
        Secure: true,
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
      },
    };
    return axios(config);
  };