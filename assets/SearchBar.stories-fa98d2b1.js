import{j as n}from"./jsx-runtime-94f6e698.js";import{r as a}from"./index-8db94870.js";import{s as p,A as Q}from"./styled-components.browser.esm-6007d051.js";import{I as S}from"./IconButton-380e3ebb.js";import{u as X}from"./useUpdateEffect-4c0dc687.js";import{D as Y}from"./DmIcon20Search-3d1cbfe2.js";import{I as Z}from"./IconClose-9827f36a.js";import"./_commonjsHelpers-042e6b4d.js";const ee=e=>(e==null?void 0:e.keyCode)===13||(e==null?void 0:e.key)==="Enter",V=a.forwardRef(({style:e,inputStyle:l,disabled:t,onChange:y,onFocus:q,onBlur:v,onKeyUp:C,onSearch:u,onClick:O,onMouseOver:w,onMouseLeave:E,searchIconStyle:G,clearIconStyle:H,...o},i)=>{const d=a.useRef(),T=a.useCallback(r=>{if(d&&r&&(d.current=r),i&&r){if(typeof i=="function"){i(r);return}i.current=r}},[d,i]),[s,j]=a.useState(()=>typeof o.value=="string"?o.value:`${o.defaultValue||""}`),P=a.useDeferredValue(s),[h,A]=a.useState(!1),[N,k]=a.useState(!1),$=a.useMemo(()=>!s||t||o.readOnly?!1:!!(h||N),[h,s,N,t,o.readOnly]),B=a.useCallback(()=>{t||u&&u(s)},[s,t,u]);X(()=>{B()},[P]);const _=a.useCallback(r=>{if(!r)return;y&&y(r);const c=r.target.value||"";j(c)},[y]),W=a.useCallback(()=>{if(t)return;const r=d.current,c=new Event("onChange",{bubbles:!0});r&&(r.value="",r.dispatchEvent(c)),c.target&&_(c),j("")},[_,d,t]),F=r=>{q&&q(r),A(!0)},K=r=>{v&&v(r),A(!1)},U=r=>{t||(C&&C(r),ee(r)&&u&&u(s))},z=r=>{k(!0),w&&w(r)},J=r=>{k(!1),E&&E(r)};return n.jsxs(g,{onMouseOver:z,onMouseLeave:J,style:e,focused:h,onClick:O,children:[n.jsx(x,{...o,ref:T,style:l,onChange:_,onFocus:F,onBlur:K,onKeyUp:U,disabled:t}),$&&n.jsx(m,{style:H,children:n.jsx(S,{onClick:W,disabled:t,children:n.jsx(b,{})})}),!$&&n.jsx(m,{style:{...G||{},pointerEvents:"none"},children:n.jsx(S,{children:n.jsx(I,{})})})]})}),M=a.memo(V),g=p.div(({focused:e,theme:{colors:l}})=>Q`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 4px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid ${e?l.Clausblue_300:l.Neutral_100};
    box-shadow: 0 0 0 5px ${e?l.Clausblue_100:"transparent"};
    background-color: ${l.neutral};
    transition: all 0.2s ease;
    box-sizing: border-box;

    &:hover {
      border: 1px solid ${l.Clausblue_300};
    }
  `),x=p.input`
  ${e=>e.theme.fontsCSS.bodyRegular};
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

  ${S} {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
`,I=p(Y)`
  width: 20px;
  height: 20px;
  color: ${e=>e.theme.colors.Neutral_500};
`,b=p(Z)`
  width: 10px;
  height: 10px;
  color: ${e=>e.theme.colors.Neutral_500};
`;try{V.displayName="SearchInput",V.__docgenInfo={description:"",displayName:"SearchInput",props:{style:{defaultValue:null,description:"search layout style",name:"style",required:!1,type:{name:"CSSProperties"}},inputStyle:{defaultValue:null,description:"search input style",name:"inputStyle",required:!1,type:{name:"CSSProperties"}},onSearch:{defaultValue:null,description:`@link https://react.dev/reference/react/useDeferredValue
@description auto triggered by react useDeferredValue`,name:"onSearch",required:!1,type:{name:"((v: string) => void)"}},searchIconStyle:{defaultValue:null,description:"",name:"searchIconStyle",required:!1,type:{name:"CSSProperties"}},clearIconStyle:{defaultValue:null,description:"",name:"clearIconStyle",required:!1,type:{name:"CSSProperties"}}}}}catch{}try{g.displayName="SearchLayout",g.__docgenInfo={description:"",displayName:"SearchLayout",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},focused:{defaultValue:null,description:"",name:"focused",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{x.displayName="Input",x.__docgenInfo={description:"",displayName:"Input",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{m.displayName="SearchActionWrapper",m.__docgenInfo={description:"",displayName:"SearchActionWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{I.displayName="IconSearch",I.__docgenInfo={description:"",displayName:"IconSearch",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{b.displayName="IconSearchClear",b.__docgenInfo={description:"",displayName:"IconSearchClear",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const de={title:"PAAS/Input/Search",tags:["autodocs"],component:M};function re({...e}){return n.jsx(M,{...e})}const f={render:re,args:{style:{width:362},disabled:!1}};var R,L,D;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: SearchStory,
  args: {
    style: {
      width: 362
    },
    disabled: false
  }
}`,...(D=(L=f.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};const ce=["Search"];export{f as Search,ce as __namedExportsOrder,de as default};
//# sourceMappingURL=SearchBar.stories-fa98d2b1.js.map
