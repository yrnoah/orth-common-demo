import{c as i,d as s,r as c,j as r,s as T,f as O,R as I}from"./iframe-D12yBJYT.js";import{B as j}from"./Dropdown-D5JwdULb.js";import{S as k}from"./IconArrowSm-B3wviign.js";import"./preload-helper-D9Z9MdNV.js";import"./Portal-BcC3rkwp.js";import"./index-CLFaP9oP.js";import"./index-DihtluQp.js";import"./useCurrent-DBDDWVp7.js";import"./useMeasure-BC0zJ6WC.js";const E=s(k)`
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
`;function q(e,n,o=!0){return o?e.filter(n):e}const F=136,L=24,M={width:F,height:L};function b({inputAttrs:e,defaultVisible:n,options:o,optionStyle:w,size:a="small",value:m,setValue:l,enableFilterOption:f,wrapperStyle:S,...C}){const[p,g]=c.useState(n??!1),[v,y]=c.useState(!1),[h,R]=c.useState(M),$=c.useMemo(()=>r.jsx(r.Fragment,{children:!!o&&q(o,t=>f?t.includes(m??""):!0,f).map((t,d)=>r.jsx(H,{$size:a,onClick:()=>{l&&l(t),g(!1)},style:{...w},children:t},d))}),[f,w,o,l,a,m]);return r.jsx(j,{visible:p,overlay:$,overlayContainerStyle:{background:"#fff",borderRadius:"4px",overflow:"hidden",boxShadow:T.hardShadow,width:h.width},...C,onVisibleChange:t=>g(t),children:r.jsxs(z,{ref:t=>{if(!t)return;const d=t.getBoundingClientRect(),x={width:d.width,height:d.height};(h.width!==x.width||h.height!==x.height)&&R(x)},style:{borderColor:v||p?i.textInput.link:void 0,backgroundColor:v||p?"#fff":void 0,padding:a==="small"?"1px 5px":"8px 5px",...S},children:[r.jsx(B,{onChange:t=>l?.(t.target.value),...e,value:m,onFocus:t=>{y(!0),e?.onFocus&&e.onFocus(t)},onBlur:t=>{y(!1),e?.onBlur&&e.onBlur(t)}}),r.jsx(E,{onClick:()=>g(!p),$size:a,style:{position:"absolute",right:6}})]})})}const B=s.input`
  position: relative;
  border: none;
  outline: none;
  height: 20px;
  border-radius: 4px;
  background-color: transparent;
  color: currentcolor;
  ${O["Caption-Large/Regular"]}
`,H=s.div`
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
`,z=s.div`
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
`;b.__docgenInfo={description:"@design https://www.figma.com/design/JGFHYME2p7RpeMYcoMqooS/ODE-Library-1.0?node-id=5358-24798&t=XZTN1PE3CDllHgtD-4",methods:[],displayName:"InputOption",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:'@default string "small"',defaultValue:{value:'"small"',computed:!1}},inputAttrs:{required:!1,tsType:{name:"ReactInputHTMLAttributes",raw:"React.InputHTMLAttributes<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"@description control directly input element attributes"},options:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"@description options as string list"},optionStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"@description option style"},wrapperStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"@description wrapper style"},value:{required:!1,tsType:{name:"string"},description:"@description current input value"},setValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"@description set value"},enableFilterOption:{required:!1,tsType:{name:"boolean"},description:"@description are options can be filtered by the input value @default false"},defaultVisible:{required:!1,tsType:{name:"boolean"},description:"@description is the dropdown start with visible"}},composes:["Omit"]};const Z={title:"ODE Library/Selection/InputOption",tags:["autodocs"],component:b},u={args:{options:["Option 1","Option 2","Option 3"],size:"small",enableFilterOption:!1},render:e=>r.jsx(D,{...e})},D=e=>{const[n,o]=I.useState("");return r.jsx(P,{children:r.jsx(b,{options:["Option 1","Option 2","Option 3"],value:n,setValue:o,enableFilterOption:!0,inputAttrs:{placeholder:"Please input"},...e})})},P=s.div`
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
