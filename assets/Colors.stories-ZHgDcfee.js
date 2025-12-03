import{j as t,c as d}from"./iframe-BY0Ds_wu.js";import"./preload-helper-D9Z9MdNV.js";const h={title:"PAAS/DesignSystem/Colors"},n=()=>t.jsx("div",{style:{display:"flex",flexWrap:"wrap",backgroundColor:"#ebebeb"},children:a(d)});function a(o,s){let i=[];return Object.keys(o).forEach(r=>{const e=o[r];typeof e=="string"&&i.push(t.jsx(c,{color:e,name:s?s+"_"+r:r},s+e+r)),typeof e=="object"&&(i=[...i,...a(e,r)])}),i}const l=n.bind({}),c=({color:o,name:s})=>t.jsxs("div",{style:{width:200,marginBottom:16,display:"flex",alignItems:"center"},children:[t.jsx("div",{style:{width:40,height:40,borderRadius:20,background:o.match("linear-gradient")?o:void 0,backgroundColor:s.match("shadow")?"#fff":o,boxShadow:s.match("shadow")?o:void 0,marginRight:8,display:"inline-block",flexShrink:0}}),t.jsx("span",{children:s})]});l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  flexWrap: "wrap",
  backgroundColor: "#ebebeb"
}}>
    {getColors(C)}
  </div>`,...l.parameters?.docs?.source}}};const b=["Colors"];export{l as Colors,b as __namedExportsOrder,h as default};
