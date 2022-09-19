var app = new Vue({
    el: '#myapp',
	data:{

        valorAltura: '',
        valorTiempo: '',
        valorVCT: '',
        valorVI: '',
        valorAlcance: '',
        valorVCP: '',
        valorGravedad: 9.8,
        fraccion: '',

    },

    mounted: function(){

    },

    computed: {

    },

    methods: 
    {
        calculo_tiempo : function(){
            if (this.valorAltura != ''){
                this.fraccion = Math.round((2 * this.valorAltura) / this.valorGravedad);
                this.valorTiempo = Math.sqrt(this.fraccion);
            }
            else{
                Swal.fire("Error", "Casilla Altura Vacia", "error");
            }
        },

        calculo_alcance : function(){

            if (this.valorAltura != '' && this.valorVI != ''){
                this.valorAlcance = this.valorVI * this.valorTiempo;
            }
            else{
                Swal.fire("Error", "Casilla Altura o Velocidad Inicial Vacia", "error");
            }

        } ,

        calculo_VCT : function() {
            if (this.valorAltura != ''){
                this.valorVCT = Math.round(this.valorGravedad * this.valorTiempo);
            }
            else{
                Swal.fire("Error", "Casilla Altura Vacia", "error");
            }

        },

        calculo_VCP : function(){
            if (this.valorAltura != '' && this.valorVI != ''){
                this.valorVCP = Math.round(Math.sqrt(Math.pow(this.valorVI,2) + Math.pow(this.valorVCT,2)));
            }
            else{
                Swal.fire("Error", "Casilla Altura o Velocidad Inicial Vacia", "error");
            }
        },

    }
});