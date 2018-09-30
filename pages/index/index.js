//index.js
const app = getApp()

Page({
  data: {
   number: 0
  },
 
  onLoad: function () {
    
  },

  plusOne: function () {
    let currentNumber = this.data.number

    let newNumber = currentNumber + 1
    
    this.setData({ number : newNumber})
  }
})




