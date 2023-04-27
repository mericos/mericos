import { Button, Image, Menu, MenuButton } from "@chakra-ui/react";
import { MenuListM } from "./MenuListM";
import carret_downImg from "../../assets/caret-downw.svg";

export function MenuM() {
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
				<MenuListM></MenuListM>
			</Menu>
		</>
	);
}
