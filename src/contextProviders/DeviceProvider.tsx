import { useBreakpointValue } from "@chakra-ui/react"
import React, { Context, PropsWithChildren, useContext } from "react"

type size = "phone" | "tablet" | "laptop" | "universal"
type authentication = "authenticated" | "not_authenticated"
const DeviceContext:Context<{size: "phone" | "tablet" | "laptop" | "universal", authentication: "authenticated" | "not_authenticated" }> = React.createContext<{size:size, authentication:authentication}>({size: "phone", authentication: "authenticated"})



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
    const authentication: authentication = "authenticated"
    return (
        <DeviceContext.Provider value={{size, authentication}}>
            {children}
        </DeviceContext.Provider>
    )

}

// eslint-disable-next-line react-refresh/only-export-components
export const useDeviceContext = ():{size:size, authentication:authentication} => useContext(DeviceContext)