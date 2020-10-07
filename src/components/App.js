import React, { useState, useEffect } from 'react';
import useStickyState from '../hooks/useStickyState';
import Editor from './Editor';
import Output from './Output';
import './css/App.css';


function App() 
{
	// prefix for local storage keys
	const APP_PREFIX = 'codepen-clone_';

	// code handlers
	const [ htmlCode, setHtmlCode ] = useStickyState( APP_PREFIX + 'html-code', '' );
	const [ cssCode, setCssCode ] 	= useStickyState( APP_PREFIX + 'css-code', '' );
	const [ jsCode, setJsCode ] 	= useStickyState( APP_PREFIX + 'js-code', '' );

	const [ output, setOutput ] = useState( '' );

	// handle code changes and change the output accordingly
	useEffect( () => {

		// wait for user to stop typing to prevent too many updates
		const timeouut = setTimeout( () => {

			if( htmlCode.trim() !== '' || cssCode.trim() !== '' || jsCode.trim() !== '' )
			{
				setOutput( `
				<style>${ cssCode }</style>
				<script>${ jsCode }</script>
				<body>${ htmlCode }</body>
			` );
			}

			// this is actually just to make the iframe colored again if there is no code
			else
			{
				setOutput( '' );
			}

		}, 300);

		return() => {
			clearTimeout( timeouut );
		}

	}, [ htmlCode, cssCode, jsCode ]);


	return (
		<div className="codepen-clone">
			<div className="editors-pane">
				<Editor title="HTML" language="xml" value={ htmlCode } setValue={ setHtmlCode } />
				<Editor title="CSS" language="css" value={ cssCode } setValue={ setCssCode } />
				<Editor title="JS" language="javascript" value={ jsCode } setValue={ setJsCode } />
			</div>

			<div className="output-pane">
				<Output srcDoc={ output } />
			</div>
		</div>
	);
}

export default App;
