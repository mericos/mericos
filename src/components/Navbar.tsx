import mericos_logo from "../assets/Vector.png";
import mericos_text from "../assets/Mericos.png";
import hamburger_img from "../assets/hamburguer.png";
import { Flex } from "@chakra-ui/react";

export function Navbar() {
	return (
		<>
			<header>
				<Flex
					padding={"0.65rem"}
					direction={"row"}
					alignItems={"center"}
					justifyContent={"space-between"}
				>
					<Flex
						className="logo"
						alignItems={"center"}
						gap={"0.625rem"}
					>
						<img src={mericos_logo} alt="mericos-logo" />
						<img src={mericos_text} alt="mericos-text" />
					</Flex>
					<img src={hamburger_img} alt="hamburguer-menu" />
				</Flex>
			</header>
		</>
	);
}
