const root = new Vue (
    {
        el: "#root",

        data: {
            albums: [],
            generi: [],
            selezioneGenere: ""
        },

        methods: {
            getGenres(){
                for (let i=0; i<this.albums.length; i++) { //ciclo gli oggetti presenti nella chiamata axios e salvati in albums

                    if (!this.generi.includes(this.albums[i].genre)){   //se nell'array generi non è presente il genere ciclato
                        this.generi.push(this.albums[i].genre);         //lo aggiungo all'array stesso
                    }
                }
            }
        },
         
        mounted(){
            axios.get('http://localhost/php-ajax-dischi/server.php').then((risposta) => {

                this.albums = risposta.data;

                this.getGenres();

                console.log(risposta);
                console.log("generi ciclati: " + this.generi);
            });

        }
    }
);