import { Button } from "@chakra-ui/react";
import { ReactElement } from "react";

interface ButtonProps {
  type?: "primary" | "secondary";
  text: string;
  icon?: ReactElement;
}

export function ButtonM({ type = "primary", text, icon }: ButtonProps) {
  return (
    <Button px={8} variant={type} rightIcon={icon} maxWidth={"-webkit-fit-content"}>
      {text}
    </Button>
  );
}
