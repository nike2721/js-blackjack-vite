
import { pedirCarta, valorCarta, crearCartaHtml } from "./";

/**
 * turno de la computadora
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML Elemento HTML paara mostrar los puntos
 * @param {HTMLElement} divCartasComputadora Elemento HTML paara mostrar la carta
 * @param {Array<String>} deck  
 */



// turno de la computadora
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck=[] ) => {

     if(!puntosMinimos) throw new Error('Puntos minimos son necesarios');  
     if(!puntosHTML) throw new Error('Argumento puntosHTML es necesarios');  

    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
     // TODO: crear carta 
     let imgCarta =crearCartaHtml(carta);  
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}