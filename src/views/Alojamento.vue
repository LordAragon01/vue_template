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
                        <input type="text" class="form-control" id="inputregisto" v-model.number="datainfo.registo" v-on:blur="checkRegisto">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress">Morada</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="Rua de faz de Conta 1234" v-model="datainfo.address">
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputAddress2">Código Postal</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Código Postal" v-on:blur="checkPostalCode" v-model.number="datainfo.postalcode">
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
                        <select id="inputState" class="form-control" v-model="datainfo.country">
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

            <ul class="nav nav-tabs" id="myTabDesc" role="tablist">
                <li class="nav-item" role="presentation" v-for="(value, index) in listoftitle" :key="index">
                    <button class="nav-link" :id="value.tag + 'tab'" data-toggle="tab" :data-target="tagindicate + value.tag" type="button" role="tab" :aria-controls="value.tag" :aria-selected="true" v-on:click="indexList(index)">{{ value.name }}</button>
                </li>
            </ul>

            <div class="tab-content" id="myTabContent">
                <div v-for="(value, index) in listoftitle" :key="index" class="tab-pane fade" :id="value.tag" role="tabpanel" :aria-labelledby="value.tag">{{ value.title }}</div>
            </div>

        </div>

        <div class="descbase d-flex-flex-row order-2 mt-5">
            <h3>Descrição</h3>

            <ul class="nav nav-tabs" id="myTabDesc" role="tablist">
                <li class="nav-item" role="presentation" v-for="(value, index) in listofdesctitle" :key="index">
                    <button class="nav-link" :id="value.tag + 'tab'" data-toggle="tab" :data-target="tagindicate + value.tag" type="button" role="tab" :aria-controls="value.tag" :aria-selected="true">{{ value.name }}</button>
                </li>
            </ul>

            <div class="tab-content" id="myTabContent">
             
                <div v-if="actuallistdesc.length !== 0">
                    <div v-for="(value, index) in actuallistdesc" :key="index" class="tab-pane fade" :class="addclassData" :id="value.tag" role="tabpanel" :aria-labelledby="value.tag">
                        {{ value.descricao }}
                    </div>
                </div>
                <div v-else>
                    Nada para apresentar
                </div>
                
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
            listofcountry: [],
            listoftitle:[
                {id:1, name: 'Português', tag: 'portugues', title:'Portugues Apartament'},
                {id:2, name: 'Inglês', tag: 'ingles', title:'Ingles Apartament'},
                {id:3, name: 'Francês', tag: 'frances', title:'Frances Apartament'},
            ],
            listofdesctitle:[
                {id:1, name: 'Português', tag: 'portugues', title:'Portugues Apartament'},
                {id:2, name: 'Inglês', tag: 'ingles', title:'Ingles Apartament'},
                {id:3, name: 'Francês', tag: 'frances', title:'Frances Apartament'},
            ],
            alldesclist: [
                {id:1, name: 'Português', tag: 'portugues', descricao:'Portugues Apartament Descricao'},
                {id:2, name: 'Inglês', tag: 'ingles', descricao:'Inglês Apartament Descricao'},
                {id:3, name: 'Francês', tag: 'frances', descricao:'Francês Apartament Descricao'},
            ],
            numberref: '',
            tagindicate: '#',
            addclassData:['show', 'active'],
            validatePostalCode: false,
            postalCode: '',
            cleanPostalIntCode: '',
            actuallistdesc: [],
            registonumber: ''
    
        }

    }, 
    methods:{

        sendForm(){

            const formularioEnviado = Object.assign({}, this.datainfo)

            //Check if the input is fill
            if(this.datainfo.name === undefined || 
              this.datainfo.address === undefined ||
              this.datainfo.postalcode === undefined ||
              this.datainfo.city === undefined
            ){
                this.validateinput = true;

                //Check if the input is not empty

            }else if(this.datainfo.name === "" || 
              this.datainfo.address === "" ||
              this.datainfo.postalcode === "" ||
              this.datainfo.city === ""
            ){
                this.validateinput = true;

            }else{

                //Check Postal Code
                if(this.datainfo.postalcode !== undefined || this.datainfo.postalcode !== ""){

                    //Verify the postalCode 
                    if(this.validatePostalCode){

                        //Match Code
                        parseInt(this.datainfo.postalcode);

                    }else{

                        alert('Favor informar Código Postal Válido');
                        this.validateinput = true;

                    }

                }

            }

           
            //Sequence of validate to Registo
            if(this.datainfo.registo !== undefined){

                if(this.datainfo.registo !== ''){

                    this.datainfo.registo = parseInt(this.registonumber);

                }

            }
            
            //Check Input
            if(!this.validateinput){

                console.log('Formulário enviado!', formularioEnviado)

                //Clean Inputs
                /* this.datainfo.name = '';
                this.datainfo.address = '';
                this.datainfo.postalcode = '';
                this.datainfo.city = '';
                this.datainfo.region = '';
                this.datainfo.country = ''; */

            }else{

                alert('Favor revisar os campos');
                this.validateinput = false;

            }

        },
        getIndex(index){

            //let position = index === 0 ? index + 1 : index;
            //console.log(index);

            return this.numberref = index;

        },
        checkPostalCode(event){

            this.postalCode = event.target.value;

            if(this.postalCode !== undefined || this.postalCode !== ''){

                let listnumber = [...this.postalCode];

                let checktypedata = listnumber.filter((value) =>{ return Number.isInteger(parseInt(value)) });


                if(checktypedata.length <= 7){

                    switch(checktypedata.length){

                        case 7:

                            this.cleanPostalIntCode = parseInt(checktypedata.join(''));
                            checktypedata.splice(4, 0, '-');

                            this.validatePostalCode = true;

                        break;
                       

                        default:

                        this.validatePostalCode = false;

                            alert('Favor informar Código Postal Válido');
                        break;
                        
                    }

                    this.datainfo.postalcode = checktypedata.join('');
          
                    return this.validatePostalCode;

                }else{

                    alert('Favor informar Código Postal Válido');

                }

            }

            return false;


        },
        indexList(indexref){

            //Clean Array
            this.actuallistdesc = [];

            //Set array value
            this.alldesclist.find((value, index) => index === indexref ? this.actuallistdesc.push(value) : '');

            return this.actuallistdesc;

        },
        checkRegisto(event){

            if(event.target.value){

                this.registonumber = parseInt(event.target.value);

                if(this.registonumber >= 10000 & this.registonumber <= 100000){

                    return this.registonumber;

                }else{

                    alert('Favor preencher um número entre 10000 e 100000');
                    this.validateinput = true;

                }

            }

           return;

        }

    },
    /* computed:{

        indexList: function(indexref){

            indexref = this.numberref;

            let test =  this.alldesclist.find((value, index) => index === indexref ? value : '');

           console.log(test);

           return test;

           return this.alldesclist.find((value, index) => index === indexref ? value : '');

        }

    }, */
    watch:{

        listofcountry: function(newCalls){

            this.listofcountry = newCalls;

        },
       /*  indexList: function(indexref){

            indexref = this.numberref;

            return this.actuallistdesc = this.alldesclist.find((value, index) => index === indexref ? value : '');

        } */

    },
    created(){

        fetch(this.url)
        .then((response) => {

            response.json().then((data) => {

                this.listofcountry = data;

            }).catch((err) => {

                let msgerror = new Error(err);

                console.log(msgerror);

            });

        }).catch((err) => {

            let msgerror = new Error(err);

            console.log(msgerror);

        });

    }

}

</script>