import { useEffect, useState } from "react";
import PokeCard from "../components/pokemonCard";

export default function Home() {
	const [pokemons, setPokemons] = useState([]);
	const [loadmore, setLoadmore] = useState(
		"https://pokeapi.co/api/v2/pokemon?limit=20"
	);
	const getPokemons = async () => {
		const res = await fetch(loadmore);
		const data = await res.json();
		setLoadmore(data.next);

		function createPokemonObject(results) {
			results.forEach(async (pokemon) => {
				const res = await fetch(
					`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
				);
				const data = await res.json();
				setPokemons((currentList) => [...currentList, data]);
			});
		}
		createPokemonObject(data.results);
		console.log(pokemons);
	};

	return (
		<section className="container">
			<div className="flex flex-col justify-center items-center">
				<div className="mt-48 mb-16">
					<h1 className="text-2xl text-center font-bold">Pokedex</h1>
					<input
						className="p-4 rounded-2xl text-center text-black"
						placeholder="Search for a Pokemon"
					></input>
				</div>
				<div className="flex flex-wrap m-auto max-w-[80%]">
					{pokemons.map((pokemon, index) => {
						return (
							<PokeCard
								id={pokemon.id}
								name={pokemon.name}
								image={pokemon.sprites.other.dream_world.front_default}
								type={pokemon.types[0].type.name}
								key={index}
							/>
						);
					})}
				</div>
				<button
					className="rounded-xl bg-blue-500 text-white font-bold py-2 px-4 mt-4"
					onClick={() => getPokemons()}
				>
					Load More
				</button>
			</div>
		</section>
	);
}
