import React from 'react'
import PacmanLoader from "react-spinners/PulseLoader";
import LoadingOverlay from "react-loading-overlay";

function Loader({isLoading, children}) {

    return (
        <LoadingOverlay active={isLoading} spinner={<PacmanLoader color={"#FFDA36"} margin={'3px'}/>}
                        styles={{
                            overlay: (base) => ({
                                ...base,
                                background: 'rgba(255,255,255,0.5)',
                                position: 'fixed'
                            }),
                            wrapper: {margin: '0'}
                        }}>
            {children}
        </LoadingOverlay>
    )
}

export default Loader;