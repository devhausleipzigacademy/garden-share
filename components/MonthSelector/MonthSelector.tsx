import { HStack, IconButton, Text } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { monthArray, currentMonth } from "../../utils/date";

const MonthSelector = () => {
  const [monthIndex, setMonthIndex] = useState(currentMonth);
  return (
    <HStack spacing={2}>
      <IconButton
        color="#FFFBFA"
        bg="#27BBAD"
        aria-label="Previous Month"
        icon={<TriangleDownIcon style={{ transform: "rotate(90deg)" }} />}
        isRound
        isDisabled={monthIndex === 0}
        onClick={() => setMonthIndex(monthIndex - 1)}
      />
      <Text w={20} textAlign="center">
        {monthArray[monthIndex]}
      </Text>
      <IconButton
        color="#FFFBFA"
        bg="#27BBAD"
        aria-label="Next Month"
        icon={<TriangleDownIcon style={{ transform: "rotate(-90deg)" }} />}
        isRound
        isDisabled={monthIndex >= monthArray.length - 1}
        onClick={() => setMonthIndex(monthIndex + 1)}
      />
    </HStack>
  );
};
export default MonthSelector;
