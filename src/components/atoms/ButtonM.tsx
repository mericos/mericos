import { Button } from "@chakra-ui/react";

interface ButtonProps {
  type?: "primary" | "secondary";
  children: string;
}

export function ButtonM({ type = "primary", children }: ButtonProps) {
  return (
    <Button px={8} variant={type}>
      {children}
    </Button>
  );
}
