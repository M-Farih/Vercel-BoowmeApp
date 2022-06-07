import { Switch } from "@headlessui/react";
import { FC, useState } from "react";
import { SwitchProps } from "components/types";

export const SwitchInput: FC<SwitchProps> = (props) => {
  const [enabled, setEnabled] = useState(props.defaultvalue);

  return (
    <Switch
      onClick={props.onClick}
      //@ts-ignore
      checked={enabled}
      onChange={() => (props.disabled ? null : setEnabled(!enabled))}
      className={`${
        props.disabled
          ? "bg-gray-200 relative inline-flex items-center h-6 rounded-full w-11 cursor-default"
          : "bg-gray-200 relative inline-flex items-center h-6 rounded-full w-11"
      }`}
    >
      <span
        className={`${
          enabled ? "translate-x-6 bg-green-500" : "translate-x-1 bg-gray-400"
        } inline-block w-4 h-4 transform rounded-full`}
      />
    </Switch>
  );
};
