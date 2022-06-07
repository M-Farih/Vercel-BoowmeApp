import classNames from "classnames";
import { Form } from "components/Form";
import type { InputProps, PolymorphicRef } from "components/types";
import { View } from "components/View";
import { forwardRef, memo } from "react";
import { StringUtils } from "utils/StringUtils";

export const Input = memo(
  forwardRef(
    <C extends React.ElementType = "input">(
      {
        full,
        size,
        label,
        meta,
        prepend,
        append,
        row,
        inputClass = "",
        labelClass = "",
        textAlign,
        ...props
      }: InputProps<C>,
      ref?: PolymorphicRef<C>
    ) => {
      const { as: asComponent = "input", type } = props;
      const id = props.id || StringUtils.uniqueId();
      const className = props.className || "";
      const isInput = asComponent === "input";
      let isCheckbox = false;
      let isRadio = false;
      if (isInput) {
        if (type === "radio") {
          isRadio = true;
        } else if (type === "checkbox") {
          isCheckbox = true;
        }
      }
      // console.log('render input ? ', label);
      const inputClassName = classNames(
        `with-border bg-transparent placeholder-gray-300`,
        isRadio || isCheckbox ? "rounded-full border-white" : "",
        { "w-full": full },
        { "border-red-400": meta?.invalid },
        // prepend && !(isRadio || isCheckbox) ? "rounded-r-md" : "rounded-md",
        inputClass
      );
      const labelClassName = classNames(
        `block text-sm font-medium text-gray-600`,
        { "ml-2": isRadio || isCheckbox },
        labelClass
      );
      const containerClassName = classNames("col-span-6", className);
      const inputWrapperClassName = classNames("mt-1 flex rounded-md", {
        "items-center": isRadio || isCheckbox,
      });

      const labelUi = label ? (
        <Form.Label htmlFor={id} className={labelClassName}>
          {label}
        </Form.Label>
      ) : null;
      return (
        <View row={row} className={containerClassName}>
          {!(isCheckbox || isRadio) && labelUi}
          <View className={inputWrapperClassName}>
            {prepend}
            <Form.Control
              id={id}
              ref={ref}
              type="text"
              {...props}
              className={inputClassName}
            />
            {(isCheckbox || isRadio) && labelUi}
            {append}
          </View>
          <Form.Error meta={meta} />
        </View>
      );
    }
  )
);

/*
import classNames from "classnames";
import { Form } from "components/Form";
import type { InputProps, PolymorphicRef } from "components/types";
import { View } from "components/View";
import { forwardRef } from "react";
import { StringUtils } from "utils/StringUtils";

export const Input = forwardRef(
  <C extends React.ElementType = "input">(
    {
      full,
      size,
      label,
      meta,
      prepend,
      append,
      row,
      inputClass = "",
      labelClass = "",
      textAlign,
      ...props
    }: InputProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const { as: asComponent = "input", type } = props;
    const id = props.id || StringUtils.uniqueId();
    const className = props.className || "";
    const isInput = asComponent === "input";
    let isCheckbox = false;
    let isRadio = false;
    if (isInput) {
      if (type === "radio") {
        isRadio = true;
      } else if (type === "checkbox") {
        isCheckbox = true;
      }
    }
    const inputClassName = classNames(
      `mr-1 with-border bg-transparent placeholder-gray-300` +
        ` text-${textAlign}`,
      { "w-full": full },
      isRadio || isCheckbox ? "rounded-full" : "",
      { "border-red-400": meta?.invalid },
      // prepend && !(isRadio || isCheckbox) ? "rounded-r-md" : "rounded-md",
      inputClass
    );
    const labelClassName = classNames(
      `block text-sm font-light text-gray-600`,
      { "ml-2": isRadio || isCheckbox },
      labelClass
    );
    const containerClassName = classNames("col-span-6", className);
    const inputWrapperClassName = classNames("mt-1 flex rounded-md", {
      "items-center": isRadio || isCheckbox,
    });

    const labelUi = label ? (
      <Form.Label htmlFor={id} className={labelClassName}>
        {label}
      </Form.Label>
    ) : null;
    return (
      <View row={row} className={containerClassName}>
        {!(isCheckbox || isRadio) && labelUi}
        <View className={inputWrapperClassName}>
          {prepend}
          <Form.Control
            id={id}
            size={size}
            ref={ref}
            type="text"
            {...props}
            className={inputClassName}
          />
          {(isCheckbox || isRadio) && labelUi}
          {append}
        </View>
        <Form.Error meta={meta} />
      </View>
    );
  }
);
*/
