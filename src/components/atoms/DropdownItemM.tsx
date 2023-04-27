import { MenuItem } from "@chakra-ui/react";

interface MenuItemProps {
	text: string;
}

export function DropdownItemM({ text }: MenuItemProps) {
	return (
		<>
			<MenuItem
				maxHeight="1.575rem"
				bg={"customColors.primary.500"}
				color="white"
			>
				{text}
			</MenuItem>
		</>
	);
}
