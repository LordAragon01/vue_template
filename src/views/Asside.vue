<template>
    
    <aside class="col-2 order-1" style="position:fixed;top:0;height:100vh;background-color:#150f6b;z-index:1;">

        <div class="w-100 h-100 d-flex flex-column align-items-start">

        <div class="wrapperlogo order-1 my-4">
            <img src="../../image/logo.png" alt="Logo CRM" style="width:8rem;height:auto;">
        </div>

        <nav class="wrappermenu my-2 order-2 w-100 h-100">

            <ul class="list-group" role="list">
           
            </ul>

            <ul class="list-group">

                <li class="list-group-item d-flex flex-row justify-content-between noline columnflex pl-0" v-for="(item, index) in items" :key="index" >
                    <i class="fa mr-2 headertext mb-1" :class="item.icon" style="width:25%;" aria-hidden="true"></i>
                    <router-link 
                    tag="a" 
                    :to="{path: item.custompath}"
                    exact
                    class="m-0" style="color:#fff;width:70%;text-align:left;">{{ item.name }}</router-link>
                </li>

            </ul>

        </nav>

        </div>

    </aside>

</template>

<script>

let itensmenu = [
    {id: 1, name: 'Painel', custompath: '/', icon:'fa-suitcase'},
    {id: 2, name: 'Alojamento', custompath: '/alojamento', icon:'fa-suitcase'},
    {id: 3, name: 'Calendario', custompath: '/calendary', icon:'fa-suitcase'}
]

export default{

    data(){

        return {
            items: itensmenu
        }    

    }

}

</script>