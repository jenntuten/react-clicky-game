(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Leslie",clicks:0,image:"https://imgur.com/BPz1NCI"},{id:2,name:"Ben",clicks:0},{id:3,name:"Ann",clicks:0},{id:4,name:"Chris",clicks:0},{id:5,name:"Andy",clicks:0},{id:6,name:"Donna",clicks:0},{id:7,name:"Ron",clicks:0},{id:8,name:"Tom",clicks:0},{id:9,name:"April",clicks:0},{id:10,name:"Jerry",clicks:0},{id:11,name:"Craig",clicks:0},{id:12,name:"Mark",clicks:0}]},,,,,,,,function(e,n,a){e.exports=a(27)},,,,,,function(e,n,a){},,function(e,n,a){},,function(e,n,a){},,function(e,n,a){},,function(e,n,a){},,function(e,n,a){},,function(e,n,a){"use strict";a.r(n);var t=a(0),c=a.n(t),r=a(3),i=a.n(r),s=a(4),l=a(5),o=a(7),m=a(6),u=a(8);a(15);var d=function(e){return c.a.createElement("div",{className:"card",onClick:function(){return e.shuffling(e.id)}},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image})),c.a.createElement("div",{className:"content"},c.a.createElement("ul",null,c.a.createElement("li",null,e.name))))};a(17);var f=function(e){return c.a.createElement("div",{className:"wrapper"},e.children)};a(19);var h=function(e){return c.a.createElement("h1",{className:"title"},e.children)};a(21);var k=function(e){return c.a.createElement("h2",{className:"score"},e.children)};a(23);var v=function(e){return c.a.createElement("h2",{className:"status"},e.children)},g=a(1);var E=function(e){function n(){var e,a;Object(s.a)(this,n);for(var t=arguments.length,c=new Array(t),r=0;r<t;r++)c[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(c)))).state={friends:g,score:0,clickedCards:[],message:""},a.shuffling=function(e){var n=a.state.clickedCards,t=a.state.score;if(console.log(t),n.includes(e))return console.log("You've already chosen this character!"),void a.setState({clickedCards:[],score:0,message:"You've already chosen this character!"});n.push(e),function(){for(var e=g.length-1;e>0;e--){var n=Math.floor(Math.random()*(e+1)),a=[g[n],g[e]];g[e]=a[0],g[n]=a[1]}}(),a.setState({friends:g,score:t+1})},a}return Object(u.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this;return c.a.createElement(f,null,c.a.createElement(h,null,"React Clicky Game"),c.a.createElement(k,null,"Score: ",this.state.score),c.a.createElement(v,null,this.state.message),this.state.friends.map(function(n){return c.a.createElement(d,{shuffling:e.shuffling,id:n.id,name:n.name,image:n.image})}))}}]),n}(t.Component);a(25);i.a.render(c.a.createElement(E,null),document.getElementById("root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.2cf74b46.chunk.js.map