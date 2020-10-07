import { useState, useEffect } from 'react';

// enhanced useState which uses localStorage to keep the state after refreshing
export default function useStickyState( key, defaultValue )
{
    const [ value, setValue ] = useState( () => {

        // return the saved state if present, or defaultValue otherwise
        const stickyValue = window.localStorage.getItem( key );
        return stickyValue !== null ? JSON.parse( stickyValue ) : defaultValue;

    });

    useEffect( () => {

        // save the state to localStorage
        window.localStorage.setItem( key, JSON.stringify( value ));

    }, [ key, value ]);

    return [ value, setValue ];
}