import { Button } from "@chakra-ui/react";
import { ReactElement } from "react";

interface ButtonProps {
  type?: "primary" | "secondary";
  text: string;
  icon?: ReactElement;
  isSubmit? : boolean;
  onClick?: () => void;
}

export function ButtonM({ type = "primary", text, icon, isSubmit = false, onClick}: ButtonProps) {
  return (
    <Button w={"100%"} type={isSubmit ? "submit" : "button"} px={8} variant={type} rightIcon={icon} maxWidth={"-webkit-fit-content"} onClick={onClick}>
      {text}
    </Button>
  );
}
