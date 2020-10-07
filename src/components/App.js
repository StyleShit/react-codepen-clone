import React, { useState, useEffect } from 'react';
import Editor from './Editor';
import Output from './Output';
import './css/App.css';


function App() {
	return (
		<div className="codepen-clone">
			<div className="editors-pane">
				<Editor title="HTML" language="xml" value="" />
				<Editor title="CSS" language="css" value="" />
				<Editor title="JS" language="javascript" value="" />
			</div>

			<div className="output-pane">
				<Output srcDoc="" />
			</div>
		</div>
	);
}

export default App;
