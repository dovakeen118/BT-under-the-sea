import { useMutation, UseMutationResult } from "react-query";

import { ApiClient } from "../../../backend/ApiClient";
import { SquidShape } from "../../../types/SquidShape";

export const usePostSquid = (): UseMutationResult<SquidShape, Error> =>
  useMutation((data) =>
    ApiClient.post("/squids", {
      squid: data,
    }).then((resp) => resp.data)
  );
