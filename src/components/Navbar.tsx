import { Box, Flex, Text } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { NavItem } from "./atoms/NaviItem";
import mericosLogo from "../assets/logo/only-logo.svg";
import mericosLogoWhite from "../assets/logo/only-logo-white.svg";
import { ButtonM } from "./atoms/ButtonM";
import { HamburguerMenu } from "./molecules/HamburguerMenu";

interface NavbarProps {
  type?: "primary" | "secondary";
  size: "phone" | "laptop" | "universal";
  navigationState: "authenticated" | "not_authenticated" | "goBack";
}

function getNavItems(navState: NavbarProps["navigationState"]) {
  const navItems = [
    { name: "Menu", link: "" },
    { name: navState === "authenticated" ? "Encomenda" : "Login", link: "" },
    { name: navState === "authenticated" ? "Historico" : "Registro", link: "" },
  ];

  return navItems.filter((navItem) => navItem.name);
}

function NavbarLeft({ properties }: { properties: any }) {
  return (
    <Flex className="logo" alignItems="center" gap="0.625rem">
      <img src={properties.image} alt="mericos-logo" />
      <Text fontSize="card_heading_size" fontWeight="bold" color={properties.primaryColor}>
        Mericos
      </Text>
    </Flex>
  );
}

function NavbarRight({ properties, navProps }: { properties: any, navProps: NavbarProps }) {
  const { navigationState, size } = navProps
  const isPhone = size === "phone";

  if (isPhone) {
    if (navigationState === "authenticated") {
      return (
        <HamburguerMenu
          color={properties.background}
          background_color={properties.primaryColor}
          options={getNavItems(navigationState)}
        />
      );
    }

    return (
      <Flex direction="row" alignItems="center" gap={2}>
        <NavItem text="Menu" link="" color={properties.primaryColor} />
        <ButtonM children="Login" type={properties.buttonType} />
      </Flex>
    );
  }

  return (
    <Flex direction="row" alignItems="center" gap={10}>
      {getNavItems(navigationState).map((item) => (
        <NavItem
          key={item.name}
          text={item.name}
          link={item.link}
          color={properties.primaryColor}
        />
      ))}
    </Flex>
  );
}

export function Navbar(props: NavbarProps) {
  const isPrimaryType = props.type === "primary";

  const properties = {
    primaryColor: isPrimaryType ? "customColors.primary.500" : "white",
    background: isPrimaryType ? "white" : "customColors.primary.500",
    image: isPrimaryType ? mericosLogo : mericosLogoWhite,
    buttonType: props.type === "primary" ? "primary" : "secondary",
  };

  const backArrow = (
    <ArrowBackIcon color={properties.primaryColor} boxSize={6} />
  );

  return (
    <Box bg={properties.background} padding={2}>
      <Flex
        padding="0.65rem"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        maxWidth={"7xl"}
      >
        {props.navigationState !== "goBack" ? (
          <>
            {/* logo and company name */}
            <NavbarLeft properties={properties}/>
            {/* right side navbar part */}
            <NavbarRight properties={properties} navProps={props}/>
          </>
        ) : (
          // go back Navbar
          backArrow
        )}
      </Flex>
    </Box>
  );
}
