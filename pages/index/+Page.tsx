import { Counter } from "./Counter.js";
import { Center, Container, Title } from "@mantine/core";

export default function Page() {
	return (
		<Center h={"100dvh"}>
			<Container>
				<Title mb={"xl"}>My Vike + Mantine app</Title>
				<Center>
					<Counter />
				</Center>
			</Container>
		</Center>
	);
}
