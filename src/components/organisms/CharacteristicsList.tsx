import { SimpleGrid } from "@chakra-ui/react"
import { CharacteristicCard, CharacteristicCardProps } from "../molecules/CharacteristicCard"

interface CharacteristicsListProps {
    characteristics : Array<CharacteristicCardProps>
}

export function CharacteristicsList(props: CharacteristicsListProps) {
    const {characteristics} = props
    const characteristicsCards = characteristics.map( ({heading, description, icon}) => <CharacteristicCard key={"heading"} heading={heading} description={description} icon={icon}/>)
    return (
        <SimpleGrid spacing={"2"} minChildWidth={140}  margin={1} >
            {characteristicsCards}
        </SimpleGrid>
    )
}