import { useState, useEffect } from 'react';

const useDebounce = (value: string, timeout: number = 500) => {
    const [state, setState] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setState(value), timeout);

        return () => clearTimeout(handler);
    }, [value, timeout]);

    return state;
}

export { useDebounce }