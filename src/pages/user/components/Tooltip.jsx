import React, { useState } from 'react'
import styles from "./Tooltip.module.css"

function Tooltip({ children, TooltipText}) {
    const [isVisible, setIsVisible] = useState(false); 

    const ShowTooltip = () => {
        setIsVisible(true); 
    }

    const HideTooltip = () => {
        setIsVisible(false); 
    }
    return (
        <div className={styles.container} onMouseEnter={ShowTooltip} onMouseLeave={HideTooltip} >
            {children} 
            {isVisible && <div className={styles.tooltip}>{TooltipText}</div>}
        </div>
    )
}

export default Tooltip