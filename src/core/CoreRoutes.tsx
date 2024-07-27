import { RouteObject } from 'react-router-dom';
import ChatRoom from './chatroom';
import Chat from './chat';

const CoreRoutes : RouteObject[]=[
  {
    path: "room/:room",
    element: <ChatRoom />
  },
  {
    path: "chat/:toUser",
    element: <Chat />
  }
  
]

export default CoreRoutes