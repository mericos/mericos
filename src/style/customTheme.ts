import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
	colors: {
		primary: "#E85D04",
		secondary: "#FF9244",
		tertiary: "#F9C784",
		background: "#E7E7E7",
		sucess: "#485696",
		text_color_dark: "#6A6A6A",
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
					bg: "primary",
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
					color: "#E85D04",
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
	},
});

// export default customTheme;
