import{r as f}from"./index-8db94870.js";import{o as l,a as m}from"./util-051783c3.js";var E=["mousedown","touchstart"],v=function(c,o,t){t===void 0&&(t=E);var n=f.useRef(o);f.useEffect(function(){n.current=o},[o]),f.useEffect(function(){for(var e=function(r){var a=c.current;a&&!a.contains(r.target)&&n.current(r)},u=0,s=t;u<s.length;u++){var d=s[u];l(document,d,e)}return function(){for(var r=0,a=t;r<a.length;r++){var i=a[r];m(document,i,e)}}},[t,c])};const x=v;var h=function(c){f.useEffect(c,[])};const O=h;export{x as a,O as u};
//# sourceMappingURL=useEffectOnce-838fab99.js.map
