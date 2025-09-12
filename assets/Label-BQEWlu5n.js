import{j as t,l,d as n}from"./iframe-D12yBJYT.js";const a=e=>{const{text:o,children:s,...i}=e;return t.jsxs(c,{...i,children:[!!o&&t.jsx(r,{children:o}),s]})},r=n.span`
  position: relative;
`,c=n.label`
  ${e=>e.theme.fonts["Caption-Large/Bold"]}
  color: ${e=>e.theme.colors.noColor.Grey14};
  position: relative;
  display: inline-block;

  ${({$required:e,theme:o})=>e&&l`
      ${r} {
        &::before {
          content: "*";
          display: inline-block;
          color: ${o.colors.baseColor.Volcano5};
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
