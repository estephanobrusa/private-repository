import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.spotify.com/v1",
});

let accessToken = "";
let tokenExpiry = 0;

instance.interceptors.request.use(
  async (config) => {
    accessToken = localStorage.getItem("token") || "";
    tokenExpiry = parseInt(localStorage.getItem("tokenExpiry") || "0");
    if (!accessToken || Date.now() / 1000 >= tokenExpiry) {
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
      `grant_type=client_credentials&client_id=${
        import.meta.env.VITE_APP_SPOTIFY_API_CLIENT_ID
      }&client_secret=${import.meta.env.VITE_APP_SPOTIFY_API_CLIENT_SECRET}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    accessToken = response.data.access_token;
    localStorage.setItem("token", accessToken);
    localStorage.setItem(
      "tokenExpiry",
      Date.now() / 1000 + response.data.expires_in
    );
  } catch (error) {
    console.error("Error fetching access token:", error);
  }
};

export default instance;
