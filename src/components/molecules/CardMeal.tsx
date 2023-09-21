import {
	Button,
	Card,
	CardBody,
	CardHeader,
	CardProps,
	Heading,
	Image,
	Text,
} from "@chakra-ui/react";
import ImagePC from "../../assets/ImagePC.png";
interface CardMealProps extends CardProps {
	heading: string;
	caption: string;
	image: string;
}

export function CardMeal({heading, caption, image}: CardMealProps) {
	return (
		<Card
			minWidth={"3xs"}
			display={"flex"}
			borderStartEndRadius={"lg"}
			borderStartStartRadius={"lg"}
			height={["xs", "fit-content", "2xs"]}
			align={"center"}
		>
			<CardHeader padding={0} flexGrow={"2"} display={"flex"}>
				<Image
					src={image ? image: ImagePC}
					borderRadius={"lg"}
					borderEndEndRadius={"none"}
					borderEndStartRadius={"none"}
					objectFit={"cover"}
				/>
			</CardHeader>
			<CardBody textAlign={"center"} m={0} p={"1rem 1.25rem"} w={"full"}>
					<Heading color={"black"} size={["xs", "sm"]}>
						{heading}
					</Heading>
					<Text size={["sm", "md"]}>{caption}</Text>
					<Button fontSize={"0.875rem"} colorScheme={"primary"} variant={"solid"} w={"full"} >
						Add to Cart
					</Button>
			</CardBody>
		</Card>
	);
}
