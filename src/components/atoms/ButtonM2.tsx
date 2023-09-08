import { Button, ButtonProps } from "@chakra-ui/react";


interface ButtonM2Props extends ButtonProps {
  text: string;
}
export function ButtonM2(props: ButtonM2Props) {
    return (
        <Button {...props} >{ props.text }</Button>
    )
}