import{a as U}from"./chunk-RGMSZVUI.js";import"./chunk-2IFHHCGT.js";import{a as J}from"./chunk-KKMIFJRA.js";import{a as H}from"./chunk-DWZXBQFY.js";import{a as w}from"./chunk-NBK4MX2W.js";import{$a as N,Aa as M,Ca as _,Da as g,F as C,Fa as T,Ha as s,Ja as u,La as V,Ma as A,Na as F,Oa as $,P as d,Q as b,U as x,V as h,Ya as j,Za as L,ab as O,c as y,ca as k,eb as P,gb as z,ha as D,hb as B,ia as l,ja as E,ka as I,qa as p,sa as f,ta as R,xa as r,ya as i,za as v}from"./chunk-UZ4CZCYJ.js";function G(n,o){n&1&&(r(0,"span",20),s(1,"Movie added successfully!"),i())}function K(n,o){n&1&&(r(0,"span",21),s(1,"Oops, something went wrong! "),i())}var Q=n=>["/players",n];function Y(n,o){if(n&1){let t=M();r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h2",5),s(6),i(),r(7,"p",6),s(8),i(),r(9,"p",7),s(10),i(),r(11,"dl",8)(12,"div",9)(13,"button",10),s(14," Watch Now ! "),i(),v(15,"div",11),r(16,"div",12)(17,"button",13),_("click",function(){let c=x(t),m=g();return h(m.addMovie(m.series,c.nickname))}),s(18," Add to wishlist ! "),i(),f(19,G,2,0,"span",14)(20,K,2,0,"span",15),i()()()()(),v(21,"img",16),i()()(),r(22,"div",17)(23,"p"),s(24,"Recommendations of the same category"),i()(),r(25,"div",18)(26,"app-slider-drag",19),_("slideClicked",function(a){x(t);let c=g();return h(c.clickRecom(a))}),i()(),r(27,"div",17)(28,"p"),s(29,"Scroll left/right for other movies"),i()()}if(n&2){let t=g();l(6),u(" Status: ",t.series==null?null:t.series.first_air_date," "),l(2),u(" ",t.series==null?null:t.series.name," "),l(2),u(" ",t.series==null?null:t.series.overview," "),l(3),p("routerLink",A(8,Q,t.series==null?null:t.series.id)),l(6),p("ngIf",t.isSuccess===!0),l(1),p("ngIf",t.isSuccess===!1),l(1),T("src","https://image.tmdb.org/t/p/w500/",t.series.poster_path,"",k),l(5),p("movie",t.seriess())}}var ge=(()=>{let o=class o{constructor(e){this.changeDetectorRef=e,this.http=d(O),this.activatedRoute=d(P),this.service=d(H),this.seriess=D([]),this.router=d(z),this.usersService=d(U),this.user$=d(w).user$,this.auth=d(w)}clickRecom(e){this.router.navigate([`/m/${e.id}`]),this.series=e,window.scrollTo(0,0)}ngOnInit(){this.activatedRoute.params.pipe(C(e=>this.service.loadSingleSer(e.id))).subscribe(e=>{this.series=e}),this.getMovies()}getMovies(){this.service.loadSeries(1).subscribe({next:e=>{this.seriess.set(e.results)},error:e=>{}})}addMovie(e,a){return y(this,null,function*(){let c=a,m={backdrop_path:e.backdrop_path,poster_path:e.poster_path,title:e.name,id:JSON.stringify(e.id)},{backdrop_path:W,poster_path:X,title:q,id:S}=m;try{yield this.usersService.addMovie({backdrop_path:W,poster_path:X,title:q,id:S},S,c),this.isSuccess=!0,this.changeDetectorRef.detectChanges()}catch{this.isSuccess=!1,this.changeDetectorRef.detectChanges()}})}};o.\u0275fac=function(a){return new(a||o)(E(I))},o.\u0275cmp=b({type:o,selectors:[["app-series-details"]],standalone:!0,features:[V],decls:2,vars:3,consts:[[1,"overflow-hidden","bck","py-5","sm:py-10"],[1,"mx-auto","max-w-7xl","px-6","lg:px-8"],[1,"mx-auto","grid","max-w-2xl","grid-cols-1","gap-x-8","gap-y-16","sm:gap-y-20","lg:mx-0","lg:max-w-none","lg:grid-cols-2"],[1,"lg:pr-8","lg:pt-3"],[1,"lg:max-w-lg","lg:py-28"],[1,"text-base","font-semibold","leading-7","text-gray-400"],[1,"mt-2","text-5xl","font-bold","tracking-tight","text-gray-200","sm:text-5xl"],[1,"mt-6","text-lg","leading-8","text-white"],[1,"mt-5","max-w-xl","space-y-8","text-base","leading-7","text-gray-600","lg:max-w-none"],[1,"flex","w-full","justify-center"],[1,"grid","h-10","card","btn","btn-error","hover:text-white",3,"routerLink"],[1,"divider","divider-horizontal"],[1,"flex","flex-col"],[1,"grid","h-10","card","btn","btn-success",3,"click"],["class","mt-3 inline-flex items-center rounded-md bg-success px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-green-600/20 mt-3",4,"ngIf"],["class","mt-3 inline-flex items-center rounded-md bg-error px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-red-600/10",4,"ngIf"],["width","200","height","200","alt","Product screenshot",1,"rounded-xl","shadow-xl","ring-1","ring-gray-400/10","w-full",3,"src"],[1,"divider","divider-vertical","text-white","divider-neutral"],[1,"ml-3","mr-3"],[3,"movie","slideClicked"],[1,"mt-3","inline-flex","items-center","rounded-md","bg-success","px-2","py-1","text-xs","font-medium","text-white","ring-1","ring-inset","ring-green-600/20","mt-3"],[1,"mt-3","inline-flex","items-center","rounded-md","bg-error","px-2","py-1","text-xs","font-medium","text-white","ring-1","ring-inset","ring-red-600/10"]],template:function(a,c){if(a&1&&(f(0,Y,30,10),F(1,"async")),a&2){let m;R(0,(m=$(1,1,c.user$))?0:-1,m)}},dependencies:[N,j,L,J,B],changeDetection:0});let n=o;return n})();export{ge as default};