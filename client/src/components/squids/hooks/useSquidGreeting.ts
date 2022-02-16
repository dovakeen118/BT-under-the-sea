import { compareAsc, parseISO } from "date-fns";

import { SquidShape } from "../../../types/SquidShape";

export const useGreetSquid = (squid: SquidShape): string => {
  let greeting = "";
  if (squid) {
    const fullDate = new Date();
    const date = fullDate.setHours(0, 0, 0, 0);
    const parsedDate = parseISO(squid?.birthday);
    if (compareAsc(date, parsedDate) === 0) {
      greeting = `Happy Birthday, ${squid.name}!`;
    } else {
      greeting = `Meet ${squid?.name}`;
    }
  }

  return greeting;
};
