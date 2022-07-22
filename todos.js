/* global Vue */

var App = {
  data: function() {
   return {
    message: "Hello From Vue!",
    todos: [],
 };
},
  created: function() {
    this.loadTodos();
  },
methods: {
  loadTodos: function() { 
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {

        console.log(response.data);
        this.todos = response.data;
    });
  },
   createTodo: function () {
    // post request
    

   }
 },
};

Vue.createApp(App).mount('#app');