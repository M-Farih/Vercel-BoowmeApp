import React from "react";
import { useForm } from "react-hook-form";

export function CheckboxList() {
  const {
    register,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const atLeastOne = () =>
    getValues("test").length ? true : "Please tell me if this is too hard.";

  console.log(errors);

  return (
    <form className="p-40">
      {[1, 2, 3].map((value) => (
        <input
          key={value}
          type="checkbox"
          value={value}
          {...register("test", {
            validate: atLeastOne,
          })}
        />
      ))}
    </form>
  );
}
