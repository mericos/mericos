import { Input } from "@chakra-ui/react";

interface InputMProps {
    text: string;
}

export function InputM({text}:InputMProps) {
    return (
		<>
			<Input
				
				variant="flushed"
				focusBorderColor="primary.500"
				placeholder={text}
				borderColor={"gray"}
				width={"2xs"}
			/>
		</>
	);
}