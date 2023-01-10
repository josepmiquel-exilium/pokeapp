import { FastAverageColor } from 'fast-average-color';
import { useEffect, useState } from 'react';
import { useAppContext } from './useAppContext';

const fac = new FastAverageColor();

export default function useAverageColor(imageUrl) {
    const [color, setColor] = useState('');
    const [gradient, setGradient] = useState('');
    const { setLoading } = useAppContext();

    useEffect(() => {
        fac.getColorAsync(imageUrl)
            .then((color) => {
                setColor(color.hex);

                const colorEnd = [...color.value.slice(0, 3), 0].join(',');
                setGradient(`linear-gradient(to bottom, rgba(${colorEnd}) 0%, ${color.rgba} 100%)`);
            })
            .catch((e) => {
                console.log(e);
            });
    }, [imageUrl]);

    return { gradient, color };
}
