import type { LinkProps as NLinkProps } from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  CSSProperties,
  ElementType,
  LabelHTMLAttributes,
  MouseEventHandler,
  OptionHTMLAttributes,
  ReactNode,
  TableHTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes,
} from "react";
import React from "react";
import type {
  Control,
  FieldValues,
  SubmitHandler,
  UseControllerProps,
  UseFormProps,
  UseFormReturn,
} from "react-hook-form";
import type { ExtendableProps } from "utils/types";
import { number } from "yup";

// Source: https://github.com/emotion-js/emotion/blob/master/packages/styled-base/types/helper.d.ts
// A more precise version of just React.ComponentPropsWithoutRef on its own
export type PropsOf<
  C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>>;

type AsProp<C extends React.ElementType> = {
  /**
   * An override of the default HTML tag. Can also be another React component.
   */
  as?: C;
};

/**
 * Allows for inheriting the props from the specified element type so that
 * props like children, className & style work, as well as element-specific
 * attributes like aria roles. The component (`C`) must be passed in.
 */
export type InheritableElementProps<C extends React.ElementType, Props = {}> =
  ExtendableProps<PropsOf<C>, Props>;

/**
 * A more sophisticated version of `InheritableElementProps` where
 * the passed in `as` prop will determine which props can be included
 */
export type PolymorphicComponentProps<C extends React.ElementType, Props = {}> =
  InheritableElementProps<C, Props & AsProp<C>>;
/**
 * Utility type to extract the `ref` prop from a polymorphic component
 */
export type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];
/**
 * A wrapper of `PolymorphicComponentProps` that also includes the `ref`
 * prop for the polymorphic component
 */
export type PolymorphicComponentPropsWithRef<
  C extends React.ElementType,
  Props = {}
> = PolymorphicComponentProps<C, Props> & { ref?: PolymorphicRef<C> };

export type LayoutName = "main" | "centered" | "empty";

export type LayoutProps = {
  children: React.ReactNode;
  name?: LayoutName;
};

export type ViewProps<C extends ElementType> = PolymorphicComponentProps<
  C,
  {
    col?: boolean;
    row?: boolean;
  }
>;

export type TextownPropos<E extends React.ElementType> = {
  size?: "text-xl" | "text-lg" | "text-base" | "text-sm" | "text-md";
  children?: ReactNode;
  as?: E;
  color?:
    | "text-black"
    | "text-white"
    | "text-c4"
    | "text-c5"
    | "text-c2"
    | "text-separator"
    | "text-c3";
  textTransform?: "uppercase" | "lowercase" | "capitalize";
  fontWeight?: "font-light" | "font-medium" | "font-bold";
  alignment?: "text-left" | "text-center" | "text-right" | "text-justify";
  float?: "left" | "right";
  decoration?: "overline" | "underline" | "line-through";
  textClass?: string;
};

export type TextProps<E extends React.ElementType = "span"> = TextownPropos<E> &
  Omit<React.ComponentProps<E>, keyof TextownPropos<E>>;

export type LinkProps<C extends ElementType = "a"> = PolymorphicComponentProps<
  C,
  Omit<NLinkProps, "as">
>;

export interface AnchorProps<T extends HTMLAnchorElement = HTMLAnchorElement>
  extends AnchorHTMLAttributes<T> {}

export type ValueType =
  | string
  | ReadonlyArray<string>
  | number
  | undefined
  | boolean;

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}
export interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {}

export type FormControlProps<C extends ElementType> =
  PolymorphicComponentPropsWithRef<
    C,
    {
      value?: ValueType;
      defaultValue?: ValueType;
    }
  >;

export type InputProps<C extends ElementType> = FormControlProps<C> & {
  label?: string;
  inputClass?: string;
  labelClass?: string;
  prepend?: ReactNode;
  append?: ReactNode;
  row?: boolean;
  meta?: FieldMetaProps;
  full?: boolean;
  textAlign?: "left" | "right" | "center";
};

export type FieldProps<C extends ElementType, TValues extends FieldValues> =
  InputProps<C> & UseControllerProps<TValues>;

export interface FieldMetaProps {
  touched: boolean;
  invalid?: boolean;
  error?: string;
}

export interface ErrorProps extends LabelProps {
  meta?: FieldMetaProps;
}
export type FormProps<T extends FieldValues> = UseFormProps<T> & {
  children:
    | React.ReactNode
    | ((methods: UseFormReturn<T>) => React.ReactElement);
  onSubmit?: SubmitHandler<T>;
  resetOnSuccessfulSubmit?: boolean;
};

