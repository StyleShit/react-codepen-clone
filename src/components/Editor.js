import React from 'react';
import useStickyState from '../hooks/useStickyState';

// Codemirror 
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import { Controlled as CodeMirror } from 'react-codemirror2';


export default function Editor({ value, title, language, setValue, appPrefix })
{
    const [ isCollapsed, setCollapse ] = useStickyState( appPrefix + 'collapsed-' + language, false );

    return (
        <div className={ `editor-container ${ isCollapsed ? 'collapsed' : '' }` }>
            
            <div className="editor-title">
                <h2>{ title }</h2>
                <button className="toggle-editor" onClick={ ( e ) => {
                    setCollapse( prev => !prev );
                }}></button>
            </div>

            <CodeMirror value={ value } 
                onBeforeChange={( editor, data, value ) => {
                    setValue( value );
                }}
                options={{
                    mode: language,
                    theme: 'material',
                    lineNumbers: true,
                    indentWithTabs: true
                }} />

        </div>
    )
}
