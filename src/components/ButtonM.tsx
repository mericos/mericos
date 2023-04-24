import { Button, Text } from "@chakra-ui/react";

interface ButtonProps {
	state?: string;
	type?: string;
	text: string;
}

export function ButtonM(props: ButtonProps) {
	return (
		<Button
			bg="primary"
			padding={"0.3125rem 1.5rem"}
			_hover={{ boxShadow: "0px 4px 4px 1px rgba(255, 106, 0, 0.25)" }}
			_active={{
				boxShadow: "inset 2px 2px 4px 4px rgba(0, 0, 0, 0.25)",
			}}
			_disabled={{
				bg: "rgba(255, 106, 0, 0.5)",
			}}
		>
			<Text color={"white"}>{props.text}</Text>
		</Button>
	);
}
