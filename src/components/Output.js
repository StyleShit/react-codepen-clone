import React from 'react'

export default function Output({ srcDoc })
{
    return (
        <div className="output-container">
            <iframe title="output" className={ srcDoc !== '' ? 'has-code' : '' } 
                    srcDoc={ srcDoc } />
        </div>
    )
}
