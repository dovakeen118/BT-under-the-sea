import React, { FC } from "react";

import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";

import { usePostSquid } from "./hooks/usePostSquid";
import { useSquidPowers } from "./hooks/useSquidPowers";

import "../../style/squids/squidForm.pcss";

interface SquidFormValues {
  name: string;
  specialPower: string;
  species: string;
  victories: number;
}

export const SquidForm: FC = () => {
  const {
    handleSubmit,
    register,
    reset: hookReset,
    formState: { errors },
  } = useForm<SquidFormValues>({
    defaultValues: {
      name: "",
      specialPower: undefined,
      species: "",
      victories: 0,
    },
  });

  const { data: fetchedPowers } = useSquidPowers();
  const specialPowers = fetchedPowers?.squidPowers || [];

  const { mutate: createSquid } = usePostSquid();
  const queryClient = useQueryClient();

  const specialPowerRadioOptions = [
    ...specialPowers.map((power) => (
      <label key={power} className="squid-form__radio-label" htmlFor={power}>
        <input
          className="squid-form__radio-btn"
          type="radio"
          id={power}
          name="specialPower"
          value={power}
          {...register("specialPower")}
        />
        <span className="squid-form__radio-text">{power}</span>
      </label>
    )),
    <label key="none" className="squid-form__radio-label" htmlFor="none">
      <input
        className="squid-form__radio-btn"
        type="radio"
        id="none"
        name="specialPower"
        value={undefined}
        {...register("specialPower")}
      />
      <span className="squid-form__radio-text">none</span>
    </label>,
  ];

  const handleReset = (): void => {
    hookReset({
      name: "",
      specialPower: undefined,
      species: "",
      victories: 0,
    });
  };

  const onSubmit = (data: SquidFormValues): void => {
    createSquid(data, {
      onSuccess: () => {
        queryClient.invalidateQueries("squids");
        handleReset();
      },
      onError: (error) => {
        console.log("Create squid error:", error);
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3 className="squid-form__heading">Add a Squid to the Sea</h3>
      <div className="squid-form">
        <div>
          <label className="squid-form__label" htmlFor="name">
            <span className="squid-form__label-text">Name:</span>
            <input
              className="squid-form__input"
              id="name"
              type="text"
              {...register("name", { required: "A Name is required." })}
            />
            <p className="squid-form__error">
              <ErrorMessage errors={errors} name="name" />
            </p>
          </label>

          <label className="squid-form__label" htmlFor="species">
            <span className="squid-form__label-text">Species:</span>
            <input
              className="squid-form__input"
              id="species"
              type="text"
              {...register("species", { required: "A Species is required." })}
            />
            <p className="squid-form__error">
              <ErrorMessage errors={errors} name="species" />
            </p>
          </label>

          <label className="squid-form__label" htmlFor="victories">
            <span className="squid-form__label-text">Victories:</span>
            <input
              className="squid-form__input"
              id="victories"
              type="number"
              min={0}
              {...register("victories", { required: "Victories cannot be less than 0." })}
            />
            <p className="squid-form__error">
              <ErrorMessage errors={errors} name="victories" />
            </p>
          </label>
        </div>

        <div className="squid-form__radio-group">
          <p>Special Power?</p>
          {specialPowerRadioOptions}
        </div>
      </div>
      <div className="squid-form__btn-group">
        <button className="btn" type="button" onClick={handleReset}>
          Clear
        </button>
        <input className="btn" type="submit" />
      </div>
    </form>
  );
};
