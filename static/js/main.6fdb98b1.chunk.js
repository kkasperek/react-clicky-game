(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"SpongeBob",image:"https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/666px-Spongebob-squarepants.svg.png",occupation:"Fry Cook",location:"A Pineapple Under the Sea",clicked:!1},{id:2,name:"Mr. Krabs",image:"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131",occupation:"Restaurant Owner",location:"A Giant Anchor",clicked:!1},{id:3,name:"Squidward",image:"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626",occupation:"Cashier",location:"An Easter Island Head",clicked:!1},{id:4,name:"Dexter",image:"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png",occupation:"Boy Genius",location:"A Secret Laboratory",clicked:!1},{id:5,name:"Courage",image:"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423",occupation:"A Cowardly Dog",location:"Nowhere, Kansas",clicked:!1},{id:6,name:"Doug Funnie",image:"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511",occupation:"Student",location:"Bluffington",clicked:!1},{id:7,name:"Bugs Bunny",image:"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607",occupation:"Looney Toon",location:"A Rabbit Burrow",clicked:!1},{id:8,name:"Johnny Bravo",image:"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist",occupation:"Ladies Man",location:"Aron City",clicked:!1},{id:9,name:"Tommy Pickles",image:"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641",occupation:"Adventurer",location:"California",clicked:!1},{id:10,name:"Rocko",image:"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416",occupation:"Cashier",location:"O-Town, California",clicked:!1},{id:11,name:"Captain Planet",image:"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836",occupation:"Superhero",location:"Earth",clicked:!1},{id:12,name:"Ickis",image:"http://static.tvtropes.org/pmwiki/pub/images/ickis.png",occupation:"Ahhhh! A Real Monster!",location:"Under a City Dump",clicked:!1}]},,,,,,,,function(e,t,n){e.exports=n(26)},,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(3),c=n.n(o),r=n(4),l=n(5),s=n(7),u=n(6),d=n(8),m=(n(14),function(e){return i.a.createElement("div",{className:"card",value:e.id,onClick:function(){return e.handleClick(e.id)}},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})))}),p=(n(16),function(e){return i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement("li",{className:"brand animated lightSpeedIn"},i.a.createElement("a",{href:"/"},e.title)),i.a.createElement("li",{id:"winLose"},e.winLose),i.a.createElement("li",{id:"cur-sco"},"Current Score: ",e.score),i.a.createElement("li",{id:"top-sco"},"Top Score: ",e.topScore)))}),h=(n(18),function(e){return i.a.createElement("div",{className:"wrapper"},e.children)}),g=(n(20),function(e){return i.a.createElement("h1",{className:"title"},e.children)}),f=function(e){return i.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)},k=function(e){return i.a.createElement("div",{className:"row".concat(e.fluid?"-fluid":"")},e.children)},v=function(e){var t=e.size.split(" ").map(function(e){return"col-"+e}).join(" ");return i.a.createElement("div",{className:t},e.children)},b=n(1);n(22);var w=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={friends:b,currentScore:0,topScore:0,winLose:"",clicked:[]},n.handleClick=function(e){-1===n.state.clicked.indexOf(e)?(n.handleIncrement(),n.setState({clicked:n.state.clicked.concat(e)})):n.handleReset()},n.handleIncrement=function(){var e=n.state.currentScore+1;n.setState({currentScore:e,winLoss:""}),e>=n.state.topScore?n.setState({topScore:e}):12===e&&n.setState({winLose:"You win!"}),n.handleShuffle()},n.handleReset=function(){n.setState({currentScore:0,topScore:n.state.topScore,winLose:"You Lose!",clicked:[]}),n.handleShuffle()},n.handleShuffle=function(){var e=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}return e}(b);n.setState({friends:e})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(h,null,i.a.createElement(p,{title:"The Clicky Game",score:this.state.currentScore,topScore:this.state.topScore,winLose:this.state.winLose}),i.a.createElement(g,null,i.a.createElement("h2",null,"Instructions:")," Try to click on each character, but don't hit any duplicates or you lose!!!"),i.a.createElement(f,null,i.a.createElement(k,null,this.state.friends.map(function(t){return i.a.createElement(v,{size:"md-3 sm-6"},i.a.createElement(m,{key:t.id,handleClick:e.handleClick,handleIncrement:e.handleIncrement,handleReset:e.handleReset,handleShuffle:e.handleShuffle,id:t.id,image:t.image}))}))))}}]),t}(a.Component);n(24);c.a.render(i.a.createElement(w,null),document.getElementById("root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.6fdb98b1.chunk.js.map