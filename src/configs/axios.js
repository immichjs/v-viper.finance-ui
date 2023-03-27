import axios from "axios";

axios.defaults.baseURL = process.env.URL_API || "http://localhost:3000";

export { axios };
