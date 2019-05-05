import React, {Component} from 'react';
import MessageList from "./components/MessageList.js"
import SendMessageForm from "./components/SendMessageForm.js"
import RoomList from "./components/RoomList.js"
import NewRoomForm from "./components/NewRoomForm.js"
import './App.css';

class App extends Component {
  render() {
     return (
         <div className="app">
           <MessageList />
           <SendMessageForm />
           <RoomList />
           <NewRoomForm />
         </div>
       );
     }
  }

export default App;
