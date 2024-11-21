import axios from "axios";

const httpClient = axios.create({
    baseURL: "https://localhost:7290",
    timeout: 3000
});
httpClient.defaults.headers.post['Content-Type'] = 'application/json';
export default httpClient