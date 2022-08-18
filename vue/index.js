var app = new Vue({
    el: '#myapp',
	data:{

        nombre: '',
        nombre2: '',
    },

    mounted: function(){

    },

    methods: 
    {
        pruebaclick: function() {
            
            if (this.nombre != '') {

                this.nombre2 = this.nombre * 1000;
            }
            else {
                alert("Nombre no puede estar vacio");
            }
        },
    }
});