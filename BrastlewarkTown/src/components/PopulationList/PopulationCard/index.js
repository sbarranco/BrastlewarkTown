import React, { useState} from 'react';

function PopulationCard({item}) {

    const [flipped, setFlipped] = useState(false)
    const [clicked, setClicked] = useState(false)

    const isFlip = () => {
        setFlipped(!flipped)
        setClicked(!clicked)
    }

    const style = {
        backgroundSize: '100%',
        backgroundImage: 'url(' + item.thumbnail + ')',
        backgroundRepeat: 'noRepeat',
        backgroundPosition: 'center top'

    };

  return (

        <div>
            <div style={style} className="card" onClick={isFlip}>
                <div  className="front">
                <h5>{item.name}</h5>
                </div>
                <div className="back">

                </div>
            </div>
        </div>


  );
}

export default PopulationCard;