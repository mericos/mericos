import { Select } from "@chakra-ui/react";
import { DropdownItemM } from "../atoms/DropdownItemM";
import { SetStateAction, useState } from "react";

export function Dropdown() {
	const [value, setValues] = useState("");

	const handleChange = (event: {
		target: { value: SetStateAction<string> };
	}) => {
		setValues(event.target.value);
	};
	return (
		<>
			<Select
				borderColor={"primary.500"}
				focusBorderColor="primary.500.700"
				bgColor={"primary.500"}
				color={value ? "black" : "white"}
				placeholder="Select an option"
				onChange={handleChange}
			>
				<DropdownItemM text="option1" />
				<DropdownItemM text="option1" />
				<DropdownItemM text="option1" />
				<DropdownItemM text="option1" />
			</Select>
		</>
	);
}
