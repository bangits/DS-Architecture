import { textField } from "@mui/core/styles/text-field/index.css";
import { memo } from "react";

export interface TextFieldProps {
  label: string;

  onChange(): void;
}

const TextField = memo(({ onChange, label }: TextFieldProps) => (
  <label>
    {label}

    <input className={textField()} onChange={onChange} />
  </label>
));

TextField.displayName = "TextField";

export default TextField;
