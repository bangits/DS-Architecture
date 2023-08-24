import { textField } from "@mui/core/styles/text-field/index.css";
import { FC } from "react";

export interface TextFieldProps {
  label: string;

  onChange(): void;
}

const TextField: FC<TextFieldProps> = ({ onChange, label }) => {
  return (
    <label>
      {label}

      <input className={textField()} onChange={onChange} />
    </label>
  );
};

export default TextField;
