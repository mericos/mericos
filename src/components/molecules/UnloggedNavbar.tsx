import { Flex, Hide, Image, Show } from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { Icon } from "../atoms/Icon";
import Logo from "../../assets/logo/logo2.svg";
import { LogoM } from "../atoms/LogoM";
import { ButtonM2 } from "../atoms/ButtonM2";

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
				<Hide above="md">
					<Icon icon={<AiOutlineMenu size={30} />} />
				</Hide>

				<Show above="md">
					<Flex gap={3}>
						<ButtonM2 variant={"primary"} text={"Login"} />
						<ButtonM2
							color={"primary.500"}
							variant={"secondary"}
							text={"Sign Up"}
						/>
					</Flex>
				</Show>
			</Flex>
		</>
	);
}
