/* Rifare l’esercizio della to do list. Questa volta però 
ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo 
è stato fatto oppure no. 

MILESTONE 1 Stampare all’interno di una lista 
HTML un item per ogni todo. Se la proprietà done è
uguale a true, visualizzare il testo del todo sbarrato.

Visualizzare a fianco ad ogni item ha una “x”: 
cliccando su di essa, il todo viene rimosso dalla lista.

Predisporre un campo di input testuale e un pulsante “aggiungi”: 
cliccando sul pulsante, il testo digitato viene letto e 
utilizzato per creare un nuovo todo, 
che quindi viene aggiunto alla lista dei todo esistenti.
*/

const { createApp } = Vue
const list = [
    {
        text: 'Fare la spesa',
        done: true,
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
        deleteTask(i) {
            this.list = this.list.filter((value,key) => {
                if(key != i ) {
                    return value
                }
            })
        },
        addTask() {
            let input = document.getElementById('input').value
            this.list.push({
                text: input, 
                done: false
            })
        }
    },
    mounted() {
        this.list = list

    }
}).mount('#app')
