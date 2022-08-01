export const fetchData = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    // console.log(json);
    return json
}

export const fetchPokemonData = async (id) => {
    const POKEMON_URL =  `https://pokeapi.co/api/v2/pokemon/${id}`
    return await fetchData(POKEMON_URL)
}

export const fetchPokemonsData = async () =>{
    const POKEMONS_URL =  `https://pokeapi.co/api/v2/pokemon?limit=1155&offset=0`
    return await fetchData(POKEMONS_URL)
}

export const fetchTypesData = async () =>{
    const getMultipliers = (name, type, keys) => {
        const multipliers = {}
        // console.log(keys)
        keys.forEach(key => {
            // console.log(type.damage_relations.double_damage_to)
            if (type.damage_relations.double_damage_to.find(el => el.name === key))
            {
                multipliers[key] = 2
            }
            else if (type.damage_relations.half_damage_to.find(el => el.name === key))
            {
                multipliers[key]  = 0.5
            }
            else
            {
                multipliers[key]  = 1
            }


        })
        // console.log(multipliers)
        return multipliers
    }

    const TYPES_URL = `https://pokeapi.co/api/v2/type`
    const {results} = await fetchData(TYPES_URL)
    const keys = results.map(el => el.name)
    const relations = {}
    const types = await Promise.all(results.map(async type=> await fetchData(type.url)))
    types.forEach(element=>{
        // relations[element.name] = element
        relations[element.name] = getMultipliers(element.name, element, keys)
        // console.log(element.name)
    })
    return relations
}

export const comparePokemons = (firstPokemon, secondPokemon, typesArray) => {
    console.log(typesArray)
    let firstPokemonPoints = calcPoints(firstPokemon, secondPokemon, typesArray);
    let secondPokemonPoints = calcPoints(secondPokemon, secondPokemon, typesArray);
    // console.log(first.types)
    // console.log(second.types)
    console.log(`firstPokemonPoints = ${firstPokemonPoints}, secondPokemonPoints = ${secondPokemonPoints}`)


    return {firstPokemonPoints: firstPokemonPoints, secondPokemonPoints: secondPokemonPoints}
}

const calcPoints = (firstPokemon, secondPokemon, typesArray) => {
    let totalPoints = 0
    // console.log(typesArray)
    firstPokemon.types.forEach(element1 => {
        let partialPoints = 1
        secondPokemon.types.forEach(element2 => {
            partialPoints *= typesArray[element1.type.name][element2.type.name]
            // console.log(element1.type.name)
        })
        totalPoints += partialPoints
    })
    return totalPoints / firstPokemon.types.length
}

// const calcPoints = (firstPokemon, secondPokemon, typesArray) => {
//     let totalPoints = 0
//     firstPokemon.types.forEach((element1) => {
//         // const typeName = element1.type.name
//         let partialPoints = 1
//         const damageRelations = typesArray[element1.type.name].damage_relations
//         // console.log(damageRelations)
//         secondPokemon.types.forEach((element2, index2) => {
//             //console.log(firstPokemon.types)
//             if (damageRelations.double_damage_to.find(el => el.name === element2.type.name))
//             {
//                 // console.log(`${element1.type.name} x2 to ${element2.type.name}`)
//                 partialPoints *= 2
//             }
//             else if (damageRelations.half_damage_to.find(el => el.name === element2.type.name))
//             {
//                 // console.log(`${element1.type.name} x1/2 to ${element2.type.name}`)
//                 partialPoints *= 0.5
//             }
//             // if (damageRelations.no_damage_to.find(el => el.name === element2.type.name))
//             else
//             {
//                 partialPoints *= 1
//                 // console.log(`${element1.type.name} no damage to ${element2.type.name}`)
//             }
//
//         })
//         totalPoints += partialPoints
//     })
//
//     return totalPoints / firstPokemon.types.length
// }

// const calcPoints = (firstPokemon, secondPokemon, typesArray) => {
//     let totalPoints = 0
//     firstPokemon.types.forEach((element1) => {
//         // const typeName = element1.type.name
//         let partialPoints = 1
//         const damageRelations = typesArray[element1.type.name].damage_relations
//         // console.log(damageRelations)
//         secondPokemon.types.forEach((element2, index2) => {
//             //console.log(firstPokemon.types)
//             if (damageRelations.double_damage_to.find(el => el.name === element2.type.name))
//             {
//                 // console.log(`${element1.type.name} x2 to ${element2.type.name}`)
//                 partialPoints *= 2
//             }
//             else if (damageRelations.half_damage_to.find(el => el.name === element2.type.name))
//             {
//                 // console.log(`${element1.type.name} x1/2 to ${element2.type.name}`)
//                 partialPoints *= 0.5
//             }
//             // if (damageRelations.no_damage_to.find(el => el.name === element2.type.name))
//             else
//             {
//                 partialPoints *= 1
//                 // console.log(`${element1.type.name} no damage to ${element2.type.name}`)
//             }
//
//         })
//         totalPoints += partialPoints
//     })
//
//     return totalPoints / firstPokemon.types.length
// }

