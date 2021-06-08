const app = Vue.createApp({
  data() {
      return {
        //hex: '',
        //changeColor: '',
        hex: '',
       
      }
  },
  methods : {
    generateColor() {
      //Dividir funcionalidades: 
      const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
          var hex= ''
      //Generamos el color y concatenamos con '#'
      for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random()*hexValues.length)
        hex += hexValues[index]
      }
      this.hex = '#'+ hex
      
    },
       
  }      
})

app.mount('#app')