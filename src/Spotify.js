import axios from "axios";

const authEndPoint = "https://accounts.spotify.com/authorize?";
const clientId = "9d3ede0fe3da42e2b22229c794934654";
const redirectUri = "http://localhost:3000/";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndPoint = `${authEndPoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}
&response_type=token&show_dialog=true`;

const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/"
});

export const setClientToken = (token) =>{
   apiClient.interceptors.request.use(async function(config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
   });
};

export default apiClient;