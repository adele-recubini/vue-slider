var app = new Vue({
 el: '#root',
 data:{
   image:["https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg",

   "https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg",

   "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg",

   "https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg",
 ],

 imageIndex: 0,

 },
methods:{

next:function() {
  this.imageIndex +=1;
},

previous:function() {
  this.imageIndex-=1;
}

},
computed: {
    currentImg: function() {
      return this.image[Math.abs(this.imageIndex) % this.image.length];
    }
  }


});

Vue.config.devtools = true;
