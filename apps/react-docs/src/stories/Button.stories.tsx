import MyUIButton from "@mui/react/Button";
import ThemeProvider from "@mui/react/ThemeProvider/ThemeProvider";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: MyUIButton,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    variant: "primary",
    children: "Primary button",
  },
};

export const Secondary = {
  args: {
    variant: "secondary",
    children: "Secondary button",
  },
};

export const Tertiary = {
  args: {
    variant: "tertiary",
    children: "Tertiary button",
  },
};

export const Link = {
  args: {
    variant: "link",
    children: "Link button",
  },
};
