import React, { useState } from 'react';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';
import Popup from "reactjs-popup";
import ModalFilter from './ModalFilter';

function SearchFilter({ data, callBack }) {

    const [searchValue, setSearchValue] = useState('')
    const [isClicked, setIsClicked] = useState('all')

    const onSubmit = () => {
        let newData = data.filter(item =>
            item.name.toLowerCase().includes(searchValue.toLowerCase()))
        callBack(newData)
    }

    const filterBtn = (type) => {
        let newData = []
        switch (type) {
            case "all":
                callBack(data)
                break;
            case "popular":
                newData = data.filter(item => item.friends.length > 3)
                callBack(newData)
                break;
            case "oldest":
                newData = data.filter(item => item.age > 350)
                callBack(newData)
                break;
            case "workers":
                newData = data.filter(item => item.professions.length > 6)
                callBack(newData)
                break;
            default:
                callBack(data)
                break;
        }
    }

    const applyFilter = (form) => {
        setIsClicked('filter')
        let filtered = data.filter(obj => {
            for (let key in form) {
                if ((typeof obj[key] === 'number' && obj[key] !== form[key]) ||
                    typeof obj[key] === 'string' && obj[key] !== form[key]) {
                    return false
                }
                if (typeof obj[key] === 'object' && !obj[key].includes(form[key])) {
                    return false
                }
            }
            return true;
        });
        callBack(filtered)

    }

    return (
        <div>
            <form>
                <div className="search">
                    <input type="text" name="search" placeholder="Search for name..." className="searchInput"
                        value={searchValue} onChange={(e) => {
                            setSearchValue(e.target.value)
                            onSubmit()
                        }} />
                    <button type="button" className="searchBtn" onClick={onSubmit}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                <div className="btnGroup">
                    <button type="button" className={"btn " + (isClicked === 'all' && "isChecked")}
                        onClick={() => {
                            setIsClicked("all")
                            filterBtn("all")
                        }}>Show all</button>
                    <button type="button" className={"btn " + (isClicked === "popular" && "isChecked")}
                        onClick={() => {
                            setIsClicked("popular")
                            filterBtn("popular")
                        }}>
                        Most popular</button>
                    <button type="button" className={"btn " + (isClicked === "oldest" && "isChecked")}
                        onClick={() => {
                            setIsClicked("oldest")
                            filterBtn("oldest")
                        }}>
                        The oldest</button>
                    <button type="button" className={"btn " + (isClicked === "workers" && "isChecked")}
                        onClick={() => {
                            setIsClicked("workers")
                            filterBtn("workers")
                        }}>
                        Hardworkers</button>
                    <Popup modal trigger={<button type="button" className={"btn " + (isClicked === "filter" && "isChecked")}>Filter
                            <FontAwesomeIcon icon={faFilter} size='xs' className="icon" />
                    </button>}>
                        {close => <ModalFilter close={close} filterCallback={(form) => applyFilter(form)} />}
                    </Popup>
                </div>
            </form>
        </div>
    );
}

export default SearchFilter;