import {useState} from "react";
import {RiEdit2Fill} from 'react-icons/ri';
import {IoIosCheckmarkCircle} from 'react-icons/io';
import './App.css';

function NamePicker() {
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
    

    const inputChange = (e) => setName(e.target.value)
    
    return (
        <header className="NamePicker">
        {editName && <input onChange={(e)=>inputChange(e)}
                             className="name-input" />}
        {!editName && <span className="name-show">{name}</span>}
        {!editName && <button className="Edit-button" onClick={reverse}>< RiEdit2Fill style={{height:15, width:15}} /></button>}
        {editName && <button onClick={reverse}>< IoIosCheckmarkCircle style={{height:15, width:15}} /></button>}

        </header>
    );

}

export default NamePicker;