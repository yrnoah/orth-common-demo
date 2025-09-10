import{j as h}from"./jsx-runtime-94f6e698.js";import{r as b}from"./index-8db94870.js";import{t as _,p as c,c as m}from"./styled-components.browser.esm-6dd904cc.js";import{T as z}from"./TooltipPoint-976e1e10.js";const o=t=>l=>Math.min(t,Math.max(0,l));function u(t,l="bottom",i="center",e=0){if(l==="top-left")return u(t,"top","start",e);if(l==="top-right")return u(t,"top","end",e);if(l==="bottom-left")return u(t,"bottom","start",e);if(l==="bottom-right")return u(t,"bottom","end",e);if(l==="left-top")return u(t,"left","start",e);if(l==="left-bottom")return u(t,"left","end",e);if(l==="right-top")return u(t,"right","start",e);if(l==="right-bottom")return u(t,"right","end",e);const n=window.innerWidth??document.body.clientWidth,r=window.innerHeight??document.body.clientHeight;switch(l){case"top":switch(i){case"start":return{left:t.x,bottom:o(r)(r-t.y+e)};case"center":return{left:o(n)(t.x+t.width/2),transform:"translateX(-50%)",bottom:o(r)(r-t.y+e)};case"end":return{right:o(n)(n-t.x-t.width),bottom:o(r)(r-t.y+e)};default:return{}}case"bottom":switch(i){case"start":return{left:t.x,top:o(r)(t.y+t.height+e)};case"center":return{left:o(n)(t.x+t.width/2),transform:"translateX(-50%)",top:o(r)(t.y+t.height+e)};case"end":return{right:o(n)(n-t.x-t.width),top:o(r)(t.y+t.height+e)};default:return{}}case"left":switch(i){case"start":return{right:o(n)(n-t.x+e),top:t.y};case"center":return{right:o(n)(n-t.x+e),transform:"translateY(-50%)",top:o(r)(t.y+t.height/2)};case"end":return{right:o(n)(n-t.x+e),bottom:o(r)(r-t.y-t.height)};default:return{}}case"right":switch(i){case"start":return{left:o(n)(t.x+t.width+e),top:t.y};case"center":return{left:o(n)(t.x+t.width+e),transform:"translateY(-50%)",top:o(r)(t.y+t.height/2)};case"end":return{left:o(n)(t.x+t.width+e),bottom:o(r)(r-t.y-t.height)};default:return{left:o(n)(t.x+t.width+e),top:t.y}}}}const d=4;function $(t){const{tooltip:l,parent:i,tooltipPosition:e="bottom",show:n,bubbleSize:r={width:5,height:4},bubbleOffset:v=12,wrapperGap:W=4}=t,{colors:q}=_(),x=b.useRef(null),[a,T]=b.useState(void 0);if(b.useEffect(()=>{var g;const s=(g=x.current)==null?void 0:g.getBoundingClientRect(),C=window.innerWidth??document.body.clientWidth,R=window.innerHeight??document.body.clientHeight;if(s!=null&&s.width){const f={};s.left<0&&(f.left=s.left*-1+d),s.right<0&&(f.right=s.right*-1+d);const w=s.left+s.width-C;w>0&&(f.right=w+d*2),s.top<0&&(f.top=s.top*-1+d),s.bottom<0&&(f.bottom=s.bottom*-1+d);const y=s.top+s.height-R;y>0&&(f.bottom=y+d*2),Object.keys(f).length>0&&T(f)}},[]),!i.current)return null;const V=i.current.getBoundingClientRect(),j=u(V,e,"center",r.height+W);let p=0;return typeof(a==null?void 0:a.left)=="number"&&(p=Math.abs(a.left)),typeof(a==null?void 0:a.right)=="number"&&(p=a.right*-1),h.jsx(H,{style:j,children:h.jsxs(S,{ref:x,style:{...t.style||{},opacity:n?1:0,...a||{}},children:[h.jsx(O,{width:r.width,height:r.height,$position:e,$fixedLeft:p,$bubbleOffset:v,style:{color:t.bubbleColor||q.container200}}),h.jsx(h.Fragment,{children:l})]})})}const H=c.div`
  pointer-events: none;
  position: fixed;
  z-index: ${t=>t.theme.zIndexes.modal+1};
`,L=t=>t.startsWith("top")?"top":t.startsWith("bottom")?"bottom":t.startsWith("left")?"left":t.startsWith("right")?"right":t,O=c(z)`
  position: absolute;

  ${t=>{const l=L(t.$position),i=t.$position.includes("-"),e=t.$bubbleOffset;switch(l){case"top":return m`
          ${()=>i?t.$position.endsWith("left")?`left: ${e}px;`:`right: ${e}px;`:`left: calc(50% - ${t.$fixedLeft}px);`}
          bottom: 0.5px;
          transform: ${()=>i?"translate(0, 100%)":"translate(-50%, 100%)"};
        `;case"bottom":return m`
          ${()=>i?t.$position.endsWith("left")?`left: ${e}px;`:`right: ${e}px;`:`left: calc(50% - ${t.$fixedLeft}px);`}
          top: 0.5px;
          transform: ${()=>i?"translate(0, -100%) rotate(180deg)":"translate(-50%, -100%) rotate(180deg)"};
        `;case"left":return m`
          ${()=>i?t.$position.endsWith("top")?`top: ${e}px;`:`bottom: ${e}px;`:"top: 50%;"}
          right: 1.5px;
          transform: ${()=>i?"translate(100%, 0) rotate(-90deg)":"translate(100%, -50%) rotate(-90deg)"};
        `;case"right":return m`
          ${()=>i?t.$position.endsWith("top")?`top: ${e}px;`:`bottom: ${e}px;`:"top: 50%;"}
          left: 1.5px;
          transform: ${()=>i?"translate(-100%, 0) rotate(90deg)":"translate(-100%, -50%) rotate(90deg)"};
        `;default:return m`
          left: calc(50% - ${t.$fixedLeft}px);
          top: 0.5px;
          transform: translate(-50%, -100%);
        `}}}
`,S=c.div`
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
`;try{$.displayName="Tooltip",$.__docgenInfo={description:"",displayName:"Tooltip",props:{tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"ReactNode"}},parent:{defaultValue:null,description:"",name:"parent",required:!0,type:{name:"RefObject<HTMLButtonElement | HTMLDivElement | null>"}},tooltipPosition:{defaultValue:{value:"bottom"},description:"",name:"tooltipPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'},{value:'"top-left"'},{value:'"top-right"'},{value:'"bottom-left"'},{value:'"bottom-right"'},{value:'"left-top"'},{value:'"left-bottom"'},{value:'"right-top"'},{value:'"right-bottom"'}]}},show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},wrapperGap:{defaultValue:{value:"4"},description:"",name:"wrapperGap",required:!1,type:{name:"number"}},bubbleColor:{defaultValue:null,description:"",name:"bubbleColor",required:!1,type:{name:"string"}},bubbleSize:{defaultValue:{value:"{width:5,height:4}"},description:"",name:"bubbleSize",required:!1,type:{name:"{ width: number; height: number; }"}},bubbleOffset:{defaultValue:{value:"12"},description:"",name:"bubbleOffset",required:!1,type:{name:"number"}}}}}catch{}export{$ as T};
//# sourceMappingURL=Tooltip-a379440d.js.map
