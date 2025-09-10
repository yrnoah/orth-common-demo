import{a as o,F as R,j as D}from"./jsx-runtime-a888423b.js";import{c as a,s as F}from"./colors-1c1355f0.js";import{r as d,R as B}from"./index-8db94870.js";import{p as T}from"./styled-components.browser.esm-7ed061eb.js";import{p as m}from"./styled-components.browser.esm-6dd904cc.js";import{f as O}from"./fonts-d9df4e72.js";import{B as z}from"./Dropdown-82bc9635.js";import{I as E}from"./IconArrowSm-99e81fe8.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-unitless.esm-acc3a66a.js";import"./Portal-847ba74d.js";import"./index-8ce4a492.js";import"./useCurrent-3439251d.js";import"./useMeasure-2fb4c371.js";const y=m(E)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${e=>e.$size==="small"?2.67:4}px;
  width: ${e=>e.$size==="small"?16:24}px;
  height: ${e=>e.$size==="small"?16:24}px;
  background-color: #fff;

  &:hover {
    background-color: ${a.button.hovered};
  }
`;try{y.displayName="DropdownButton",y.__docgenInfo={description:"",displayName:"DropdownButton",props:{}}}catch{}function N(e,n,r=!0){return r?e.filter(n):e}const L=136,P=24,j={width:L,height:P};function c({inputAttrs:e,defaultVisible:n,options:r,optionStyle:w,size:l="small",value:f,setValue:i,enableFilterOption:h,wrapperStyle:_,...I}){const[s,g]=d.useState(n??!1),[x,S]=d.useState(!1),[b,$]=d.useState(j),k=d.useMemo(()=>o(R,{children:!!r&&N(r,t=>h?t.includes(f??""):!0,h).map((t,p)=>o(M,{$size:l,onClick:()=>{i&&i(t),g(!1)},style:{...w},children:t},p))}),[h,w,r,i,l,f]);return o(z,{visible:s,overlay:k,overlayContainerStyle:{background:"#fff",borderRadius:"4px",overflow:"hidden",boxShadow:F.hardShadow,width:b.width},...I,onVisibleChange:t=>g(t),children:D(W,{ref:t=>{if(!t)return;const p=t.getBoundingClientRect(),v={width:p.width,height:p.height};(b.width!==v.width||b.height!==v.height)&&$(v)},style:{borderColor:x||s?a.textInput.link:void 0,backgroundColor:x||s?"#fff":void 0,padding:l==="small"?"1px 5px":"8px 5px",..._},children:[o(H,{onChange:t=>i==null?void 0:i(t.target.value),...e,value:f,onFocus:t=>{S(!0),e!=null&&e.onFocus&&e.onFocus(t)},onBlur:t=>{S(!1),e!=null&&e.onBlur&&e.onBlur(t)}}),o(y,{onClick:()=>g(!s),$size:l,style:{position:"absolute",right:6}})]})})}const H=m.input`
  position: relative;
  border: none;
  outline: none;
  height: 20px;
  border-radius: 4px;
  background-color: transparent;
  color: currentcolor;
  ${O["Caption-Large/Regular"]}
`,M=m.div`
  display: flex;
  align-items: center;
  gap: ${({$size:e})=>e==="small"?"2px 6px":"8px 6px"};
  width: 100%;
  padding: 2px 12px 2px 32px;
  min-width: 120px;
  ${O["Caption-Large/Regular"]}
  line-height: 20px;

  &:hover {
    background-color: ${a.button.hovered};
  }
