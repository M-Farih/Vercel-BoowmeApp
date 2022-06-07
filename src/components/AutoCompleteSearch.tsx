import React, { Component } from "react";
import AsyncSelect from "react-select/async";
import { StateOption, stateOptions } from "./docs/data";

interface State {
  readonly inputValue: string;
}

const filterColors = (inputValue: string) => {
  return stateOptions.filter((i) =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const loadOptions = (
  inputValue: string,
  callback: (options: StateOption[]) => void
) => {
  setTimeout(() => {
    callback(filterColors(inputValue));
  }, 1000);
};

export class AutoCompleteSearch extends Component<{}, State> {
  state: State = { inputValue: "" };
  handleInputChange = (newValue: string) => {
    const inputValue = newValue.replace(/\W/g, "");
    this.setState({ inputValue });
    return inputValue;
  };
  render() {
    return (
      <>
        {/* <pre>inputValue: "{this.state.inputValue}"</pre> */}
        <AsyncSelect
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions
          onInputChange={this.handleInputChange}
        />
      </>
    );
  }
}
