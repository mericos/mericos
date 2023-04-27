import { extendTheme } from "@chakra-ui/react";

const customColors = {
	primary: {
		50: "#ffeedc",
		100: "#ffd0af",
		200: "#ffb180",
		300: "#fd934f",
		400: "#fb741d",
		500: "#E85D04",
		600: "#b04501",
		700: "#7e3100",
		800: "#4d1c00",
		900: "#1f0700",
	},
	secondary: {
		normal: "#FF9244",
	},
	tertiary: {
		normal: "#F9C784",
	},
	background: {
		normal: "#E7E7E7",
	},
	sucess: {
		normal: "#485696",
	},
	text_color_dark: {
		normal: "#6A6A6A",
	},
};

export const customTheme = extendTheme({
	colors: {
		customColors,
		// primary: "#E85D04",
	},
	fontSizes: {
		sub_heading_size: "2.441rem",
		taglines_size: "1.953rem",
		body_size: "1rem",
		card_heading_size: "1.25rem",
	},
	components: {
		Button: {
			// default styles for solid buttons
			baseStyle: {
				borderRadius: "0.25rem",
				padding: "0.3125rem 1.5rem",
			},
			variants: {
				// styles for solid buttons with brand color
				primary: {
					bg: "customColors.primary.500",
					color: "white",
					_hover: {
						bg: "brand.400",
						boxShadow: "0px 4px 4px 1px rgba(255, 106, 0, 0.25)",
					},
					_active: {
						boxShadow: "inset 2px 2px 4px 4px rgba(0, 0, 0, 0.25)",
					},
					_disabled: {
						bg: "rgba(255, 106, 0, 0.5)",
					},
				},
				// styles for outline buttons with brand color
				secondary: {
					bg: "#FFFFFF",
					color: "customColors.primary.500",
					border: "1px solid",
					_hover: {
						boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
					},
					_active: {
						boxShadow: "inset 2px 2px 4px 4px rgba(0, 0, 0, 0.25)",
					},
				},
			},
		},
		Checkbox: {
			baseStyle: {
				control: {
					borderColor: "customColors.primary.500",
				},
			},
		},
	},
});

// export default customTheme;
