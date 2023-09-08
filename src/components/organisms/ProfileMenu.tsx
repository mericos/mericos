import { Button, Flex } from "@chakra-ui/react";
import { CardProfile } from "../molecules/CardProfile";
import ImageT from "../../assets/ImagePC.png";
import { useState } from "react";

export function ProfileMenu() {
	const card_titles = ["My account", "Billing/Payment", "My locations"];
	const [selectedType, setSelectedType] = useState("");

	const handleTypeClick = (title: string) => {
		setSelectedType(title);
		console.log(title);
	};
	return (
		<>
			<Flex w={"full"} gap={2} flexDir={"column"}>
				{card_titles.map((title) => (
					<CardProfile
						text_color={title === selectedType ? "white" : "black"}
						onClick={() => handleTypeClick(title)}
						backgroundColor={
							title === selectedType
								? "primary.500"
								: "transparent"
						}
						h={"fit-content"}
						_hover={
							title !== selectedType
								? { backgroundColor: "gray.50" }
								: {}
						}
						key={title}
						card_heading={title}
						card_image={ImageT}
					/>
				))}
			</Flex>
		</>
	);
}
