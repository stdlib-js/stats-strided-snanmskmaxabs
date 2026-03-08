"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var m=o(function(G,b){
var E=require('@stdlib/math-base-assert-is-nanf/dist'),c=require('@stdlib/math-base-special-absf/dist');function O(r,e,n,f,s,x,_){var v,u,t,a,i;if(r<=0)return NaN;for(u=f,t=_,i=0;i<r&&(a=e[u],!(a===a&&s[t]===0));i++)u+=n,t+=x;if(i===r)return NaN;for(v=c(a),i+=1,i;i<r;i++)u+=n,t+=x,!s[t]&&(a=e[u],!E(a)&&(a=c(a),a>v&&(v=a)));return v}b.exports=O
});var j=o(function(H,y){
var p=require('@stdlib/strided-base-stride2offset/dist'),g=m();function h(r,e,n,f,s){return g(r,e,n,p(r,n),f,s,p(r,s))}y.exports=h
});var l=o(function(I,k){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=j(),z=m();w(d,"ndarray",z);k.exports=d
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=l(),q,R=B(A(__dirname,"./native.js"));C(R)?q=D:q=R;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
