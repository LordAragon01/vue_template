<template>
    <div>
        Página Contato Detalhes {{ id }}
    </div>
</template>

<script>

export default {

    data(){

        return{
            id: this.$route.params.id
        }

    },
    /* watch: {

        $route(to, from){

            this.id = to.params.id

        }

    }, */
     beforeRouteUpdate(to, from, next){
        this.id = to.params.id
        next()
    },
    created(){

        console.log('Parametros da rota: ', this.$route.params);

    }

}

</script>