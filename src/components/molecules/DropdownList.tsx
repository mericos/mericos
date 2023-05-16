import { MenuList } from "@chakra-ui/react";
import { DropdownItemM } from "../atoms/DropdownItemM";

export function DropdownList() {
	return (
		<>
			<MenuList bg={"primary.500"}>
				<DropdownItemM text="Option1" />
				<DropdownItemM text="Option2" />
			</MenuList>
		</>
	);
}
