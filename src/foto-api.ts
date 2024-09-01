import axios from "axios";
import { Image } from "./components/App/App.type";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";

interface FetchFotosResponse {
  results: Image[];
}

export default async function fetchFotos(query: string, page: number): Promise<FetchFotosResponse> {
  const response = await axios.get<FetchFotosResponse>("", {
    params: {
      query,
      page,
      per_page: 12,
    },
    headers: {
      Authorization: "Client-ID eLtJaO_lZuuaIu9pFdsCIJaDK3Vc9K-5kWUNLMnq7CE",
    },
  });

  return response.data;
}
