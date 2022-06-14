import React, { FC, useState } from "react";
import type { TooltipProps } from "components/types";
import { View } from "components/View";

export const Tooltip: FC<TooltipProps> = ({
  title,
  description,
  tooltip,
  onClick,
}) => {
  const [tooltipStatus, setTooltipStatus] = useState(0);
  return (
    <View
      className="flex-col absolute top-0	 right-0 md:flex-row flex items-center md:justify-center "
      onClick={onClick}
    >
      {/*Code Block for gray tooltip starts*/}
      <View
        className="relative"
        onMouseEnter={() => setTooltipStatus(3)}
        onMouseLeave={() => setTooltipStatus(0)}
      >
        <View className="mr-2 cursor-pointer">
          <svg
            aria-haspopup="true"
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-info-circle"
            width={18}
            height={18}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#fff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx={12} cy={12} r={9} />
            <line x1={12} y1={8} x2="12.01" y2={8} />
            <polyline points="11 12 12 12 12 16 13 16" />
          </svg>
        </View>
        {tooltipStatus == 3 && tooltip === true && (
          <View
            role="tooltip"
            className="z-20 w-64 -mt-32 -ml-12 fixed transition duration-150 ease-in-out left-0 shadow-lg bg-gray-800 p-4 rounded"
          >
            <p className="text-sm font-bold text-white pb-1">{title}</p>
            <p className="text-xs leading-4 text-white pb-3">{description}</p>
          </View>
        )}
      </View>
      {/*Code Block for gray tooltip ends*/}
    </View>
  );
};
