import { RadioGroup } from "@chakra-ui/react";
import { useState } from "react";
import { RadioButtonM } from "../atoms/RadioButtonM";

export function RadioGroupM() {
	const [value, setValue] = useState("");
	return (
		<>
			<RadioGroup onChange={setValue} value={value}>
				<RadioButtonM text=" " value={"checked"}/>
				<RadioButtonM text=" " value={"unched"}/>
			</RadioGroup>
		</>
	);
}
