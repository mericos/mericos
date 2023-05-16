import { Radio } from "@chakra-ui/react";

interface RadioProps {
	value: string;
	text: string;
}

export function RadioButtonM({ value, text }: RadioProps) {
	return (
		<>
			<Radio colorScheme="primary.500" value={value}>
				{text}
			</Radio>
		</>
	);
}
