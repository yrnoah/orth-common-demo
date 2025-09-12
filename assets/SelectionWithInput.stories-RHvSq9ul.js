import{r as l,j as e,d as k}from"./iframe-D12yBJYT.js";import{i as L}from"./keyCode-DDM6Q-rA.js";import{B as P}from"./Dropdown-D5JwdULb.js";import{d as V,a as K,b as q,O as B}from"./Overlay-Cvh_1rSA.js";import{T as W,I as z,a as N}from"./Trigger-CBGbniTM.js";import"./preload-helper-D9Z9MdNV.js";import"./Portal-BcC3rkwp.js";import"./index-CLFaP9oP.js";import"./index-DihtluQp.js";import"./useCurrent-DBDDWVp7.js";import"./useMeasure-BC0zJ6WC.js";import"./IconCheckSmall-DH0saYPV.js";import"./IconArrowSm-B3wviign.js";const m=i=>{const{defaultOpen:s,dropdownConfig:u,onSelectChange:d,options:a,selected:f,resetText:F,inputProps:p,disableFilter:j=!1,ref:g,...o}=i,[h,I]=l.useState(V),[y,c]=l.useState(()=>!!s),[C,x]=l.useState(!1),[O,w]=l.useState(f||null),n=typeof f=="string"?f:O,T=l.useMemo(()=>typeof n!="string"||!a?null:a.find(r=>r.key===n)||null,[n,a]),_=l.useMemo(()=>a?C&&n?.length&&!j?a.filter(t=>!!(t.key.match(n)||t.text&&t.text.toLowerCase().match(n.toLowerCase()))):a:[],[a,C,n,j]),$=l.useMemo(()=>({...u?.overlayContainerStyle||{},width:h.width}),[h.width,u?.overlayContainerStyle]),R=t=>{t||(d?.(O,"select"),x(!1)),c(t)},E=l.useCallback(t=>{t.target.tagName!=="INPUT"&&(o.disabled||c(r=>!r))},[o.disabled]),v=!!o.disabled,D=l.useCallback(t=>{if(v)return;if(!t){w(null),c(!1);return}const r=t;r.key!==n&&(w(r.key),c(!1))},[v,n]);let M=T?.text??T?.key??n??f??void 0;return o.style?.position&&delete o.style?.position,e.jsx(P,{disableAnimation:!0,...u,visible:y,overlayContainerStyle:$,onVisibleChange:R,overlay:e.jsx(B,{options:_,disabled:v,onSelect:D,selected:n,resetText:F,visible:y}),children:e.jsxs(G,{$width:o.style?.width,children:[e.jsx(A,{...o,$open:y,onClick:E,ref:t=>{if(!t)return;const r=t.getBoundingClientRect(),S={width:r.width||q,height:r.height||K};if((S.width!==h.width||S.height!==h.height)&&I(S),!!g)if(typeof g=="function"){g(t);return}else g.current=t},children:e.jsx(W,{})}),e.jsx(z,{...p,disabled:o.disabled||p?.disabled,readOnly:o.disabled||p?.readOnly,type:"text",value:y?n||"":M||"",placeholder:o.$placeholder,onFocus:t=>{p?.onFocus?.(t),x(!0),c(!0)},onChange:t=>{const r=t.target.value||"";d&&d(r||null,"input"),w(r||null)},onKeyDown:t=>{p?.onKeyDown?.(t),L(t)&&(t.currentTarget.blur(),c(!1),x(!1))}})]})})},A=k(N)`
  width: 100%;
`,G=k.div`
  position: relative;
  width: 100%;

  ${({$width:i})=>i?{width:i}:void 0}
`;m.__docgenInfo={description:"@design https://www.figma.com/design/6Cm9Jlra5K0OXKSZNRKOhI/Studio-Apps-%7C-ODE-1.1.0-%5B24Q3%5D?node-id=7550-37679&t=LDWGOkSu6EGbzLFX-4",methods:[],displayName:"SelectFilterInput",props:{disableFilter:{required:!1,tsType:{name:"boolean"},description:""},inputProps:{required:!1,tsType:{name:"Omit",elements:[{name:"ReactComponentProps",raw:'React.ComponentProps<"input">',elements:[{name:"literal",value:'"input"'}]},{name:"union",raw:'"value" | "defaultValue" | "autoFocus" | "onChange"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"defaultValue"'},{name:"literal",value:'"autoFocus"'},{name:"literal",value:'"onChange"'}]}],raw:`Omit<
  React.ComponentProps<"input">,
  "value" | "defaultValue" | "autoFocus" | "onChange"
>`},description:""},onSelectChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  item: TOption | null | string,
  type: "select" | "input"
) => void`,signature:{arguments:[{type:{name:"union",raw:"TOption | null | string",elements:[{name:"TOption"},{name:"null"},{name:"string"}]},name:"item"},{type:{name:"union",raw:'"select" | "input"',elements:[{name:"literal",value:'"select"'},{name:"literal",value:'"input"'}]},name:"type"}],return:{name:"void"}}},description:""}}};const ue={title:"ODE Library/Selection/SelectWithInput",tags:["autodocs"],component:m,argTypes:{children:{table:{disable:!0}},$text:{table:{disable:!0}},$size:{control:"select",options:["small","medium"]}}},Q=[{key:"true",text:"about true text"},{key:"false",text:"about false text"},{key:"none",text:"none"}],H=Array.from({length:200}).map((i,s)=>({key:`option_${s+1}`,text:`option ${s+1}`}));function J({...i}){const{style:s,...u}=i;return e.jsxs(e.Fragment,{children:[e.jsx("a",{target:"blank",href:"https://www.figma.com/design/JGFHYME2p7RpeMYcoMqooS/ODE-Library-1.0?node-id=8806-5741&t=a5kq8b0LVuQVrQrr-4",rel:"noreferrer",children:"design reference"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- trigger with input"}),e.jsx("br",{}),e.jsx(m,{...u,style:{width:150}}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h4",{children:"- default open = true"}),e.jsx("br",{}),e.jsx(m,{...u,defaultOpen:!0,style:s}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{style:{height:"200vh"}}),e.jsx("h4",{children:"- trigger with auto position (top or bottom) <br />- if bottom & options' height is larger than window's height, options will be fix to fit window's bottom"}),e.jsx("br",{}),e.jsx(m,{...u,options:H,style:s,ref:d=>{console.info("get trigger element from ref",d)}}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{style:{height:"200vh"}})]})}const b={render:J,args:{$size:"small",$placeholder:"select value",defaultOpen:!1,disabled:!1,style:{width:"50vw"},dropdownConfig:{triggerType:"click"},options:Q,resetText:"-- please choose",onSelectChange:(i,s)=>console.info("onSelect",i,s)}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: SelectMenuStory,
  args: {
    $size: "small",
    $placeholder: "select value",
    defaultOpen: false,
    disabled: false,
    style: {
      width: "50vw"
    },
    dropdownConfig: {
      triggerType: "click"
    },
    options,
    resetText: "-- please choose",
    onSelectChange: (item, type) => console.info("onSelect", item, type)
  }
}`,...b.parameters?.docs?.source}}};const ce=["SelectionWithInput"];export{b as SelectionWithInput,ce as __namedExportsOrder,ue as default};
