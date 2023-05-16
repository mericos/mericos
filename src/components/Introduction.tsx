import { Box, Flex, Icon, useBreakpointValue } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import { Navbar } from "./molecules/Navbar";


import { CardM } from "./molecules/CardM";

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
		<Flex direction={"column"} width="full" align="center">
			<Navbar type={"primary"} size={size} navigationState={"authenticated"} />

			<CardM 
			name="name"
			type="producer"
			image_shape="circle"
			image="https://www.researchgate.net/profile/Bosheng-Song/publication/311221368/figure/fig1/AS:444086353174528@1482889845254/A-chess-board-pattern.png"
			/>

			<Box 
			maxWidth={"7xl"}>
				<MealCard
					type="secondary"
					imageUrl="https://www.simplyrecipes.com/thmb/2MQuChhZANaSSxdL1a0tA6nBgmQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-4-82c60893fcad4ade906a8a9f59b8da9d.jpg"
					mealName={"Heading"}
					price={0} id={""}/>
				<Box
				as={motion.div}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				>
					<MealCard
						imageUrl="https://www.estadao.com.br/resizer/CST2BU9c4a41u6CjapTOgobBc0o=/720x503/filters:format(jpg):quality(80):focal(1180x595:1190x605)/cloudfront-us-east-1.images.arcpublishing.com/estadao/GUOGMQ4FRJIUPAWMYLE4WNA3SY.jpg"
						mealName={"Heading"}
						price={0} id={""}/>
				</Box>
			</Box>
		</Flex>
	);
}
