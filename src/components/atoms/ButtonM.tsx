import { Button } from "@chakra-ui/react";
import { ReactElement } from "react";

interface ButtonProps {
  type?: "primary" | "secondary";
  text: string;
  icon?: ReactElement;
}

export function ButtonM({ type = "primary", text, icon }: ButtonProps) {
  return (
    <Button w={"100%"} px={8} variant={type} rightIcon={icon} maxWidth={"-webkit-fit-content"}>
      {text}
    </Button>
  );
}
