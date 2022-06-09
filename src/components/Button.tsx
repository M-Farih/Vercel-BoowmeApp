import cn from "classnames";
import type { ButtonProps } from "components/types";
import type { FC } from "react";

const calculClass = ({ className, variant, full }: ButtonProps) => {
  return cn({
    // "pl-10 pr-10 h-12 relative border-t border-l items-center justify-center inline-flex bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm text-white text-ms font-light rounded-full":
    //   variant === "primary",
    "px-10 z-20 button h-10 relative items-center justify-center inline-flex bg-c6 text-c2 text-ms font-light rounded-full bg-gradient-to-l hover:text-white hover:from-c2 hover:to-c4 shadow-md ":
      variant === "primary",
    // "btn btn-rounded shadow-md pl-10 pr-10 h-10 rounded-xl":
    //   variant === "primary-rounded",
    "px-10 h-10 relative items-center justify-center inline-flex bg-c6 text-c4 text-md font-light rounded-full bg-gradient-to-l hover:text-white hover:from-c2 hover:to-c4 shadow-md":
      variant === "secondary",
    "px-10 h-10 relative bg-c6 items-center justify-center inline-flex text-ms font-light rounded-xl border border-transparent hover:border-c5 hover:text-c4 shadow-md":
      variant === "Tertiary",
    "px-10 h-10 relative items-center justify-center inline-flex text-md font-light rounded-full cursor-not-allowed":
      variant === "disabled",
    "h-8 w-8 relative border-2 border-white items-center justify-center inline-flex bg-c6 text-c2 text-ms font-light rounded-full bg-gradient-to-l hover:text-white hover:from-c2 hover:to-c4":
      variant === "circle",
    "w-full": full,
    "px-10 h-10 relative items-center justify-center inline-flex text-white text-md font-light rounded-full bg-[#5470a6] hover:text-white  shadow-md":
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
    >
      {icon}
      {children}
    </button>
  );
};
