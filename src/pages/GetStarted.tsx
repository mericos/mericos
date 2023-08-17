import { Flex, Grid, Heading, Image, Input, Text } from "@chakra-ui/react";
import { Navbar2 } from "../components/molecules/Navbar2";
import { AiOutlineSearch } from "react-icons/ai";

import { UnloggedNavbar } from "../components/molecules/UnloggedNavbar";
import { ButtonM2 } from "../components/atoms/ButtonM2";
import { AiFillForward } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";
import { Icon } from "../components/atoms/Icon";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { CardM2 } from "../components/molecules/CardM2";
import { products_types } from "../utils/productTypes";
import { ProductsMenu } from "../components/organisms/ProductsMenu";

export function GetStarted() {
	const company_values = [
		{
			icon: <AiFillForward size={55} />,
			title: "Fast Delivery",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
		},
		{
			icon: <BsFilter size={55} />,
			title: "Diversity of meals",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
		},
		{
			icon: <MdOutlineMobileFriendly size={55} />,
			title: "Easy to Order",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
		},
	];
	return (
		<>
			<Flex
				flexDirection={"column"}
				width={["container.sm", "container.md", "full"]}
				p={"4"}
				gap={4}
			>
				<UnloggedNavbar />
				<Flex
					flexDirection={["column", "column", "row"]}
				>
					<Heading fontSize={["2xl", "", ""]}>
						Hungry? You’re in the right{" "}
					</Heading>
					<Heading fontSize={["2xl", "", ""]}> place</Heading>
				</Flex>
				<Text>
					Describe exactly what your product or service does to solve
					this problem. Avoid using verbose words or phrases.
				</Text>
				<ButtonM2
					variant={"primary"}
					w={"fit-content"}
					p={"6"}
					text="Get started"
				/>
				<Image src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
				<section id="company-values">
					<Heading fontSize={["2xl", "3xl", "4xl"]}>
						Just Relax, We will take care
					</Heading>
					<Flex
						color={"primary.500"}
						justifyContent={"center"}
						flexDirection={"column"}
						gap={"3rem"}
					>
						{company_values.map((value) => (
							<Flex
								key={value.title}
								gap={"1.5rem"}
								flexDirection={"column"}
							>
								<Icon icon={value.icon} />
								<Text
									textAlign={"center"}
									fontWeight={"semibold"}
								>
									{value.title}
								</Text>
								<Text textAlign={"center"} color={"gray.500"}>
									{value.description}
								</Text>
							</Flex>
						))}
					</Flex>
				</section>
				<section id="menu">
					<Heading>Our Menu</Heading>
					<ProductsMenu />
				</section>
			</Flex>
		</>
	);
}
