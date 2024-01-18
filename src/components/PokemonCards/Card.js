import { typeColor } from "../../data/typeColor";
import "./card.css";

export const Card = (props) => {
  const { pokemon } = props;
  const { id } = pokemon;
  const POKEMON_URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
  // const IMG_URL = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`;
  const IMG_URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="card">
      <div className="card-container">
        <div className="img-shadow-div">
          <div className="img-div">
            <img className="pokemon-image" src={IMG_URL} />
            {/* <img
              className="pokemon-image"
              src={`https://projectpokemon.org/images/sprites-models/pgo-sprites/pm${pokemon.id}.icon.png`}
            /> */}
            <div className="shadow"></div>
          </div>
        </div>
        <div className="id-div">{id}</div>
        <div className="details-container">
          <div className="name">{pokemon.name}</div>
          <div className="types-container">
            {pokemon.types &&
              pokemon.types.length > 0 &&
              pokemon.types.map((iterator) => (
                <div
                  className="type"
                  key={pokemon.id + iterator.type.name}
                  style={{
                    "--custom-type-color": typeColor.find(
                      (findType) => findType.type === iterator.type.name
                    ).color,
                  }}
                >
                  {iterator.type.name}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
