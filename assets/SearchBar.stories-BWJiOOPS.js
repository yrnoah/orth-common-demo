import{r,j as u,d as p}from"./iframe-D12yBJYT.js";import{i as A}from"./keyCode-DDM6Q-rA.js";import{S as K}from"./IconSearch-CtemzjDB.js";import{S as L}from"./IconClose-ClKS59Dw.js";import"./preload-helper-D9Z9MdNV.js";function U(){var e=r.useRef(!0);return e.current?(e.current=!1,!0):e.current}var Y=function(e,f){var o=U();r.useEffect(function(){if(!o)return e()},f)};const R=({style:e,inputStyle:f,disabled:o,onChange:d,onFocus:S,onBlur:y,onKeyUp:g,onSearch:a,onClick:E,onMouseOver:v,onMouseLeave:C,searchIconStyle:J,clearIconStyle:j,ref:c,...n})=>{const h=r.useRef(null),[s,$]=r.useState(()=>typeof n.value=="string"?n.value:`${n.defaultValue||""}`),M=r.useDeferredValue(s),[I,w]=r.useState(!1),[b,k]=r.useState(!1),_=r.useMemo(()=>!s||o||n.readOnly?!1:!!(I||b),[I,s,b,o,n.readOnly]),q=r.useCallback(()=>{o||a&&a(s)},[s,o,a]);Y(()=>{q()},[M]);const m=r.useCallback(t=>{if(!t)return;d&&d(t);const i=t.target.value||"";$(i)},[d]),F=r.useCallback(()=>{if(o)return;const t=h.current,i=new Event("onChange",{bubbles:!0});t&&(t.value="",t.dispatchEvent(i),t.focus()),i.target&&m(i),$("")},[m,h,o]),T=t=>{S&&S(t),w(!0)},V=t=>{y&&y(t),w(!1)},O=t=>{o||(g&&g(t),A(t)&&a&&a(s))},B=t=>{k(!0),v&&v(t)},D=t=>{k(!1),C&&C(t)};return u.jsxs(G,{onMouseOver:B,onMouseLeave:D,style:e,onClick:E,children:[u.jsx(N,{...n,ref:t=>{h.current=t,c&&typeof c!="string"&&(typeof c=="function"?c(t):c.current=t)},style:f,onChange:m,onFocus:T,onBlur:V,onKeyUp:O,disabled:o,$showClear:_}),u.jsx(x,{}),_&&!o&&u.jsx(H,{style:j,onClick:F})]})},P=r.memo(R),G=p.div`
  width: fit-content;
  height: fit-content;
  position: relative;
`,x=p(K)`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  color: ${e=>e.theme.colors.textInput.minor};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 16px;
  pointer-events: none;
`,H=p(L)`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  color: ${e=>e.theme.colors.noColor.Grey13};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
`,N=p.input`
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
`;R.__docgenInfo={description:"",methods:[],displayName:"SearchInput",props:{style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"search layout style"},inputStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"search input style"},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(v: string) => void",signature:{arguments:[{type:{name:"string"},name:"v"}],return:{name:"void"}}},description:`@link https://react.dev/reference/react/useDeferredValue
@description auto triggered by react useDeferredValue`},searchIconStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},clearIconStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const te={title:"PAAS/Input/Search",tags:["autodocs"],component:P};function z({...e}){return u.jsx(P,{...e})}const l={render:z,args:{style:{width:362},disabled:!1}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: SearchStory,
  args: {
    style: {
      width: 362
    },
    disabled: false
  }
}`,...l.parameters?.docs?.source}}};const re=["Search"];export{l as Search,re as __namedExportsOrder,te as default};
