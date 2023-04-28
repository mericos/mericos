
interface MenuItemProps {
	text: string;
}

export function DropdownItemM({ text}: MenuItemProps) {
	return (
		<>
			<option value={text} style={{ backgroundColor: "#E85D04" }}>
				{text}
			</option>
		</>
	);
}
