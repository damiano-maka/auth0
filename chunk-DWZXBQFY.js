import{L as s,P as a,ab as n}from"./chunk-UZ4CZCYJ.js";var h=(()=>{let i=class i{constructor(){this.http=a(n),this.apiKey="2245e7b70e506bfeca959594cb82c0b9",this.baseUrl="https://api.themoviedb.org/3"}addApiKey(t){let e=t.includes("?")?"&":"?";return`${t}${e}api_key=${this.apiKey}`}loadMovies(t){let e=this.addApiKey(`${this.baseUrl}/trending/movie/week?include_video=true&language=en-US&page=${t}&sort_by=popularity.desc`);return this.http.get(e)}loadSingle(t){let e=this.addApiKey(`${this.baseUrl}/movie/${t}`);return this.http.get(e)}loadSeries(t){let e=this.addApiKey(`${this.baseUrl}/trending/tv/week?include_video=true&language=en-US&page=${t}&sort_by=popularity.desc`);return this.http.get(e)}loadSingleSer(t){let e=this.addApiKey(`${this.baseUrl}/tv/${t}`);return this.http.get(e)}loadSearch(t){let e=this.addApiKey(`${this.baseUrl}/search/multi?query=${t}&include_adult=false&language=en-US&page=1`);return this.http.get(e)}};i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=s({token:i,factory:i.\u0275fac,providedIn:"root"});let r=i;return r})();export{h as a};