import{j as n,l,d as o}from"./iframe-AucjWJ36.js";const a=e=>{const{text:t,children:s,...r}=e;return n.jsxs(c,{...r,children:[!!t&&n.jsx(i,{children:t}),s]})},i=o.span`
  position: relative;
`,c=o.label`
  ${e=>e.theme.fonts.Default}
  line-height: 16px;
  padding-left: 14px;
  padding-right: 8px;
  color: ${e=>e.theme.colors.elementsContentMain};
  position: relative;
  display: inline-block;

  ${({$required:e,theme:t})=>e&&l`
      ${i} {
        &::before {
          content: "*";
          display: inline-block;
          color: ${t.colors.elementsHintDanger};
          position: absolute;
          top: 0;
          right: -4px;
          transform: translateX(100%);
        }
      }
    `}
`;a.__docgenInfo={description:"@design https://www.figma.com/design/JGFHYME2p7RpeMYcoMqooS/ODE-Library-1.0?node-id=7966-24427&t=zbZGBrco5ra09mre-4",methods:[],displayName:"FieldLabel",props:{$required:{required:!1,tsType:{name:"boolean"},description:`@default false
@description show pseudo element (*) with content text when true`},text:{required:!0,tsType:{name:"string"},description:"@description content text"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`@description other children content excludes content text
@include phrasing_content [source: mdn] https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#phrasing_content, tags like h3 are not allowed.`}},composes:["ComponentProps"]};export{a as F};
