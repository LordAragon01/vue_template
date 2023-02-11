<template>
    <div>
        <h3 class="font-weight-light">Contatos</h3>
        <ul class="list-group" v-if="contatos.length > 0">
            <ContatosListaItem 
                class="list-group-item"
                v-for="(contato, index) in contatos" 
                :key="index"
                :contato="contato"
            />
        </ul>
        <button class="btn btn-primary mt-3" type="button" v-on:click="voltar">Voltar</button>
    </div>
</template>

<script>
import ContatosListaItem from './ContatosListaItem.vue'

export default{
    components:{
        ContatosListaItem
    },
    data(){

        return{

            contatos: [
                {id: 1, name: 'Nome 1'},
                {id: 2, name: 'Nome 2'},
            ]

        }

    },
    methods:{
        voltar(){
            //this.$router.push({ path: '/' });
            //this.$router.replace('/');
            //this.$router.go();
            //this.$router.forward();
            this.$router.back();
        }
    }


}

</script>