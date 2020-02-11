import React, { useState } from 'react';
import './index.scss'

function ModalFilter({ close, filterCallback }) {

    const [form, setForm] = useState({})

    const onInputChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        if (name === 'age' || name === 'weight') {
            setForm({ ...form, [name]: Number(value) })
        } else {
            let upLetter = value.substring(0, 1).toUpperCase()
            let lowLetters = value.substring(1).toLowerCase()
            setForm({ ...form, [name]: upLetter + lowLetters })
        }
    }

    return (
        <div className="modal">
            <a className="close" onClick={close}>
                &times;
        </a>
            <div className="header">Filter population</div>
            <div className="content">
                <input value={form.age} type="text" placeholder="Age" className="modalInput"
                    name="age" onChange={(e) => onInputChange(e)}></input>
                <input value={form.weight} type="text" placeholder="Weight" className="modalInput"
                    name="weight" onChange={(e) => onInputChange(e)}></input>
                <input value={form.height} type="text" placeholder="Hair color" className="modalInput"
                    name="hair_color" onChange={(e) => onInputChange(e)}></input>
                <input value={form.profession} type="text" placeholder="Profession" className="modalInput"
                    name="professions" onChange={(e) => onInputChange(e)}></input>
                <input value={form.friend} type="text" placeholder="Friend of" className="modalInput"
                    name="friends" onChange={(e) => onInputChange(e)}></input>
            </div>
            <button type='button' className="btn isChecked"
                onClick={() => {
                    filterCallback(form)
                    close()
                }}>
                Apply</button>
        </div>

    );
}

export default ModalFilter;