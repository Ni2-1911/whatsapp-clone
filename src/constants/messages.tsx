import { UserChatData } from "../types/type.common";
export const USER_CHAT_DATA: UserChatData = {
  id: "user_id_0",
  name: "Fujizumi Hokusaburo",
  profileImg:
    "https://cdn-icons-png.freepik.com/512/147/147137.png",
  chatData: {
    user_id_1: [
      {
        id: Date.now().toString() + "0",
        text: "Hii, How are you",
        time: new Date(Date.now()),
      },
      {
        id: Date.now().toString() + "1",
        text: "Or maybe not, let me check logistics and call you. Give me sometime",
        time: new Date(Date.now()),
      },
      {
        id: Date.now().toString() + "2",
        text: "Alright",
        time: new Date(Date.now()),
      },
    ],
    user_id_2: [
      {
        id: Date.now().toString() + "0",
        text: "hi",
        time: new Date(Date.now()),
      },
    ],
    user_id_3: [],
    user_id_4: [],
    user_id_5: [],
  },
};
