var app = new Vue({
    el: '#myapp',
	data:{

       opciones: "",
       tension1: "",
       tension2: "",
       angulo_teta: "",
       angulo_beta: "",
       res_tension1: "",
       tension1: "",
       res_tension2: "",
       res_peso: "",
       res_masa: "",
    },

    mounted: function(){

    },

    computed: {

    },

    methods: 
    {
        hallarTension1: function() {

            if (this.tension2 != "" && this.angulo_beta != "" && this.angulo_teta != "") {

                
                var AnguloBetaRadianes = this.angulo_beta * (Math.PI / 180);
                var AnguloTetaRadianes = this.angulo_teta * (Math.PI / 180);

                var resultado = 0;
                resultado = this.tension2 * Math.cos(AnguloBetaRadianes) / Math.cos(AnguloTetaRadianes);

                this.res_tension1 = resultado.toFixed(2);
            }
            else {
                Swal.fire("Error", "Ingrese tension 2 y angulo", "error");
            }
        },

        hallarTension2: function() {
            if (this.tension1 != "" && this.angulo_beta != "" && this.angulo_teta != "") {

                
                var AnguloBetaRadianes = this.angulo_beta * (Math.PI / 180);
                var AnguloTetaRadianes = this.angulo_teta * (Math.PI / 180);

                var resultado = 0;
                resultado = this.tension1 * Math.cos(AnguloTetaRadianes) / Math.cos(AnguloBetaRadianes);

                this.res_tension2 = resultado.toFixed(2);
            }
            else {
                Swal.fire("Error", "Ingrese tension 1 y angulo", "error");
            }
        },

        hallarPeso: function(){
            if (this.tension1 != "" && this.tension2 != "" && this.angulo_beta != "" && this.angulo_teta != "") {

                var AnguloBetaRadianes = this.angulo_beta * (Math.PI / 180);
                var AnguloTetaRadianes = this.angulo_teta * (Math.PI / 180);

                var resultado = 0;

                resultado = (this.tension1 * Math.sin(AnguloTetaRadianes)) + (this.tension2 * Math.sin(AnguloBetaRadianes));

                this.res_peso = resultado.toFixed(2);
            }
            else{
                Swal.fire("Error", "Ingrese las tensiones y angulo", "error");
            }
        },

        hallarMasa: function(){
            if (this.tension1 != "" && this.tension2 != "" && this.angulo_beta != "" && this.angulo_teta != "") {

                const gravedad = 9.8;
                var AnguloBetaRadianes = this.angulo_beta * (Math.PI / 180);
                var AnguloTetaRadianes = this.angulo_teta * (Math.PI / 180);

                var resultado = 0;

                resultado = ((this.tension1 * Math.sin(AnguloTetaRadianes)) + (this.tension2 * Math.sin(AnguloBetaRadianes))) / gravedad;

                this.res_masa = resultado.toFixed(2);
            }
            else{
                Swal.fire("Error", "Ingrese las tensiones y angulo", "error");
            }
        }




    }
});