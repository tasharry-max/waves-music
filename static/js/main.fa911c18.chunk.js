(this["webpackJsonpwaves-music"]=this["webpackJsonpwaves-music"]||[]).push([[0],{19:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(2),r=a.n(c),i=a(12),s=a.n(i),o=a(4),l=a.n(o),u=a(6),d=a(3),p=a(8),b=(a(19),function(e){var t=e.currentSong,a=e.isPlaying;return Object(n.jsxs)("div",{className:"song-container",children:[Object(n.jsx)("img",{alt:t.name,src:t.cover,className:"".concat(a?"rotate":"")}),Object(n.jsx)("h2",{children:t.name}),Object(n.jsx)("h3",{children:t.artist})]})}),j=a(7),h=a(5),f=function(e){var t=e.currentSong,a=e.setCurrentSong,c=(e.id,e.isPlaying),r=e.setIsPlaying,i=e.songInfo,s=e.setSongInfo,o=e.audioRef,p=e.songs,b=e.setSongs,f=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},m=function(e){var t=p.map((function(t){return t.id===e.id?Object(d.a)(Object(d.a)({},t),{},{active:!0}):Object(d.a)(Object(d.a)({},t),{},{active:!1})}));b(t)},g=function(){var e=Object(u.a)(l.a.mark((function e(n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=p.findIndex((function(e){return e.id===t.id})),"skip-forward"!==n){e.next=5;break}return e.next=4,a(p[(r+1)%p.length]);case 4:m(p[(r+1)%p.length]);case 5:if("skip-back"!==n){e.next=13;break}if((r-1)%p.length!==-1){e.next=11;break}return e.next=9,a(p[p.length-1]);case 9:return c&&o.current.play(),e.abrupt("return");case 11:return e.next=13,a(p[(r-1)%p.length]);case 13:c&&o.current.play();case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=i.currentTime/i.duration*100;return Object(n.jsxs)("div",{className:"player",children:[Object(n.jsxs)("div",{className:"time-control",children:[Object(n.jsx)("p",{children:f(i.currentTime)}),Object(n.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(t.color[0],", ").concat(t.color[1],")")},className:"track",children:[Object(n.jsx)("input",{type:"range",value:i.currentTime,min:0,max:i.duration||0,onChange:function(e){o.current.currentTime=e.target.value,s(Object(d.a)(Object(d.a)({},i),{},{currentTime:e.target.value}))}}),Object(n.jsx)("div",{className:"animate-track",style:{transform:"translateX(".concat(v,"%)")}})]}),Object(n.jsx)("p",{children:i.duration?f(i.duration):"0:00"})]}),Object(n.jsxs)("div",{className:"play-control",children:[Object(n.jsx)(j.a,{onClick:function(){return g("skip-back")},className:"skip-back",size:"2x",icon:h.a}),Object(n.jsx)(j.a,{onClick:function(){c?(o.current.pause(),r(!c)):(o.current.play(),r(!c))},className:"play",size:"2x",icon:c?h.d:h.e}),Object(n.jsx)(j.a,{onClick:function(){return g("skip-forward")},className:"skip-forward",size:"2x",icon:h.b})]})]})},m=function(e){var t=e.song,a=e.songs,c=e.id,r=e.setCurrentSong,i=e.audioRef,s=e.isPlaying,o=e.setSongs,p=function(){var e=Object(u.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(t);case 2:n=a.map((function(e){return e.id===c?Object(d.a)(Object(d.a)({},e),{},{active:!0}):Object(d.a)(Object(d.a)({},e),{},{active:!1})})),o(n),s&&i.current.play();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{onClick:p,className:"library-song ".concat(t.active?"selected":""),children:[Object(n.jsx)("img",{alt:t.name,src:t.cover}),Object(n.jsxs)("div",{className:"song-description",children:[Object(n.jsx)("h3",{children:t.name}),Object(n.jsx)("h4",{children:t.artist})]})]})},g=function(e){var t=e.songs,a=e.setCurrentSong,c=e.audioRef,r=e.isPlaying,i=e.setSongs,s=e.libraryStatus;return Object(n.jsxs)("div",{className:"library ".concat(s?"active-library":""),children:[Object(n.jsx)("h2",{children:"Library"}),Object(n.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(n.jsx)(m,{song:e,songs:t,id:e.id,setCurrentSong:a,audioRef:c,isPlaying:r,setSongs:i,libraryStatus:s},e.id)}))})]})},v=function(e){var t=e.libraryStatus,a=e.setLibraryStatus;return Object(n.jsxs)("nav",{children:[Object(n.jsx)("h1",{children:"Waves"}),Object(n.jsxs)("button",{onClick:function(){return a(!t)},children:["Library",Object(n.jsx)(j.a,{icon:h.c})]})]})},O=a(27);var x=function(){return[{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(O.a)(),active:!0},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(O.a)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(O.a)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(O.a)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(O.a)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(O.a)(),active:!1},{name:"Upset (hold it in)",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=7925",color:["#BA4A46","#FDF0FD"],id:Object(O.a)(),active:!1}]};var y=function(){var e=Object(c.useState)(x()),t=Object(p.a)(e,2),a=t[0],r=t[1],i=Object(c.useState)(a[0]),s=Object(p.a)(i,2),o=s[0],j=s[1],h=Object(c.useState)(!1),m=Object(p.a)(h,2),O=m[0],y=m[1],S=Object(c.useState)({currentTime:0,duration:0}),k=Object(p.a)(S,2),w=k[0],C=k[1],N=Object(c.useState)(!1),A=Object(p.a)(N,2),P=A[0],I=A[1],T=Object(c.useRef)(null),R=function(e){var t=e.target.currentTime,a=e.target.duration;C(Object(d.a)(Object(d.a)({},w),{},{currentTime:t,duration:a}))},D=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.findIndex((function(e){return e.id===o.id})),e.next=3,j(a[(t+1)%a.length]);case 3:O&&T.current.play();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"App ".concat(P?"library-active":""),children:[Object(n.jsx)(v,{libraryStatus:P,setLibraryStatus:I}),Object(n.jsx)(b,{currentSong:o,isPlaying:O}),Object(n.jsx)(f,{audioRef:T,isPlaying:O,setIsPlaying:y,currentSong:o,setCurrentSong:j,songInfo:w,setSongInfo:C,songs:a,setSongs:r}),Object(n.jsx)(g,{audioRef:T,songs:a,setCurrentSong:j,isPlaying:O,setSongs:r,libraryStatus:P}),Object(n.jsx)("audio",{onLoadedMetadata:R,onTimeUpdate:R,ref:T,src:o.audio,onEnded:D})]})};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.fa911c18.chunk.js.map