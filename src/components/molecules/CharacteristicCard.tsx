import { Card, CardBody, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { ReactElement, useRef } from "react";

export interface CharacteristicCardProps {
	heading: string;
	description: string;
	icon: ReactElement;
}

export function CharacteristicCard({
	heading,
	description,
	icon,
}: CharacteristicCardProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<Card
			ref={ref}
			as={motion.div}
			style={{
				scale: isInView ? 1 : 0,
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
			}}
			transition="0.5s linear"
			w={"full"}
			borderRadius="md"
			overflow="hidden"
			boxShadow="sm"
			background={"white"}
			align={"center"}
			variant={"outline"}
		>
			<CardBody>
				<Stack spacing={2}>
					<HStack color={"primary.500"} justifyContent={"center"}>
						{icon}
						<Heading size="md">{heading}</Heading>
					</HStack>
					<Text
						whiteSpace={"pre-wrap"}
						color={"text_color_dark.normal"}
						textAlign={"center"}
					>
						{description}
					</Text>
				</Stack>
			</CardBody>
		</Card>
	);
}
