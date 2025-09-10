import{j as s,a as c}from"./jsx-runtime-a888423b.js";import{r as d}from"./index-8db94870.js";import{p as n,c as p}from"./styled-components.browser.esm-6dd904cc.js";const r=d.forwardRef((e,t)=>{const{text:o,children:a,...i}=e;return s(u,{...i,ref:t,children:[!!o&&c(l,{children:o}),a]})}),l=n.span`
  position: relative;
`,u=n.label`
  ${e=>e.theme.fonts["Caption-Large/Bold"]}
  color: ${e=>e.theme.colors.noColor.Grey14};
  position: relative;
  display: inline-block;

  ${({$required:e,theme:t})=>e&&p`
      ${l} {
        &::before {
          content: "*";
          display: inline-block;
          color: ${t.colors.baseColor.Volcano5};
          position: absolute;
          top: 0;
          right: -4px;
          transform: translateX(100%);
        }
      }
    `}
`;try{r.displayName="FieldLabel",r.__docgenInfo={description:"",displayName:"FieldLabel",props:{text:{defaultValue:null,description:"@description content text",name:"text",required:!0,type:{name:"string"}},children:{defaultValue:null,description:`@description other children content excludes content text
@include phrasing_content [source: mdn] https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#phrasing_content, tags like h3 are not allowed.`,name:"children",required:!1,type:{name:"ReactNode"}},$required:{defaultValue:{value:"false"},description:"@description show pseudo element (*) with content text when true",name:"$required",required:!1,type:{name:"boolean"}}}}}catch{}export{r as F};
//# sourceMappingURL=Label-007705c7.js.map
