import { createTextInput } from './components/TextInputs/TextInput';

export default {
  title: 'Components/Text Inputs',
  argTypes: {
    className: { control: 'text' },
    placeholder: { control: 'text' },
  },
};

const Template = ({ label, ...args }) => {
  return createTextInput({ label, ...args });
};

export const PrimaryTextInput = Template.bind({});
export const SecondaryTextInput = Template.bind({});

PrimaryTextInput.args = {
  className: 'primary-text-input',
  placeholder: 'Write here!'
};

SecondaryTextInput.args = {
  className: 'secondary-text-input',
  placeholder: 'Write here!'
};
