import React from 'react';

// Codemirror 
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import { Controlled as CodeMirror } from 'react-codemirror2';


export default function Editor({ value, title, language })
{
    return (
        <div className="editor-container">
            
            <div className="editor-title">
                <h2>{ title }</h2>
                <button className="toggle-editor"></button>
            </div>

            <CodeMirror value={ value } options={{
                mode: language,
                theme: 'material',
                lineNumbers: true,
                indentWithTabs: true
            }} />

        </div>
    )
}
