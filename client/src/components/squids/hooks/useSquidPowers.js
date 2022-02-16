import { useQuery } from "react-query";

import { ApiClient } from "../../../backend/ApiClient";

export const useSquidPowers = () =>
  useQuery("squidPowers", () => ApiClient.get("/squids/special-powers").then((resp) => resp.data), {
    staleTime: Infinity,
  });
