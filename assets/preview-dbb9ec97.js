import{j as o}from"./jsx-runtime-94f6e698.js";import{c as t,p as s,G as l,n as c}from"./styled-components.browser.esm-655d472d.js";import{c as d}from"./colors-e320fa4b.js";import{f as p,b as x}from"./fonts-e4b8c4ab.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const r=(e=2)=>({overflow:"hidden",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:e,lineClamp:e}),u={row:{display:"flex",flexDirection:"row"},column:{display:"flex",flexDirection:"column"},center:{alignItems:"center",justifyContent:"center"}},m=t`
  display: flex;
  flex-direction: row;
`,h=t`
  display: flex;
  flex-direction: column;
`,g=t`
  align-items: center;
  justify-content: center;
`,f=t`
  align-items: center;
  justify-content: space-between;
`,b={row:m,column:h,center:g,between:f},y={position:"absolute",left:0,top:0,right:0,bottom:0,width:"100%",height:"100%"},k=t`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`,w=t`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`,v={width:"100vw",height:"100vh",minWidth:800,minHeight:600},S=`
  width: 100vw;
  height: 100vh;
  min-width: 800px;
  min-height: 600px;
`,T=t`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,a=t`
  position: relative;

  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    right: 5px;
    bottom: 5px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background: transparent;
    transition: all 0.2s ease;
  }

  &:hover {
    &::-webkit-scrollbar-thumb {
      background: ${e=>e.theme.colors.elementsGridBorder};
    }
  }
`,A=t`
  ${a}

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  &:hover {
    &::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }
  }
`,C={flex:u,flexCSS:b,absoluteFill:y,absoluteFillCSS:k,fixedFill:w,minDesktopFullSize:v,minDesktopFullSizeCSS:S,ellipsis:T,ellipsisLineTwo:r(),ellipsisLineThree:r(3),ellipsisLineFour:r(4),scrollbar:a,scrollbarWithoutWidth:A};s.div`
  flex: 1;
`;const P={padding_xs:"4px",padding_s:"6px",padding_m:"8px",padding_l:"12px",padding_xl:"16px",padding_xxl:"24px",padding_xxxl:"36px",radius_xs:"4px",radius_s:"6px",radius_m:"8px",radius_l:"16px",radius_xl:"36px"},R={xxxxs:4,xxxs:6,xxs:8,xs:12,s:16,m:20,l:24,xl:32,xxl:36,xxxl:40,xxxxl:48},L={xxxxs:4,xxxs:6,xxs:8,xs:12,s:16,m:20,l:24,xl:32,xxl:36,xxxl:40,xxxxl:48},_={xs:12,s:16,m:20,l:24,xl:32,xxl:36,xxxl:40,xxxxl:48},z=20,M=21,O=99,D=100,F={dymenu_base:10},I={dropdownZIndex:M,navbar:z,mask:O,modal:D,...F},H={xs:"500px",s:"812px",m:"1024px",l:"1366px",xl:"1920px",xs_n:500,s_n:812,m_n:1024,l_n:1366,xl_n:1920},j={border:"none",outline:"none",background:"transparent",margin:0,padding:0,flexShrink:0,userSelect:"none"},E={reset:j},B={duration:"80ms",longDuration:"200ms",longEffect:"ease-out"},U={fonts:p,fontBold:x,colors:d,zIndexes:I,spacing:P,...C,padding:R,radius:L,size:_,screenBreakpoints:H,button:E,animation:B};function W(e){var i=Object.create(null);return function(n){return i[n]===void 0&&(i[n]=e(n)),i[n]}}var V=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,q=W(function(e){return V.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});const J={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/},exclude:["forwardedAs","as","ref"]}}},Q=[e=>o.jsx(l,{shouldForwardProp:X,enableVendorPrefixes:!0,children:o.jsx(c,{theme:U,children:o.jsx(e,{})})})];function X(e,i){return typeof i=="string"?q(e):!0}export{Q as decorators,J as default};
//# sourceMappingURL=preview-dbb9ec97.js.map
