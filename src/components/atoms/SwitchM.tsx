import { Radio } from "@chakra-ui/react";

interface RadioProps {
	value: string;
	text: string;
}

export function SwitchM({ value, text }: RadioProps) {
	return (
		<>
			<Radio colorScheme="customColors.primary" value={value}>
				{text}
			</Radio>
		</>
	);
}
