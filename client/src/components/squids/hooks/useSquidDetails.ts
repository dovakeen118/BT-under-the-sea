import { useQuery, UseQueryResult } from "react-query";

import { ApiClient } from "../../../backend/ApiClient";
import { SquidShape } from "../../../types/SquidShape";

export const useSquidDetails = (id: string): UseQueryResult<SquidShape> =>
  useQuery(
    ["squidDetails", id],
    () => ApiClient.get(`squids/${id}`).then((resp) => resp.data.squid),
    {
      staleTime: Infinity,
    }
  );
