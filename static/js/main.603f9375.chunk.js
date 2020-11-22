(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{22:function(e,t,a){e.exports=a(41)},27:function(e,t,a){},28:function(e,t,a){},31:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(20),i=a.n(r),l=a(11),u=(a(27),a(8)),s=a(6),c=a(10),m=a(9),p=a(2),d=(a(28),function(){return o.a.createElement("section",null,o.a.createElement("h2",null," About Pok\xe9dex "),o.a.createElement("section",null,o.a.createElement("p",null," This application simulates a Pok\xe9dex, a digital encliclopedia containing all Pok\xe9mons "),o.a.createElement("p",null," One can filter Pok\xe9mons by type, and see more details for each one of them "),o.a.createElement("img",{className:"pokedex-image",src:"https://cdn.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png",alt:"Pok\xe9dex"})))}),h=a(1),b=(Object(h.objectOf)(h.bool),Object(h.shape)({averageWeight:Object(h.shape)({measurementUnit:h.string,value:h.string}),foundAt:Object(h.arrayOf)(Object(h.shape)({location:h.string,map:h.string})),id:h.number,image:h.string,moreInfo:h.string,name:h.string,summary:h.string,type:h.string}),a(31),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.pokemon,a=t.averageWeight,n=a.measurementUnit,r=a.value,i=t.id,u=t.image,s=t.name,c=t.type,m=e.showDetailsLink,p=e.isFavorite;return o.a.createElement("div",{className:"pokemon"},o.a.createElement("div",{className:"pokemon-overview"},o.a.createElement("p",null,s),o.a.createElement("p",null,c),o.a.createElement("p",null,"Average weight: ".concat(r," ").concat(n)),m&&o.a.createElement(l.b,{to:"pokemons/".concat(i)}," More details ")),o.a.createElement("img",{src:u,alt:"".concat(s," sprite")}),p&&o.a.createElement("img",{className:"favorite-icon",src:"/star-icon.svg",alt:"".concat(s," is marked as favorite")}))}}]),a}(o.a.Component));b.defaultProps={showDetailsLink:!0};var k=b,g=(a(35),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"renderFavoritePokemons",value:function(){var e=this.props.pokemons,t=a.renderFavoritePokemon;return o.a.createElement("div",{className:"favorite-pokemons"},e.map((function(e){return t(e)})))}},{key:"render",value:function(){var e=a.notFound,t=0===this.props.pokemons.length;return o.a.createElement("div",null,o.a.createElement("h2",null," Favorite pok\xe9mons "),t?e():this.renderFavoritePokemons())}}],[{key:"notFound",value:function(){return o.a.createElement("div",null,o.a.createElement("p",null," No favorite pokemon found "))}},{key:"renderFavoritePokemon",value:function(e){return o.a.createElement("div",{key:e.id,className:"favorite-pokemon"},o.a.createElement(k,{pokemon:e,isFavorite:!0}))}}]),a}(o.a.Component));g.defaultProps={pokemons:[]};var f=g,v=(a(36),function(){return o.a.createElement("div",{className:"not-found"},o.a.createElement("h2",null,"Page requested not found",o.a.createElement("span",{role:"img","aria-label":"Crying emoji"}," \ud83d\ude2d ")),o.a.createElement("img",{className:"not-found-image",src:"https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif",alt:"Pikachu crying because the page requested was not found"}))}),y=a(13),_=(a(37),function(e){var t=e.className,a=e.children,n=e.disabled,r=e.onClick;return o.a.createElement("button",{onClick:r,className:"button-text ".concat(t),disabled:n,type:"button"},a)});_.defaultProps={children:null,className:"",disabled:!1};var P=_,E=(a(38),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={pokemonIndex:0,filteredType:"all"},n}return Object(s.a)(a,[{key:"filterPokemons",value:function(e){this.setState({filteredType:e,pokemonIndex:0})}},{key:"nextPokemon",value:function(e){this.setState((function(t){return{pokemonIndex:(t.pokemonIndex+1)%e}}))}},{key:"fetchFilteredPokemons",value:function(){var e=this.props.pokemons,t=this.state.filteredType;return e.filter((function(e){return"all"===t||e.type===t}))}},{key:"fetchPokemonTypes",value:function(){var e=this.props.pokemons;return Object(y.a)(new Set(e.reduce((function(e,t){var a=t.type;return[].concat(Object(y.a)(e),[a])}),[])))}},{key:"render",value:function(){var e=this,t=this.props.isPokemonFavoriteById,a=this.fetchFilteredPokemons(),n=this.fetchPokemonTypes(),r=this.state.pokemonIndex,i=a[r];return o.a.createElement("div",{className:"pokedex"},o.a.createElement(k,{pokemon:i,isFavorite:t[i.id]}),o.a.createElement("div",{className:"pokedex-buttons-panel"},o.a.createElement(P,{onClick:function(){return e.filterPokemons("all")},className:"filter-button"},"All"),n.map((function(t){return o.a.createElement(P,{key:t,onClick:function(){return e.filterPokemons(t)},className:"filter-button"},t)}))),o.a.createElement(P,{className:"pokedex-button",onClick:function(){return e.nextPokemon(a.length)},disabled:a.length<=1},"Pr\xf3ximo pok\xe9mon"))}}]),a}(o.a.Component)),I=a(14),F=(a(39),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).renderFavoriteInput=n.renderFavoriteInput.bind(Object(I.a)(n)),n}return Object(s.a)(a,null,[{key:"renderHabitat",value:function(e){var t=e.foundAt,a=e.name;return o.a.createElement("section",null,o.a.createElement("h2",null,"Game Locations of ".concat(a)),o.a.createElement("div",{className:"pokemon-habitat"},t.map((function(e){var t=e.location,n=e.map;return o.a.createElement("div",{key:t},o.a.createElement("img",{src:n,alt:"".concat(a," location")}),o.a.createElement("p",null,o.a.createElement("em",null,t)))}))))}},{key:"renderSummary",value:function(e){var t=e.summary;return o.a.createElement("section",null,o.a.createElement("h2",null," Summary "),o.a.createElement("p",null,t))}}]),Object(s.a)(a,[{key:"findPokemon",value:function(e){return this.props.pokemons.find((function(t){return t.id===e}))}},{key:"renderFavoriteInput",value:function(e,t){var a=this.props.onUpdateFavoritePokemons;return o.a.createElement("form",{className:"favorite-form"},o.a.createElement("label",{htmlFor:"favorite"},"Pok\xe9mon favoritado?",o.a.createElement("input",{type:"checkbox",id:"favorite",checked:t,onChange:function(t){var n=t.target.checked;return a(e,n)}})))}},{key:"render",value:function(){var e=a.renderHabitat,t=a.renderSummary,n=this.renderFavoriteInput,r=this.props,i=r.match.params.id,l=r.isPokemonFavoriteById,u=this.findPokemon(parseInt(i,10)),s=l[i];return o.a.createElement("section",{className:"pokemon-details"},o.a.createElement("h2",null,"".concat(u.name," Details")),o.a.createElement(k,{pokemon:u,showDetailsLink:!1,isFavorite:s}),t(u),e(u),n(u.id,s))}}]),a}(o.a.Component)),w=function(){return JSON.parse(localStorage.getItem("favoritePokemonIds"))||[]},O=function(e){return localStorage.setItem("favoritePokemonIds",JSON.stringify(e))},A=function(e,t){return t?function(e){var t=w(),a=[].concat(Object(y.a)(t),[e]);O(a)}(e):function(e){var t=w().filter((function(t){return t!==e}));O(t)}(e)},j=[{id:25,name:"Pikachu",type:"Electric",averageWeight:{value:"6.0",measurementUnit:"kg"},image:"https://cdn.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png",moreInfo:"https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)",foundAt:[{location:"Kanto Viridian Forest",map:"https://cdn.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png"},{location:"Kanto Power Plant",map:"https://cdn.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png"}],summary:"This intelligent Pok\xe9mon roasts hard berries with electricity to make them tender enough to eat."},{id:4,name:"Charmander",type:"Fire",averageWeight:{value:"8.5",measurementUnit:"kg"},image:"https://cdn.bulbagarden.net/upload/0/0a/Spr_5b_004.png",moreInfo:"https://bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)",foundAt:[{location:"Alola Route 3",map:"https://cdn.bulbagarden.net/upload/9/93/Alola_Route_3_Map.png"},{location:"Kanto Route 3",map:"https://cdn.bulbagarden.net/upload/4/4a/Kanto_Route_3_Map.png"},{location:"Kanto Route 4",map:"https://cdn.bulbagarden.net/upload/2/24/Kanto_Route_4_Map.png"},{location:"Kanto Rock Tunnel",map:"https://cdn.bulbagarden.net/upload/6/6f/Kanto_Rock_Tunnel_Map.png"}],summary:"The flame on its tail shows the strength of its life force. If it is weak, the flame also burns weakly."},{id:10,name:"Caterpie",type:"Bug",averageWeight:{value:"2.9",measurementUnit:"kg"},image:"https://cdn.bulbagarden.net/upload/8/83/Spr_5b_010.png",moreInfo:"https://bulbapedia.bulbagarden.net/wiki/Caterpie_(Pok%C3%A9mon)",foundAt:[{location:"Johto Route 30",map:"https://cdn.bulbagarden.net/upload/7/76/Johto_Route_30_Map.png"},{location:"Johto Route 31",map:"https://cdn.bulbagarden.net/upload/2/2b/Johto_Route_31_Map.png"},{location:"Ilex Forest",map:"https://cdn.bulbagarden.net/upload/a/ae/Johto_Ilex_Forest_Map.png"},{location:"Johto National Park",map:"https://cdn.bulbagarden.net/upload/4/4e/Johto_National_Park_Map.png"}],summary:"For protection, it releases a horrible stench from the antennae on its head to drive away enemies."},{id:23,name:"Ekans",type:"Poison",averageWeight:{value:"6.9",measurementUnit:"kg"},image:"https://cdn.bulbagarden.net/upload/1/18/Spr_5b_023.png",moreInfo:"https://bulbapedia.bulbagarden.net/wiki/Ekans_(Pok%C3%A9mon)",foundAt:[{location:"Goldenrod Game Corner",map:"https://cdn.bulbagarden.net/upload/e/ec/Johto_Goldenrod_City_Map.png"}],summary:"It can freely detach its jaw to swallow large prey whole. It can become too heavy to move, however."},{id:65,name:"Alakazam",type:"Psychic",averageWeight:{value:"48.0",measurementUnit:"kg"},image:"https://cdn.bulbagarden.net/upload/8/88/Spr_5b_065_m.png",moreInfo:"https://bulbapedia.bulbagarden.net/wiki/Alakazam_(Pok%C3%A9mon)",foundAt:[{location:"Unova Accumula Town",map:"https://cdn.bulbagarden.net/upload/4/44/Unova_Accumula_Town_Map.png"}],summary:"Closing both its eyes heightens all its other senses. This enables it to use its abilities to their extremes."},{id:151,name:"Mew",type:"Psychic",averageWeight:{value:"4.0",measurementUnit:"kg"},image:"https://cdn.bulbagarden.net/upload/4/43/Spr_5b_151.png",moreInfo:"https://bulbapedia.bulbagarden.net/wiki/Mew_(Pok%C3%A9mon)",foundAt:[{location:"Faraway Island",map:"https://cdn.bulbagarden.net/upload/e/e4/Hoenn_Faraway_Island_Map.png"}],summary:"Apparently, it appears only to those people who are pure of heart and have a strong desire to see it."},{id:78,name:"Rapidash",type:"Fire",averageWeight:{value:"95.0",measurementUnit:"kg"},image:"https://cdn.bulbagarden.net/upload/5/58/Spr_5b_078.png",moreInfo:"https://bulbapedia.bulbagarden.net/wiki/Rapidash_(Pok%C3%A9mon)",foundAt:[{location:"Kanto Route 28",map:"https://cdn.bulbagarden.net/upload/5/5b/Kanto_Route_28_Map.png"},{location:"Johto Mount Silver",map:"https://cdn.bulbagarden.net/upload/9/95/Johto_Mt_Silver_Map.png"}],summary:"At full gallop, its four hooves barely touch the ground because it moves so incredibly fast."},{id:143,name:"Snorlax",type:"Normal",averageWeight:{value:"460.0",measurementUnit:"kg"},image:"https://cdn.bulbagarden.net/upload/4/40/Spr_5b_143.png",moreInfo:"https://bulbapedia.bulbagarden.net/wiki/Snorlax_(Pok%C3%A9mon)",foundAt:[{location:"Kanto Vermillion City",map:"https://cdn.bulbagarden.net/upload/5/54/Kanto_Vermilion_City_Map.png"}],summary:"What sounds like its cry may actually be its snores or the rumblings of its hungry belly."},{id:148,name:"Dragonair",type:"Dragon",averageWeight:{value:"16.5",measurementUnit:"kg"},image:"https://cdn.bulbagarden.net/upload/2/2c/Spr_5b_148.png",moreInfo:"https://bulbapedia.bulbagarden.net/wiki/Dragonair_(Pok%C3%A9mon)",foundAt:[{location:"Johto Route 45",map:"https://cdn.bulbagarden.net/upload/2/21/Johto_Route_45_Map.png"},{location:"Johto Dragon's Den",map:"https://cdn.bulbagarden.net/upload/1/1e/Johto_Dragons_Den_Map.png"}],summary:"They say that if it emits an aura from its whole body, the weather will begin to change instantly."}],C=(a(40),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={isPokemonFavoriteById:a.setIsPokemonFavoriteById()},n}return Object(s.a)(a,null,[{key:"setIsPokemonFavoriteById",value:function(){var e=w();return j.reduce((function(t,a){return t[a.id]=e.includes(a.id),t}),{})}}]),Object(s.a)(a,[{key:"onUpdateFavoritePokemons",value:function(e,t){A(e,t),this.setState({isPokemonFavoriteById:a.setIsPokemonFavoriteById()})}},{key:"renderPokedex",value:function(){var e=this.state.isPokemonFavoriteById;return o.a.createElement(E,{pokemons:j,isPokemonFavoriteById:e})}},{key:"renderPokemonDetails",value:function(e){var t=this,a=this.state.isPokemonFavoriteById;return o.a.createElement(F,{isPokemonFavoriteById:a,match:e,pokemons:j,onUpdateFavoritePokemons:function(e,a){return t.onUpdateFavoritePokemons(e,a)}})}},{key:"renderRoutes",value:function(){var e=this,t=this.state.isPokemonFavoriteById,a=j.filter((function(e){var a=e.id;return t[a]}));return o.a.createElement(p.c,null,o.a.createElement(p.a,{exact:!0,path:"/",render:function(t){var a=t.match;return e.renderPokedex(a)}}),o.a.createElement(p.a,{path:"/pokemons/:id",render:function(t){var a=t.match;return e.renderPokemonDetails(a)}}),o.a.createElement(p.a,{path:"/favorites",render:function(){return o.a.createElement(f,{pokemons:a})}}),o.a.createElement(p.a,{path:"/about",component:d}),o.a.createElement(p.a,{component:v}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null," Pok\xe9dex "),o.a.createElement("nav",null,o.a.createElement(l.b,{className:"link",to:"/"}," Home "),o.a.createElement(l.b,{className:"link",to:"/about"}," About "),o.a.createElement(l.b,{className:"link",to:"/favorites"}," Favorite Pok\xe9mons ")),this.renderRoutes())}}]),a}(o.a.Component));i.a.render(o.a.createElement(l.a,null,o.a.createElement(C,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.603f9375.chunk.js.map