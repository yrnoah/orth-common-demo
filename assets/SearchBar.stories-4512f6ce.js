import{j as i}from"./jsx-runtime-94f6e698.js";import{r}from"./index-8db94870.js";import{p as d}from"./styled-components.browser.esm-655d472d.js";import{i as Y}from"./keyCode-5935525e.js";import{u as G}from"./useUpdateEffect-4c0dc687.js";import{I as H}from"./IconSearch-fa84d0c7.js";import{I as z}from"./IconClose-bc396367.js";import"./_commonjsHelpers-042e6b4d.js";const h=r.forwardRef(({style:e,inputStyle:P,disabled:o,onChange:f,onFocus:g,onBlur:S,onKeyUp:I,onSearch:s,onClick:R,onMouseOver:$,onMouseLeave:v,searchIconStyle:X,clearIconStyle:T,...a},l)=>{const c=r.useRef(),D=r.useCallback(t=>{if(c&&t&&(c.current=t),l&&t){if(typeof l=="function"){l(t);return}l.current=t}},[c,l]),[n,b]=r.useState(()=>typeof a.value=="string"?a.value:`${a.defaultValue||""}`),L=r.useDeferredValue(n),[C,k]=r.useState(!1),[w,V]=r.useState(!1),q=r.useMemo(()=>!n||o||a.readOnly?!1:!!(C||w),[C,n,w,o,a.readOnly]),M=r.useCallback(()=>{o||s&&s(n)},[n,o,s]);G(()=>{M()},[L]);const m=r.useCallback(t=>{if(!t)return;f&&f(t);const u=t.target.value||"";b(u)},[f]),O=r.useCallback(()=>{if(o)return;const t=c.current,u=new Event("onChange",{bubbles:!0});t&&(t.value="",t.dispatchEvent(u),t.focus()),u.target&&m(u),b("")},[m,c,o]),W=t=>{g&&g(t),k(!0)},B=t=>{S&&S(t),k(!1)},F=t=>{o||(I&&I(t),Y(t)&&s&&s(n))},K=t=>{V(!0),$&&$(t)},U=t=>{V(!1),v&&v(t)};return i.jsxs(y,{onMouseOver:K,onMouseLeave:U,style:e,onClick:R,children:[i.jsx(_,{...a,ref:D,style:P,onChange:m,onFocus:W,onBlur:B,onKeyUp:F,disabled:o,$showClear:q}),i.jsx(x,{}),q&&!o&&i.jsx(J,{style:T,onClick:O})]})}),N=r.memo(h),y=d.div`
  width: fit-content;
  height: fit-content;
  position: relative;
`,x=d(H)`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  color: ${e=>e.theme.colors.textInput.minor};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 16px;
  pointer-events: none;
`,J=d(z)`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  color: ${e=>e.theme.colors.noColor.Grey13};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
`,_=d.input`
  width: 100%;
  min-width: 110px;
  height: 36px;
  line-height: 36px;
  flex-shrink: 0;
  border-radius: ${e=>e.theme.radius.xxl}px;
  border: 1px solid ${e=>e.theme.colors.button.default};
  outline: none;
  margin: 0;
  padding: 0 ${e=>e.$showClear?"39px":"15px"} 0 39px;
  gap: ${e=>e.theme.padding.xxs}px;
  ${e=>e.theme.fonts["Body-Medium/Regular"]}
  color: ${e=>e.theme.colors.textInput.default};
  caret-color: ${e=>e.theme.colors.textInput.link};
  background: transparent;

  &::placeholder {
    color: ${e=>e.theme.colors.textInput.minor};
  }

  &::selection {
    background: ${e=>e.theme.colors.brandColor.Primary2};
  }

  &:hover {
    border: 1px solid ${e=>e.theme.colors.button.hovered};

    & + ${x}, &::placeholder {
      color: ${e=>e.theme.colors.textInput.default};
    }
  }

  &:focus {
    border: 1px solid ${e=>e.theme.colors.textInput.link};
    background: ${e=>e.theme.colors.button.default};

    & + ${x} {
      color: ${e=>e.theme.colors.textInput.default};
    }

    &::placeholder {
      color: ${e=>e.theme.colors.textInput.minor};
    }
  }
`;try{h.displayName="SearchInput",h.__docgenInfo={description:"",displayName:"SearchInput",props:{style:{defaultValue:null,description:"search layout style",name:"style",required:!1,type:{name:"CSSProperties"}},inputStyle:{defaultValue:null,description:"search input style",name:"inputStyle",required:!1,type:{name:"CSSProperties"}},onSearch:{defaultValue:null,description:`@link https://react.dev/reference/react/useDeferredValue
@description auto triggered by react useDeferredValue`,name:"onSearch",required:!1,type:{name:"((v: string) => void)"}},searchIconStyle:{defaultValue:null,description:"",name:"searchIconStyle",required:!1,type:{name:"CSSProperties"}},clearIconStyle:{defaultValue:null,description:"",name:"clearIconStyle",required:!1,type:{name:"CSSProperties"}}}}}catch{}try{y.displayName="SearchLayout",y.__docgenInfo={description:"",displayName:"SearchLayout",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{_.displayName="Input",_.__docgenInfo={description:"",displayName:"Input",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const le={title:"PAAS/Input/Search",tags:["autodocs"],component:N};function Q({...e}){return i.jsx(N,{...e})}const p={render:Q,args:{style:{width:362},disabled:!1}};var j,E,A;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: SearchStory,
  args: {
    style: {
      width: 362
    },
    disabled: false
  }
}`,...(A=(E=p.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};const ce=["Search"];export{p as Search,ce as __namedExportsOrder,le as default};
//# sourceMappingURL=SearchBar.stories-4512f6ce.js.map
