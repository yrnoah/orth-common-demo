import{a as p,j as H,F as L}from"./jsx-runtime-a888423b.js";import{r as b}from"./index-8db94870.js";import{t as O,p as c,c as h}from"./styled-components.browser.esm-6dd904cc.js";import{T as R}from"./TooltipPoint-61ad6988.js";const o=t=>l=>Math.min(t,Math.max(0,l));function u(t,l="bottom",i="center",e=0){if(l==="top-left")return u(t,"top","start",e);if(l==="top-right")return u(t,"top","end",e);if(l==="bottom-left")return u(t,"bottom","start",e);if(l==="bottom-right")return u(t,"bottom","end",e);if(l==="left-top")return u(t,"left","start",e);if(l==="left-bottom")return u(t,"left","end",e);if(l==="right-top")return u(t,"right","start",e);if(l==="right-bottom")return u(t,"right","end",e);const n=window.innerWidth??document.body.clientWidth,r=window.innerHeight??document.body.clientHeight;switch(l){case"top":switch(i){case"start":return{left:t.x,bottom:o(r)(r-t.y+e)};case"center":return{left:o(n)(t.x+t.width/2),transform:"translateX(-50%)",bottom:o(r)(r-t.y+e)};case"end":return{right:o(n)(n-t.x-t.width),bottom:o(r)(r-t.y+e)};default:return{}}case"bottom":switch(i){case"start":return{left:t.x,top:o(r)(t.y+t.height+e)};case"center":return{left:o(n)(t.x+t.width/2),transform:"translateX(-50%)",top:o(r)(t.y+t.height+e)};case"end":return{right:o(n)(n-t.x-t.width),top:o(r)(t.y+t.height+e)};default:return{}}case"left":switch(i){case"start":return{right:o(n)(n-t.x+e),top:t.y};case"center":return{right:o(n)(n-t.x+e),transform:"translateY(-50%)",top:o(r)(t.y+t.height/2)};case"end":return{right:o(n)(n-t.x+e),bottom:o(r)(r-t.y-t.height)};default:return{}}case"right":switch(i){case"start":return{left:o(n)(t.x+t.width+e),top:t.y};case"center":return{left:o(n)(t.x+t.width+e),transform:"translateY(-50%)",top:o(r)(t.y+t.height/2)};case"end":return{left:o(n)(t.x+t.width+e),bottom:o(r)(r-t.y-t.height)};default:return{left:o(n)(t.x+t.width+e),top:t.y}}}}const d=4;function $(t){const{tooltip:l,parent:i,tooltipPosition:e="bottom",show:n,bubbleSize:r={width:5,height:4},bubbleOffset:v=12,wrapperGap:W=4}=t,{colors:q}=O(),x=b.useRef(null),[s,T]=b.useState(void 0);if(b.useEffect(()=>{var g;const a=(g=x.current)==null?void 0:g.getBoundingClientRect(),_=window.innerWidth??document.body.clientWidth,z=window.innerHeight??document.body.clientHeight;if(a!=null&&a.width){const f={};a.left<0&&(f.left=a.left*-1+d),a.right<0&&(f.right=a.right*-1+d);const w=a.left+a.width-_;w>0&&(f.right=w+d*2),a.top<0&&(f.top=a.top*-1+d),a.bottom<0&&(f.bottom=a.bottom*-1+d);const y=a.top+a.height-z;y>0&&(f.bottom=y+d*2),Object.keys(f).length>0&&T(f)}},[]),!i.current)return null;const V=i.current.getBoundingClientRect(),C=u(V,e,"center",r.height+W);let m=0;return typeof(s==null?void 0:s.left)=="number"&&(m=Math.abs(s.left)),typeof(s==null?void 0:s.right)=="number"&&(m=s.right*-1),p(S,{style:C,children:H(P,{ref:x,style:{...t.style||{},opacity:n?1:0,...s||{}},children:[p(M,{width:r.width,height:r.height,$position:e,$fixedLeft:m,$bubbleOffset:v,style:{color:t.bubbleColor||q.container200}}),p(L,{children:l})]})})}const S=c.div`
  pointer-events: none;
  position: fixed;
  z-index: ${t=>t.theme.zIndexes.modal+1};
`,B=t=>t.startsWith("top")?"top":t.startsWith("bottom")?"bottom":t.startsWith("left")?"left":t.startsWith("right")?"right":t,M=c(R)`
  position: absolute;

  ${t=>{const l=B(t.$position),i=t.$position.includes("-"),e=t.$bubbleOffset;switch(l){case"top":return h`
          ${()=>i?t.$position.endsWith("left")?`left: ${e}px;`:`right: ${e}px;`:`left: calc(50% - ${t.$fixedLeft}px);`}
          bottom: 0.5px;
          transform: ${()=>i?"translate(0, 100%)":"translate(-50%, 100%)"};
        `;case"bottom":return h`
          ${()=>i?t.$position.endsWith("left")?`left: ${e}px;`:`right: ${e}px;`:`left: calc(50% - ${t.$fixedLeft}px);`}
          top: 0.5px;
          transform: ${()=>i?"translate(0, -100%) rotate(180deg)":"translate(-50%, -100%) rotate(180deg)"};
        `;case"left":return h`
          ${()=>i?t.$position.endsWith("top")?`top: ${e}px;`:`bottom: ${e}px;`:"top: 50%;"}
          right: 1.5px;
          transform: ${()=>i?"translate(100%, 0) rotate(-90deg)":"translate(100%, -50%) rotate(-90deg)"};
        `;case"right":return h`
          ${()=>i?t.$position.endsWith("top")?`top: ${e}px;`:`bottom: ${e}px;`:"top: 50%;"}
          left: 1.5px;
          transform: ${()=>i?"translate(-100%, 0) rotate(90deg)":"translate(-100%, -50%) rotate(90deg)"};
        `;default:return h`
          left: calc(50% - ${t.$fixedLeft}px);
          top: 0.5px;
          transform: translate(-50%, -100%);
        `}}}
`,P=c.div`
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
`;try{$.displayName="Tooltip",$.__docgenInfo={description:"",displayName:"Tooltip",props:{tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"ReactNode"}},parent:{defaultValue:null,description:"",name:"parent",required:!0,type:{name:"RefObject<HTMLButtonElement | HTMLDivElement>"}},tooltipPosition:{defaultValue:{value:"bottom"},description:"",name:"tooltipPosition",required:!1,type:{name:"enum",value:[{value:'"top-left"'},{value:'"top-right"'},{value:'"bottom-left"'},{value:'"bottom-right"'},{value:'"top"'},{value:'"bottom"'},{value:'"left-top"'},{value:'"left"'},{value:'"left-bottom"'},{value:'"right-top"'},{value:'"right"'},{value:'"right-bottom"'}]}},show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},wrapperGap:{defaultValue:{value:"4"},description:"",name:"wrapperGap",required:!1,type:{name:"number"}},bubbleColor:{defaultValue:null,description:"",name:"bubbleColor",required:!1,type:{name:"string"}},bubbleSize:{defaultValue:{value:"{width:5,height:4}"},description:"",name:"bubbleSize",required:!1,type:{name:"{ width: number; height: number; }"}},bubbleOffset:{defaultValue:{value:"12"},description:"",name:"bubbleOffset",required:!1,type:{name:"number"}}}}}catch{}export{$ as T};
//# sourceMappingURL=Tooltip-c494eb8d.js.map
