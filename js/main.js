/**
 * Boolzapp Vue
 */
const whatsapp = new Vue({
    el: '#whatsapp',
    data: {
        myMessage: '',
        user: {
            name: 'Frankie',
            avatar: '_io', 
        },
        // Elenco contatti
        activeContacts: 0, 
        contactSearchInput: '',
        showMenu: false,
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
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
            {
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
            {
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
            {
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
            {
                name: 'Luca',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Birretta?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Assolutamente si',
                        status: 'received'
                    }
                ],
            },
        ],
        answers: [
            "Brunch is the new cenetta",
            "Abbonaaaaaa",
            "Me stà a scoppià la testa",
            "vivo la vita un DPCM alla volta",
            "Giretto in moto?",
            "Cappuccio veloce?",
            "Oggi non ce la posso fare",
          ],
        options: [
            {
             title: 'Importante',
            },
            {
              title: 'Rispondi',
            },
            {
              title: 'Inoltra',
            },
            {
              title: 'Copia',
            }
          ],

    },
    methods: {
        setChat(i) {
            //Verificare la posizione attiva del contatto
            console.log(i);

            this.activeContacts = i;
        },
        addMsg(i) {
            //Scrivere un nuovo messaggio
            console.log(this.myMessage);

            if (this.myMessage !== '') {  

                //Variabile che migliora la scrittura del codice
                const activeMassages = this.contacts[this.activeContacts].messages

                activeMassages.push({ 
                    date: dayjs().format('DD/MM/YY, HH:mm:ss'),
                    message: this.myMessage,
                    status: 'sent'
                });

                this.myMessage = '', 

                //Risposta automatica BOT al mio messaggio con risposte random
                setTimeout(() => {

                    activeMassages.push({ 
                        date: dayjs().format('DD/MM/YY, HH:mm:ss'),
                        message: this.answers[Math.floor(Math.random() * 7)],
                        status: 'received'
                    });
                }, 2000); 
            }
        },
        searchContact() {
            //Cercare una lettera nei contatti
            this.contacts.forEach((element) => { 

                const ricerca = this.contactSearchInput.toLowerCase();

                if (element.name.toLowerCase().includes(ricerca, 0)) {
                    element.visible = true;
                  } else {
                    element.visible = false;
                  }
            });
        },
        deleteMsg(i) {
            const activeMassages = this.contacts[this.activeContacts].messages;

            activeMassages.splice(i, 1);
        }
    }
});





