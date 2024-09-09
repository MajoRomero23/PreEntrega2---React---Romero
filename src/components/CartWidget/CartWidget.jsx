import { Flex, Text } from "@chakra-ui/react";
import { MdOutlineShoppingCart } from "react-icons/md";


export const CartWidget = () => {
    return (
        <Flex alignItems={"center"} height={"100%"} justifyContent={"space-between"} width={"3.75rem"}> 
            <MdOutlineShoppingCart size={"1.875rem"} color="blue"/>
            <Text fontSize={"1.25rem"} >12</Text>
        </Flex>
    );
};

