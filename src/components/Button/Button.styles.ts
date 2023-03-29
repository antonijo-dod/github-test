import styled from "styled-components";

export interface StyledButtonProps {
  variant?: "primary" | "secondary";
}

export const StyledButton = styled.button<StyledButtonProps>`
  border: 0;
  border-radius: 6px;
  padding: 12px 24px;
  color: white;
  background-color: ${(props) =>
    props.variant === "primary" ? "blue" : "grey"};
  background-color: ${(props) => (props.variant === "primary" ? "orange" : "grey")};
`;
