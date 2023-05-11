import { useBreakpointValue } from "@chakra-ui/react"
import React, { PropsWithChildren, useContext, useState } from "react"

const DeviceContext = React.createContext('phone')



export const DeviceProvider = ({children}: PropsWithChildren) => {
    const size: "phone" | "laptop" | "universal" = useBreakpointValue(
        {
            base: 'phone',
            sm: 'laptop',
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

export const useDeviceContext = () => useContext(DeviceContext)