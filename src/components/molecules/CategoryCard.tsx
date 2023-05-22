import { Card, CardBody, Heading, Stack, VStack } from "@chakra-ui/react";
import { ReactElement, useState } from "react";

export interface CategoryCardProps {
	name: string;
	icon: ReactElement;
}

export function CategoryCard({
	name,
	icon,
}: CategoryCardProps) {
    const [ selected, setSelected] = useState(true)

    function handleSelection () {
        setSelected(!selected)
    }
    const primaryColor = selected ? "primary.500" : "white";
    const background = selected ? "white" : "primary.500";
	return (
		<Card
			w={"full"}
            height={"full"}
            minW={"20"}
			borderRadius="md"
			background={background}
            color={primaryColor}
            onClick={()=> handleSelection()}
            _hover={{color:"white", background:"primary.500"}}
            _active={{shadow:"inset 0 0 0 2px white"}}
			align={"center"}
			variant={"outline"}
		>
			<CardBody>
				<Stack spacing={2}>
					<VStack justifyContent={"center"}>
						{icon}
						<Heading size="md">{name}</Heading>
					</VStack>
				</Stack>
			</CardBody>
		</Card>
	);
}
