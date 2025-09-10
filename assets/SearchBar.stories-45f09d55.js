import{j as i}from"./jsx-runtime-94f6e698.js";import{r}from"./index-8db94870.js";import{p as d}from"./styled-components.browser.esm-6dd904cc.js";import{i as Y}from"./keyCode-5935525e.js";import{I as G}from"./IconSearch-fa84d0c7.js";import{I as H}from"./IconClose-bc396367.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-unitless.esm-acc3a66a.js";function z(){var e=r.useRef(!0);return e.current?(e.current=!1,!0):e.current}var J=function(e,f){var o=z();r.useEffect(function(){if(!o)return e()},f)};const Q=J,y=r.forwardRef(({style:e,inputStyle:f,disabled:o,onChange:m,onFocus:g,onBlur:I,onKeyUp:v,onSearch:s,onClick:N,onMouseOver:$,onMouseLeave:b,searchIconStyle:ee,clearIconStyle:P,...n},l)=>{const u=r.useRef(),T=r.useCallback(t=>{if(u&&t&&(u.current=t),l&&t){if(typeof l=="function"){l(t);return}l.current=t}},[u,l]),[a,C]=r.useState(()=>typeof n.value=="string"?n.value:`${n.defaultValue||""}`),D=r.useDeferredValue(a),[k,w]=r.useState(!1),[V,q]=r.useState(!1),E=r.useMemo(()=>!a||o||n.readOnly?!1:!!(k||V),[k,a,V,o,n.readOnly]),F=r.useCallback(()=>{o||s&&s(a)},[a,o,s]);Q(()=>{F()},[D]);const h=r.useCallback(t=>{if(!t)return;m&&m(t);const c=t.target.value||"";C(c)},[m]),L=r.useCallback(()=>{if(o)return;const t=u.current,c=new Event("onChange",{bubbles:!0});t&&(t.value="",t.dispatchEvent(c),t.focus()),c.target&&h(c),C("")},[h,u,o]),O=t=>{g&&g(t),w(!0)},W=t=>{I&&I(t),w(!1)},B=t=>{o||(v&&v(t),Y(t)&&s&&s(a))},U=t=>{q(!0),$&&$(t)},K=t=>{q(!1),b&&b(t)};return i.jsxs(x,{onMouseOver:U,onMouseLeave:K,style:e,onClick:N,children:[i.jsx(_,{...n,ref:T,style:f,onChange:h,onFocus:O,onBlur:W,onKeyUp:B,disabled:o,$showClear:E}),i.jsx(S,{}),E&&!o&&i.jsx(X,{style:P,onClick:L})]})}),M=r.memo(y),x=d.div`
  width: fit-content;
  height: fit-content;
  position: relative;
`,S=d(G)`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  color: ${e=>e.theme.colors.textInput.minor};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 16px;
  pointer-events: none;
`,X=d(H)`
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

    & + ${S}, &::placeholder {
      color: ${e=>e.theme.colors.textInput.default};
    }
  }

  &:focus {
    border: 1px solid ${e=>e.theme.colors.textInput.link};
    background: ${e=>e.theme.colors.button.default};

    & + ${S} {
      color: ${e=>e.theme.colors.textInput.default};
    }

    &::placeholder {
      color: ${e=>e.theme.colors.textInput.minor};
    }
  }
`;try{y.displayName="SearchInput",y.__docgenInfo={description:"",displayName:"SearchInput",props:{style:{defaultValue:null,description:"search layout style",name:"style",required:!1,type:{name:"CSSProperties"}},inputStyle:{defaultValue:null,description:"search input style",name:"inputStyle",required:!1,type:{name:"CSSProperties"}},onSearch:{defaultValue:null,description:`@link https://react.dev/reference/react/useDeferredValue
@description auto triggered by react useDeferredValue`,name:"onSearch",required:!1,type:{name:"((v: string) => void)"}},searchIconStyle:{defaultValue:null,description:"",name:"searchIconStyle",required:!1,type:{name:"CSSProperties"}},clearIconStyle:{defaultValue:null,description:"",name:"clearIconStyle",required:!1,type:{name:"CSSProperties"}}}}}catch{}try{x.displayName="SearchLayout",x.__docgenInfo={description:"",displayName:"SearchLayout",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{_.displayName="Input",_.__docgenInfo={description:"",displayName:"Input",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const ce={title:"PAAS/Input/Search",tags:["autodocs"],component:M};function Z({...e}){return i.jsx(M,{...e})}const p={render:Z,args:{style:{width:362},disabled:!1}};var j,R,A;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: SearchStory,
  args: {
    style: {
      width: 362
    },
    disabled: false
  }
}`,...(A=(R=p.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};const ie=["Search"];export{p as Search,ie as __namedExportsOrder,ce as default};
//# sourceMappingURL=SearchBar.stories-45f09d55.js.map
