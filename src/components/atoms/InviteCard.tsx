import { Flex, Stack, Heading, Card, CardBody, IconButton, Image, Text } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";

export function InviteCard () {
    return (
       <Card
            maxW="full"
            flexDir={["column", "row", "row"]}
            align={"center"}
            _hover={{ cursor: "pointer", backgroundColor: "gray.50" }}
            >
            <CardBody
                padding={"1rem"}
                display={"flex"}
                flexDir={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                w={"full"}
            >
                <Flex gap={4}>
                    <Image
                        src="https://img2.gratispng.com/20200625/pzy/transparent-friendship-friends-5ef56cb6b9f165.7293367915931424547616.jpg"
                        alt="profile picture"
                        borderRadius="full"
                        maxW={"24"}
                        w={"3.75rem"}
                        h={"3.75rem"}
                    />
                    <Stack>
                        <Heading fontSize={["sm", "sm", "md"]}>
                            Invite friends and pay less
                        </Heading>
                        <Text>
                            invite a friend and ear free credits with
                            their first order
                        </Text>
                    </Stack>
                </Flex>
                <IconButton
                    bgColor={"white"}
                    color={"gray.500"}
                    icon={<IoIosArrowForward size={24}  />}
                    aria-label="heart"
                />
            </CardBody>
        </Card>
    )
}