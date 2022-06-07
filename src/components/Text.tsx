import type { TextProps } from "components/types";
import React from "react";

export const Text = <E extends React.ElementType>({
  as,
  color,
  size,
  float,
  children,
  font,
  textTransform,
  decoration,
  fontWeight,
  alignment,
  textClass,
  ...props
}: TextProps<E>) => {
  const Component = as || "span";
  return (
    <Component
      className={
        ` ${alignment}` +
        ` ${decoration}` +
        ` ${textTransform}` +
        ` ${size}` +
        ` ${fontWeight}` +
        ` ${color}` +
        ` ${textClass}`
      }
      {...props}
    >
      {children}
    </Component>
  );
};
