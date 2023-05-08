import { HamburgerIcon } from "@chakra-ui/icons"
import { useDisclosure, Button, Drawer, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Input, DrawerFooter, Radio, RadioGroup, Stack } from "@chakra-ui/react"
import React from "react"

interface HamburgerProps {
  color: string;
  background_color: string
}

export function HamburguerMenu(props: HamburgerProps) {
  const [size, setSize] = React.useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()




  return (
    <>
      <HamburgerIcon
                color={props.background_color}
                boxSize={6}
                cursor="pointer"
                onClick={() => onOpen()}
              />

      <Drawer onClose={onClose} isOpen={isOpen} size={"full"} >
        <DrawerContent color={props.color} bgColor={props.background_color} >
          <DrawerCloseButton />
          <DrawerHeader>Opções</DrawerHeader>
          <DrawerBody >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Consequat nisl vel pretium lectus quam id. Semper quis lectus
              nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus
              quis varius quam quisque. Massa ultricies mi quis hendrerit dolor
              magna eget est lorem. Erat imperdiet sed euismod nisi porta.
              Lectus vestibulum mattis ullamcorper velit.
            </p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}