import {useState} from "react";
import './App.css';
import { FiSend, FiCamera } from 'react-icons/fi';

function TextInput(props) {
    const[text, setText] = useState("");

    function send() {
        props.sendMessage(text);
        setText("");
    }

    return(
        <footer className="footer">
        <button onClick={props.showCamera}
    style={{left:10, right:'auto'}}>
    <FiCamera style={{height:15, width:15}} />
    </button>
        <input className="text-input" 
                value ={text}
                onChange={(e) => setText(e.target.value)}
        />

        <div onClick={send}>
        <img src="https://image.pngaaa.com/722/946722-middle.png" alt ="button" class="send" />
        </div>
      </footer>
    );
}

export default TextInput;