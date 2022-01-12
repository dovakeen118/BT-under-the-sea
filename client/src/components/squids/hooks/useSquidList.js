import { useQuery } from "react-query";

import { ApiClient } from "../../../backend/ApiClient";

export const useSquidList = () => {
  const apiClient = new ApiClient();

  return useQuery("squids", () => apiClient.get("/squids").then((resp) => resp.data), {
    staleTime: Infinity,
  });
};
