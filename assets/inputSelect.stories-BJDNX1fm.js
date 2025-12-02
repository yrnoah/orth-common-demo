import{c as i,d as s,r as c,j as o,s as j,f as O,R as k}from"./iframe-AucjWJ36.js";import{B as q}from"./Dropdown-CWIma2Q5.js";import{S as T}from"./IconArrowSm-v_mKIz_o.js";import"./preload-helper-D9Z9MdNV.js";import"./Portal-Cf1ZhHdQ.js";import"./index-DDbPfvBX.js";import"./index-CIZEOwdE.js";import"./useCurrent-Bts7HZnN.js";import"./useMeasure-DDH6vtW2.js";const E=s(T)`
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
`;function F(e,n,r=!0){return r?e.filter(n):e}const I=136,P=24,B={width:I,height:P};function b({inputAttrs:e,defaultVisible:n,options:r,optionStyle:v,size:a="small",value:m,setValue:p,enableFilterOption:f,wrapperStyle:S,...C}){const[l,g]=c.useState(n??!1),[w,y]=c.useState(!1),[h,R]=c.useState(B),$=c.useMemo(()=>o.jsx(o.Fragment,{children:!!r&&F(r,t=>f?t.includes(m??""):!0,f).map((t,d)=>o.jsx(D,{$size:a,onClick:()=>{p&&p(t),g(!1)},style:{...v},children:t},d))}),[f,v,r,p,a,m]);return o.jsx(q,{visible:l,overlay:$,overlayContainerStyle:{background:"#fff",borderRadius:"4px",overflow:"hidden",boxShadow:j.hardShadow,width:h.width},...C,onVisibleChange:t=>g(t),children:o.jsxs(_,{ref:t=>{if(!t)return;const d=t.getBoundingClientRect(),x={width:d.width,height:d.height};(h.width!==x.width||h.height!==x.height)&&R(x)},style:{borderColor:w||l?i.textInput.link:void 0,backgroundColor:w||l?"#fff":void 0,padding:a==="small"?"1px 5px":"8px 5px",...S},children:[o.jsx(z,{onChange:t=>p?.(t.target.value),...e,value:m,onFocus:t=>{y(!0),e?.onFocus&&e.onFocus(t)},onBlur:t=>{y(!1),e?.onBlur&&e.onBlur(t)}}),o.jsx(E,{onClick:()=>g(!l),$size:a,style:{position:"absolute",right:6}})]})})}const z=s.input`
  position: relative;
  border: none;
  outline: none;
  height: 20px;
  border-radius: 4px;
  background-color: transparent;
  color: currentcolor;
  ${O["Caption-Large/Regular"]}
`,D=s.div`
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
`,_=s.div`
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
`;b.__docgenInfo={description:"@design https://www.figma.com/design/JGFHYME2p7RpeMYcoMqooS/ODE-Library-1.0?node-id=5358-24798&t=XZTN1PE3CDllHgtD-4",methods:[],displayName:"InputOption",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:'@default string "small"',defaultValue:{value:'"small"',computed:!1}},inputAttrs:{required:!1,tsType:{name:"ReactComponentProps",raw:'React.ComponentProps<"input">',elements:[{name:"literal",value:'"input"'}]},description:"@description control directly input element attributes"},options:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"@description options as string list"},optionStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"@description option style"},wrapperStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"@description wrapper style"},value:{required:!1,tsType:{name:"string"},description:"@description current input value"},setValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"@description set value"},enableFilterOption:{required:!1,tsType:{name:"boolean"},description:"@description are options can be filtered by the input value @default false"},defaultVisible:{required:!1,tsType:{name:"boolean"},description:"@description is the dropdown start with visible"}},composes:["Omit"]};const Z={title:"ODE Library/Selection/InputOption",tags:["autodocs"],component:b},u={args:{options:["Option 1","Option 2","Option 3"],size:"small",enableFilterOption:!1},render:e=>o.jsx(L,{...e})},L=e=>{const[n,r]=k.useState("");return o.jsx(M,{children:o.jsx(b,{options:["Option 1","Option 2","Option 3"],value:n,setValue:r,enableFilterOption:!0,inputAttrs:{placeholder:"Please input"},...e})})},M=s.div`
  background-color: ${i.noColor.Ash6};
  padding: 80px;
`;u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    size: "small",
    enableFilterOption: false
  },
  render: args => <Element {...args} />
}`,...u.parameters?.docs?.source}}};const K=["InputOption"];export{u as InputOption,K as __namedExportsOrder,Z as default};
