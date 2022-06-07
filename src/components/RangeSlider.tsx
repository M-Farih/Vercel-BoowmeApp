import { ChangeEvent, FC, useEffect, useState } from "react";
import classnames from "classnames";
import { MultiRangeSliderProps } from "components/types";
import { View } from "./View";

export const RangeSlider: FC<MultiRangeSliderProps> = ({
  min,
  max,
  onChange,
}) => {
  const [minVal, setMinVal] = useState(0);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal });
  }, [minVal, onChange]);

  return (
    <View className="flex justify-center">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.min(+event.target.value);
          setMinVal(value);
          event.target.value = value.toString();
        }}
        className={classnames(
          "thumb pointer-events-none absolute h-0 w-80 outline-none z-30"
        )}
      />

      <View className="slider relative w-80">
        <View className="slider__track rounded-sm h-1 bg-gray-400 w-full z-10"></View>
        <View className="slider__left-value text-c4 text-md mt-3 text-center">
          {minVal}
        </View>
      </View>
    </View>
  );
};
