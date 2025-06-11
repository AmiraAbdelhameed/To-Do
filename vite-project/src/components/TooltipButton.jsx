import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';

function TooltipButton() {
    const [showTooltip, setShowTooltip] = useState(false);
    const buttonRef = useRef(null);
    const tooltipRef = useRef(null);

    useEffect(() => {
        if (showTooltip) {
            const button = buttonRef.current;
            const tooltip = tooltipRef.current;
            // Get button's position
            const { top, left, width } = button.getBoundingClientRect();
            // Position tooltip above button
            tooltip.style.position = 'absolute';
            tooltip.style.top = `${top - 30}px`; // 30px above button
            tooltip.style.left = `${left + width / 2}px`; // Centered horizontally
        }
    }, [showTooltip]); // Run when showTooltip changes

    return (
        <div>
            <button ref={buttonRef} onClick={() => setShowTooltip(!showTooltip)}>
                Toggle Tooltip
            </button>
            {showTooltip && (
                <div ref={tooltipRef} style={{ background: 'lightgray', padding: '5px' }}>
                    This is a tooltip i can increase text inside it easily !
                </div>
            )}
        </div>
    );
}

export default TooltipButton;