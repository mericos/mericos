import { Button } from "@chakra-ui/react";
import { ReactElement } from "react";

interface ButtonProps {
  type?: "primary" | "secondary";
  text: string;
  icon?: ReactElement;
  isSubmit? : boolean
}

export function ButtonM({ type = "primary", text, icon, isSubmit = false }: ButtonProps) {
  return (
    <Button w={"100%"} type={isSubmit ? "submit" : "button"} px={8} variant={type} rightIcon={icon} maxWidth={"-webkit-fit-content"}>
      {text}
    </Button>
  );
}
