var app = new Vue({
    el: '#myapp',
	data:{

       opciones: "",
       velocidad: "",
       grados: "",
       tiempo: "",
       x: "",
       y: "",
       tiempoVuelo: "",
       alturaMaxima: "",
       alcanceHorizontal: "",
       anguloTiro: "",
       HyTV: "",
    },

    mounted: function(){

    },

    computed: {

    },

    methods: 
    {
        limpiar: function() {

            this.velocidad = "";
            this.grados = "";
            this.tiempoVuelo = "";
            this.tiempo = "";
            this.x = "";
            this.y = "";
            this.alturaMaxima = "";
            this.alcanceHorizontal = "";
            this.anguloTiro = "";
            this.HyTV = "";
        },

        hallarTiempoVuelo: function() {

            if (this.velocidad != "" && this.grados != "") {

                const gravedad = 9.8;
                var AnguloRadianes = this.grados * (Math.PI / 180);

                var resultado = 0;
                resultado = (2 * this.velocidad * Math.sin(AnguloRadianes)) / gravedad;

                this.tiempoVuelo = resultado.toFixed(2);
            }
            else {
                Swal.fire("Error", "Ingrese tiempo y grados", "error");
            }
        },

        hallarPosicionParticula: function() {

            if (this.velocidad != "" && this.tiempo != "" && this.grados != "") {

                const gravedad = 9.8;
                const tiempoCuadrado = this.tiempo * this.tiempo;
                var AnguloRadianes = this.grados * (Math.PI / 180);

                var valorX = this.velocidad * Math.cos(AnguloRadianes) * this.tiempo;
                var valorY = this.velocidad * Math.sin(AnguloRadianes) * this.tiempo - 0.5 * gravedad * tiempoCuadrado;

                this.x = valorX.toFixed(2);
                this.y = valorY.toFixed(2);
            }
            else {
                Swal.fire("Error", "Ingrese los datos", "error");
            }
        },

        hallarAlturaMaxima: function() {

            if (this.velocidad != "" && this.grados != "") {

                const gravedad = 9.8;
                const velocidadCuadrado = this.velocidad * this.velocidad;
                var AnguloRadianes = this.grados * (Math.PI / 180);
                var seno = Math.sin(AnguloRadianes);
                const senoCuadrado = seno * seno;
    
                var altura = ((velocidadCuadrado * senoCuadrado)/(2*gravedad));
    
                this.alturaMaxima = altura.toFixed(2);
            }
            else {
                Swal.fire("Error", "Ingrese tiempo y grados", "error");
            }
        },

        hallarAlcanceHorizontal: function() {

            if (this.velocidad != "" && this.grados != "") {

                const gravedad = 9.8;
                const velocidadCuadrado = this.velocidad * this.velocidad;
                var AnguloRadianes = this.grados * (Math.PI / 180);
                AnguloRadianes = AnguloRadianes * 2;
                var seno = Math.sin(AnguloRadianes);
    
                var altura = ((velocidadCuadrado * seno)/(gravedad));
    
                this.alcanceHorizontal = altura.toFixed(2);
            }
            else {
                Swal.fire("Error", "Ingrese tiempo y grados", "error");
            }
        },

        HallarAnguloTiro: function() {

            if (this.alturaMaxima != "" && this.alcanceHorizontal != "") {

                const gravedad = 9.8;
                const alturaPorCuatro = this.alturaMaxima * 4;
                var respuesta = 0;
                respuesta = alturaPorCuatro / this.alcanceHorizontal;
                this.anguloTiro = respuesta.toFixed(2);
            }
            else {
                Swal.fire("Error", "Ingrese tiempo y grados", "error");
            }
        },

        hallarRelacionHyTV: function() {

            if (this.tiempoVuelo != "") {

                const gravedad = 9.8;
                const tiempoVueloCuadraro = this.tiempoVuelo * this.tiempoVuelo;
                var respuesta = 0;
                respuesta = ((gravedad * tiempoVueloCuadraro) / (8));
                this.HyTV = respuesta.toFixed(2);
            }
            else {
                Swal.fire("Error", "Ingrese tiempo y grados", "error");
            }
        },
    }
});