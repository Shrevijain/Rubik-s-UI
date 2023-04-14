import Button from './Button';

export default {
  title: 'Testing/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'select' }
  }
};

export const Primary = {
  args: {
    children: 'Button'
  }
};

export const Secondary = {
  args: {
    children: 'Button',
    backgroundColor: 'secondary'
  }
};

// export const Primary = () => <Button label="Button" />
// export const Secondary = () => <Button label="Button" backgroundColor="secondary" />;
