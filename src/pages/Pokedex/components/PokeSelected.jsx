import useAverageColor from 'hooks/useAverageColor';
import { useEffect, useRef } from 'react';

// Scss
import './PokeSelected.scss';

export default function PokeSelected({ results }) {
    const colLeftRef = useRef(null);
    const colRightRef = useRef(null);
    const averageColor = useAverageColor(results.sprites.other.home.front_default);

    console.log(averageColor);

    useEffect(() => {
        if (colLeftRef) colLeftRef.current.style.background = averageColor.gradient;
        if (colRightRef) colRightRef.current.style.background = averageColor.color;
    }, [averageColor, colLeftRef, colRightRef]);

    return (
        <div className="pokeselected">
            <div ref={colLeftRef} className="pokeselected__left-col">
                <div className="pokeselected__photo">
                    <img src={results.sprites.other.home.front_default} />
                </div>
                <div className="pokeselected__types">
                    {results.types.map((e, key) => (
                        <h2 key={key}>{e.type.name}</h2>
                    ))}
                </div>
            </div>

            <div ref={colRightRef} className="pokeselected__right-col">
                <div className="pokeselected__details">
                    <div className="pokeselected__name">
                        <h2>{results.name}</h2>
                    </div>
                    <div className="pokeselected__abilities">
                        <div className="pokeselected--headersection">
                            <h2>Abilities</h2>
                        </div>
                        <div className="pokeselected--innersection">
                            {results.abilities.map((e, key) => (
                                <h2 key={key}>{e.ability.name}</h2>
                            ))}
                        </div>
                    </div>
                    <div className="pokeselected__stats">
                        <div className="pokeselected__stats--stat pokeselected__stats-health">
                            <h2>{results.stats.at(0).stat.name}</h2>
                            <h3>{results.stats.at(0)['base_stat']}</h3>
                        </div>
                        <div className="pokeselected__stats__inner">
                            {results.stats.slice(1, 3).map((e, key) => (
                                <div className="pokeselected__stats--stat" key={key}>
                                    <h2>{e.stat.name}</h2>
                                    <h3>{e.base_stat}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
