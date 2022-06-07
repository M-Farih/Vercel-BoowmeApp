import cn from "classnames";
import type { ButtonProps } from "components/types";
import type { FC } from "react";

const calculClass = ({ className, variant, full }: ButtonProps) => {
  return cn({
    // "pl-10 pr-10 h-12 relative border-t border-l items-center justify-center inline-flex bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm text-white text-ms font-light rounded-full":
    //   variant === "primary",
    // "pl-10 pr-10 h-10 btn-primary btn-noBorder relative border border-c2 items-center justify-center inline-flex bg-c6 text-c2 text-ms font-light rounded-full bg-gradient-to-l hover:text-white hover:from-c2 hover:to-c4 shadow-md":
    //   variant === "primary",
    "btn shadow-md rounded-full before:rounded-full": variant === "primary",
    "btn btn-rounded shadow-md pl-10 pr-10 h-10 rounded-xl":
      variant === "primary-rounded",
    "pl-10 pr-10 h-10 content relative items-center justify-center inline-flex bg-c6 text-c4 text-md font-light rounded-full bg-gradient-to-l hover:text-white hover:from-c2 hover:to-c4 shadow-md":
      variant === "secondary",
    "pl-10 pr-10 h-10 content relative bg-c6 items-center justify-center inline-flex text-ms font-light rounded-xl border border-transparent hover:border-c5 hover:text-c4 shadow-md":
      variant === "Tertiary",
    "pl-10 pr-10 h-10 content relative items-center justify-center inline-flex text-md font-light rounded-full cursor-not-allowed":
      variant === "disabled",
    "h-8 w-8 content relative border-2 border-white items-center justify-center inline-flex bg-c6 text-c2 text-ms font-light rounded-full bg-gradient-to-l hover:text-white hover:from-c2 hover:to-c4":
      variant === "circle",
    "w-full": full,
    "pl-10 pr-10 h-10 content relative items-center justify-center inline-flex text-white text-md font-light rounded-full bg-[#5470a6] hover:text-white  shadow-md":
      variant === "blue",
    className,
  });
};

export const Button: FC<ButtonProps> = ({
  label,
  variant = "primary",
  children = label,
  alignSelf,
  width,
  textSize,
  icon,
  ...props
}) => {
  return (
    <button
      className={
        calculClass({ ...props, variant }) +
        ` ${width}` +
        ` ${alignSelf}` +
        ` ${textSize}`
      }
      {...props}
      //@ts-ignore
      data={label}
    >
      {icon}
      {variant !== "primary" && children}
    </button>
    // <button
    //   className={
    //     calculClass({ ...props, variant }) +
    //     ` ${width}` +
    //     ` ${alignSelf}` +
    //     ` ${textSize}`
    //   }
    //   {...props}
    // >
    //   <span className="relative px-6 py-3 border-2 border-c5 transition-all ease-out bg-white rounded-xl group-hover:bg-opacity-0 duration-400 hover:bg-gradient-to-r hover:from-c2 hover:to-c4 hover:text-white hover:border-none">
    //     <span className="bg-clip-text text-transparent bg-gradient-to-r from-c2 to-c4">
    //       {icon}
    //       {children}
    //     </span>
    //   </span>
    // </button>

    // <button className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
    //   <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
    //   <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
    //     <span {...props} className="relative text-white">
    //       Button Text
    //     </span>
    //   </span>
    // </button>
  );
};
