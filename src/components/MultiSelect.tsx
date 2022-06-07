import { FC, SyntheticEvent, useCallback, useState } from "react";

type Option = {
  id: string;
  label?: string;
};

type MultiSelectProps = {
  options: Option[];
  value?: string[];
  max: number;
  onChange?: (value: string[]) => void;
};

export const MultiSelect: FC<MultiSelectProps> = ({
  options,
  value = [],
  onChange,
  ...props
}) => {
  const [values, setValues] = useState(value);
  const [count, setCount] = useState(0);
  const handleChange = useCallback(
    ({ currentTarget }: SyntheticEvent<HTMLInputElement>) => {
      const checked = currentTarget.checked;
      const value = currentTarget.value;
      let newValues = [...values];
      if (checked) {
        if (count < props.max) {
          let newCount = count + 1;
          setCount(newCount);
          newValues.push(value);
          console.log("is checked ? ", count);
        }
      } else {
        let newCount = count - 1;
        setCount(newCount);
        newValues = newValues.filter((v) => v !== value);
        console.log("is inchecked");
      }
      console.log("handle change", value, checked, newValues);
      setValues(newValues);
      //@ts-ignore
      onChange(newValues);
    },
    [values]
  );
  // console.log('multiselect props ?', values, '1' in values);
  return (
    <div>
      {options.map((option) => {
        return (
          // <View className="form-check">
          //   <label key={option.id}>
          //     <input className="with-border bg-transparent checked:border-blue-600 placeholder-gray-300 rounded-full border-white" onChange={handleChange} checked={values.includes(option.id)} type="checkbox" value={option.id} />
          //     {option.label || option.id}
          //   </label>
          // </View>
          <div className="form-check" key={option.id}>
            <input
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-full bg-white checked:bg-[#5470a6] checked:border-[#5470a6] active:bg-[#5470a6] active:border-[#5470a6] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer focus:outline-0 focus:border-0 focus:ring-0"
              onChange={handleChange}
              checked={values.includes(option.id)}
              type="checkbox"
              value={option.id}
            />
            <label
              className="form-check-label inline-block text-sm text-gray-800"
              htmlFor="flexCheckDefault"
            >
              {option.label}
            </label>
          </div>
        );
      })}
    </div>
  );
};
{
  /* <div class="form-check">
      <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault">
      <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
        Default checkbox
      </label>
    </div> */
}
