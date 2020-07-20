// var app = new Vue({
//     el: '#app',
//     data :{
//         'message' :'hello world'
//     }

// });
var app = new Vue ({
    el :"#app",
    methods :{
        greet: function(name){
            return 'Good morning'+name;
        }
    }
})
