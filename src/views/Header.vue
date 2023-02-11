<template>
    <header class="baseheader w-100" style="height:3.5rem;">

        <div class="col-12 d-flex flex-row justify-content-end">

        <div class="col-10">

            <div class="w-100 d-flex flex-row justify-content-between align-items-center" style="height:3.5rem;">

            <span class="breadcrumbcustom col-3 d-flex flex-row justify-content-start m-0 p-0 headertext" style="font-weight:500;">

                ALOJAMENTOS > {{ breadcrumb }}

            </span>

            <div class="col-9 m-0 d-flex flex-row justify-content-end">

                <ul class="list-group list-group-horizontal">
                <li class="list-group-item noline">

                    <button type="button" class="btn btn-primary btnrounded lineflex"><i class="fa fa-suitcase mr-2 headertext" aria-hidden="true"></i> Nova Reserva</button>

                </li>
                <li class="list-group-item noline">
                    <div class="columnflex headertext minsize"><i class="fa fa-suitcase mr-2 headertext mb-1" aria-hidden="true"></i>Mapa</div>
                </li>
                <li class="list-group-item noline">
                    <div class="columnflex headertext minsize"><i class="fa fa-paper-plane-o mr-2 headertext mb-1" aria-hidden="true"></i>Email &amp; SMS</div>
                </li>
                <li class="list-group-item noline">
                    <div class="columnflex headertext minsize"><i class="fa fa-list mr-2 headertext mb-1" aria-hidden="true"></i>Timeline</div>
                </li>
                <li class="list-group-item noline">
                    <div class="columnflex headertext minsize"><i class="fa fa-lightbulb-o mr-2 headertext mb-1" aria-hidden="true"></i>Assistente</div>
                </li>
                <li class="list-group-item noline">
                    <div class="columnflex headertext minsize"><i class="fa fa-question-circle mr-2 headertext mb-1" aria-hidden="true"></i>Ajuda</div>
                </li>
                <li class="list-group-item noline columnflex">
                    <div class="lineflex justify-content-center">
                    <img src="../assets/model_ynnov.jpg" alt="Foto de Perfil" id="perfil_image">
                    <p class="m-0 ml-2" style="color:#f7f7f7;text-transform:capitalize;">Sofia Lima</p>
                    <i class="fa fa-sort-desc ml-3" aria-hidden="true" style="color:#f7f7f7;display: flex;flex-direction: column;align-self: center;padding-bottom: 0.5rem;"></i>
                    </div>
                </li>
                </ul>

            </div>

            </div>

        </div>

        </div>

    </header>
</template>

<script>

export default{

    data(){

        return{

            breadcrumb: this.$route.name

        }

    }

}

</script>