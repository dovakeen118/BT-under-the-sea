import { useQuery, UseQueryResult } from "react-query";

import { ApiClient } from "../../../backend/ApiClient";
import { SquidShape } from "../../../types/SquidShape";

interface SquidData {
  pageCount: number;
  squids: SquidShape[];
}

export const useSquidList = ({
  pageIndex,
  itemsPerPage,
}: {
  pageIndex: number;
  itemsPerPage: number;
}): UseQueryResult<SquidData> =>
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
