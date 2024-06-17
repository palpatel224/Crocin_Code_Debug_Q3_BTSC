import axios from "axios";
import { BACKEND_URL } from "../config";

export default function useBlogs() {
  const createUser = async (name: string, job: string) => {
    const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`);
    return response.data.blogs;
  };

  return { createUser };
}
