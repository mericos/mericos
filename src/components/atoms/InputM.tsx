import { Input } from "@chakra-ui/react";

interface InputMProps {
    text: string;
}

export function InputM({text}:InputMProps) {
    return (
		<>
			<Input variant="flushed" placeholder={text} borderColor={"black"} width={"auto"}/>
		</>
	);
}