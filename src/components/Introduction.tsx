import { Box, HStack, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import { Navbar } from "./Navbar";
import { MealCard } from "./molecules/MealCard";
import { CharacteristicCard } from "./molecules/CharacteristicCard";
import { Ri24HoursFill } from 'react-icons/ri'

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
		<Box width="full" align="center">
			<Navbar type={"primary"} size={size} navigationState={"authenticated"} />
			<SimpleGrid  spacing={"2"} minChildWidth={"3xs"} maxW={"7xl"} margin={1} >
				<CharacteristicCard heading="heading" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis in recusandae doloremque libero quasi pariatur debitis eveniet delectus! Itaque ea repellat nesciunt minus distinctio doloribus nulla eveniet accusantium blanditiis veniam!" icon={<Ri24HoursFill/>}/>
				<CharacteristicCard heading="heading" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis in recusandae doloremque libero quasi pariatur debitis eveniet delectus! Itaque ea repellat nesciunt minus distinctio doloribus nulla eveniet accusantium blanditiis veniam!" icon={<Ri24HoursFill/>}/>
				<CharacteristicCard heading="heading" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis in recusandae doloremque libero quasi pariatur debitis eveniet delectus! Itaque ea repellat nesciunt minus distinctio doloribus nulla eveniet accusantium blanditiis veniam!" icon={<Ri24HoursFill/>}/>
				<CharacteristicCard heading="heading" description="descLorem ipsum dolor sit amet consectetur adipisicing elit. Nobis in recusandae doloremque libero quasi pariatur debitis eveniet delectus! Itaque ea repellat nesciunt minus distinctio doloribus nulla eveniet accusantium blanditiis veniam!ription" icon={<Ri24HoursFill/>}/>
			</SimpleGrid>
			<HStack maxWidth={"7xl"}>
				<MealCard
				type="secondary"
				url="https://www.simplyrecipes.com/thmb/2MQuChhZANaSSxdL1a0tA6nBgmQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-4-82c60893fcad4ade906a8a9f59b8da9d.jpg"
				heading={"Heading"}
				price={0}/>
				<MealCard url="https://www.estadao.com.br/resizer/CST2BU9c4a41u6CjapTOgobBc0o=/720x503/filters:format(jpg):quality(80):focal(1180x595:1190x605)/cloudfront-us-east-1.images.arcpublishing.com/estadao/GUOGMQ4FRJIUPAWMYLE4WNA3SY.jpg"
				heading={"Heading"}
				price={0}/>
			</HStack>
		</Box>
	);
}
