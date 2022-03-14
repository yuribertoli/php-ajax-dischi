const root = new Vue (
    {
        el: "#root",

        data: {
            albums: [],

            //utilizzo un database statico per via del seguente problema alla richiesta axios
            /*  Bloccata richiesta multiorigine (cross-origin): 
                il criterio di corrispondenza dell’origine non consente la lettura della risorsa remota da http://localhost/php-ajax-dischi/server.php. 
                Motivo: header CORS “Access-Control-Allow-Origin” mancante. Codice di stato: 200. */
            database: [
                {
                    'title': 'New Jersey',
                    'author': 'Bon Jovi',
                    'year': 1988,
                    'poster': 'https://images-na.ssl-images-amazon.com/images/I/51sBr4IWDwL.jpg',
                    'genre': 'Rock'
                },
                {
                    'title': 'Live at Wembley 86',
                    'author': 'Queen',
                    'year': 1992,
                    'poster': 'https://images-na.ssl-images-amazon.com/images/I/71g40mlbinL._SX355_.jpg',
                    'genre': 'Pop'
                },
                {
                    'title': 'Ten\'s Summoner\'s Tales',
                    'author': 'Sting',
                    'year': 1993,
                    'poster': 'https://images-na.ssl-images-amazon.com/images/I/411BQR6BHRL.jpg',
                    'genre': 'Pop'
                },
                {
                    'title': 'Steve Gadd band',
                    'author': 'Steve Gadd Band',
                    'year': 2018,
                    'poster': 'https://m.media-amazon.com/images/I/81UtLzBDoEL._SS500_.jpg',
                    'genre': 'Jazz'
                },
                {
                    'title': 'Brave new World',
                    'author': 'Iron Maiden',
                    'year': 2000,
                    'poster': 'https://upload.wikimedia.org/wikipedia/en/0/03/Iron_Maiden_-_Brave_New_World.jpg',
                    'genre': 'Metal'
                },
                {
                    'title': 'One more car, one more rider',
                    'author': 'Eric Clapton',
                    'year': 2002,
                    'poster': 'https://images-na.ssl-images-amazon.com/images/I/81MDAIdh78L._SY355_.jpg',
                    'genre': 'Rock'
                }
            ]
        },
         
        mounted(){
            axios.get('http://localhost/php-ajax-dischi/server.php').then((risposta) => {

                this.albums = risposta.data;

                console.log(risposta);
            });
        }
    }
);