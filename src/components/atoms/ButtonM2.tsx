import { Button, ButtonProps } from "@chakra-ui/react";

// Define a custom button interface that extends Chakra UI's ButtonProps
interface ButtonM2Props extends ButtonProps {
  // Add any additional custom props specific to your application
  text: string;
}
export function ButtonM2(props: ButtonM2Props) {
    return (
        <Button {...props} >{ props.text }</Button>
    )
}