var app = new Vue({
    el: '#myapp',
	data:{
        ejercicio1: false,
        ejercicio2: false,
        masa1: '',
        masa2: '',
        peso1: '',
        peso2: '',
        coe_fric: '',
        angulo: '',
        aceleracion: '',
        res_caso1: '',
        res_caso1_tension: '',
    
    },

    mounted: function(){

    },

    computed: {

    },

    methods: 
    {
        
        caso1: function() {
            this.ejercicio2 = false;
            this.ejercicio1 = true;
        },

        caso2: function() {
            this.ejercicio1 = false;
            this.ejercicio2 = true;
        },

        hallarCaso1: function () {
            if(this.masa1 != '' && this.masa2 != '' && this.coe_fric != '' && this.angulo != ''){

                var AnguloRadianes = this.angulo * (Math.PI / 180);
                var gravedad = 9.8;
                var numerador = 0;
                var denominador = 0;
                var resultado = 0;

                numerador = (this.masa2 * gravedad) - (this.coe_fric * this.masa1 * gravedad * Math.cos(AnguloRadianes)) - (this.masa1 * gravedad * Math.sin(AnguloRadianes));
                denominador = parseFloat(this.masa1) + parseFloat(this.masa2);
                resultado = numerador / denominador;

                this.res_caso1 = resultado.toFixed(2);

            }
            else{
                Swal.fire("Error", "Ingrese los datos bien", "error");
            }
        },

        hallarTension: function(){
            if(this.masa1 != '' && this.masa2 != '' && this.coe_fric != '' && this.angulo != ''){
                
                var AnguloRadianes = this.angulo * (Math.PI / 180);
                this.peso1 = this.masa1 * 9.8;
                var resultado = 0;

                resultado = (this.peso1 * Math.sin(AnguloRadianes)) + (this.coe_fric * this.peso1 * Math.cos(AnguloRadianes)) + (this.masa1 * this.aceleracion)

                this.res_caso1_tension = this.peso1;

            }
            else{
                Swal.fire("Error", "Ingrese los datos bien", "error");
            }

        }
    }
});