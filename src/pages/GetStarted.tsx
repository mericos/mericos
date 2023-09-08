import { Flex, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";

import { UnloggedNavbar } from "../components/molecules/UnloggedNavbar";
import { ButtonM2 } from "../components/atoms/ButtonM2";
import { AiFillForward } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";
import { Icon } from "../components/atoms/Icon";
import { MdOutlineMobileFriendly } from "react-icons/md";

import { ProductsMenu } from "../components/organisms/ProductsMenu";
import ImageT from "../assets/ImagePC.png";

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
				maxW={["container.sm", "container.md", "full"]}
				p={"4"}
				gap={5}
			>
				<UnloggedNavbar />
				<Flex flexDirection={["column"]} gap={2}>
					<Grid
						gap={4}
						gridTemplateColumns={{ md: "repeat(2, 1fr)" }}
					>
						<GridItem
							className="left-side"
							display={"flex"}
							justifyContent={"center"}
							flexDirection={"column"}
							gap={3}
						>
							<Heading fontSize={["xl", "3xl", "4xl"]}>
								<Flex
									flexDirection={[
										"column",
										"column",
										"column",
										"row",
									]}
									gap={1}
								>
									<span>Hungry? You’re in the right </span>
									<span>place</span>
								</Flex>
							</Heading>
							<Text>
								Describe exactly what your product or service
								does to solve this problem. Avoid using verbose
								words or phrases.
							</Text>
							<ButtonM2
								variant={"primary"}
								w={"fit-content"}
								p={["3", "6"]}
								text="Get started"
							/>
						</GridItem>
						<GridItem>
							<Image borderRadius={"2xl"} w={"100%"} src={ImageT} />
						</GridItem>
					</Grid>
				</Flex>

				<section id="company-values">
					<Heading fontSize={["xl", "3xl", "4xl"]}>
						Just Relax, We will take care
					</Heading>
					<Flex
						color={"primary.500"}
						justifyContent={"center"}
						flexDirection={["column", "row"]}
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
					<Heading fontSize={["xl", "3xl", "4xl"]}>Our Menu</Heading>
					<ProductsMenu />
				</section>
			</Flex>
		</>
	);
}
