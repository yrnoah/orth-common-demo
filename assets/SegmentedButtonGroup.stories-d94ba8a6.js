import{j as t}from"./jsx-runtime-94f6e698.js";import{r as p}from"./index-8db94870.js";import{S as B}from"./SegmentedButton-a48b2d42.js";import{p as V,c as h}from"./styled-components.browser.esm-655d472d.js";import{f as M}from"./component-afc23ed8.js";import"./_commonjsHelpers-042e6b4d.js";const i=(e,r)=>{const{option:o,$instance:a=!1,$size:y="medium",active:l,disabled:d=!1,onActiveChange:f,_ref:s,...j}=e,[q,z]=p.useState(()=>typeof l=="string"?l:""),v=typeof l=="string"?l:q;return t.jsx(G,{...j,$size:y,disabled:d,ref:n=>{if(s){if(typeof s=="function"){s(n);return}"current"in s&&(s.current=n)}if(r){if(typeof r=="function"){r(n);return}"current"in r&&(r.current=n)}},children:o.map(n=>{var b;const g=v===n.key,m={$size:y,$instance:a};return d&&(m.disabled=!0),d&&!g&&(m.style={...((b=n.properties)==null?void 0:b.style)||{},backgroundColor:"transparent"}),p.createElement(B,{...n.properties,...m,$active:g,onClick:x=>{var u,w;d||v!==n.key&&((w=(u=n.properties)==null?void 0:u.onClick)==null||w.call(u,x),f==null||f(n.key,x),z(n.key))},key:n.key})})})},k=M(i),G=V.div`
  ${e=>e.theme.flex.row}
  width: fit-content;
  overflow: hidden;
  background-color: #f8fafc;
  transition: background-color 0.2s ease;
  ${({$size:e,theme:r})=>e==="large"?h`
        padding: 4px;
        border-radius: ${r.radius.s}px;
      `:h`
      padding: 2px;
      border-radius: ${r.radius.xxxs}px;
    `}

  ${({disabled:e})=>{if(e)return h`
        background-color: transparent;
      `}}
`;try{i.displayName="SegmentedButtonGroup",i.__docgenInfo={description:"",displayName:"SegmentedButtonGroup",props:{active:{defaultValue:null,description:"@description option.key | option.key array",name:"active",required:!1,type:{name:"string"}},onActiveChange:{defaultValue:null,description:"",name:"onActiveChange",required:!1,type:{name:'((activeKey: TOption["key"], event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)'}},option:{defaultValue:null,description:"@description button array",name:"option",required:!0,type:{name:"TOption[]"}},$instance:{defaultValue:{value:"false"},description:`@description override single button $instance;
when true: width=fit-content | min-width=unset
when false width=auto | min-width=64`,name:"$instance",required:!1,type:{name:"boolean"}},$size:{defaultValue:{value:"medium"},description:`@description override single button $size;
small: min-height=32, horizontal-padding=6 | medium: min-height=36, horizontal-padding=12`,name:"$size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},disabled:{defaultValue:{value:"false"},description:"@description override single button disable;",name:"disabled",required:!1,type:{name:"boolean"}},_ref:{defaultValue:null,description:`@description if fixedForwardRef & ref not work, try _ref
@todo should fix when react19 release`,name:"_ref",required:!1,type:{name:"ForwardedRef<HTMLDivElement>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}}}catch{}try{k.displayName="SegmentedButtonGroupWithRef",k.__docgenInfo={description:"",displayName:"SegmentedButtonGroupWithRef",props:{active:{defaultValue:null,description:"@description option.key | option.key array",name:"active",required:!1,type:{name:"string"}},onActiveChange:{defaultValue:null,description:"",name:"onActiveChange",required:!1,type:{name:"((activeKey: string, event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},option:{defaultValue:null,description:"@description button array",name:"option",required:!0,type:{name:"SegmentedButtonGroupOption[]"}},$instance:{defaultValue:{value:"false"},description:`@description override single button $instance;
when true: width=fit-content | min-width=unset
when false width=auto | min-width=64`,name:"$instance",required:!1,type:{name:"boolean"}},$size:{defaultValue:{value:"medium"},description:`@description override single button $size;
small: min-height=32, horizontal-padding=6 | medium: min-height=36, horizontal-padding=12`,name:"$size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},disabled:{defaultValue:{value:"false"},description:"@description override single button disable;",name:"disabled",required:!1,type:{name:"boolean"}},_ref:{defaultValue:null,description:`@description if fixedForwardRef & ref not work, try _ref
@todo should fix when react19 release`,name:"_ref",required:!1,type:{name:"ForwardedRef<HTMLDivElement>"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}}}catch{}const _=[{key:"1",properties:{children:"1"}},{key:"2",properties:{children:"2"}},{key:"3",properties:{children:"3"}}],R=[{key:"1",properties:{children:"true",style:{flex:1}}},{key:"2",properties:{children:"false",style:{flex:1}}},{key:"3",properties:{children:"others",style:{flex:2}}}],F={title:"ODE Library/Buttons/SegmentedButtonGroup",tags:["autodocs"],component:i,argTypes:{$size:{control:"select",options:["medium","small","large"]},theme:{table:{disable:!0}}}};function A({...e}){const[r,o]=p.useState(e.active);return p.useEffect(()=>o(e.active||""),[e.active]),t.jsxs("div",{children:[t.jsx("a",{target:"blank",href:"https://www.figma.com/design/JGFHYME2p7RpeMYcoMqooS/ODE-Library-1.0?node-id=6011-9842&t=FAzx6jwix7ISvVDA-4",rel:"noreferrer",children:"design reference"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("h4",{children:"- default SegmentedButton Group"}),t.jsx("br",{}),t.jsx(i,{...e,active:r,option:e.option||[],onActiveChange:a=>o(a)}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("h4",{children:"- controlled size (option.properties.style.flex = number) "}),t.jsx("h4",{children:'- container style: width: "50vw", height: 80; item style: flex: 1 1 2'}),t.jsx("br",{}),t.jsx(i,{...e,active:r,option:R||[],style:{width:"50vw",height:80},onActiveChange:a=>o(a)})]})}const c={render:A,args:{active:_[1].key,disabled:!1,$instance:!1,option:_,$size:"medium"}};var $,S,E;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: SegmentedButtonGroupStory,
  args: {
    active: option[1].key,
    disabled: false,
    $instance: false,
    option,
    $size: "medium"
  }
}`,...(E=(S=c.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};const N=["SegmentedButtonGroup"];export{c as SegmentedButtonGroup,N as __namedExportsOrder,F as default};
//# sourceMappingURL=SegmentedButtonGroup.stories-d94ba8a6.js.map
