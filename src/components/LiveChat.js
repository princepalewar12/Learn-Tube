import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      console.log("API Polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20)
            
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);
  return (
    <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      {/* Don't use index as a key */}
      {chatMessages.map((chat,index)=><ChatMessage key={index} name={chat.name} message={chat.message}/> )}
    </div>
  );
};

export default LiveChat;
