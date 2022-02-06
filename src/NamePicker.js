import {useState} from "react";

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
        {!editName && <span>{name}</span>}
        {!editName && <button className="Edit-button" onClick={reverse}>Edit</button>}
        {editName && <button onClick={reverse}>OK</button>}

        </header>
    );

}

export default NamePicker;