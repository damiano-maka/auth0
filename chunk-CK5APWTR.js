import{a as V}from"./chunk-Y7KSNLX2.js";import"./chunk-BYXBJQAS.js";import"./chunk-RSXKWWHB.js";import{a as y}from"./chunk-664B6E4U.js";import"./chunk-W5HWZALD.js";import{a as N}from"./chunk-KKMIFJRA.js";import{a as j}from"./chunk-DWZXBQFY.js";import{a as E}from"./chunk-NBK4MX2W.js";import{Aa as v,Ca as a,Da as g,Ha as c,Ja as x,La as P,P as d,Q as b,U as u,V as _,gb as T,ha as k,ia as s,qa as f,sa as C,ta as h,ua as S,va as w,wa as M,xa as e,ya as i}from"./chunk-UZ4CZCYJ.js";function D(n,o){if(n&1){let m=v();e(0,"button",7),a("click",function(){u(m);let l=g();return _(l.prevP())}),c(1," \xAB "),i()}}function A(n,o){if(n&1){let m=v();e(0,"app-card",10),a("cardClicked",function(l){u(m);let t=g();return _(t.click(l))}),i()}if(n&2){let m=o.$implicit;f("movie",m)}}function F(n,o){if(n&1){let m=v();e(0,"button",7),a("click",function(){u(m);let l=g();return _(l.prevP())}),c(1," \xAB "),i()}}var te=(()=>{let o=class o{constructor(){this.router=d(T),this.auth=d(E),this.authSig=y(this.auth.isAuthenticated$),this.movies=k([]),this.tmdbService=d(j),this.pageN=1}ngOnInit(){this.getMovies()}click(r){this.router.navigate(["/m",r.id]),window.scrollTo(0,0)}getMovies(){this.tmdbService.loadMovies(this.pageN).subscribe({next:r=>{this.movies.set(r.results)},error:r=>{console.log(r)}})}nextP(){this.pageN++,this.getMovies(),window.scrollTo(0,0)}prevP(){this.pageN--,this.getMovies(),window.scrollTo(0,0)}};o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=b({type:o,selectors:[["app-movie-page"]],standalone:!0,features:[P],decls:22,vars:5,consts:[[1,"ml-3","mr-3"],[3,"movie","slideClicked"],[1,"divider","divider-vertical","text-white","divider-neutral"],[1,"flex","justify-end","mr-5"],[1,"join","mr-5",2,"background-color","var(--sfondo-nav)"],["class","join-item btn btn-lg btn-neutral"],[1,"join-item","btn-lg","btn-neutral","text-white","text-2xl","flex","items-center","text-bold",3,"click"],[1,"join-item","btn","btn-lg","btn-neutral",3,"click"],[1,"flex","flex-wrap","gap-3","mt-5","p-2","justify-center"],[1,"flex","justify-end","mr-5","mb-5"],[3,"movie","cardClicked"],[3,"movie"]],template:function(l,t){l&1&&(e(0,"div",0)(1,"app-slider-drag",1),a("slideClicked",function(B){return t.click(B)}),i()(),e(2,"div",2)(3,"p"),c(4,"Scroll left/right for other movies"),i()(),e(5,"div",3)(6,"div",4),C(7,D,2,0,"button",5),e(8,"a",6),a("click",function(){return null}),c(9),i(),e(10,"button",7),a("click",function(){return t.nextP()}),c(11," \xBB "),i()()(),e(12,"div",8),w(13,A,1,1,"app-card",11,S),i(),e(15,"div",9)(16,"div",4),C(17,F,2,0,"button",5),e(18,"a",6),a("click",function(){return null}),c(19),i(),e(20,"button",7),a("click",function(){return t.nextP()}),c(21," \xBB "),i()()()),l&2&&(s(1),f("movie",t.movies()),s(6),h(7,t.pageN>1?7:-1),s(2),x(" ",t.pageN," "),s(4),M(t.movies()),s(4),h(17,t.pageN>1?17:-1),s(2),x(" ",t.pageN," "))},dependencies:[V,N],changeDetection:0});let n=o;return n})();export{te as default};