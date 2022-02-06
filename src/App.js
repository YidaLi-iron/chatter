import './App.css';
import TextInput from "./TextInput";
import Message from "./Message";
import {useState} from "react";
import Camera from 'react-snap-pic';
import NamePicker from "./NamePicker";


function App() {
  const [showCamera, setShowCamera] = useState(false)
  const [messages, setMessages] = useState([]);
  function sendMessage(text) {
    const newMessage = {
      text
    }
    setMessages([...messages, newMessage]);
  }
  console.log(messages);
  let takePicture = (img) => {
    console.log(img)
    setShowCamera(false)
  } 
  return (
    <div className="App">
      <header className="header">
      <img src="https://images-platform.99static.com//TegOP6NNSiJl_eenYyYgrtdNvjI=/0x0:1000x1000/fit-in/500x500/projects-files/50/5077/507780/372ed020-e22a-4a27-b37b-d5e47750893c.png" class="logo linear infinite" width="3.5rem" height="3.5rem" />
        <span className="title">LiveChat!</span>
        <NamePicker></NamePicker>;
      </header>
      <div className='messages'>
        {messages.map((msg) => {
          return <Message {...msg}></Message>;
        })}
      </div>
      {showCamera && <Camera takePicture={this.takePicture} />}
      <TextInput sendMessage={sendMessage} 
     showCamera={()=>setShowCamera(true)}
    />

    </div>
  );
}

export default App;
