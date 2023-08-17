import { Flex, Image } from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { Icon } from "../atoms/Icon";
import Logo from "../../assets/logo/logo2.svg"
import { LogoM } from "../atoms/LogoM";

export function UnloggedNavbar() {
    return (
		<>
			<Flex
				color={"gray.500"}
				pt={"2"}
				alignItems={"center"}
				justifyContent={"space-between"}
			>
				<Image
                    src={Logo}
					// minW={["15%", "15%", "5%"]}
				/>
				<Icon icon={<AiOutlineMenu size={30} />} />
			</Flex>
		</>
	);
}