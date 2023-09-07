import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.spotify.com/v1",
});

let accessToken = "";

instance.interceptors.request.use(
  async (config) => {
    if (!accessToken) {
      await getAccessToken();
    }
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const getAccessToken = async () => {
  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      `grant_type=client_credentials&client_id=${"f5627d609b3147968c88bb425e188f54"}&client_secret=${"f10b449c633746a7ae55147b0ab79990"}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    accessToken = response.data.access_token;
    localStorage.setItem("token", accessToken);
  } catch (error) {
    console.error("Error fetching access token:", error);
  }
};

export default instance;
