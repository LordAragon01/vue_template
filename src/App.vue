<template>
  <div id="app" class="d-flex flex-column" style="width:100vw;height:150vh;">
  
    <div class="basediv col-12 p-0" style="overflow-y:hidden;">

      <Header />

      <router-link 
        tag="button" 
        to="/"
        exact
        class="btn btn-info mb-2 mr-2">Home</router-link>
      <router-link 
        tag="button" 
        :to="{ path: '/contatos' }"
        class="btn btn-info mb-2">Contatos</router-link>

      <div class="basecontent col-12 d-flex flex-row justify-content-between p-0" style="height:calc(100% - 3.5rem);overflow-y:auto;">
          
        <Asside />

        <div class="col-10 order-2 d-flex flex-row justify-content-center" style="position:absolute;right:0;overflow-y:hidden;">
          <router-view></router-view>
        </div>
          
       </div>   

    </div>

  </div>
</template>

<script>
import Header from './views/Header.vue'
import Asside from './views/Asside.vue'

export default{
  components:{
    Header, Asside
  }
}

</script>
