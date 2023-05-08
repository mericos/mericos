import { Button, Text } from "@chakra-ui/react";

interface ButtonProps {
	state?: string;
	type?: "primary" | "secondary";
	text: string;
}

export function ButtonM(props: ButtonProps) {
	return (
		<>
			<Button paddingX={8} variant={props.type ? props.type : 'primary'}>{props.text}</Button>
		</>
	);
}
