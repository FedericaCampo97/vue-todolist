/* Rifare l’esercizio della to do list. Questa volta però 
ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo 
è stato fatto oppure no. 

MILESTONE 1 Stampare all’interno di una lista 
HTML un item per ogni todo. Se la proprietà done è
uguale a true, visualizzare il testo del todo sbarrato.*/

const { createApp } = Vue
const list = [
    {
        text: 'Fare la spesa',
        done: true
    }, 
    {
        text: 'Andare in palestra',
        done: true
    }, 
    {
        text: 'Farmacia',
        done: false
    }, 
    {
        text: 'Pagare bollette',
        done: true
    }, 
    {
        text: 'Andare a cena',
        done: false
    }, 
    {
        text: 'Stendere',
        done: false
    }, 
    {
        text: 'Stirare',
        done: true
    }, 

]

createApp({
    data() {
       return {
        list: {}
       }
       
    },
    methods: {
        
    },
    mounted() {
        this.list = list

    }
}).mount('#app')