export type TableProps = {
  thead?: React.ReactNode;
} & TableHTMLAttributes<HTMLTableElement>;
export type TrProps = {
  variant?: string;
  className?: string;
  children?: React.ReactNode;
};
export type ThProps = {
  action?: boolean;
} & ThHTMLAttributes<HTMLTableCaptionElement>;
export type TdProps = {
  action?: boolean;
} & TdHTMLAttributes<HTMLTableDataCellElement>;

export type { FieldValues, SubmitHandler, Control, UseFormReturn };

export type Url = NLinkProps["href"];

export type MenuBarItemProps<C extends ElementType = "a"> = LinkProps<C> & {
  icon?: React.ReactElement;
  title?: string;
  badge?: number;
};

export type IconProps<C extends ElementType = "svg"> =
  React.ComponentProps<C> & {
    iconPosition?: string;
    url?: string;
    onClick?: MouseEventHandler | undefined;
  };

//Interface
export interface PopupProps {
  variant?: "transparent" | "white";
  children?: ReactNode;
  title?: string;
  text?: string;
  phoneNumber?: string;
  show?: boolean;
  className?: string;
  withCloseBtn?: boolean;
  onClick?: MouseEventHandler | undefined;
  onClose?: MouseEventHandler | undefined;
}

export interface AutoCompleteSearchProps
  extends React.HTMLAttributes<HTMLDivElement> {
  Data: any[];
}

export type AvatarProps = {
  image: string | any;
  rounded: string;
  blured?: boolean;
  height?: string;
  width?: string;
  bgBorder?: boolean;
  edit?: boolean;
  onClick?: MouseEventHandler | undefined;
};

export interface OTPInputProps {
  length: number;
  onChangeOTP: (otp: string) => any;

  autoFocus?: boolean;
  isNumberInput?: boolean;
  disabled?: boolean;

  style?: CSSProperties;
  className?: string;

  inputStyle?: CSSProperties;
  inputClassName?: string;
}

export interface SingleOTPInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  focus?: boolean;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // confirm?: string;
  variant?:
    | "primary"
    | "secondary"
    | "Tertiary"
    | "disabled"
    | "circle"
    | "primary-rounded"
    | "blue";
  // size?: string;
  label?: string;
  // backgroundColor?: string;
  full?: boolean;
  icon?: React.ReactElement;
  width?: string;
  alignSelf?: string;
  textSize?: string;
}
export interface DropdownProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  options?: any;
}
export interface RadioGroupBProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  dataProps?: any;
  selectedProps: number;
}

export interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {}

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  width?: String;
  height?: String;
  variant: "blur" | "grey" | "swipe" | "grey-with-border";
}

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  variant: "rectangular" | "square";
  icon?: React.ReactElement;
  label?: String;
  selected?: boolean;
  infoIcon?: boolean;
  textSize?: "text-xl" | "text-lg" | "text-base" | "text-sm";
  cursor?: boolean;
}
export interface TooltipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  description?: string;
  tooltip?: boolean;
  onClick?: MouseEventHandler | undefined;
}

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  variant?: "blur" | "default" | "flat";
  backLink?: boolean;
  setting?: boolean;
  justify?: string;
}

export interface BottomBarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  index: number;
}

export interface SideBarProps {
  show?: boolean;
  onClick?: MouseEventHandler | undefined;
  signOut: () => void;
  displayName: string | null;
  photoURL: string | null;
}

export interface SwitchProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  defaultvalue?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler | undefined;
}

export interface FieldMetaProps {
  touched: boolean;
  invalid?: boolean;
  error?: string;
}

export interface AnchorProps<T extends HTMLAnchorElement = HTMLAnchorElement>
  extends AnchorHTMLAttributes<T> {}
export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}
export interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {}

export interface ErrorProps extends LabelProps {
  meta?: FieldMetaProps;
}

export interface MultiRangeSliderProps {
  min: number;
  max: number;
  onChange: Function;
}

export interface AccordionProps {
  title?: string;
  element?: React.ReactElement;
  children?: ReactNode;
  closed?: boolean;
  show?: boolean;
  onClick?: MouseEventHandler | undefined;
}
export interface AvatarStatusProps {
  status: boolean;
  src: string;
  width: string;
  height: string;
}
