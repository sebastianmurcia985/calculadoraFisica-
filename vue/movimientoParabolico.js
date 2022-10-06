var app = new Vue({
    el: '#myapp',
	data:{

       opciones: "",
       velocidad: "",
       grados: "",
       tiempoVuelo: "",
    },

    mounted: function(){

    },

    computed: {

    },

    methods: 
    {
        hallarTiempoVuelo: function() {

            if (this.velocidad != "" && this.grados != "") {

                const velocidadCuadrado = this.velocidad * 2;
                const gravedad = 9.8;
                var AnguloRadianes = this.grados * (Math.PI / 180);

                var resultado = 0;
                resultado = (velocidadCuadrado * Math.sin(AnguloRadianes)) / gravedad;

                this.tiempoVuelo = Math.round(resultado,1);
            }
            else {
                Swal.fire("Error", "Ingrese tiempo y grados", "error");
            }
        }
    }
});