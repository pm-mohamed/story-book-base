import { createButton } from './components/Buttons/Button';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Buttons',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    className: { control: 'text' },
    onClick: { action: 'onClick' },
    primary: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createButton({ label, ...args });
};

export const PrimaryButton = Template.bind({});
export const SecondaryButton = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
PrimaryButton.args = {
  label: 'Primary',
  className: 'button button--primary button--small'
};

SecondaryButton.args = {
  label: 'Secondary',
  className: 'button button--secondary button--large'
};
