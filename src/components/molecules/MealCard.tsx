import {
	Card,
	CardBody,
	CardFooter,
	Heading,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import { ButtonM } from "../atoms/ButtonM";
import { BsCart } from "react-icons/bs";
import { useState } from "react";
import { motion } from "framer-motion";

export interface MealCardProps {
	url: string;
	mealName: string;
	price: number;
	type?: "primary" | "secondary";
}

export function MealCard({
	url,
	mealName: heading,
	price,
	type = "primary",
}: MealCardProps) {
	const [primaryColor, setPrimaryColor] = useState(
		type === "primary" ? "white" : "primary.500"
	);
	const [background, setBackgroundColor] = useState(
		type === "primary" ? "primary.500" : "white"
	);
	const [textColor, setTextColor] = useState(
		type === "primary" ? "white" : "customColors.text_color_dark.normal"
	);

	function switchColor() {
		setPrimaryColor(primaryColor === "white" ? "primary.500" : "white");
		setBackgroundColor(background === "white" ? "primary.500" : "white");
		setTextColor(
			textColor === "white"
				? "customColors.text_color_dark.normal"
				: "white"
		);
	}
	return (
		<Card
			as={motion.div}
			initial={{ opacity: 1 }}
			whileHover={{ scale: 1.1, zIndex: 1 }}
			whileTap={{ scale: 0.9 }}
			viewport={{ once: true }}
			flexShrink={0}
			maxW="xs"
			borderRadius="md"
			overflow="hidden"
			boxShadow="lg"
			background={background}
			onMouseEnter={() => switchColor()}
			onMouseLeave={() => switchColor()}
			_active={{ border: "1px", color: primaryColor }}
		>
			<Image
				src={url}
				alt={heading}
				h={"xs"}
				w={"xs"}
				objectFit="cover"
			/>
			<CardBody>
				<Stack spacing={2} align={"start"}>
					<Heading size="md" color={primaryColor}>
						{heading}
					</Heading>
					<Text fontWeight="bold" color={textColor}>
						{price} Mzn
					</Text>
				</Stack>
			</CardBody>
			<CardFooter justifyContent={"center"}>
				<ButtonM
					type={type === "primary" ? "secondary" : type}
					text="Adicione"
					icon={<BsCart />}
				/>
			</CardFooter>
		</Card>
	);
}
