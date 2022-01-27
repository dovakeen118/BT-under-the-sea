import React from "react";

import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";

import { usePostSquid } from "./hooks/usePostSquid";

import "../../style/squids/squidForm.pcss";

export const SquidForm = ({ specialPowerOptions }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      species: "",
      victories: 0,
    },
  });

  const { mutate: createSquid } = usePostSquid();

  const specialPowers = specialPowerOptions.map((power) => (
    <label key={power} htmlFor={power}>
      {power}
      <input type="checkbox" id={power} name="specialPowers" value={power} {...register} />
    </label>
  ));

  const onSubmit = (data) => {
    createSquid(data, {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (error) => {
        console.log("create error:", error);
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="squidForm-textInput">
        <label htmlFor="name">
          Name:
          <input id="name" {...register("name", { required: "A Name is required." })} />
          <p>
            <ErrorMessage errors={errors} name="name" />
          </p>
        </label>

        <label htmlFor="species">
          Species:
          <input id="species" {...register("species", { required: "A Species is required." })} />
          <p>
            <ErrorMessage errors={errors} name="species" />
          </p>
        </label>
      </div>

      <div className="input">
        <label htmlFor="victories">
          Victories:
          <input
            id="victories"
            type="number"
            min={0}
            {...register("victories", { required: "Victories must be at least 0." })}
          />
          <p>
            <ErrorMessage errors={errors} name="victories" />
          </p>
        </label>
      </div>

      <div className="input">{specialPowers}</div>

      <input type="submit" />
    </form>
  );
};
