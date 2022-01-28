import { createHeading } from './components/Headings/Heading';

export default {
  title: 'Components/Headings',
  argTypes: {
    text: { control: 'text' },
    className: { control: 'text' },
  },
};

const Template = ({ label, ...args }) => {
  return createHeading({ label, ...args });
};

export const PrimaryHeading = Template.bind({});
export const SecondaryHeading = Template.bind({});

PrimaryHeading.args = {
  text: 'Primary Heading',
  className: 'primary-heading'
};

SecondaryHeading.args = {
  text: 'Secondary Heading',
  className: 'secondary-heading'
};
