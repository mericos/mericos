import {
	Card,
	CardBody,
	CardHeader,
	CardProps,
	Heading,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import { SlArrowRight } from "react-icons/sl";
import { ButtonM2 } from "../atoms/ButtonM2";
import ImagePC from "../../assets/ImagePC.png";
interface CardMealProps extends CardProps {
	card_heading: string;
	card_caption: string;
}

export function CardMeal(props: CardMealProps) {
	return (
		<Card
			display={"flex"}
			borderStartEndRadius={"none"}
			borderStartStartRadius={"none"}
			height={["xs", "fit-content", "fit-content"]}
			align={"center"}
		>
			<CardHeader padding={0} flexGrow={"2"} display={"flex"}>
				<Image
					src={ImagePC}
					borderRadius={"lg"}
					borderEndEndRadius={"none"}
					borderEndStartRadius={"none"}
					objectFit={"cover"}
				/>
			</CardHeader>
			<CardBody textAlign={"center"}>
				<Stack>
					<Heading color={"black"} size={["xs", "sm"]}>
						{props.card_heading}
					</Heading>
					<Text size={["sm", "md"]}>{props.card_caption}</Text>
					<ButtonM2
						size={["sm", "md"]}
						rightIcon={<SlArrowRight />}
						text={"Add to Cart"}
						variant={"primary"}
					></ButtonM2>
				</Stack>
			</CardBody>
		</Card>
	);
}
