import Button from './Button';

export default {
  title: 'Testing/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};

export const Primary = {
  args: {
    label: 'Button'
  }
};

export const Secondary = {
  args: {
    label: 'Button',
    backgroundColor: 'secondary'
  }
};
