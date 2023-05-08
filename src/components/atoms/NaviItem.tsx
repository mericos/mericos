import { Box, Link } from '@chakra-ui/react'

interface NavItemProps {
    link : string,
    text: string,
    color : string,
}

export function NavItem (props: NavItemProps) {
    return(
        <Link href={props.link} color={props.color}  fontSize={"body_size"} fontWeight={"bold"} borderBottom={"1px"} padding={1}>
            <Box  paddingX={"1"} width={"full"}>
                {props.text}
            </Box>
        </Link>
    )
}