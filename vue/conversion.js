var app = new Vue({
    el: '#myapp',
	data:{

        valorEntrada: '',
        valorSalida: '',
        unidadEntrada: '',
        unidadSalida: '',
    },

    mounted: function(){

    },

    methods: 
    {
        convertirDistancias: function() {

            if (this.valorEntrada != '' && this.unidadEntrada != '' && this.unidadSalida != '' && this.valorEntrada > 0) {

                if (this.unidadEntrada != this.unidadSalida) {

                    switch (this.unidadEntrada) {
                        case 'CM':
                                if (this.unidadSalida == 'M') {
                                    
                                    this.valorSalida = this.valorEntrada / 100;
                                }
                                else {
                                    this.valorSalida = this.valorEntrada / 100000;
                                }
                            break;
                    
                        case 'M':
                                if (this.unidadSalida == 'CM') {
                                    
                                    this.valorSalida = this.valorEntrada * 100;
                                }
                                else {
                                    
                                    this.valorSalida = this.valorEntrada / 1000;
                                }
                            break;
                            
                        case 'KM':
                                if (this.unidadSalida == 'CM') {

                                    this.valorSalida = this.valorEntrada * 100000;
                                }
                                else {

                                    this.valorSalida = this.valorEntrada * 1000;
                                }
                        break;
                        default:
                            break;
                    }
                }
                else {
                    Swal.fire("Error", "Unidades de medida deben ser distintas", "error");
                }
            }
            else {
                Swal.fire("Error", "Debe llenar todos los datos", "error");
            }
        },

        convertirVelocidad: function() {

            if (this.valorEntrada != '' && this.unidadEntrada != '' && this.unidadSalida != '' && this.valorEntrada > 0) {

                if (this.unidadEntrada != this.unidadSalida) {

                    switch (this.unidadEntrada) {
                        case 'MS':
                                if (this.unidadSalida == 'KM/H') {
                                    
                                    this.valorSalida = this.valorEntrada * 3.6;
                                }
                                else {
                                    this.valorSalida = this.valorEntrada * 2.237;
                                }
                            break;
                    
                        case 'KMH':
                                if (this.unidadSalida == 'MS') {
                                    
                                    this.valorSalida = this.valorEntrada / 3.6;
                                }
                                else {
                                    
                                    this.valorSalida = this.valorEntrada / 1.609;
                                }
                            break;
                            
                        case 'MH':
                                if (this.unidadSalida == 'MS') {

                                    this.valorSalida = this.valorEntrada / 2.237;
                                }
                                else {

                                    this.valorSalida = this.valorEntrada * 1.609;
                                }
                        break;
                        default:
                            break;
                    }
                }
                else {
                    Swal.fire("Error", "Unidades de medida deben ser distintas", "error");
                }
            }
            else {
                Swal.fire("Error", "Debe llenar todos los datos", "error");
            }
        },

        limpiar: function() {
            this.valorEntrada = '';
            this.valorSalida = '';
        }
    }
});