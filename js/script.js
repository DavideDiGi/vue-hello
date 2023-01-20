/* Descrizione:
Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un'immagine, presa anch'essa da un data. */

const { createApp } = Vue;

createApp({
    data() {
        return{
            print: {
                message: 'My Home ☀️',
                image:'https://media.e-borghi.com/public/borghi/12_04_19-05_32_58-P7992f45caa4fd39040435e6776da61a.jpg',
                place: 'Castelsardo'   
            }
        }
    },
    methods: {
        
    }
}).mount('#app'); 