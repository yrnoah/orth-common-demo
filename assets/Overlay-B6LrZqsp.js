import{r as l,j as o,d as c,l as g}from"./iframe-AucjWJ36.js";import{u as b}from"./useCurrent-Bts7HZnN.js";import{S as v}from"./IconCheckSmall-C8IIlS8K.js";const k=136,$=24,C={width:k,height:$},y=l.memo(e=>{const{options:i,disabled:f,onSelect:r,resetText:a,selected:d,visible:p,...h}=e,n=l.useRef({}),s=b(d);return l.useEffect(()=>{p&&s.current&&n.current[s.current]&&n.current[s.current]?.scrollIntoView()},[s,n,p]),!i||f?null:o.jsxs(w,{...h,onScroll:t=>{t.stopPropagation(),t.preventDefault()},children:[!!a&&o.jsx(u,{onClick:()=>{r&&r(null)},children:a}),i.map(t=>o.jsxs(u,{ref:m=>{n.current[t.key]=m},$active:t.key===d,onClick:()=>{r&&r(t)},children:[o.jsx(x,{}),o.jsx("span",{children:t.text??t.key})]},t.key))]})}),x=c(v)`
  width: 16px;
  height: 16px;
  color: ${e=>e.theme.colors.textInput.default};
  position: absolute;
  left: 12px;
  top: 8px;
  opacity: 0;
  pointer-events: none;
`,u=c.li`
  ${e=>e.theme.flex.row}
  width: 100%;
  padding: 8px 12px 8px 36px;
  overflow: hidden;
  background-color: #fff;
  position: relative;
  user-select: none;
  word-break: break-all;

  ${({$active:e})=>e&&g`
      ${x} {
        opacity: 1;
      }
    `}

  &:hover {
    background-color: ${e=>e.theme.colors.button.hovered};
  }
`,w=c.ul`
  padding: 0;
  margin: ${e=>e.theme.padding.xxxxs}px 0;
  list-style: none;
  ${e=>e.theme.fonts["Caption-Large/Bold"]}
  color: ${e=>e.theme.colors.textInput.default};
  width: 100%;
  max-height: 70vh;
  overflow-y: auto;
  ${e=>e.theme.scrollbar}
  border-radius: ${e=>e.theme.radius.xxxxs}px;
  border: 1px solid ${e=>e.theme.colors.button.hovered};
  background-color: #fff;
`;y.__docgenInfo={description:"",methods:[],displayName:"Overlay"};export{y as O,$ as a,k as b,C as d};
