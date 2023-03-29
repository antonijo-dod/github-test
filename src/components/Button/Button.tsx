import { ReactElement, ReactNode, ButtonHTMLAttributes } from "react";
import { StyledButton } from "./Button.styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: ReactNode;
}

const Button = ({ children, ...rest }: ButtonProps): ReactElement => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
