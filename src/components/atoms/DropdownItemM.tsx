import { List, ListItem, Text } from "@chakra-ui/react";

interface MenuItemProps {
	text: string;
	color?: string;
}

export function DropdownItemM({ text, color }: MenuItemProps) {
	return (
		<>
			<option value={text} style={{ backgroundColor: "#E85D04" }}>
				ola
			</option>
			{/* <MenuItem
				maxHeight="1.575rem"
				bg={"customColors.primary.500"}
				color="white"
			>
				{text}
			</MenuItem> */}
		</>
	);
}
