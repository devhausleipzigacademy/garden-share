import { Select } from "@chakra-ui/react";
import { useState } from "react";

type Props = {
  key: number;
};

const TaskDropDown = ({ key }: Props) => {
  return (
    <Select key={key} isRequired placeholder="Pick a task">
      <option value="option 1">watering</option>
      <option value="option 2">pruning</option>
      <option value="option 3">harvesting</option>
    </Select>
  );
};

export default TaskDropDown;
