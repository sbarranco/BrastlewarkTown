import React, {useEffect, useContext} from 'react';
import PopulationCard from "./PopulationCard";
import './index.scss'

function PopulationList({data}) {

    //pagination y contenedor pagina

    return (
        <div className='profileList'>
            {!!data && data.map((item, index) => {
                return (
                    <PopulationCard item={item} key={index}/>
                )
            }) }

        </div>
    );
}

export default PopulationList;