`,W=m.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  padding-right: 36px;
  border: 1px solid;
  border-radius: 4px;
  width: fit-content;
  border-color: transparent;

  &:hover {
    border-color: ${a.button.hovered};
    background-color: #fff;
  }
`;try{c.displayName="InputOption",c.__docgenInfo={description:"",displayName:"InputOption",props:{size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},inputAttrs:{defaultValue:null,description:"@description control directly input element attributes",name:"inputAttrs",required:!1,type:{name:"InputHTMLAttributes<HTMLInputElement>"}},options:{defaultValue:null,description:"@description options as string list",name:"options",required:!1,type:{name:"string[]"}},optionStyle:{defaultValue:null,description:"@description option style",name:"optionStyle",required:!1,type:{name:"CSSProperties"}},wrapperStyle:{defaultValue:null,description:"@description wrapper style",name:"wrapperStyle",required:!1,type:{name:"CSSProperties"}},value:{defaultValue:null,description:"@description current input value",name:"value",required:!1,type:{name:"string"}},setValue:{defaultValue:null,description:"@description set value",name:"setValue",required:!1,type:{name:"(value: string) => void"}},enableFilterOption:{defaultValue:{value:"false"},description:"@description are options can be filtered by the input value",name:"enableFilterOption",required:!1,type:{name:"boolean"}},defaultVisible:{defaultValue:null,description:"@description is the dropdown start with visible",name:"defaultVisible",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"trigger wrapper styles",name:"style",required:!1,type:{name:"CSSProperties"}},overlay:{defaultValue:null,description:"dropdown component",name:"overlay",required:!1,type:{name:"ReactNode"}},position:{defaultValue:{value:`undefined = auto
dropdown position:
- Vertical positions: "top-left" | "top" | "top-right" | "bottom-left" | "bottom" | "bottom-right"
- Horizontal positions: "left-top" | "left" | "left-bottom" | "right-top" | "right" | "right-bottom"
- Auto: "auto" | undefined`},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"top-left"'},{value:'"top-right"'},{value:'"bottom-left"'},{value:'"bottom-right"'},{value:'"top"'},{value:'"bottom"'},{value:'"left-top"'},{value:'"left"'},{value:'"left-bottom"'},{value:'"right-top"'},{value:'"right"'},{value:'"right-bottom"'},{value:'"auto"'}]}},onVisibleChange:{defaultValue:null,description:"dropdown visible onChange callback",name:"onVisibleChange",required:!1,type:{name:"(visible: boolean) => void"}},fitToTrigger:{defaultValue:{value:"false"},description:"@description when set to true, overlay position should cover trigger",name:"fitToTrigger",required:!1,type:{name:"boolean"}},triggerType:{defaultValue:{value:'"click"'},description:"",name:"triggerType",required:!1,type:{name:"enum",value:[{value:'"click"'},{value:'"hover"'}]}},overlayContainerStyle:{defaultValue:null,description:"dropdown wrapper styles",name:"overlayContainerStyle",required:!1,type:{name:"CSSProperties"}},disableAutoDismiss:{defaultValue:null,description:"disable the auto dismiss when user click or scroll outside",name:"disableAutoDismiss",required:!1,type:{name:"boolean"}},disableAnimation:{defaultValue:null,description:"disable dropdown enter & leave default animation",name:"disableAnimation",required:!1,type:{name:"boolean"}},parentNodeID:{defaultValue:{value:"dropdownPortalID (`orthogonal-dropdown-overlay`)"},description:"ID of the dom element, which will be insert the dropdown items",name:"parentNodeID",required:!1,type:{name:"string"}},scrollRef:{defaultValue:null,description:"the scroll element ref, add listener to watch scroll event",name:"scrollRef",required:!1,type:{name:"RefObject<HTMLElement>"}}}}}catch{}const le={title:"ODE Library/Selection/InputOption",tags:["autodocs"],component:c},u={args:{options:["Option 1","Option 2","Option 3"],size:"small",isFilter:!1},render:e=>o(G,{...e})},G=e=>{const[n,r]=B.useState("");return o(J,{children:o(c,{options:["Option 1","Option 2","Option 3"],value:n,setValue:r,isFilter:!0,inputAttrs:{placeholder:"Please input"},...e})})},J=T.div`
  background-color: ${a.noColor.Ash6};
  padding: 80px;
`;var V,C,q;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    size: "small",
    isFilter: false
  },
  render: args => <Element {...args} />
}`,...(q=(C=u.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};const se=["InputOption"];export{u as InputOption,se as __namedExportsOrder,le as default};
//# sourceMappingURL=inputSelect.stories-0e500cf8.js.map
