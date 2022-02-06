import {useState} from "react";

function NamePicker(props) {
    const [editName, setEditName] = useState(false);
    const [name, setName] = useState('');
    function editing(text) {
        const newname = {
            text
        }
        setName(text);
    }
    function finish() {
        props.editing(text);
        setName("");
    }

    function reverse() {
        setEditName = !setEditName;
        setName = document.querySelector('input');
    }

    return (
        <header className="NamePicker">
        {!editName && <input className="name-input" 
                value ={text}
                onChange={(e) => setName(e.target.value)}
        />}
        {editName && <input>{name}</input>}
        {editName && <Button onClick={reverse}>Edit</Button>}
        {!editName && <Button onClick={reverse}>OK</Button>}
        
        </header>
    );

}

export default NamePicker;