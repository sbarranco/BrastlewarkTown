import React, {useState} from 'react';
import PopulationCard from "./PopulationCard";
import Pagination from '../Commons/Pagination'
import './index.scss'

function PopulationList({data}) {

    const [pag, setPag] = useState(1)    

    const onPagination = (pag) => {
    setPag(pag)
    }
    let dataPerPag = data.slice( (pag - 1) * 16, ((pag - 1) * 16) + 16)

    return (
        <div className='profileList'>
            {!!dataPerPag && dataPerPag.map((item, index) => {
                return (
                    <PopulationCard item={item} key={index}/>
                )
            }) }
            {data.length > 16 ? <Pagination
                total={data.length}
                itemsPag={16}
                pag={pag}
                onPagination={onPagination}/> : null}

        </div>
    );
}

export default PopulationList;