import React, { Component } from 'react'
const DUMMY_DATA = [
  {
  senderId: 'perborgen',
  text: 'Hey, how is it going?'
},
{
  senderId: 'janedoe',
  text: 'Yer good and you'
},
{
  senderId: 'perborgen',
  text: 'Good to hear! I am good as well'
}
]  

class MessageList extends Component {
  render() {
    return (
      <div>
        { DUMMY_DATA.map((message, index) => {
          return (
            <div key={index}>
            {`${message.senderId}: `}
            {message.text}
            </div>
          )
        })
      }
      </div>
    )
  }
}
export default MessageList