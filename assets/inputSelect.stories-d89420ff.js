import{j as o}from"./jsx-runtime-94f6e698.js";import{c as i,s as j}from"./colors-e320fa4b.js";import{r as u,R}from"./index-8db94870.js";import{p as l}from"./styled-components.browser.esm-655d472d.js";import{f as O}from"./fonts-e4b8c4ab.js";import{B as D}from"./Dropdown-47d0c66c.js";import{I as T}from"./IconArrowSm-8c383373.js";import"./_commonjsHelpers-042e6b4d.js";import"./Portal-01fdeda0.js";import"./index-8ce4a492.js";import"./useCurrent-3439251d.js";import"./useMeasure-2fb4c371.js";const v=l(T)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${e=>e.$size==="small"?2.67:4}px;
  width: ${e=>e.$size==="small"?16:24}px;
  height: ${e=>e.$size==="small"?16:24}px;
  background-color: #fff;

  &:hover {
    background-color: ${i.button.hovered};
  }
`;try{v.displayName="DropdownButton",v.__docgenInfo={description:"",displayName:"DropdownButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}function B(e,a,r=!0){return r?e.filter(a):e}const F=136,E=24,z={width:F,height:E};function m({inputAttrs:e,defaultVisible:a,options:r,optionStyle:x,size:s="small",value:f,setValue:n,enableFilterOption:h,wrapperStyle:_,...I}){const[d,g]=u.useState(a??!1),[w,V]=u.useState(!1),[b,$]=u.useState(z),k=u.useMemo(()=>o.jsx(o.Fragment,{children:!!r&&B(r,t=>h?t.includes(f??""):!0,h).map((t,p)=>o.jsx(L,{$size:s,onClick:()=>{n&&n(t),g(!1)},style:{...x},children:t},p))}),[h,x,r,n,s,f]);return o.jsx(D,{visible:d,overlay:k,overlayContainerStyle:{background:"#fff",borderRadius:"4px",overflow:"hidden",boxShadow:j.hardShadow,width:b.width},...I,onVisibleChange:t=>g(t),children:o.jsxs(P,{ref:t=>{if(!t)return;const p=t.getBoundingClientRect(),y={width:p.width,height:p.height};(b.width!==y.width||b.height!==y.height)&&$(y)},style:{borderColor:w||d?i.textInput.link:void 0,backgroundColor:w||d?"#fff":void 0,padding:s==="small"?"1px 5px":"8px 5px",..._},children:[o.jsx(N,{onChange:t=>n==null?void 0:n(t.target.value),...e,value:f,onFocus:t=>{V(!0),e!=null&&e.onFocus&&e.onFocus(t)},onBlur:t=>{V(!1),e!=null&&e.onBlur&&e.onBlur(t)}}),o.jsx(v,{onClick:()=>g(!d),$size:s,style:{position:"absolute",right:6}})]})})}const N=l.input`
  position: relative;
  border: none;
  outline: none;
  height: 20px;
  border-radius: 4px;
  background-color: transparent;
  color: currentcolor;
  ${O["Caption-Large/Regular"]}
`,L=l.div`
  display: flex;
  align-items: center;
  gap: ${({$size:e})=>e==="small"?"2px 6px":"8px 6px"};
  width: 100%;
  padding: 2px 12px 2px 32px;
  min-width: 120px;
  ${O["Caption-Large/Regular"]}
  line-height: 20px;

  &:hover {
    background-color: ${i.button.hovered};
  }
`,P=l.div`
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
    border-color: ${i.button.hovered};
    background-color: #fff;
  }
`;try{m.displayName="InputOption",m.__docgenInfo={description:"",displayName:"InputOption",props:{size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},inputAttrs:{defaultValue:null,description:"@description control directly input element attributes",name:"inputAttrs",required:!1,type:{name:"InputHTMLAttributes<HTMLInputElement>"}},options:{defaultValue:null,description:"@description options as string list",name:"options",required:!1,type:{name:"string[]"}},optionStyle:{defaultValue:null,description:"@description option style",name:"optionStyle",required:!1,type:{name:"CSSProperties"}},wrapperStyle:{defaultValue:null,description:"@description wrapper style",name:"wrapperStyle",required:!1,type:{name:"CSSProperties"}},value:{defaultValue:null,description:"@description current input value",name:"value",required:!1,type:{name:"string"}},setValue:{defaultValue:null,description:"@description set value",name:"setValue",required:!1,type:{name:"((value: string) => void)"}},enableFilterOption:{defaultValue:{value:"false"},description:"@description are options can be filtered by the input value",name:"enableFilterOption",required:!1,type:{name:"boolean"}},defaultVisible:{defaultValue:null,description:"@description is the dropdown start with visible",name:"defaultVisible",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"trigger wrapper styles",name:"style",required:!1,type:{name:"CSSProperties"}},overlay:{defaultValue:null,description:"dropdown component",name:"overlay",required:!1,type:{name:"ReactNode"}},position:{defaultValue:{value:`undefined = auto
dropdown position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top" | "bottom" | undefined = auto`},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"bottom"'},{value:'"top"'},{value:'"top-left"'},{value:'"top-right"'},{value:'"bottom-left"'},{value:'"bottom-right"'}]}},onVisibleChange:{defaultValue:null,description:"dropdown visible onChange callback",name:"onVisibleChange",required:!1,type:{name:"((visible: boolean) => void)"}},fitToTrigger:{defaultValue:{value:"false"},description:"@description when set to true, overlay position should cover trigger",name:"fitToTrigger",required:!1,type:{name:"boolean"}},triggerType:{defaultValue:{value:'"click"'},description:"",name:"triggerType",required:!1,type:{name:"enum",value:[{value:'"click"'},{value:'"hover"'}]}},overlayContainerStyle:{defaultValue:null,description:"dropdown wrapper styles",name:"overlayContainerStyle",required:!1,type:{name:"CSSProperties"}},disableAutoDismiss:{defaultValue:null,description:"disable the auto dismiss when user click or scroll outside",name:"disableAutoDismiss",required:!1,type:{name:"boolean"}},disableAnimation:{defaultValue:null,description:"disable dropdown enter & leave default animation",name:"disableAnimation",required:!1,type:{name:"boolean"}},parentNodeID:{defaultValue:{value:"dropdownPortalID (`orthogonal-dropdown-overlay`)"},description:"ID of the dom element, which will be insert the dropdown items",name:"parentNodeID",required:!1,type:{name:"string"}},scrollRef:{defaultValue:null,description:"the scroll element ref, add listener to watch scroll event",name:"scrollRef",required:!1,type:{name:"RefObject<HTMLElement>"}}}}}catch{}const oe={title:"ODE Library/Selection/InputOption",tags:["autodocs"],component:m},c={args:{options:["Option 1","Option 2","Option 3"],size:"small",isFilter:!1},render:e=>o.jsx(W,{...e})},W=e=>{const[a,r]=R.useState("");return o.jsx(H,{children:o.jsx(m,{options:["Option 1","Option 2","Option 3"],value:a,setValue:r,isFilter:!0,inputAttrs:{placeholder:"Please input"},...e})})},H=l.div`
  background-color: ${i.noColor.Ash6};
  padding: 80px;
`;var q,S,C;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    size: "small",
    isFilter: false
  },
  render: args => <Element {...args} />
}`,...(C=(S=c.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const re=["InputOption"];export{c as InputOption,re as __namedExportsOrder,oe as default};
//# sourceMappingURL=inputSelect.stories-d89420ff.js.map
