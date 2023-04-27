import { Button, Image, Menu, MenuButton } from "@chakra-ui/react";
import { DropdownList} from "./DropdownList";
import carret_downImg from "../../assets/caret-downw.svg";

export function Dropdown() {
	return (
		<>
			<Menu>
				<MenuButton
					minWidth="14.06rem"
					colorScheme="customColors.primary"
					as={Button}
					rightIcon={<Image src={carret_downImg} />}
				>
					Opcoes
				</MenuButton>
				<DropdownList/>
			</Menu>
		</>
	);
}
