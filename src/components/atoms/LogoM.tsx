interface LogoProps {
    image: string;
}

export function LogoM(properties: LogoProps) {
	return (
		<>
			<img src={properties.image} alt="mericos-logo" />
		</>
	);
}