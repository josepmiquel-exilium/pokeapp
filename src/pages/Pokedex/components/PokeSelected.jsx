export default function PokeSelected({ results }) {
    console.log(results);
    return (
        <div className="pokeselected">
            <div className="pokeselected__name">
                <h2>{results.name}</h2>
            </div>
            <div className="pokeselected__photo">
                <img src={results.sprites.other.home.front_default} alt="" />
            </div>
        </div>
    );
}
