var app = new Vue({
    el: '#myapp',
	data:{

        valorAceleracion: '',
        valorTiempo: '',
        mruv_distancia: '',
        mruv_velocidad: '',
        mruv_tiempo: '',
        fraccion: '',
    },

    mounted: function(){

    },

    computed: {

    },

    methods: 
    {
        mruvDistancia: function() {

            if (this.valorAceleracion != '' && this.valorTiempo != ''){

                this.mruv_distancia =  0.5 * this.valorAceleracion * this.valorTiempo * this.valorTiempo;
            }
            else {
                Swal.fire("Error", "Casillas vacias", "error");
            }

        },

        mruvVelocidad: function() {

            if (this.valorAceleracion != '' && this.valorTiempo != ''){

                this.mruv_velocidad = this.valorAceleracion * this.valorTiempo;
            }
            else {
                Swal.fire("Error", "Casillas vacias", "error");
            }

        },

        mruvTiempo: function() {

            if (this.valorAceleracion != '' && this.valorTiempo != ''){

                this.fraccion = (2 * this.mruv_distancia) / this.valorAceleracion;
                this.mruv_tiempo = Math.sqrt(this.fraccion);
            }
            else {
                Swal.fire("Error", "Casillas vacias", "error");
            }

        },
    }
});