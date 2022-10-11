var app = new Vue({
    el: '#myapp',
	data:{

       opciones: "",
       tension2: "",
       angulo: "",
       res_tension1: "",
    },

    mounted: function(){

    },

    computed: {

    },

    methods: 
    {
        hallarTension1: function() {

            if (this.tension2 != "" && this.angulo != "") {

                const angulo_teta = 0;
                var AnguloBetaRadianes = this.angulo * (Math.PI / 180);
                var AnguloTetaRadianes = angulo_teta * (Math.PI / 180);

                var resultado = 0;
                resultado = this.tension2 * Math.cos(AnguloBetaRadianes) / Math.cos(AnguloTetaRadianes);

                this.res_tension1 = resultado.toFixed(2);
            }
            else {
                Swal.fire("Error", "Ingrese tiempo y grados", "error");
            }
        }
    }
});