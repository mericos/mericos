import { Radio, RadioGroup } from "@chakra-ui/react";
import { useState } from "react";

interface RadioProps {
    value: string;
    text: string;
}

export function SwitchM({value, text}:RadioProps) {
	return (
		<>
            <Radio colorScheme="customColors.primary" value={ value }>
                { text }
			</Radio>
		</>
	);
}
