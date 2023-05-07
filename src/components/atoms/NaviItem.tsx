import { Link } from '@chakra-ui/react'

interface NavItemProps {
    link : string,
    text: string,
    color : string,
}

export function NavItem (props: NavItemProps) {
    return(
        <Link href={props.link} color={props.color}>{props.text}</Link>
    )
}