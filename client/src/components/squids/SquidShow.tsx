import React, { FC } from "react";

import { format, parseISO } from "date-fns";
import { useParams } from "react-router-dom";

import { useSquidDetails } from "./hooks/useSquidDetails";
import { useGreetSquid } from "./hooks/useSquidGreeting";
import { SquidSign } from "./SquidSign";

import "../../style/squids/SquidShow.pcss";

export const SquidShow: FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data: squid, isLoading, isSuccess } = useSquidDetails(id);

  const greetingMessage = useGreetSquid(squid);

  if (isLoading) {
    return (
      <h3 className="squid-show squid__heading">One moment while the squid is swimming over...</h3>
    );
  }

  if (isSuccess && squid) {
    return (
      <div className="squid-show">
        <h3 className="squid__heading">{greetingMessage}</h3>

        <div className="squid-info">
          <div className="squid-details">
            <p className="squid-info__header">
              Birthday:
              <span className="squid-info__text">
                {format(parseISO(squid.birthday), " MMMM dd, yyyy ")}
              </span>
            </p>

            <p className="squid-info__header">
              Species:
              <span className="squid-info__text"> {squid.species} </span>
            </p>

            <p className="squid-info__header">
              Victories:
              <span className="squid-info__text"> {squid.victories} </span>
            </p>

            <p className="squid-info__header">
              Special Power:
              <span className="squid-info__text"> {squid.specialPower || "N/A"} </span>
            </p>
          </div>

          <div className="squid-sign">
            <SquidSign birthday={squid.birthday} />
          </div>
        </div>
      </div>
    );
  }

  return <h3 className="squid-show squid__heading">Oops, we couldn't locate that squid</h3>;
};
