import _ from "underscore";

// export let miNombre = "ivan xd"

/**
 * esta funcion crea un nuevo deck de cartas
 * @param {string[]} tiposDeCartas   ejemplo: ['C','D','H','S'];
 * @param {string[]} tiposEspeciales ejemplo: ['A','J','Q','K'];
 * @returns {string[]} retorna un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCartas, tiposEspeciales) => {

    if(!tiposDeCartas || tiposDeCartas.length === 0) throw new Error('"tiposDeCartas" es obligatorio como un arreglo de strings')

    if(!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('"tiposEspeciales" es obligatorio como un arreglo de strings')

        
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    return deck;
}

// export default crearDeck;
