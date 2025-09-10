import{j as D,a as p}from"./jsx-runtime-a888423b.js";import{r}from"./index-8db94870.js";import{p as f}from"./styled-components.browser.esm-6dd904cc.js";import{i as K}from"./keyCode-5935525e.js";import{I as A}from"./IconSearch-d94004c5.js";import{I as Y}from"./IconClose-762831be.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-unitless.esm-acc3a66a.js";function G(){var e=r.useRef(!0);return e.current?(e.current=!1,!0):e.current}var H=function(e,d){var o=G();r.useEffect(function(){if(!o)return e()},d)};const z=H,y=r.forwardRef(({style:e,inputStyle:d,disabled:o,onChange:h,onFocus:g,onBlur:I,onKeyUp:$,onSearch:s,onClick:q,onMouseOver:v,onMouseLeave:C,searchIconStyle:T,clearIconStyle:L,...n},c)=>{const u=r.useRef(),O=r.useCallback(t=>{if(u&&t&&(u.current=t),c&&t){if(typeof c=="function"){c(t);return}c.current=t}},[u,c]),[a,b]=r.useState(()=>typeof n.value=="string"?n.value:`${n.defaultValue||""}`),B=r.useDeferredValue(a),[k,w]=r.useState(!1),[R,V]=r.useState(!1),E=r.useMemo(()=>!a||o||n.readOnly?!1:!!(k||R),[k,a,R,o,n.readOnly]),U=r.useCallback(()=>{o||s&&s(a)},[a,o,s]);z(()=>{U()},[B]);const m=r.useCallback(t=>{if(!t)return;h&&h(t);const l=t.target.value||"";b(l)},[h]),j=r.useCallback(()=>{if(o)return;const t=u.current,l=new Event("onChange",{bubbles:!0});t&&(t.value="",t.dispatchEvent(l),t.focus()),l.target&&m(l),b("")},[m,u,o]);return D(_,{onMouseOver:t=>{V(!0),v&&v(t)},onMouseLeave:t=>{V(!1),C&&C(t)},style:e,onClick:q,children:[p(S,{...n,ref:O,style:d,onChange:m,onFocus:t=>{g&&g(t),w(!0)},onBlur:t=>{I&&I(t),w(!1)},onKeyUp:t=>{o||($&&$(t),K(t)&&s&&s(a))},disabled:o,$showClear:E}),p(x,{}),E&&!o&&p(J,{style:L,onClick:j})]})}),P=r.memo(y),_=f.div`
  width: fit-content;
  height: fit-content;
  position: relative;
`,x=f(A)`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  color: ${e=>e.theme.colors.textInput.minor};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 16px;
  pointer-events: none;
`,J=f(Y)`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  color: ${e=>e.theme.colors.noColor.Grey13};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
`,S=f.input`
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
`;try{y.displayName="SearchInput",y.__docgenInfo={description:"",displayName:"SearchInput",props:{style:{defaultValue:null,description:"search layout style",name:"style",required:!1,type:{name:"React.CSSProperties"}},inputStyle:{defaultValue:null,description:"search input style",name:"inputStyle",required:!1,type:{name:"React.CSSProperties"}},onSearch:{defaultValue:null,description:`@link https://react.dev/reference/react/useDeferredValue
@description auto triggered by react useDeferredValue`,name:"onSearch",required:!1,type:{name:"(v: string) => void"}},searchIconStyle:{defaultValue:null,description:"",name:"searchIconStyle",required:!1,type:{name:"React.CSSProperties"}},clearIconStyle:{defaultValue:null,description:"",name:"clearIconStyle",required:!1,type:{name:"React.CSSProperties"}}}}}catch{}try{_.displayName="SearchLayout",_.__docgenInfo={description:"",displayName:"SearchLayout",props:{}}}catch{}try{S.displayName="Input",S.__docgenInfo={description:"",displayName:"Input",props:{}}}catch{}const ie={title:"PAAS/Input/Search",tags:["autodocs"],component:P};function Q({...e}){return p(P,{...e})}const i={render:Q,args:{style:{width:362},disabled:!1}};var M,F,N;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: SearchStory,
  args: {
    style: {
      width: 362
    },
    disabled: false
  }
}`,...(N=(F=i.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};const pe=["Search"];export{i as Search,pe as __namedExportsOrder,ie as default};
//# sourceMappingURL=SearchBar.stories-7285b9d6.js.map
