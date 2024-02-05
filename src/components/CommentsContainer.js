import React from "react";
import { USER_ICON_URL } from "../utils/constants";

const commentsData = [
  {
    name: "Prince Palewar",
    text: "lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Prince Palewar",
    text: "lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Prince Palewar",
        text: "lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Prince Palewar",
        text: "lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Prince Palewar",
        text: "lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Prince Palewar",
            text: "lorem ipsum dolor sit amet, consectetur adip",
            replies: [],
          },
          {
            name: "Prince Palewar",
            text: "lorem ipsum dolor sit amet, consectetur adip",
            replies: [],
          },
          {
            name: "Prince Palewar",
            text: "lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Prince Palewar",
                text: "lorem ipsum dolor sit amet, consectetur adip",
                replies: [],
              },
              {
                name: "Prince Palewar",
                text: "lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Prince Palewar",
                    text: "lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Prince Palewar",
                        text: "lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                      {
                        name: "Prince Palewar",
                        text: "lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Prince Palewar",
                    text: "lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Prince Palewar",
    text: "lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Prince Palewar",
    text: "lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Prince Palewar",
    text: "lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Prince Palewar",
    text: "lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img src={USER_ICON_URL} alt="user-icon" className="w-12 h-12" />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="ml-6 pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
