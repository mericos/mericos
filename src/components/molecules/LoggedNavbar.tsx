import {
	Divider,
	Flex,
	Heading,
	Hide,
	Image,
	Link,
	Show,
	UnorderedList,
} from "@chakra-ui/react";
import Logo from "../../assets/logo/logo2.svg";

import { nav_titles } from "../../utils/nav_titles";
import { Cart } from "./Cart";
import { SideNavBar } from "./SideNavBar";

interface Navbar {
	page_title?: string;
}

export function LoggedNavbar({ page_title }: Navbar) {
	

	return (
		<>
			<Flex
				pt={2}
				color={"gray.500"}
				alignItems={"center"}
				justifyContent={[
					"space-between",
					"space-between",
					"flex-start",
				]}
			>
				<Hide above="md">
					<Cart/>
					<Heading color={"black"}>{page_title}</Heading>
					<SideNavBar/>
				</Hide>

				
				<Show above="md">
					<Image src={Logo} />
					<Flex gap={3}>
						{
							<UnorderedList
								display={"flex"}
								justifyContent={"flex-start"}
								w={"100%"}
							>
								{nav_titles.map(({ name, path }) => (
									<Link
										href={path}
										fontSize={["md"]}
										m={"4"}
										color="gray.500"
										pos={"relative"}
										// onClick={() =>
										// 	handleTypeClick(link.props.children)
										// }
										_after={{
											content: '""',
											position: "absolute",
											width: "100%",
											transform: "scaleX(0)",
											// transform: `${
											// 	selectedType ===
											// 	link.props.children
											// 		? "scaleX(1)"
											// 		: "scaleX(0)"
											// }`,
											height: "2px",
											bottom: "0",
											left: "0",
											backgroundColor: "primary.500",
											transformOrigin: "bottom right",
											transition:
												"transform 0.25s ease-out",
										}}
										_hover={{
											textDecoration: "none",
											_after: {
												transform: "scaleX(1)",
												transformOrigin: "bottom left",
											},
										}}
										key={""}
									>
										{name}
									</Link>
								))}
							</UnorderedList>
						}
					</Flex>
				</Show>
			</Flex>
			<Divider mb={4} />
		</>
	);
}
