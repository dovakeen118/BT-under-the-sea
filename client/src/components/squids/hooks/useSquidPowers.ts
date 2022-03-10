import { useQuery, UseQueryResult } from "react-query";

import { ApiClient } from "../../../backend/ApiClient";

interface SquidPowers {
  squidPowers: string[];
}

export const useSquidPowers = (): UseQueryResult<SquidPowers> =>
  useQuery("squidPowers", () => ApiClient.get("/squids/special-powers").then((resp) => resp.data), {
    staleTime: Infinity,
  });
