import { useBreakpointValue } from "@chakra-ui/react"
import React, { Context, PropsWithChildren, useContext } from "react"

type size = "phone" | "tablet" | "laptop" | "universal"
const DeviceContext:Context<"phone" | "tablet" | "laptop" | "universal"> = React.createContext<size>("phone")



export const DeviceProvider = ({children}: PropsWithChildren) => {
    const size: size = useBreakpointValue(
        {
            base: 'phone',
            sm: 'tablet',
            md: 'laptop',
            xl: "universal",
		},
		{
            // Breakpoint to use when media queries cannot be used, such as in server-side rendering
            // (Defaults to 'base')
            fallback: 'md',
		},
        ) ?? "phone"
    return (
        <DeviceContext.Provider value={size}>
            {children}
        </DeviceContext.Provider>
    )

}

// eslint-disable-next-line react-refresh/only-export-components
export const useDeviceContext = ():size => useContext(DeviceContext)