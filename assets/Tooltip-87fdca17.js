import{j as f}from"./jsx-runtime-94f6e698.js";import{r as u,R as S}from"./index-8db94870.js";import{r as _}from"./index-8ce4a492.js";import{p as R}from"./styled-components.browser.esm-655d472d.js";const $=R.div`
  position: fixed;
  ${e=>e.theme.flexCSS.row}
  ${e=>e.theme.flexCSS.center}
  color: white;
  background-color: ${e=>e.theme.colors.Neutral_400};
  ${e=>e.theme.fonts["Body-Medium/Regular"]}
  padding: 12px 20px;
  border-radius: 4px;
  max-width: 300px;
  word-break: break-all;
  opacity: ${e=>e.$opacity};
  transition: opacity 150ms linear;

  /* default z-index */
  z-index: ${e=>e.theme.zIndexes.navbar+1};
`;function h({text:e,gap:i=10,position:s="top",align:r="center",delay:n=150,children:t,style:c,...y}){const[x,l]=u.useState(!1),[w,p]=u.useState(0),[v,d]=u.useState(),m=u.useRef(),b=()=>{const a=m.current;if(a){const g=a.getBoundingClientRect(),M=E(g,s,r,i);d(M)}};return!e||!t?t:f.jsxs(f.Fragment,{children:[S.cloneElement(t,{ref:a=>{"ref"in t&&typeof t.ref=="function"&&t.ref(a),"ref"in t&&typeof t.ref=="object"&&t.ref&&"current"in t.ref&&(t.ref.current=a),m.current=a},onMouseEnter:a=>{t.props.onMouseEnter&&t.props.onMouseEnter(a),b(),l(!0),setTimeout(()=>p(1),10)},onMouseLeave:a=>{t.props.onMouseLeave&&t.props.onMouseLeave(a),p(0),l&&setTimeout(()=>{d(void 0),l(!1)},n)}}),x&&_.createPortal(f.jsx($,{style:{...c,...v},$opacity:w,...y,children:e}),document.body)]})}function E(e,i,s,r){const n=window.innerWidth??document.body.clientWidth,t=window.innerHeight??document.body.clientHeight;switch(i){case"top":switch(s){case"start":return{left:e.x,bottom:o(t)(t-e.y+r)};case"center":return{left:o(n)(e.x+e.width/2),transform:"translateX(-50%)",bottom:o(t)(t-e.y+r)};case"end":return{right:o(n)(n-e.x-e.width),bottom:o(t)(t-e.y+r)};default:return{}}case"bottom":switch(s){case"start":return{left:e.x,top:o(t)(e.y+e.height+r)};case"center":return{left:o(n)(e.x+e.width/2),transform:"translateX(-50%)",top:o(t)(e.y+e.height+r)};case"end":return{right:o(n)(n-e.x-e.width),top:o(t)(e.y+e.height+r)};default:return{}}case"left":switch(s){case"start":return{right:o(n)(n-e.x+r),top:e.y};case"center":return{right:o(n)(n-e.x+r),transform:"translateY(-50%)",top:o(t)(e.y+e.height/2)};case"end":return{right:o(n)(n-e.x+r),bottom:o(t)(t-e.y-e.height)};default:return{}}case"right":switch(s){case"start":return{left:o(n)(e.x+e.width+r),top:e.y};case"center":return{left:o(n)(e.x+e.width+r),transform:"translateY(-50%)",top:o(t)(e.y+e.height/2)};case"end":return{left:o(n)(e.x+e.width+r),bottom:o(t)(t-e.y-e.height)};default:return{left:o(n)(e.x+e.width+r),top:e.y}}}}const o=e=>i=>Math.min(e,Math.max(0,i));try{h.displayName="Tooltip",h.__docgenInfo={description:"Renders a tooltip component with customizable position, alignment, delay, and content.",displayName:"Tooltip",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"ReactNode"}},position:{defaultValue:{value:"top"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'}]}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'}]}},gap:{defaultValue:{value:"10"},description:"",name:"gap",required:!1,type:{name:"number"}},delay:{defaultValue:{value:"150"},description:"",name:"delay",required:!1,type:{name:"number"}}}}}catch{}export{h as T};
//# sourceMappingURL=Tooltip-87fdca17.js.map
