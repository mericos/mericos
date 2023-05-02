import { RadioGroup } from "@chakra-ui/react";
import { useState } from "react";
import { SwitchM } from "../atoms/SwitchM";

export function RadioGroupM() {
	const [value, setValue] = useState("");
	return (
		<>
			<RadioGroup onChange={setValue} value={value}>
				<SwitchM text=" " value={"checked"}/>
				<SwitchM text=" " value={"unched"}/>
			</RadioGroup>
		</>
	);
}
