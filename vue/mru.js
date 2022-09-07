var app = new Vue({
    el: '#myapp',
	data:{

        valorVelocidad_D: '',
        valorTiempo_D: '',
        valorTotal_D: '',
        valorDistancia_V: '',
        valorTiempo_V: '',
        valorTotal_V: '',
        valorDistancia_T: '',
        valorVelocidad_T: '',
        valorTotal_T: '',
        unidades_velocidad_D: '',
        unidades_tiempo_D: '',
        unidades_distancia_V:'',
        unidades_tiempo_V:'',
        unidades_distancia_T: '',
        unidades_velocidad_T: '',
    },

    mounted: function(){

    },

    computed: {

    },

    methods: 
    {
        calcularDistancia: function() {

            if (this.unidades_velocidad_D != '' && this.unidades_tiempo_D != ''){

                if (this.valorVelocidad_D != '' && this.valorTiempo_D != ''){
                    this.valorTotal_D = this.valorVelocidad_D * this.valorTiempo_D;
                }
                else {
                    Swal.fire("Error", "Casillas vacias", "error");
                }
            }
            else {
                Swal.fire("Error", "Seleccione unidades", "error");
            }
        },

        calcularVelocidad: function() {

            if(this.unidades_velocidad_V != '' && this.unidades_tiempo_T != ''){

                if (this.valorDistancia_V != '' && this.valorTiempo_V != ''){
                    
                    this.valorTotal_V = this.valorDistancia_V / this.valorTiempo_V;
                }
                else {
                    Swal.fire("Error", "Casillas vacias", "error");
                }
            }
            else{
                Swal.fire("Error", "Seleccione unidades", "error");
            }
        },

        calcularTiempo: function() {

            if (this.unidades_distancia_T != '' && this.unidades_velocidad_T != ''){

                if (this.valorDistancia_T != '' && this.valorVelocidad_T != '') {

                    this.valorTotal_T = this.valorDistancia_T / this.valorVelocidad_T;

                }
                else {
                    Swal.fire("Error", "Casillas vacias", "error");
                }
            }
            else{
                Swal.fire("Error", "Seleccione unidades", "error");
            }
            
        },
    }
});