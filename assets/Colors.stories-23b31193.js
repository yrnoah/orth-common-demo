import{j as e}from"./jsx-runtime-94f6e698.js";import{c as p}from"./colors-5a178381.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const u={title:"PAAS/DesignSystem/Colors"},f=()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",backgroundColor:"#ebebeb"},children:c(p)});function c(o,r){let i=[];return Object.keys(o).forEach(s=>{const t=o[s];typeof t=="string"&&i.push(e.jsx(h,{color:t,name:r?r+"_"+s:s},r+t+s)),typeof t=="object"&&(i=[...i,...c(t,s)])}),i}const l=f.bind({}),h=({color:o,name:r})=>e.jsxs("div",{style:{width:200,marginBottom:16,display:"flex",alignItems:"center"},children:[e.jsx("div",{style:{width:40,height:40,borderRadius:20,background:o.match("linear-gradient")?o:void 0,backgroundColor:r.match("shadow")?"#fff":o,boxShadow:r.match("shadow")?o:void 0,marginRight:8,display:"inline-block",flexShrink:0}}),e.jsx("span",{children:r})]});var a,d,n;l.parameters={...l.parameters,docs:{...(a=l.parameters)==null?void 0:a.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  flexWrap: "wrap",
  backgroundColor: "#ebebeb"
}}>
    {getColors(C)}
  </div>`,...(n=(d=l.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};const y=["Colors"];export{l as Colors,y as __namedExportsOrder,u as default};
//# sourceMappingURL=Colors.stories-23b31193.js.map
