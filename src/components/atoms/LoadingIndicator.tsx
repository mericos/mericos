import { CircularProgress, CircularProgressLabel, Flex } from '@chakra-ui/react'
import mericosLogo from "../../assets/logo/only-logo.svg";
export function LoadingIndicator() {
    return (
		<>
			<CircularProgress
				isIndeterminate
				color="primary.500"
				thickness="16px"
				size="220px"
			>
				<CircularProgressLabel>
					<Flex position={'relative'} left={"20"}>
						<img src={mericosLogo} alt="" />
					</Flex>
				</CircularProgressLabel>
			</CircularProgress>
		</>
	);
}