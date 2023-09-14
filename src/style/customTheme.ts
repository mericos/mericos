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
	light_surface: {
		normal: "#FBE9E7",
	}
};

export const customTheme = extendTheme({
	shadows: {
		customShadow:
			"0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30);",
	},
	styles: {
		global: () => ({
			/* width */
			"::-webkit-scrollbar": {
				width: "8px",
				height: "4px",
			},

			/* Track */
			"::-webkit-scrollbar-track": {
				background: "gray.200",
			},

			/* Handle */
			"::-webkit-scrollbar-thumb": {
				background: "primary.200",
			},

			/* Handle on hover */
			"::-webkit-scrollbar-thumb:hover": {
				background: "primary.400",
			},
		}),
	},
	colors: {
		...customColors,
	},
	components: {
		Button: {
			// default styles for solid buttons
			baseStyle: {
				borderRadius: "2rem",
				padding: "0.3125rem 1.5rem",
			},
			variants: {
				// styles for solid buttons with brand color
				primary: {
					bg: "primary.500",
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
					color: "primary.500",
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
					borderColor: "primary.500",
				},
			},
		},

		Input: {
			baseStyle: {
				borderColor: "gray.300",
				_focus: {
					borderColor: "blue.500",
					boxShadow: "0 0 0 1px blue.500",
				},
			},
		},
		Heading: {
			baseStyle: {
				fontSize: ["sm", "md"],
				fontWeight: "normal",
				color: "primary.500",
			},
		},
		Text: {
			baseStyle: {
				fontWeight: "light",
				fontSize: ["sm", "lg"]
			},
		},
	},
});
