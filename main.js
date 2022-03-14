const root = new Vue (
    {
        el: "#root",

        data: {
           albums: []
        },
         
        created(){
            axios.get('http://localhost/php-ajax-dischi/server.php').then((risposta) => {

                this.albums = risposta.data;

                console.log(risposta);
            });
        }
    }
);