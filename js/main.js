/**
 * Boolzapp Vue
 */
const whatsapp = new Vue({
    el: '#whatsapp',
    data: {
        myMessage: '',
        contactMessage: '',
        // nostro account
        user: {
            name: 'Frankie',
            avatar: '_io'

            // :src="'./img/avatar' + 'user.avatar' + '.jpg'" 
            //avatar: './img/avatar_io.jpg'
        },
        // Elenco contatti
        indexContacts: 0, //variabile che tiene traccia del contatto attivo
        contacts: [
            {//0
                name: 'Michele',
                avatar: '_1',
                //:src="`./img/avatar${contact.avatar}.jpg`"
                
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {//1
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    }
                ],
            },
            {//2
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {//3
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ]
    },
    methods: {
        setChat(i) {
            console.log(i);
            this.indexContacts = i;
        },
        addMsg() {
            if (this.myMessage !== '') {
                this.messages.push({
                    date: dayjs().format('DD/MM/YY, HH:mm:ss'),
                    message: this.myMessage,
                    status: 'sent'
                });
                this.myMessage = ''
            }

            //Risposta automatica
            setTimeout(function(){

                let data = {
                    date: dayjs().format('DD/MM/YY, HH:mm:ss'),
                    message: 'Ok, no probs'
                    status: 'received'
                }
            }1000);
        }
    }
});

// nel primo caso abbiamo usato i (noi abbiamo scritto index) nei contatti perchè ci serviva un indice da usare al momento del click su un nuovo contatto
// 11:22
// li quindi l'index ci diceva la posizione del contatto all'interno dell'array
// 11:22
// utilissimo quindi poi per aggiornare la nostra variabile indexContacts
// New
// 11:23
// nei messaggi invece non l'abbiamo utilizzata perchè in questo momento li non abbiamo avuto bisogno di sapere la loro posizione all'interno del loro array messaggi
// 11:23
// abbiamo usato solo il primo parametro (message) per stamparne le informazioni