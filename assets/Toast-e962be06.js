import{j as o}from"./jsx-runtime-94f6e698.js";import{b as h,a as y}from"./react-spring-web.esm-b5f0afc3.js";import{r as g}from"./index-8db94870.js";import{p as a,c as x}from"./styled-components.browser.esm-8c817f58.js";import{c as m}from"./colors-be3c1ed4.js";import{a as D}from"./common-6b90d0a5.js";import{u as _}from"./Dynamic-c2976920.js";import{u as w}from"./useMount-33212c03.js";import{D as S,a as T}from"./DmIcon20ErrorRed-7a58926a.js";import{t as v}from"./typography-05e40c9f.js";const p=({keepShowing:s,type:u,timeBeforeDisappear:l=2e3,children:d,...f})=>{const e=_(),r=g.useRef(null),t=h(0,{config:D});return w(()=>{var n;if(r.current){const i=r.current.getBoundingClientRect();(n=e.startSizeTo)==null||n.call(e,{width:i.width,height:i.height}).then(()=>t.start(1)).then(()=>s?{}:t.start(0,{delay:l}))}}),o.jsxs(I,{ref:r,...f,style:{opacity:t},children:[u==="success"?o.jsx(j,{}):o.jsx(E,{}),d]})},I=a(y.div)`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  ${v.dymenu_MenuTitle}
  white-space: nowrap;
`,c=x`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`,j=a(S)`
  ${c}
  color: ${m.Pegreen_300}
`,E=a(T)`
  ${c}
  color: ${m.Errorred_300};
`;try{p.displayName="DymenuToast",p.__docgenInfo={description:`Toast component for dymenu, will auto resize the dymenu to fit the toast
Total length 2600ms = resize 300ms (if have) + 150 appear + timeBeforeDisappear + 150 disappear`,displayName:"DymenuToast",props:{keepShowing:{defaultValue:null,description:"",name:"keepShowing",required:!1,type:{name:"boolean"}},timeBeforeDisappear:{defaultValue:{value:"2000"},description:"",name:"timeBeforeDisappear",required:!1,type:{name:"number"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'}]}}}}}catch{}export{p as D};
//# sourceMappingURL=Toast-e962be06.js.map
