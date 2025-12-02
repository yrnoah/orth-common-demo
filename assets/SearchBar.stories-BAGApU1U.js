import{r,j as u,d as p}from"./iframe-AucjWJ36.js";import{i as K}from"./keyCode-DDM6Q-rA.js";import{S as L}from"./IconSearch-CGkyEkHD.js";import{S as U}from"./IconClose-uw-4xgex.js";import"./preload-helper-D9Z9MdNV.js";function Y(){var e=r.useRef(!0);return e.current?(e.current=!1,!0):e.current}var G=function(e,f){var o=Y();r.useEffect(function(){if(!o)return e()},f)};const R=({style:e,inputStyle:f,disabled:o,onChange:d,onFocus:S,onBlur:y,onKeyUp:g,onSearch:a,onClick:E,onMouseOver:v,onMouseLeave:C,searchIconStyle:j,clearIconStyle:M,ref:c,...n})=>{const h=r.useRef(null),[s,$]=r.useState(()=>typeof n.value=="string"?n.value:`${n.defaultValue||""}`),q=r.useDeferredValue(s),[I,w]=r.useState(!1),[b,k]=r.useState(!1),_=r.useMemo(()=>!s||o||n.readOnly?!1:!!(I||b),[I,s,b,o,n.readOnly]),F=r.useCallback(()=>{o||a&&a(s)},[s,o,a]);G(()=>{F()},[q]);const m=r.useCallback(t=>{if(!t)return;d&&d(t);const i=t.target.value||"";$(i)},[d]),T=r.useCallback(()=>{if(o)return;const t=h.current,i=new Event("onChange",{bubbles:!0});t&&(t.value="",t.dispatchEvent(i),t.focus()),i.target&&m(i),$("")},[m,h,o]),V=t=>{S&&S(t),w(!0)},O=t=>{y&&y(t),w(!1)},B=t=>{o||(g&&g(t),K(t)&&a&&a(s))},D=t=>{k(!0),v&&v(t)},A=t=>{k(!1),C&&C(t)};return u.jsxs(H,{onMouseOver:D,onMouseLeave:A,style:e,onClick:E,children:[u.jsx(z,{...n,ref:t=>{h.current=t,c&&typeof c!="string"&&(typeof c=="function"?c(t):c.current=t)},style:f,onChange:m,onFocus:V,onBlur:O,onKeyUp:B,disabled:o,$showClear:_}),u.jsx(x,{style:j}),_&&!o&&u.jsx(N,{style:M,onClick:T})]})},P=r.memo(R),H=p.div`
  width: fit-content;
  height: fit-content;
  position: relative;
`,x=p(L)`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  color: ${e=>e.theme.colors.textInput.minor};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 16px;
  pointer-events: none;
`,N=p(U)`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  color: ${e=>e.theme.colors.noColor.Grey13};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
`,z=p.input`
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
@description auto triggered by react useDeferredValue`},searchIconStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},clearIconStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const te={title:"PAAS/Input/Search",tags:["autodocs"],component:P};function J({...e}){return u.jsx(P,{...e})}const l={render:J,args:{style:{width:362},disabled:!1}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: SearchStory,
  args: {
    style: {
      width: 362
    },
    disabled: false
  }
}`,...l.parameters?.docs?.source}}};const re=["Search"];export{l as Search,re as __namedExportsOrder,te as default};
