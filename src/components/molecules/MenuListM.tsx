import { MenuList } from "@chakra-ui/react";
import { DropdownItemM } from "../atoms/DropdownItemM";

export function MenuListM() {
	return (
		<>
			<MenuList bg={"customColors.primary.500"}>
				<DropdownItemM text="Option1" />
			</MenuList>
		</>
	);
}
