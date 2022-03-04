import {useState} from "react";
import {RiEdit2Fill} from 'react-icons/ri';
import {IoIosCheckmarkCircle} from 'react-icons/io';
import './App.css';

function NamePicker(props) {
    const [editName, setEditName] = useState(false);
    const [name, setName] = useState('Set Username:');

    // const editing = (text) => setName(text);
    //
    // function finish() {
    //     editing(text);
    //     setName("");
    // }

    function reverse() {
        setEditName(!editName);
        // setName(document.getElementById(input-box));
    }
    
    function ok() {
        props.setName(name);
        setEditName(!editName);
    }

    const inputChange = (e) => setName(e.target.value)
    
    return (
        <header className="NamePicker">
        {editName && <input onChange={(e)=>inputChange(e)}
                             className="name-input" />}
        {!editName && <span className="name-show">{name}</span>}
        {!editName && <button className="Edit-button" onClick={reverse}>< RiEdit2Fill style={{height:15, width:15}} /></button>}
        {editName && <button onClick={ok}>< IoIosCheckmarkCircle style={{height:15, width:15}} /></button>}

        </header>
    );

}

export default NamePicker;