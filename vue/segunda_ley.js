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
        res_caso1: '',
        res_caso1_tension: '',
        anguloTheta: '',
        anguloBeta: '',
        resp_caso2_aceleracion: '',
        resp_caso2_tension: '',
    },

    mounted: function(){

    },

    computed: {

    },

    methods: 
    {
        
        caso1: function() {
            this.limpiar();
            this.ejercicio2 = false;
            this.ejercicio1 = true;
        },

        caso2: function() {
            this.limpiar();
            this.ejercicio1 = false;
            this.ejercicio2 = true;
        },

        limpiar: function() {

            this.masa1 = '';
            this.masa2 = '';
            this.peso1 = '';
            this.peso2 = '';
            this.coe_fric = '';
            this.angulo = '';
            this.res_caso1 = '';
            this.res_caso1_tension = '';
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

        
                resultado = ((this.coe_fric * this.peso1 * Math.cos(AnguloRadianes)) + (this.peso1 * Math.sin(AnguloRadianes)) + (this.masa1 * this.res_caso1));

                this.res_caso1_tension = resultado.toFixed(2);
            }
            else{
                Swal.fire("Error", "Ingrese los datos bien", "error");
            }

        },

        hallaAceleracion2: function() {

            const gravedad = 9.8;
            const peso1 = this.masa1 * gravedad;
            const peso2 = this.masa2 * gravedad;
            const sumaMasas = parseFloat(this.masa1) + parseFloat(this.masa2);

            var anguloRadianesTheta = this.anguloTheta * (Math.PI / 180);
            var anguloRadianesBetha = this.anguloBeta * (Math.PI / 180);
            var resultado = 0;

            resultado = (peso2 * Math.sin(anguloRadianesBetha)) - (peso1 * Math.sin(anguloRadianesTheta)) - (this.coe_fric * peso1 * Math.cos(anguloRadianesTheta)) - (this.coe_fric * peso2 * Math.cos(anguloRadianesBetha));

            resultado = resultado / sumaMasas;
            
            this.resp_caso2_aceleracion = resultado.toFixed(2);
        },

        hallaTension2: function(){

            const gravedad = 9.8;
            const peso1 = this.masa1 * gravedad;
            var anguloRadianesTheta = this.anguloTheta * (Math.PI / 180);

            var resultado = peso1 * Math.sin(anguloRadianesTheta) + this.coe_fric * peso1 * Math.cos(anguloRadianesTheta) + peso1 * this.resp_caso2_aceleracion;
            this.resp_caso2_tension = resultado.toFixed(2);
        }
    }
});