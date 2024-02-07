import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const ChatSlice = createSlice({
  name: "chat",
  initialState: {
    messages:[]
  },
  reducers: {
    addMessage: (state, action) => {
        state.messages.slice(LIVE_CHAT_COUNT,5)
        state.messages.push(action.payload)
    },
  },
});

export const { addMessage } = ChatSlice.actions;
export default ChatSlice.reducer;
