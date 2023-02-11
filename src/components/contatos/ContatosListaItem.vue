<template>
    <li>
        {{ contato.name }}
        <!---<router-link :to="`/contatos/${contato.id}`">Detalhes</router-link>--->
        <router-link 
            :to="{name: 'contato', params: {id: contato.id}}">
            Detalhes</router-link>
    </li>
</template>

<script>

export default {
 
    props:{
        contato:{
            type: Object,
            required: true
        }
    }

}

</script>