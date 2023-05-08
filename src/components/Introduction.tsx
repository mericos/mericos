import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Navbar } from "./Navbar";
import { MealCard } from "./molecules/MealCard";

export function Introduction() {
	const size: "phone" | "laptop" | "universal" = useBreakpointValue(
		{
		base: 'phone',
		sm: 'laptop',
		xl: "universal"
		},
		{
		// Breakpoint to use when mediaqueries cannot be used, such as in server-side rendering
		// (Defaults to 'base')
		fallback: 'md',
		},
	) ?? "phone"
	return (
		<Box width="full" align="center" >
			<Navbar type={"primary"} size={size} navigationState={"not_authenticated"} />
			<MealCard url="https://www.simplyrecipes.com/thmb/2MQuChhZANaSSxdL1a0tA6nBgmQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-4-82c60893fcad4ade906a8a9f59b8da9d.jpg"
			heading={"Heading"}
			price={0}
			description={"description"}/>
		</Box>
	);
}
