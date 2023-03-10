import { useEffect, useState } from 'react';
import { FastAverageColor } from 'fast-average-color';

const fac = new FastAverageColor();

export default function useAverageColor(imageUrl) {
    const [color, setColor] = useState('');
    const [gradient, setGradient] = useState('');

    useEffect(() => {
        if (imageUrl) {
            fac.getColorAsync(imageUrl)
                .then((color) => {
                    setColor(color.hex);

                    const colorEnd = [...color.value.slice(0, 3), 0].join(',');
                    setGradient(
                        `linear-gradient(to bottom, rgba(${colorEnd}) 0%, ${color.rgba} 100%)`
                    );
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    }, [imageUrl]);

    return { gradient, color };
}
