import {useState} from "react";
import './App.css';

function TextInput(props) {
    const[text, setText] = useState("");

    function send() {
        props.sendMessage(text);
        setText("");
    }

    return(
        <footer className="footer">
        <input className="text-input" 
                value ={text}
                onChange={(e) => setText(e.target.value)}
        />
        <button className="send" onClick={send}>
        <img src="https://image.pngaaa.com/722/946722-middle.png" alt ="button" class="send" />
        </button>
      </footer>
    );
}

export default TextInput;