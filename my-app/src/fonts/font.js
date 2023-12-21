import { TextSpan } from './Text.styled';
  
export const Text = ({ children, ...props }) => {
  return <TextSpan {...props}>{children}</TextSpan>;
};
