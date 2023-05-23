import { HamburgerIcon } from "@chakra-ui/icons"
import { useDisclosure, Drawer, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Flex } from "@chakra-ui/react"
import { NavItem } from "../atoms/NaviItem";

interface HamburgerProps {
  color: string;
  background_color: string;
  options: Array<{name:string,link:string}>;
}

export function HamburguerMenu(props: HamburgerProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()




  return (
    <>
      <HamburgerIcon
                color={props.background_color}
                boxSize={6}
                cursor="pointer"
                onClick={() => onOpen()}
              />

      <Drawer onClose={onClose} isOpen={isOpen} size={"xs"} >
        <DrawerContent color={props.color} bgColor={props.background_color} >
          <DrawerCloseButton />
          <DrawerHeader>Opções</DrawerHeader>
          <DrawerBody >
            <Flex direction={"column"} gap={"2"}>
              {props.options.map((option) => {
                return (
                  <NavItem key={option.name} text={option.name} link={option.link} color={props.color}/>
                )
              })}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}