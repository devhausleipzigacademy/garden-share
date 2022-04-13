import React, { useEffect, useState } from "react";
import Picker from "emoji-picker-react";
import AddEmoji from "./AddEmoji";
import { Flex, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { nanoid } from "nanoid"

interface emojiEvent {
  event: any;
  emojiObject: any;
}

interface EmojiProps {
  users?: string[], // ['id1', 'id2']
  emoji: string,
  count: number,
  emojiID: string,
}

interface EmojiPropsArray {
  userId: string;
  emojiProps: EmojiProps[];
}

const EmojiReaction = ({ userId, emojiProps }: EmojiPropsArray) => {
  const [emojis, setEmojis] = useState<EmojiProps[]>(emojiProps);
  const [pickerBox, setPickerBox] = useState(false);

  // const [chosenEmoji, setChosenEmoji] = useState(null);

  function renderComponent(emojiID: string) {
    console.log("render", ' emojiID:', emojiID);
    console.log('before', emojis)
    // const removed = emojis.splice(index, 1);
    // console.log('removed emoji',removed)
    const newEmojis = emojis.filter((emj) => emj.emojiID != emojiID);

    console.log('after', newEmojis)

    setEmojis(newEmojis);
  }

  const showPicker = () => {
    console.log("showPicker:clicked");
    setPickerBox(true);
  };

  const onEmojiClick = (_event: any, emojiObject: any) => {
    setPickerBox(false);
    // setChosenEmoji(emojiObject);

    setEmojis(() => {
      return [
        ...emojis,
        {
          users: [userId],
          count: 1,
          emoji: emojiObject.emoji,
          emojiID: nanoid(10),
        },
      ];
    });
  };
  /*
    const drawEmojis = emojis.map((emj, index) => {
      if (emj.count == 0) return;
      
      return (
        <AddEmoji
          key={index}
          index={index}
          emojiID={''} 
          userId={userId}
          users={emj.users}
          emoji={emj.emoji}
          count={emj.count}
          renderAgain={renderComponent}
        />
      );
    });
    */
  return (
    <>
      <Flex gap={2} userSelect={"none"} cursor={"pointer"} padding={2}>
        {
          emojis.map((emj, index) => {

            return (
              <AddEmoji
                key={index}
                index={index}
                emojiID={emj.emojiID}
                userId={userId}
                users={emj.users}
                emoji={emj.emoji}
                count={emj.count}
                renderAgain={renderComponent}
              />
            );
          })

        }

        <span onClick={showPicker}>
          <IconButton icon={<AddIcon />} aria-label={""} size={"sm"} />
        </span>
      </Flex>
      {pickerBox && <Picker onEmojiClick={onEmojiClick} />}
    </>
  );
};

export default EmojiReaction;
