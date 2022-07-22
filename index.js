/* global Vue */

var App = {
  data: function() {
    return {
      message: "Hello from JavaScript!",
      name: "Krystal Lopez",
      number: 0,
      messages: ["good morning", "good night", "good afternoon", "goodbye"],
      fruits: ["orange","bananas", "plums", "watermelon"],
      newFruits: ""
  
    };
  },

  methods: {
    changeMessage: function() {
    this.message = this.messages[Math.floor(Math.random() * 4)]
    this.name = "Bob Dylan"
    
    }

  }
};



Vue.createApp(App).mount('#app');