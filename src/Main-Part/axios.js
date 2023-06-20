import axios from "axios";
import { baseUrl } from "./constantUrl";

const instance = axios.create({
  baseURL: baseUrl,
});

export default instance;
