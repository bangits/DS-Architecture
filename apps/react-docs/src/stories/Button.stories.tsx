import MyUIButton from "@mui/react/Button";
import { action } from "@storybook/addon-actions";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: MyUIButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "Set the content of the button",
      control: { type: "text" },
    },
    variant: {
      description: "Choose varians of the button",
      options: ["Primary", "Secondary"],
      control: { type: "radio" },
      required: true,
    },
    size: {
      description: "Choose size of the button",
      options: ["Large", "Small"],
      control: { type: "radio" },
      required: true,
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    variant: "Primary",
    children: "Primary button",
  },
};

export const Secondary = {
  args: {
    variant: "Secondary",
    children: "Secondary button",
  },
};

export const Large = {
  args: {
    size: "Large",
    variant: "Primary",
    children: "Large button",
  },
};

export const Small = {
  args: {
    size: "Small",
    variant: "Primary",
    children: "Small button",
  },
};
