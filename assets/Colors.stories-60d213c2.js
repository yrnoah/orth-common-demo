import{a,j as p}from"./jsx-runtime-a888423b.js";import{c as f}from"./colors-1c1355f0.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const y={title:"PAAS/DesignSystem/Colors"},h=()=>a("div",{style:{display:"flex",flexWrap:"wrap",backgroundColor:"#ebebeb"},children:c(f)});function c(o,r){let t=[];return Object.keys(o).forEach(s=>{const e=o[s];typeof e=="string"&&t.push(a(b,{color:e,name:r?r+"_"+s:s},r+e+s)),typeof e=="object"&&(t=[...t,...c(e,s)])}),t}const i=h.bind({}),b=({color:o,name:r})=>p("div",{style:{width:200,marginBottom:16,display:"flex",alignItems:"center"},children:[a("div",{style:{width:40,height:40,borderRadius:20,background:o.match("linear-gradient")?o:void 0,backgroundColor:r.match("shadow")?"#fff":o,boxShadow:r.match("shadow")?o:void 0,marginRight:8,display:"inline-block",flexShrink:0}}),a("span",{children:r})]});var l,d,n;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  flexWrap: "wrap",
  backgroundColor: "#ebebeb"
}}>
    {getColors(C)}
  </div>`,...(n=(d=i.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};const C=["Colors"];export{i as Colors,C as __namedExportsOrder,y as default};
//# sourceMappingURL=Colors.stories-60d213c2.js.map
