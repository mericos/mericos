import { Box, Link, Text } from '@chakra-ui/react'

interface NavItemProps {
    link : string,
    text: string,
    color : string,
}

export function NavItem (props: NavItemProps) {
    return(
        <Link href={props.link} color={props.color} textDecoration="none"  fontSize={"body_size"}  padding={1} _hover={{backgroundColor: props.color, textColor:"white"}} px={2} >
            <Box width={"full"}>
                <Text>
                    {props.text}
                </Text>
            </Box>
        </Link>
    )
}