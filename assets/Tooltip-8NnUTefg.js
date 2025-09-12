import{n as L,r as b,j as d,d as c,l as m}from"./iframe-D12yBJYT.js";import{S as j}from"./TooltipPoint-BZ-2dmGb.js";const r=t=>l=>Math.min(t,Math.max(0,l));function a(t,l="bottom",i="center",e=0){if(l==="top-left")return a(t,"top","start",e);if(l==="top-right")return a(t,"top","end",e);if(l==="bottom-left")return a(t,"bottom","start",e);if(l==="bottom-right")return a(t,"bottom","end",e);if(l==="left-top")return a(t,"left","start",e);if(l==="left-bottom")return a(t,"left","end",e);if(l==="right-top")return a(t,"right","start",e);if(l==="right-bottom")return a(t,"right","end",e);const o=window.innerWidth??document.body.clientWidth,n=window.innerHeight??document.body.clientHeight;switch(l){case"top":switch(i){case"start":return{left:t.x,bottom:r(n)(n-t.y+e)};case"center":return{left:r(o)(t.x+t.width/2),transform:"translateX(-50%)",bottom:r(n)(n-t.y+e)};case"end":return{right:r(o)(o-t.x-t.width),bottom:r(n)(n-t.y+e)};default:return{}}case"bottom":switch(i){case"start":return{left:t.x,top:r(n)(t.y+t.height+e)};case"center":return{left:r(o)(t.x+t.width/2),transform:"translateX(-50%)",top:r(n)(t.y+t.height+e)};case"end":return{right:r(o)(o-t.x-t.width),top:r(n)(t.y+t.height+e)};default:return{}}case"left":switch(i){case"start":return{right:r(o)(o-t.x+e),top:t.y};case"center":return{right:r(o)(o-t.x+e),transform:"translateY(-50%)",top:r(n)(t.y+t.height/2)};case"end":return{right:r(o)(o-t.x+e),bottom:r(n)(n-t.y-t.height)};default:return{}}case"right":switch(i){case"start":return{left:r(o)(t.x+t.width+e),top:t.y};case"center":return{left:r(o)(t.x+t.width+e),transform:"translateY(-50%)",top:r(n)(t.y+t.height/2)};case"end":return{left:r(o)(t.x+t.width+e),bottom:r(n)(n-t.y-t.height)};default:return{left:r(o)(t.x+t.width+e),top:t.y}}}}const u=4;function M(t){const{tooltip:l,parent:i,tooltipPosition:e="bottom",show:o,bubbleSize:n={width:5,height:4},bubbleOffset:$=12,wrapperGap:y=4}=t,{colors:v}=L(),x=b.useRef(null),[h,T]=b.useState(void 0);if(b.useEffect(()=>{const s=x.current?.getBoundingClientRect(),q=window.innerWidth??document.body.clientWidth,H=window.innerHeight??document.body.clientHeight;if(s?.width){const f={};s.left<0&&(f.left=s.left*-1+u),s.right<0&&(f.right=s.right*-1+u);const g=s.left+s.width-q;g>0&&(f.right=g+u*2),s.top<0&&(f.top=s.top*-1+u),s.bottom<0&&(f.bottom=s.bottom*-1+u);const w=s.top+s.height-H;w>0&&(f.bottom=w+u*2),Object.keys(f).length>0&&T(f)}},[]),!i.current)return null;const R=i.current.getBoundingClientRect(),W=a(R,e,"center",n.height+y);let p=0;return typeof h?.left=="number"&&(p=Math.abs(h.left)),typeof h?.right=="number"&&(p=h.right*-1),d.jsx(P,{style:W,children:d.jsxs(B,{ref:x,style:{...t.style||{},opacity:o?1:0,...h||{}},children:[d.jsx(E,{width:n.width,height:n.height,$position:e,$fixedLeft:p,$bubbleOffset:$,style:{color:t.bubbleColor||v.container200}}),d.jsx(d.Fragment,{children:l})]})})}const P=c.div`
  pointer-events: none;
  position: fixed;
  z-index: ${t=>t.theme.zIndexes.modal+1};
`,S=t=>t.startsWith("top")?"top":t.startsWith("bottom")?"bottom":t.startsWith("left")?"left":t.startsWith("right")?"right":t,E=c(j)`
  position: absolute;

  ${t=>{const l=S(t.$position),i=t.$position.includes("-"),e=t.$bubbleOffset;switch(l){case"top":return m`
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
`,B=c.div`
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
`;M.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{tooltip:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},parent:{required:!0,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLButtonElement | HTMLDivElement | null>",elements:[{name:"union",raw:"HTMLButtonElement | HTMLDivElement | null",elements:[{name:"HTMLButtonElement"},{name:"HTMLDivElement"},{name:"null"}]}]},description:""},tooltipPosition:{required:!1,tsType:{name:"union",raw:`| "top-left"
| "top-right"
| "bottom-left"
| "bottom-right"
| "top"
| "bottom"
| "left-top"
| "left"
| "left-bottom"
| "right-top"
| "right"
| "right-bottom"`,elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left-top"'},{name:"literal",value:'"left"'},{name:"literal",value:'"left-bottom"'},{name:"literal",value:'"right-top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"right-bottom"'}]},description:"@default bottom"},show:{required:!1,tsType:{name:"boolean"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},wrapperGap:{required:!1,tsType:{name:"number"},description:"@default 4"},bubbleColor:{required:!1,tsType:{name:"string"},description:""},bubbleSize:{required:!1,tsType:{name:"signature",type:"object",raw:"{ width: number; height: number }",signature:{properties:[{key:"width",value:{name:"number",required:!0}},{key:"height",value:{name:"number",required:!0}}]}},description:"@default {width:5,height:4}"},bubbleOffset:{required:!1,tsType:{name:"number"},description:"@default 12"}}};export{M as T};
