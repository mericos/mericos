import { Button, Text } from "@chakra-ui/react";

interface ButtonProps {
	state?: string;
	type?: string;
	text: string;
}

export function ButtonM(props: ButtonProps) {
	return (
		<>
			<Button variant={"secondary"}>{props.text}</Button>
			<Button variant={"primary"}>{props.text}</Button>
		</>
	);
}
