var app = new Vue({
    el: '#myapp',
	data:{

        selec_vec1: '',
        valorModulo: '',
        valorAngulo: '',
        valorX: '',
        valorY: '',
        selec_vec2: '',
        valorModulo2: '',
        valorAngulo2: '',
        valorX2: '',
        valorY2: '',
        anguloResultante: '',
        vectorResultante: '',
        valorSumX: '',
        valorSumY: '',
    },

    mounted: function(){

    },

    computed: {

    },

    methods: 
    {
        calcularXY: function() {

            if (this.selec_vec1 != ''){
                
                if (this.valorModulo != '' && this.valorAngulo != '') {

                    var AnguloRadianes = this.valorAngulo * (Math.PI / 180);
                    var seno = Math.sin(AnguloRadianes);
                    var cos =  Math.cos(AnguloRadianes);

                    if (this.selec_vec1 == '1') {
    
                        var valorX = this.valorModulo * cos;
                        this.valorX = Math.round(valorX,1);

                        var valorY = this.valorModulo * seno;
                        this.valorY = Math.round(valorY,1);
                    }
                    
                    if (this.selec_vec1 == '2') {

                        var valorX = this.valorModulo * seno;
                        this.valorX = Math.round(valorX,1);
                        
                        var valorY = this.valorModulo * cos;
                        this.valorY = Math.round(valorY,1);
                    }
                }
                else {
                    Swal.fire("Error", "Modulo y angulo vacios", "error");
                }
            }
            else {
                Swal.fire("Error", "Seleccione caso", "error");
            }
        },

        calcularXY2: function() {

            if (this.selec_vec2 != ''){
                
                if (this.valorModulo2 != '' && this.valorAngulo2 != '') {

                    var AnguloRadianes = this.valorAngulo2 * (Math.PI / 180);
                    var seno = Math.sin(AnguloRadianes);
                    var cos =  Math.cos(AnguloRadianes);

                    if (this.selec_vec2 == '1') {
    
                        var valorX = this.valorModulo2 * cos;
                        this.valorX2 = Math.round(valorX,1);

                        var valorY = this.valorModulo2 * seno;
                        this.valorY2 = Math.round(valorY,1);
                    }
                    
                    if (this.selec_vec2 == '2') {

                        var valorX = this.valorModulo2 * cos;
                        this.valorX2 = Math.round(valorX,1);
                        
                        var valorY = this.valorModulo2 * seno;
                        this.valorY2 = Math.round(valorY,1);
                    }
                }
                else {
                    Swal.fire("Error", "Modulo y angulo vacios", "error");
                }
            }
            else {
                Swal.fire("Error", "Seleccione caso", "error");
            }
        },

        datosvectorResultante: function() {

            if (this.valorX != '' && this.valorY != '' && this.valorX2 != '' && this.valorY2 != '') {

                var x = this.valorX - this.valorX2;
                var y = this.valorY + this.valorY2;

                this.valorSumX = x;
                this.valorSumY = y;
                
                x = x * (Math.PI / 180);
                y = y * (Math.PI / 180);
                var xy = x / y;

                this.anguloResultante = Math.atan(y/x);
                this.anguloResultante = this.anguloResultante * 180 / Math.PI;


                xcuadrado = Math.pow(this.valorSumX, 2);
                ycuadrado = Math.pow(this.valorSumY, 2);

                sumacuadrados = xcuadrado + ycuadrado;
                this.vectorResultante = Math.sqrt(sumacuadrados);
            }
            else {
                Swal.fire("Error", "Vectores vacios", "error");
            }
            
        },
    }
});