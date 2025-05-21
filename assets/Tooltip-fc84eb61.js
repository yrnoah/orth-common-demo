import{j as d}from"./jsx-runtime-94f6e698.js";import{r as p}from"./index-8db94870.js";import{p as c,c as y}from"./styled-components.browser.esm-655d472d.js";const e=t=>u=>Math.min(t,Math.max(0,u));function _(t,u="bottom",l="center",i=0){const o=window.innerWidth??document.body.clientWidth,n=window.innerHeight??document.body.clientHeight;switch(u){case"top":switch(l){case"start":return{left:t.x,bottom:e(n)(n-t.y+i)};case"center":return{left:e(o)(t.x+t.width/2),transform:"translateX(-50%)",bottom:e(n)(n-t.y+i)};case"end":return{right:e(o)(o-t.x-t.width),bottom:e(n)(n-t.y+i)};default:return{}}case"bottom":switch(l){case"start":return{left:t.x,top:e(n)(t.y+t.height+i)};case"center":return{left:e(o)(t.x+t.width/2),transform:"translateX(-50%)",top:e(n)(t.y+t.height+i)};case"end":return{right:e(o)(o-t.x-t.width),top:e(n)(t.y+t.height+i)};default:return{}}case"left":switch(l){case"start":return{right:e(o)(o-t.x+i),top:t.y};case"center":return{right:e(o)(o-t.x+i),transform:"translateY(-50%)",top:e(n)(t.y+t.height/2)};case"end":return{right:e(o)(o-t.x+i),bottom:e(n)(n-t.y-t.height)};default:return{}}case"right":switch(l){case"start":return{left:e(o)(t.x+t.width+i),top:t.y};case"center":return{left:e(o)(t.x+t.width+i),transform:"translateY(-50%)",top:e(n)(t.y+t.height/2)};case"end":return{left:e(o)(t.x+t.width+i),bottom:e(n)(n-t.y-t.height)};default:return{left:e(o)(t.x+t.width+i),top:t.y}}}}const m=4;function b(t){const{tooltip:u,parent:l,tooltipPosition:i,show:o}=t,n=p.useRef(null),[r,h]=p.useState(void 0);if(p.useEffect(()=>{var x;const s=(x=n.current)==null?void 0:x.getBoundingClientRect(),j=window.innerWidth??document.body.clientWidth;if(s!=null&&s.width){const a={};if(s.left<0){a.left=s.left*-1+m,h(a);return}if(s.right<0){a.right=s.right*-1+m,h(a);return}const w=s.left+s.width-j;w>0&&(a.right=w+m*2,h(a))}},[]),!l.current)return null;const $=l.current.getBoundingClientRect(),v=_($,i,"center",8);let f=0;return typeof(r==null?void 0:r.left)=="number"&&(f=Math.abs(r.left)),typeof(r==null?void 0:r.right)=="number"&&(f=r.right*-1),d.jsx(L,{style:v,children:d.jsxs(R,{ref:n,style:{...t.style||{},opacity:o?1:0,...r||{}},children:[d.jsx(g,{width:"5",height:"4",viewBox:"0 0 5 4",fill:"none",xmlns:"http://www.w3.org/2000/svg",$position:i,$fixedLeft:f,children:d.jsx("path",{d:"M1.652 1.3568C2.04367 0.730129 2.95633 0.730129 3.348 1.3568L5 4L-3.82475e-07 4L1.652 1.3568Z",fill:"currentColor"})}),d.jsx(d.Fragment,{children:u})]})})}const L=c.div`
  pointer-events: none;
  position: fixed;
  z-index: ${t=>t.theme.zIndexes.modal+1};
`,g=c.svg`
  position: absolute;
  left: calc(50% - ${t=>t.$fixedLeft}px);

  ${t=>t.$position==="top"?y`
        bottom: 0.5px;
        transform: translate(-50%, 100%) rotate(180deg);
      `:y`
      top: 0.5px;
      transform: translate(-50%, -100%);
    `}
`,R=c.div`
  width: fit-content;
  position: relative;
  ${t=>t.theme.fonts.Default}
  ${t=>t.theme.flex.row}
  ${t=>t.theme.flex.center}
  z-index: ${t=>t.theme.zIndexes.modal+1};
  color: ${t=>t.theme.colors.elementsContentMain};
  background-color: ${t=>t.theme.colors.container200};
  gap: 6px;
  padding: 8px;
  border-radius: 8px;
  box-shadow: ${t=>t.theme.colors.shadowPop};

  ${g} {
    color: ${t=>t.theme.colors.container200};
  }
`;try{b.displayName="Tooltip",b.__docgenInfo={description:"",displayName:"Tooltip",props:{tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"ReactNode"}},parent:{defaultValue:null,description:"",name:"parent",required:!0,type:{name:"RefObject<HTMLButtonElement | null>"}},tooltipPosition:{defaultValue:{value:"bottom"},description:"",name:"tooltipPosition",required:!0,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'}]}},show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}export{b as T};
//# sourceMappingURL=Tooltip-fc84eb61.js.map
