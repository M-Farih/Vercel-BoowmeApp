import "react-phone-input-2/lib/style.css";
import PhoneInput, { PhoneInputProps } from "react-phone-input-2";

export const PhoneInputNumber = ({ ...props }: PhoneInputProps) => {
  return (
    <PhoneInput
      {...props}
      inputProps={{
        name: "phone",
        required: true,
        autoFocus: true,
      }}
      containerStyle={{
        border: "1px",
        borderRadius: "25px",
        alignSelf: "center",
        alignItems: "center",
      }}
      inputStyle={{
        borderColor: "white",
        borderRadius: "25px",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        color: "white",
        backdropFilter: "blur(4px)",
        paddingLeft: "70px",
      }}
      buttonStyle={{
        borderTopLeftRadius: "25px",
        borderBottomLeftRadius: "25px",
        backgroundColor: "transparent",
        color: "white",
        borderColor: "rgba(255, 255, 255, 0.4)",
        borderLeft: "none",
        borderTop: "none",
        borderBottom: "none",
        width: "58px",
      }}
      dropdownStyle={{
        backgroundColor: "#efefef",
        borderRadius: "10px",
        backdropFilter: "blur(5px)",
        width: "255px",
      }}
    />
  );
};
