import{j as n}from"./jsx-runtime-94f6e698.js";import{r as t}from"./index-8db94870.js";import{p,c as Q}from"./styled-components.browser.esm-8c817f58.js";import{I as g}from"./IconButton-f3976049.js";import{u as X}from"./useUpdateEffect-4c0dc687.js";import{D as Y}from"./DmIcon20Search-3d1cbfe2.js";import{I as Z}from"./IconClose-9827f36a.js";import"./_commonjsHelpers-042e6b4d.js";const ee=e=>(e==null?void 0:e.keyCode)===13||(e==null?void 0:e.key)==="Enter",S=t.forwardRef(({style:e,inputStyle:o,disabled:a,onChange:h,onFocus:C,onBlur:V,onKeyUp:w,onSearch:i,onClick:P,onMouseOver:q,onMouseLeave:A,searchIconStyle:L,clearIconStyle:O,...l},c)=>{const u=t.useRef(),B=t.useCallback(r=>{if(u&&r&&(u.current=r),c&&r){if(typeof c=="function"){c(r);return}c.current=r}},[u,c]),[s,N]=t.useState(()=>typeof l.value=="string"?l.value:`${l.defaultValue||""}`),M=t.useDeferredValue(s),[y,T]=t.useState(!1),[W,j]=t.useState(!1),k=t.useMemo(()=>!s||a||l.readOnly?!1:!!(y||W),[y,s,W,a,l.readOnly]),F=t.useCallback(()=>{a||i&&i(s)},[s,a,i]);X(()=>{F()},[M]);const _=t.useCallback(r=>{if(!r)return;h&&h(r);const d=r.target.value||"";N(d)},[h]),K=t.useCallback(()=>{if(a)return;const r=u.current,d=new Event("onChange",{bubbles:!0});r&&(r.value="",r.dispatchEvent(d)),d.target&&_(d),N("")},[_,u,a]),U=r=>{C&&C(r),T(!0)},z=r=>{V&&V(r),T(!1)},H=r=>{a||(w&&w(r),ee(r)&&i&&i(s))},G=r=>{j(!0),q&&q(r)},J=r=>{j(!1),A&&A(r)};return n.jsxs(x,{onMouseOver:G,onMouseLeave:J,style:e,focused:y,onClick:P,children:[n.jsx(b,{...l,ref:B,style:o,onChange:_,onFocus:U,onBlur:z,onKeyUp:H,disabled:a}),k&&n.jsx(m,{style:O,children:n.jsx(g,{onClick:K,disabled:a,children:n.jsx(v,{})})}),!k&&n.jsx(m,{style:{...L||{},pointerEvents:"none"},children:n.jsx(g,{children:n.jsx(I,{})})})]})}),R=t.memo(S),x=p.div(({focused:e,theme:{colors:o}})=>Q`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 4px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid ${e?o.Clausblue_300:o.Neutral_100};
    box-shadow: 0 0 0 5px ${e?o.Clausblue_100:"transparent"};
    background-color: ${o.neutral};
    transition: all 0.2s ease;
    box-sizing: border-box;

    &:hover {
      border: 1px solid ${o.Clausblue_300};
    }
  `),b=p.input`
  ${e=>e.theme.fontStyleDict.bodyRegular};
  line-height: 1;
  width: 100%;
  margin-left: 8px;
  border: none;
  color: #000;
  caret-color: ${e=>e.theme.colors.Clausblue_400};
  background-color: transparent;

  &:focus,
  &:active {
    outline: none;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }

  &:disabled {
    cursor: not-allowed;
  }
`,m=p.div`
  width: 32px;
  height: 100%;
  flex: none;
  ${e=>e.theme.flexCSS.row}
  ${e=>e.theme.flexCSS.center}

  ${g} {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
`,I=p(Y)`
  width: 20px;
  height: 20px;
  color: ${e=>e.theme.colors.Neutral_500};
`,v=p(Z)`
  width: 10px;
  height: 10px;
  color: ${e=>e.theme.colors.Neutral_500};
`;try{S.displayName="SearchInput",S.__docgenInfo={description:"",displayName:"SearchInput",props:{style:{defaultValue:null,description:"search layout style",name:"style",required:!1,type:{name:"CSSProperties"}},inputStyle:{defaultValue:null,description:"search input style",name:"inputStyle",required:!1,type:{name:"CSSProperties"}},onSearch:{defaultValue:null,description:`@link https://react.dev/reference/react/useDeferredValue
@description auto triggered by react useDeferredValue`,name:"onSearch",required:!1,type:{name:"((v: string) => void)"}},searchIconStyle:{defaultValue:null,description:"",name:"searchIconStyle",required:!1,type:{name:"CSSProperties"}},clearIconStyle:{defaultValue:null,description:"",name:"clearIconStyle",required:!1,type:{name:"CSSProperties"}}}}}catch{}try{x.displayName="SearchLayout",x.__docgenInfo={description:"",displayName:"SearchLayout",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{b.displayName="Input",b.__docgenInfo={description:"",displayName:"Input",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{m.displayName="SearchActionWrapper",m.__docgenInfo={description:"",displayName:"SearchActionWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{I.displayName="IconSearch",I.__docgenInfo={description:"",displayName:"IconSearch",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{v.displayName="IconSearchClear",v.__docgenInfo={description:"",displayName:"IconSearchClear",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const ue={title:"PAAS/Input/Search",tags:["autodocs"],component:R};function re({...e}){return n.jsx(R,{...e})}const f={render:re,args:{style:{width:362},disabled:!1}};var $,D,E;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: SearchStory,
  args: {
    style: {
      width: 362
    },
    disabled: false
  }
}`,...(E=(D=f.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const de=["Search"];export{f as Search,de as __namedExportsOrder,ue as default};
//# sourceMappingURL=SearchBar.stories-062f1abb.js.map
