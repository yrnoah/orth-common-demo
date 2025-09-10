import{j as r}from"./jsx-runtime-94f6e698.js";import{r as c}from"./index-8db94870.js";import{p as l,c as d}from"./styled-components.browser.esm-6dd904cc.js";const n=c.forwardRef((e,t)=>{const{text:o,children:i,...s}=e;return r.jsxs(p,{...s,ref:t,children:[!!o&&r.jsx(a,{children:o}),i]})}),a=l.span`
  position: relative;
`,p=l.label`
  ${e=>e.theme.fonts["Caption-Large/Bold"]}
  color: ${e=>e.theme.colors.noColor.Grey14};
  position: relative;
  display: inline-block;

  ${({$required:e,theme:t})=>e&&d`
      ${a} {
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
`;try{n.displayName="FieldLabel",n.__docgenInfo={description:"",displayName:"FieldLabel",props:{text:{defaultValue:null,description:"@description content text",name:"text",required:!0,type:{name:"string"}},children:{defaultValue:null,description:`@description other children content excludes content text
@include phrasing_content [source: mdn] https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#phrasing_content, tags like h3 are not allowed.`,name:"children",required:!1,type:{name:"ReactNode"}},$required:{defaultValue:{value:"false"},description:"@description show pseudo element (*) with content text when true",name:"$required",required:!1,type:{name:"boolean"}}}}}catch{}export{n as F};
//# sourceMappingURL=Label-66f79118.js.map
