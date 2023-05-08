import { Box, Link } from '@chakra-ui/react'

interface NavItemProps {
    link : string,
    text: string,
    color : string,
}

export function NavItem (props: NavItemProps) {
    return(
        <Box  paddingX={"1"}>
            <Link href={props.link} color={props.color}  fontSize={"body_size"} fontWeight={"bold"}>{props.text}</Link>
        </Box>
    )
}