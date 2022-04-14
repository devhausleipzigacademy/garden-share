import type { NextPage } from "next";
import {
  Stack,
  HStack,
  VStack,
  Box,
  Collapse,
  Button,
  Image,
  Center,
  Flex,
  Text,
  Spacer,
  IconButton,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import TaskSelectorIcons from "./TaskSelectorIcons";
import TaskTypeIcons from "./TaskTypeIcons";

type User = {
  name: string;
  image: string;
};

type Task = {
  title?: string;
  content?: string;
  date?: string;
  user?: User;
  tasktype: "watering" | "weeding" | "pruning" | "building";
  status: "unchecked" | "checked";
};

const colors = {
  buttons: "#27BBAD",
  offwhite: "#FFFBFA",
  text: "#401743",
};

const TaskSelector = ({
  title,
  content,
  date,
  user,
  status,
  tasktype,
}: Task) => {
  const [check, setCheck] = React.useState();
  return (
    <>
      <Center>
        <Flex
          backgroundColor={colors.offwhite}
          w="66%"
          px="6"
          py="6"
          flexDirection="column"
          gap="2"
          borderRadius={15}
          boxShadow="md"
          textColor={colors.text}
        >
          <Flex justify="space-between" align="center">
            {tasktype === "watering" && <TaskTypeIcons iconName={tasktype} />}
            {tasktype === "weeding" && <TaskTypeIcons iconName={tasktype} />}
            {tasktype === "pruning" && <TaskTypeIcons iconName={tasktype} />}
            {tasktype === "building" && <TaskTypeIcons iconName={tasktype} />}
            {!tasktype && <Box>Image</Box>}
            <Box>Task Name</Box>
            {status === "checked" && <TaskSelectorIcons iconName={status} />}
            {status === "unchecked" && <TaskSelectorIcons iconName={status} />}
          </Flex>
        </Flex>
      </Center>
    </>
  );
};

export default TaskSelector;
