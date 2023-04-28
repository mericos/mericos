import { Box, Button, Image, Menu, MenuButton, Select, color } from "@chakra-ui/react";
import { DropdownList } from "./DropdownList";
import carret_downImg from "../../assets/caret-downw.svg";
import { DropdownItemM } from "../atoms/DropdownItemM";
import { customTheme } from "../../style/customTheme";
import { SetStateAction, useState } from "react";

export function Dropdown() {
	const [value, setValues] = useState("");

	const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
		setValues(event.target.value)
	}
	return (
		<>
			<Select
				// variant={"filled"}
				borderColor={"customColors.primary.500"}
				// outlineColor={"customColors.primary.500"}
				focusBorderColor="customColors.primary.700"
				bgColor={"customColors.primary.500"}
				color={value ? "black" : "white"}
				placeholder="Select an option"
				onChange={handleChange}
			>
				<DropdownItemM text="option1" />
				<DropdownItemM text="option1" />
				<DropdownItemM text="option1" />
				<DropdownItemM text="option1" />
			</Select>
			{/* <Menu>
				<MenuButton
					minWidth="14.06rem"
					colorScheme="customColors.primary"
					as={Button}
					rightIcon={<Image src={carret_downImg} />}
				>
					Opcoes
				</MenuButton>
				<DropdownList/>
			</Menu> */}
		</>
	);
}
