import {
    Card,
    CardBody,
    CardFooter,
    CardProps, Heading,
    IconButton,
    Image
} from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import ImageT from "../../assets/ImagePC.png";

interface CardMProps extends CardProps {
	card_heading: string;
}

export function CardProfile(props: CardMProps) {
	return (
		<Card borderBottom={"1px"} borderBottomRadius={"none"} borderBottomColor={"gray.300"} boxShadow={"none"} maxW="full" flexDir={"row"} align={"center"}>
			<CardBody display={"flex"} gap={4} alignItems={"center"}>
				<Image
					src={ImageT}
					alt="Green double couch with wooden legs"
					borderRadius="full"
					w={"24"}
					h={"24"}
				/>
				<Heading color={"black"} fontSize="md">{props.card_heading}</Heading>
			</CardBody>
			<CardFooter>
				<IconButton
					color={"gray.500"}
					bgColor={"white"}
					icon={<IoIosArrowForward size={30} />}
					aria-label="heart"
				/>
			</CardFooter>
		</Card>
	);
}
