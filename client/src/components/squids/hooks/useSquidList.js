import { useQuery } from "react-query";

import { ApiClient } from "../../../backend/ApiClient";

export const useSquidList = ({ pageIndex, itemsPerPage }) =>
  useQuery(
    ["squids", { pageIndex, itemsPerPage }],
    () =>
      ApiClient.get("/squids", {
        params: {
          limit: itemsPerPage,
          offset: pageIndex * itemsPerPage,
        },
      }).then((resp) => resp.data),
    {
      staleTime: Infinity,
    }
  );
