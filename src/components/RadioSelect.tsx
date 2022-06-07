import { FC, SyntheticEvent, useCallback } from "react";

type Option = {
  id: string;
  label?: string;
  name?: string;
};

type RadioSelectProps = {
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
};

export const RadioSelect: FC<RadioSelectProps> = ({
  options,
  value,
  onChange,
}) => {
  const handleChange = useCallback(
    ({ currentTarget }: SyntheticEvent<HTMLInputElement>) => {
      const value = currentTarget.id;

      console.log("handle change ->", currentTarget.id); //@ts-ignore
      onChange(value);
    },
    [value]
  );
  // console.log('multiselect props ?', values, '1' in values);
  return (
    <div>
      {options.map((option) => {
        return (
          <div className="form-check" key={option.id}>
            <input
              onChange={handleChange}
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-[#5470a6] checked:border-[#5470a6] active:bg-[#5470a6] active:border-[#5470a6] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer focus:outline-0 focus:border-0 focus:ring-0"
              type="radio"
              name={option.name}
              id={option.id}
            />
            <label
              className="form-check-label inline-block text-[10px] text-gray-800"
              htmlFor="flexRadioDefault1"
            >
              {option.label}
            </label>
          </div>
        );
      })}
    </div>
  );
};
