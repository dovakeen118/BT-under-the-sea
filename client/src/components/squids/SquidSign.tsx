import React, { FC } from "react";

import { format, getDate, parseISO } from "date-fns";
import signTeller from "sign-teller";

import { SignShape } from "../../types/SignShape";

export const SquidSign: FC<{ birthday: string }> = ({ birthday }) => {
  const squidSign = (birthday: string): SignShape => {
    const parsedDate = parseISO(birthday);
    const day = getDate(parsedDate);
    const month = format(parsedDate, "MM");
    const signDate = { day, month };

    const signDetails = signTeller(signDate, "tropical");
    return signDetails;
  };

  const squidZodiac = squidSign(birthday);

  const signFacts = squidZodiac?.facts.map((fact) => (
    <li key={fact} className="squid__text fact-list">
      {fact}
    </li>
  ));

  return (
    <>
      <p className="squid-info__header">
        Sign:
        <span className="squid-info__text"> {squidZodiac.sign} </span>
        <span className="squid-info__text-italic">
          ({squidZodiac.from} - {squidZodiac.to})
        </span>
      </p>

      <p className="squid-info__header">
        Element:
        <span className="squid-info__text"> {squidZodiac.element} </span>
      </p>

      <p className="squid-info__header">
        Lucky Gem:
        <span className="squid-info__text"> {squidZodiac.luckyGem} </span>
      </p>

      <p className="squid-info__header">Facts: {signFacts}</p>
    </>
  );
};
