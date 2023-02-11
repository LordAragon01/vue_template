<template>
    <div class="w-100">

        <section class="d-flex flex-row justify-content-between my-5 order-1 col-12">

            <div class="d-flex flex-column col-5">

                <span class="order-1"><h1>Dados do Alojamento</h1></span>

                <form @submit.prevent="sendForm" id="formynnov" class="d-flex flex-column order-2 mt-4">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="inputnome">Nome</label>
                        <input type="text" class="form-control" id="inputnome" v-model="datainfo.name">
                        </div>
                        <div class="form-group col-md-6">
                        <label for="inputregisto">Registo Al</label>
                        <input type="text" class="form-control" id="inputregisto" v-model.number="datainfo.registo" minlength="5" maxlength="6">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress">Morada</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="Rua de faz de Conta 1234" v-model="datainfo.address">
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputAddress2">Código Postal</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Código Postal" v-model.number="datainfo.postalcode" minlength="7" maxlength="8">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputCity">Localidade</label>
                            <input type="text" class="form-control" id="inputCity" placeholder="Braga" v-model="datainfo.city">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="inputState">Região</label>
                        <select id="inputState" class="form-control" v-model="datainfo.region">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                        </div>
                        <div class="form-group col-md-6">
                        <label for="inputState">País</label>
                        <select id="inputState" class="form-control" v-model="datainfo.country" v-on:click="getCountrys()">
                            <option selected>Choose...</option>
                            <option v-for="(country, index) in listofcountry" :key="index" :value="country.alpha2Code">
                                {{ country.name }}
                            </option>
                        </select>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </form>
            </div>


            <div class="d-flex flex-row col-6">

                <div class="d-flex-flex-column">

                    <span class="order-1"><h1>Mapa</h1></span>

                    <div class="mt-4 order-2">
                        <img src="../assets/mapa.png" alt="Mapa" style="width:100%;height:auto;object-fit:contain;">
                    </div>

                </div>

            </div>

        </section>

        <section class="d-flex flex-column order-2 my-4 justify-content-between col-12">

        <span>
            <h1>Apresentação</h1>
        </span>

        <div class="titlebase d-flex-flex-row order-1 mt-5">
            <h3>Título</h3>

            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-toggle="tab" data-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Português</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-toggle="tab" data-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Inglês</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="contact-tab" data-toggle="tab" data-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Francês</button>
                </li>
            </ul>

            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Portugues Apartment</div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">Inglês Apartment</div>
                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">Francês Apartment</div>
            </div>

        </div>

        <div class="titlebase d-flex-flex-row order-2 mt-5">
            <h3>Descrição</h3>

            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-toggle="tab" data-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Português</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-toggle="tab" data-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Inglês</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="contact-tab" data-toggle="tab" data-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Francês</button>
                </li>
            </ul>

            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Português Apartment Descrição</div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">Inglês Apartment Descrição</div>
                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">Francês Apartment Descrição</div>
            </div>

        </div>

        </section>

    </div>
</template>

<script>



export default{

    data(){

        return{
            //errors: [],
            datainfo: {},
            validateinput: false,
            registo: null,
            url: 'https://restcountries.com/v2/all',
            listofcountry: []
    
        }

    }, 
    methods:{

        sendForm(){

            const formularioEnviado = Object.assign({}, this.datainfo)

            if(this.datainfo.name === undefined && 
              this.datainfo.address === undefined &&
              this.datainfo.postalcode === undefined &&
              this.datainfo.city === undefined
            ){
                this.validateinput = true;
            }

            //Check Postal Code
            if(this.datainfo.postalcode !== undefined){

                if(this.datainfo.postalcode.length <= 6 || this.datainfo.postalcode.length > 8){
                    this.validateinput = true;
                }

            }
           
            //Sequence of validate
            if(this.datainfo.registo !== undefined){
                
                let valueregister = this.datainfo.registo;

                let listnumber = [];

                for(let i = 10000; i <= 100000; i++){

                    listnumber.push(i);

                }

                if(!listnumber.includes(valueregister) && this.datainfo.registo !== ''){

                    alert('Favor preencher um número entre 10000 e 100000');

                    this.validateinput = true;

                }

            }
            
            //Check Input
            if(!this.validateinput){

                console.log('Formulário enviado!', formularioEnviado)

            }else{

                alert('Favor revisar os campos');
                this.validateinput = false;

            }

        },
        async getCountrys(url){

            try{

                url = this.url;

                let fetchurl = await fetch(url);
                let response = await fetchurl.json();

                this.listofcountry = response;

            }catch(err){

                let msgerror = new Error(err);

                console.log(msgerror);

            }

        }

    },
    watch:{

        listofcountry: function(newCalls){

            this.listofcountry = newCalls;

        }

    },
    created(){

        //console.log(this.value);

    }

}

</script>