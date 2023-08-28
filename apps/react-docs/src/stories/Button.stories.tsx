import MyUIButton from "@mui/react/Button";
import { withKnobs, text } from "@storybook/addon-knobs";
import { withActions } from "@storybook/addon-actions/decorator";
import { action } from "@storybook/addon-actions";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: MyUIButton,
  decorators: [withKnobs, withActions],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = () => {
  const label = text("Name", "James");

  return (
    <MyUIButton
      onClick={action("onClick")}
    >{`buttons label is: ${label}`}</MyUIButton>
  );
};

export const Secondary = {
  args: {
    children: "Click me",
  },
};

export const Large = {
  args: {
    size: "large",
    children: "Click me",
  },
};

export const Small = {
  args: {
    size: "small",
    children: "Click me",
  },
};
