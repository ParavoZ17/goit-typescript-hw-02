import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";

export default async function fetchFotos  (query="", page){
    const response = await axios.get("",
        {
            params: {
              query,
              page,
              per_page: 12,
            },
            headers: {
              Authorization: "Client-ID eLtJaO_lZuuaIu9pFdsCIJaDK3Vc9K-5kWUNLMnq7CE",
            },
          });
    
    return response.data.results;
}

// Client-ID eLtJaO_lZuuaIu9pFdsCIJaDK3Vc9K-5kWUNLMnq7CE - Дениса

// Client-ID 1hKjSuHfK0gK4Cv3s-OcPNi12Ahuv8eNvR63_bm74aE - мой