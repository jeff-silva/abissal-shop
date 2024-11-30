import{t as l,v as d,x as e,y as h,J as p,K as w,g as y,z as c,L as g,M as v,N as _,O as u,_ as k}from"./YwRVhdt2.js";const j=(i,t="BRL",r=null)=>(r=r===null?navigator.language:r,new Intl.NumberFormat(r,{style:"currency",currency:t}).format(i).replace(/\,/g,"-").replace(/\./g,",").replace(/\-/g,".")),A={class:"bg-slate-700 rounded overflow-hidden"},C={href:""},M=["src"],Z={class:"p-6"},B={href:"",class:"text-lg font-semibold leading-tight hover:underline text-gray-400"},O={class:"mt-4 flex items-center justify-between gap-4"},N={class:"text-2xl font-extrabold leading-tight text-white"},S={__name:"product-card",props:{product:{type:Object,default:()=>({})}},setup(i){const t=i;return(r,a)=>(l(),d("div",A,[e("a",C,[e("img",{style:{height:"300px"},class:"w-full object-cover",src:t.product.cover,alt:""},null,8,M)]),e("div",Z,[e("a",B,h(t.product.name),1),a[0]||(a[0]=p('<div class="mt-2 flex items-center gap-2"><div class="flex items-center"><svg class="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path></svg><svg class="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path></svg><svg class="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path></svg><svg class="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path></svg><svg class="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path></svg></div><p class="text-sm font-medium text-gray-900 dark:text-white">5.0</p><p class="text-sm font-medium text-slate-400">(455)</p></div><ul class="mt-2 flex items-center gap-4"><li class="flex items-center gap-2"><svg class="h-4 w-4 text-slate-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path></svg><p class="text-sm font-medium text-slate-400">Fast Delivery</p></li><li class="flex items-center gap-2"><svg class="h-4 w-4 text-slate-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path></svg><p class="text-sm font-medium text-slate-400">Best Price</p></li></ul>',2)),e("div",O,[e("p",N,h(j(t.product.amount)),1)])])]))}};class s{constructor(t={}){this.name=t.name??"",this.amount=t.amount??null,this.cover=t.cover??"https://i.pinimg.com/736x/71/24/fd/7124fd67fa3a65203a12712b53e0a603.jpg",this.tags=t.tags??[]}}class m{constructor(t={}){this.name=t.name??""}}const D=[new m({id:"filme",name:"Filme"}),new m({id:"diretor",name:"Diretor"}),new m({id:"quadrinnho",name:"Quadrinho"})],z=[new s({name:"Dona Sônia Pediu Uma Arma para Seu Vizinho Alcides",amount:1998.3,cover:"https://www.filmesdeplastico.com.br/wp-content/uploads/2022/08/dona-sonia-pediu-uma-arma-para-seu-vizinho-alcides-04.jpg",tags:["Filmes"]}),new s({name:"Hitcock",amount:100,cover:"https://i.pinimg.com/736x/cd/15/00/cd1500be50ce1f43a22a97518a5e418f.jpg"}),new s({name:"Varda",amount:100,cover:"https://i.pinimg.com/736x/a8/9d/79/a89d7912dbc34e6ccc397890aad516f8.jpg"}),new s({name:"Tarantino",amount:100,cover:"https://i.pinimg.com/736x/73/6a/22/736a2240eba964c840c02870a12f364a.jpg"}),new s({name:"Sabotage",amount:100,cover:"https://i.pinimg.com/736x/ad/d2/f4/add2f464f636ebf48e73daffae69af8a.jpg"}),new s({name:"Nashtergaele",amount:100,cover:"https://i.pinimg.com/736x/19/c6/d0/19c6d0359dfa9168a6c8729e1ec31b65.jpg"}),new s({name:"Jackie Chan",amount:100,cover:"https://i.pinimg.com/736x/41/a8/2c/41a82c4067d4839d7f1e46aaa080ee3e.jpg"}),new s({name:"Fernanda Torres",amount:100,cover:"https://i.pinimg.com/736x/38/0f/3c/380f3ce7c508d350e9ea82a19c16079e.jpg"}),new s({name:"Ainda Orangotangos",amount:100,cover:"https://i.pinimg.com/736x/c3/d7/fd/c3d7fd6dac3df99aed9b06e76cdeecef.jpg"}),new s({name:"Enter the Void",amount:100,cover:"https://i.pinimg.com/736x/39/7d/34/397d341737d8f91578633eaa49b47df7.jpg"}),new s({name:"Gaspar Noé",amount:100,cover:"https://i.pinimg.com/736x/4f/c4/b7/4fc4b7c0a8aa455a6b4a5dc620eb44af.jpg"})],H={class:"bg-black text-white"},T={class:"bg-black"},V={class:"max-w-screen-xl mx-auto flex items-center gap-2 py-2"},L={href:""},R={href:"javascript:void(0);"},F={href:"javascript:void(0);"},$={href:"javascript:void(0);"},P={class:"relative bg-slate-900 py-4"},q={class:"max-w-screen-xl mx-auto flex items-center sticky top-0"},J={class:"bg-gray-800 py-8 antialiased"},G={class:"max-w-screen-xl mx-auto"},I={class:"grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"},U={class:"py-16 bg-slate-900"},W={class:"snap-center shrink-0"},E=["src"],K={__name:"index",setup(i){const t=w({tags:D,items:z});return(r,a)=>{const n=y("v-icon"),x=S;return l(),d("div",H,[e("div",T,[e("div",V,[e("a",L,[c(n,{icon:"streamline:bone",color:"#fff"})]),a[2]||(a[2]=e("div",{class:"grow"},null,-1)),e("a",R,[c(n,{size:"20",icon:"material-symbols:help"})]),e("a",F,[c(n,{size:"20",icon:"material-symbols:person-rounded"})]),e("a",$,[c(n,{size:"20",icon:"material-symbols:shopping-bag"})])])]),e("header",P,[e("div",q,[a[3]||(a[3]=p('<div class="flex items-center"><a href="#home" class="block lg:inline-block text-md font-bold text-gray-300 sm:hover:border-indigo-400 hover:text-red-800 mx-2 p-1"> HOME </a><a href="#home" class="block lg:inline-block text-md font-bold text-gray-300 sm:hover:border-indigo-400 hover:text-red-800 mx-2 p-1"> ROAD &amp; STORY </a><a href="#home" class="block lg:inline-block text-md font-bold text-gray-300 sm:hover:border-indigo-400 hover:text-red-800 mx-2 p-1"> ACCOMMODATION </a><a href="#home" class="block lg:inline-block text-md font-bold text-gray-300 sm:hover:border-indigo-400 hover:text-red-800 mx-2 p-1"> TOURS </a><a href="#home" class="block lg:inline-block text-md font-bold text-gray-300 sm:hover:border-indigo-400 hover:text-red-800 mx-2 p-1"> CONTACT US </a><a href="#home" class="block lg:inline-block text-md font-bold text-gray-300 sm:hover:border-indigo-400 hover:text-red-800 mx-2 p-1"> COMING SOON </a></div><div class="grow"></div>',2)),c(n,{icon:"material-symbols:search"})])]),e("section",J,[e("div",G,[e("div",I,[(l(!0),d(g,null,v(_(t).items,o=>(l(),u(x,{product:o},null,8,["product"]))),256))])]),a[4]||(a[4]=e("form",{action:"#",method:"get",id:"filterModal",tabindex:"-1","aria-hidden":"true",class:"fixed left-0 right-0 top-0 z-50 hidden h-modal w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0 md:h-full"},[e("div",{class:"relative h-full w-full max-w-xl md:h-auto"},[e("div",{class:"relative rounded-lg bg-white shadow dark:bg-gray-800"},[e("div",{class:"flex items-center space-x-4 rounded-b p-4 dark:border-gray-600 md:p-5"},[e("button",{type:"submit",class:"rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-700 dark:hover:bg-primary-800 dark:focus:ring-primary-800"}," Show 50 results "),e("button",{type:"reset",class:"rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"}," Reset ")])])])],-1))]),e("div",U,[e("div",{class:"relative w-full flex gap-4 snap-x snap-mandatory overflow-x-auto max-w-screen-xl mx-auto scroll-smooth select-none",onWheel:a[0]||(a[0]=o=>{}),onMousemove:a[1]||(a[1]=o=>{if(o.buttons!=1)return;const f=o.currentTarget,b=o.movementX*40;f.scrollLeft-=b})},[(l(),d(g,null,v([{name:"Otelo",image:"https://i.pinimg.com/736x/81/6a/b6/816ab6f1b936bce70679d2feb53039a1.jpg"},{name:"Agnés",image:"https://i.pinimg.com/736x/d1/f6/b7/d1f6b7f28e913f531cb3be32a52fce0e.jpg"},{name:"Hitcock",image:"https://i.pinimg.com/736x/c1/cf/e2/c1cfe2b333dac1b27f72031d4b14a952.jpg"},{name:"Sganzerla",image:"https://i.pinimg.com/736x/13/f7/8f/13f78f117e74a2d7d4710f13ffb6bda5.jpg"},{name:"Kubrick",image:"https://i.pinimg.com/736x/43/66/77/43667775014fe5fe95c37474d1811d0e.jpg"},{name:"Glauber",image:"https://i.pinimg.com/736x/8a/6b/bc/8a6bbc32ce792f982818b1f16775cb78.jpg"},{name:"Kurosawa",image:"https://i.pinimg.com/736x/7a/ba/07/7aba076eccdfb9a53a900db65aa45e02.jpg"},{name:"Zé do Caixão",image:"https://i.pinimg.com/736x/9b/3e/0b/9b3e0b9af4bf233237dc9b65a399e29b.jpg"},{name:"Jodorowsky",image:"https://i.pinimg.com/736x/8d/9d/f0/8d9df0daa12f7a845255ec173188a997.jpg"}],o=>e("div",W,[e("img",{style:{height:"400px"},class:"shrink-0 objct-cover rounded",draggable:"false",src:o.image},null,8,E)])),64))],32)]),a[5]||(a[5]=p('<div class="py-16 bg-slate-800 overflow-hidden"><div class="max-w-screen-xl mx-auto text-gray-500"><div class="grid overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4"><div class="relative group transition hover:z-[1]"><div class="relative p-8 space-y-8 border-dashed transition duration-300 bg-gray-100 scale-90 group-hover:border group-hover:scale-100"><img src="https://i.pinimg.com/736x/db/ac/41/dbac410835cac84cb893a48e599a6228.jpg" style="width:100%;height:250px;" class="object-cover" alt="burger illustration"><div class="space-y-2"><h5 class="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600"> Peter Steele </h5><p class="text-sm text-gray-600"> Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum. </p></div><a href="#" class="flex justify-between items-center group-hover:text-yellow-600"><span class="text-sm">Read more</span><span class="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">→</span></a></div></div><div class="relative group transition hover:z-[1]"><div class="relative p-8 space-y-8 border-dashed transition duration-300 bg-gray-100 scale-90 group-hover:border group-hover:scale-100"><img src="https://i.pinimg.com/736x/bc/a9/80/bca98045881f9871674d6da2716ce582.jpg" style="width:100%;height:250px;" class="object-cover" alt="burger illustration"><div class="space-y-2"><h5 class="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600"> Alejandro Jodorowsky </h5><p class="text-sm text-gray-600"> Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum. </p></div><a href="#" class="flex justify-between items-center group-hover:text-yellow-600"><span class="text-sm">Read more</span><span class="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">→</span></a></div></div><div class="relative group transition hover:z-[1]"><div class="relative p-8 space-y-8 border-dashed transition duration-300 bg-gray-100 scale-90 group-hover:border group-hover:scale-100"><img src="https://i.pinimg.com/736x/49/e6/de/49e6de0a5dfcc3592138f6b3f3f54905.jpg" style="width:100%;height:250px;" class="object-cover" alt="burger illustration"><div class="space-y-2"><h5 class="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600"> John Waters </h5><p class="text-sm text-gray-600"> Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum. </p></div><a href="#" class="flex justify-between items-center group-hover:text-yellow-600"><span class="text-sm">Read more</span><span class="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">→</span></a></div></div><div class="relative group transition hover:z-[1] lg:hidden xl:block"><div class="relative p-8 space-y-8 border-dashed transition duration-300 bg-gray-100 scale-90 group-hover:border group-hover:scale-100"><img src="https://i.pinimg.com/736x/e3/2c/78/e32c78a8fdaea0d9d7446aca654e3ec9.jpg" style="width:100%;height:250px;" class="object-cover" alt="burger illustration"><div class="space-y-2"><h5 class="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600"> Where&#39;s Your Head At? </h5><p class="text-sm text-gray-600"> Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum. </p></div><a href="#" class="flex justify-between items-center group-hover:text-yellow-600"><span class="text-sm">Read more</span><span class="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">→</span></a></div></div></div></div></div><footer class="bg-black text-white py-6"><div class="mx-auto w-full max-w-screen-xl"><div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4"><div><h2 class="mb-6 text-sm font-semibold text-white uppercase"> Company </h2><ul class="text-slate-400 font-medium"><li class="mb-4"><a href="#" class="hover:underline">About</a></li><li class="mb-4"><a href="#" class="hover:underline">Careers</a></li><li class="mb-4"><a href="#" class="hover:underline">Brand Center</a></li><li class="mb-4"><a href="#" class="hover:underline">Blog</a></li></ul></div><div><h2 class="mb-6 text-sm font-semibold text-white uppercase"> Help center </h2><ul class="text-slate-400 font-medium"><li class="mb-4"><a href="#" class="hover:underline">Discord Server</a></li><li class="mb-4"><a href="#" class="hover:underline">Twitter</a></li><li class="mb-4"><a href="#" class="hover:underline">Facebook</a></li><li class="mb-4"><a href="#" class="hover:underline">Contact Us</a></li></ul></div><div><h2 class="mb-6 text-sm font-semibold text-white uppercase"> Legal </h2><ul class="text-slate-400 font-medium"><li class="mb-4"><a href="#" class="hover:underline">Privacy Policy</a></li><li class="mb-4"><a href="#" class="hover:underline">Licensing</a></li><li class="mb-4"><a href="#" class="hover:underline">Terms &amp; Conditions</a></li></ul></div><div><h2 class="mb-6 text-sm font-semibold text-white uppercase"> Download </h2><ul class="text-slate-400 font-medium"><li class="mb-4"><a href="#" class="hover:underline">iOS</a></li><li class="mb-4"><a href="#" class="hover:underline">Android</a></li><li class="mb-4"><a href="#" class="hover:underline">Windows</a></li><li class="mb-4"><a href="#" class="hover:underline">MacOS</a></li></ul></div></div><div class="px-4 py-6 md:flex md:items-center md:justify-between"><span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights Reserved. </span><div class="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse"><a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white"><svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19"><path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"></path></svg><span class="sr-only">Facebook page</span></a><a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white"><svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16"><path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"></path></svg><span class="sr-only">Discord community</span></a><a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white"><svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17"><path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"></path></svg><span class="sr-only">Twitter page</span></a><a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white"><svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"></path></svg><span class="sr-only">GitHub account</span></a><a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white"><svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"></path></svg><span class="sr-only">Dribbble account</span></a></div></div></div></footer>',2))])}}},Y={};function Q(i,t){const r=K;return l(),u(r)}const ee=k(Y,[["render",Q]]);export{ee as default};
