import { Card, CardBody, Heading, Stack, HStack } from "@chakra-ui/react";
import { ReactElement, useState } from "react";

export interface CategoryCardProps {
	name: string;
	icon: ReactElement;
}

export function CategoryCard({
	name,
	icon,
}: CategoryCardProps) {
    const [ selected, setSelected] = useState(false)

    function handleSelection () {
		if (!selected) {
			setPrimaryColor("white")
			setBackground("primary.500")
		} else {
			setPrimaryColor("primary.500")
			setBackground("white")
		}
        setSelected(!selected)
    }
    const [primaryColor, setPrimaryColor] = useState("primary.500");
	// !selected ? "primary.500" : "white";
    const [ background, setBackground ] = useState("white");
	// !selected ? "white" : "primary.500"
	return (
		<Card
			w={"full"}
            height={"full"}
            minW={""}
			borderRadius={"full"}
			background={background}
            color={primaryColor}
            onClick={()=> handleSelection()}
            _hover={{transform: 'translateY(-5px)', transitionDuration: '0.5s', transitionTimingFunction: "ease-in-out"}}
            _active={{shadow:"inset 0 0 0 2px white"}}
			align={"center"}
			variant={"outline"}
		>
			<CardBody paddingY={"1"}>
				<Stack>
					<HStack >
						{icon}
						<Heading size="md">{name}</Heading>
					</HStack>
				</Stack>
			</CardBody>
		</Card>
	);
}
