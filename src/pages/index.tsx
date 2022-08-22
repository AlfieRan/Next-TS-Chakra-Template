import { Box, Center, Text} from "@chakra-ui/react";
import useApi from "../utils/hooks/useApi";

const Page = () => {
    const api = useApi();

    return (
        <Box h={"100vh"} w={"100%"}>
            <Center h={"full"} w={"full"} flexDir={"column"}>
                <Text>This is your index page :)</Text>
                <Text color={api.apiError ? "red.500" : "white"} fontSize={"sm"}>Api data: {api.apiData}</Text>
            </Center>
        </Box>
    );
};

export default Page;