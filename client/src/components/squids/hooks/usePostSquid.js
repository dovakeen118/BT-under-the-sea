import { useMutation } from "react-query";

import { ApiClient } from "../../../backend/ApiClient";

export const usePostSquid = () =>
  useMutation((data) =>
    ApiClient.post("/squids", {
      squid: data,
    }).then((resp) => resp.data)
  );
