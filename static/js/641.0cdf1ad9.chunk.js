"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[641],{175:function(t,e,r){r.d(e,{Hg:function(){return i},IQ:function(){return o},Pg:function(){return u}});var n=r(861),a=r(757),s=r.n(a),c=r(340);c.Z.defaults.baseURL="https://api.themoviedb.org",c.Z.defaults.params={api_key:"00cc31c17df561925e753da9321ba2b0"};var i=function(){var t=(0,n.Z)(s().mark((function t(){var e,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/3/trending/movie/week");case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,n.Z)(s().mark((function t(e){var r,n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/3/movie/".concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(s().mark((function t(e){var r,n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/3/movie/".concat(e,"/credits"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},641:function(t,e,r){r.r(e),r.d(e,{default:function(){return g}});var n=r(861),a=r(439),s=r(757),c=r.n(s),i=r(791),u=r(175),o=r(87),f=r(767),p="MoviesList_wrapp__Ho0au",v="MoviesList_list__0Owr9",l="MoviesList_item__eePYv",d="MoviesList_link__8rTGX",_="MoviesList_img__v4jFC",m="MoviesList_title__PB2c8",h=r(184),x=function(t){var e=t.movies,r=function(t){return"https://image.tmdb.org/t/p/w200/".concat(t)};return(0,h.jsx)("div",{className:p,children:(0,h.jsx)("ul",{className:v,children:e.map((function(t){var e=t.poster_path,n=t.id,a=t.title;return(0,h.jsx)("li",{className:l,children:(0,h.jsxs)(o.rU,{to:"/movies/".concat(n),className:d,children:[(0,h.jsx)("img",{className:_,src:e?r(e):f,alt:a}),(0,h.jsx)("h2",{className:m,children:a})]})},n)}))})})},g=function(){var t=(0,i.useState)([]),e=(0,a.Z)(t,2),r=e[0],s=e[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,u.Hg)();case 3:e=t.sent,s(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,h.jsx)(x,{movies:r})}},767:function(t,e,r){t.exports=r.p+"static/media/poster_film.f9afdc564df6183cbbd8.jpg"}}]);
//# sourceMappingURL=641.0cdf1ad9.chunk.js.map