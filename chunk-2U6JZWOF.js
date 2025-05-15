import{a as h2,f as z2}from"./chunk-OOLTIWIT.js";import{Aa as a2,Ba as A,Fa as W,Ga as n2,Ha as t2,I as u1,J as K1,Ma as Q,Na as p1,O as J1,Oa as i2,Pa as o2,Qa as c1,Ra as e1,Sa as s2,T as J,Ta as l2,Va as r2,Wa as f2,Xa as m2,ba as Q1,ua as c2,va as e2,xa as v1}from"./chunk-ZESRIEM5.js";function O3(c,e,a){return(e=E3(e))in c?Object.defineProperty(c,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):c[e]=a,c}function u2(c,e){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(c);e&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(c,t).enumerable})),a.push.apply(a,n)}return a}function s(c){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?u2(Object(a),!0).forEach(function(n){O3(c,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(a)):u2(Object(a)).forEach(function(n){Object.defineProperty(c,n,Object.getOwnPropertyDescriptor(a,n))})}return c}function F3(c,e){if(typeof c!="object"||!c)return c;var a=c[Symbol.toPrimitive];if(a!==void 0){var n=a.call(c,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(c)}function E3(c){var e=F3(c,"string");return typeof e=="symbol"?e:e+""}var v2=()=>{},T1={},_2={},R2=null,j2={mark:v2,measure:v2};try{typeof window<"u"&&(T1=window),typeof document<"u"&&(_2=document),typeof MutationObserver<"u"&&(R2=MutationObserver),typeof performance<"u"&&(j2=performance)}catch{}var{userAgent:p2=""}=T1.navigator||{},w=T1,v=_2,d2=R2,a1=j2,J5=!!w.document,y=!!v.documentElement&&!!v.head&&typeof v.addEventListener=="function"&&typeof v.createElement=="function",W2=~p2.indexOf("MSIE")||~p2.indexOf("Trident/"),Z3=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,q3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,G2={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},T3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},B2=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],p="classic",l1="duotone",D3="sharp",_3="sharp-duotone",Y2=[p,l1,D3,_3],R3={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},j3={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},W3=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),G3={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},B3=["fak","fa-kit","fakd","fa-kit-duotone"],C2={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Y3=["kit"],U3={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},$3=["fak","fakd"],X3={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},M2={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},n1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},K3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],J3=["fak","fa-kit","fakd","fa-kit-duotone"],Q3={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},c4={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},e4={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},g1={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},a4=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],L1=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...K3,...a4],n4=["solid","regular","light","thin","duotone","brands"],U2=[1,2,3,4,5,6,7,8,9,10],t4=U2.concat([11,12,13,14,15,16,17,18,19,20]),i4=[...Object.keys(e4),...n4,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",n1.GROUP,n1.SWAP_OPACITY,n1.PRIMARY,n1.SECONDARY].concat(U2.map(c=>"".concat(c,"x"))).concat(t4.map(c=>"w-".concat(c))),o4={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},V="___FONT_AWESOME___",x1=16,$2="fa",X2="svg-inline--fa",E="data-fa-i2svg",V1="data-fa-pseudo-element",s4="data-fa-pseudo-element-pending",D1="data-prefix",_1="data-icon",b2="fontawesome-i2svg",l4="async",r4=["HTML","HEAD","STYLE","SCRIPT"],K2=(()=>{try{return!0}catch{return!1}})();function X(c){return new Proxy(c,{get(e,a){return a in e?e[a]:e[p]}})}var J2=s({},G2);J2[p]=s(s(s(s({},{"fa-duotone":"duotone"}),G2[p]),C2.kit),C2["kit-duotone"]);var f4=X(J2),N1=s({},G3);N1[p]=s(s(s(s({},{duotone:"fad"}),N1[p]),M2.kit),M2["kit-duotone"]);var H2=X(N1),y1=s({},g1);y1[p]=s(s({},y1[p]),X3.kit);var R1=X(y1),S1=s({},c4);S1[p]=s(s({},S1[p]),U3.kit);var Q5=X(S1),m4=Z3,Q2="fa-layers-text",h4=q3,z4=s({},R3),c6=X(z4),u4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],d1=T3,v4=[...Y3,...i4],B=w.FontAwesomeConfig||{};function p4(c){var e=v.querySelector("script["+c+"]");if(e)return e.getAttribute(c)}function d4(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}v&&typeof v.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[a,n]=e,t=d4(p4(a));t!=null&&(B[n]=t)});var c3={styleDefault:"solid",familyDefault:p,cssPrefix:$2,replacementClass:X2,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};B.familyPrefix&&(B.cssPrefix=B.familyPrefix);var R=s(s({},c3),B);R.autoReplaceSvg||(R.observeMutations=!1);var r={};Object.keys(c3).forEach(c=>{Object.defineProperty(r,c,{enumerable:!0,set:function(e){R[c]=e,Y.forEach(a=>a(r))},get:function(){return R[c]}})});Object.defineProperty(r,"familyPrefix",{enumerable:!0,set:function(c){R.cssPrefix=c,Y.forEach(e=>e(r))},get:function(){return R.cssPrefix}});w.FontAwesomeConfig=r;var Y=[];function C4(c){return Y.push(c),()=>{Y.splice(Y.indexOf(c),1)}}var k=x1,g={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function M4(c){if(!c||!y)return;let e=v.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=c;let a=v.head.childNodes,n=null;for(let t=a.length-1;t>-1;t--){let i=a[t],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(n=i)}return v.head.insertBefore(e,n),c}var b4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function U(){let c=12,e="";for(;c-- >0;)e+=b4[Math.random()*62|0];return e}function j(c){let e=[];for(let a=(c||[]).length>>>0;a--;)e[a]=c[a];return e}function j1(c){return c.classList?j(c.classList):(c.getAttribute("class")||"").split(" ").filter(e=>e)}function e3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function H4(c){return Object.keys(c||{}).reduce((e,a)=>e+"".concat(a,'="').concat(e3(c[a]),'" '),"").trim()}function r1(c){return Object.keys(c||{}).reduce((e,a)=>e+"".concat(a,": ").concat(c[a].trim(),";"),"")}function W1(c){return c.size!==g.size||c.x!==g.x||c.y!==g.y||c.rotate!==g.rotate||c.flipX||c.flipY}function g4(c){let{transform:e,containerWidth:a,iconWidth:n}=c,t={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),m={transform:"".concat(i," ").concat(o," ").concat(l)},f={transform:"translate(".concat(n/2*-1," -256)")};return{outer:t,inner:m,path:f}}function L4(c){let{transform:e,width:a=x1,height:n=x1,startCentered:t=!1}=c,i="";return t&&W2?i+="translate(".concat(e.x/k-a/2,"em, ").concat(e.y/k-n/2,"em) "):t?i+="translate(calc(-50% + ".concat(e.x/k,"em), calc(-50% + ").concat(e.y/k,"em)) "):i+="translate(".concat(e.x/k,"em, ").concat(e.y/k,"em) "),i+="scale(".concat(e.size/k*(e.flipX?-1:1),", ").concat(e.size/k*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var x4=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function a3(){let c=$2,e=X2,a=r.cssPrefix,n=r.replacementClass,t=x4;if(a!==c||n!==e){let i=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");t=t.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(l,".".concat(n))}return t}var g2=!1;function C1(){r.autoAddCss&&!g2&&(M4(a3()),g2=!0)}var V4={mixout(){return{dom:{css:a3,insertCss:C1}}},hooks(){return{beforeDOMElementCreation(){C1()},beforeI2svg(){C1()}}}},N=w||{};N[V]||(N[V]={});N[V].styles||(N[V].styles={});N[V].hooks||(N[V].hooks={});N[V].shims||(N[V].shims=[]);var L=N[V],n3=[],t3=function(){v.removeEventListener("DOMContentLoaded",t3),o1=1,n3.map(c=>c())},o1=!1;y&&(o1=(v.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(v.readyState),o1||v.addEventListener("DOMContentLoaded",t3));function N4(c){y&&(o1?setTimeout(c,0):n3.push(c))}function K(c){let{tag:e,attributes:a={},children:n=[]}=c;return typeof c=="string"?e3(c):"<".concat(e," ").concat(H4(a),">").concat(n.map(K).join(""),"</").concat(e,">")}function L2(c,e,a){if(c&&c[e]&&c[e][a])return{prefix:e,iconName:a,icon:c[e][a]}}var y4=function(e,a){return function(n,t,i,o){return e.call(a,n,t,i,o)}},M1=function(e,a,n,t){var i=Object.keys(e),o=i.length,l=t!==void 0?y4(a,t):a,m,f,h;for(n===void 0?(m=1,h=e[i[0]]):(m=0,h=n);m<o;m++)f=i[m],h=l(h,e[f],f,e);return h};function S4(c){let e=[],a=0,n=c.length;for(;a<n;){let t=c.charCodeAt(a++);if(t>=55296&&t<=56319&&a<n){let i=c.charCodeAt(a++);(i&64512)==56320?e.push(((t&1023)<<10)+(i&1023)+65536):(e.push(t),a--)}else e.push(t)}return e}function A1(c){let e=S4(c);return e.length===1?e[0].toString(16):null}function A4(c,e){let a=c.length,n=c.charCodeAt(e),t;return n>=55296&&n<=56319&&a>e+1&&(t=c.charCodeAt(e+1),t>=56320&&t<=57343)?(n-55296)*1024+t-56320+65536:n}function x2(c){return Object.keys(c).reduce((e,a)=>{let n=c[a];return!!n.icon?e[n.iconName]=n.icon:e[a]=n,e},{})}function k1(c,e){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:n=!1}=a,t=x2(e);typeof L.hooks.addPack=="function"&&!n?L.hooks.addPack(c,x2(e)):L.styles[c]=s(s({},L.styles[c]||{}),t),c==="fas"&&k1("fa",e)}var{styles:$,shims:k4}=L,i3=Object.keys(R1),w4=i3.reduce((c,e)=>(c[e]=Object.keys(R1[e]),c),{}),G1=null,o3={},s3={},l3={},r3={},f3={};function P4(c){return~v4.indexOf(c)}function I4(c,e){let a=e.split("-"),n=a[0],t=a.slice(1).join("-");return n===c&&t!==""&&!P4(t)?t:null}var m3=()=>{let c=n=>M1($,(t,i,o)=>(t[o]=M1(i,n,{}),t),{});o3=c((n,t,i)=>(t[3]&&(n[t[3]]=i),t[2]&&t[2].filter(l=>typeof l=="number").forEach(l=>{n[l.toString(16)]=i}),n)),s3=c((n,t,i)=>(n[i]=i,t[2]&&t[2].filter(l=>typeof l=="string").forEach(l=>{n[l]=i}),n)),f3=c((n,t,i)=>{let o=t[2];return n[i]=i,o.forEach(l=>{n[l]=i}),n});let e="far"in $||r.autoFetchSvg,a=M1(k4,(n,t)=>{let i=t[0],o=t[1],l=t[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(n.names[i]={prefix:o,iconName:l}),typeof i=="number"&&(n.unicodes[i.toString(16)]={prefix:o,iconName:l}),n},{names:{},unicodes:{}});l3=a.names,r3=a.unicodes,G1=f1(r.styleDefault,{family:r.familyDefault})};C4(c=>{G1=f1(c.styleDefault,{family:r.familyDefault})});m3();function B1(c,e){return(o3[c]||{})[e]}function O4(c,e){return(s3[c]||{})[e]}function F(c,e){return(f3[c]||{})[e]}function h3(c){return l3[c]||{prefix:null,iconName:null}}function F4(c){let e=r3[c],a=B1("fas",c);return e||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function P(){return G1}var z3=()=>({prefix:null,iconName:null,rest:[]});function E4(c){let e=p,a=i3.reduce((n,t)=>(n[t]="".concat(r.cssPrefix,"-").concat(t),n),{});return Y2.forEach(n=>{(c.includes(a[n])||c.some(t=>w4[n].includes(t)))&&(e=n)}),e}function f1(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:a=p}=e,n=f4[a][c];if(a===l1&&!c)return"fad";let t=H2[a][c]||H2[a][n],i=c in L.styles?c:null;return t||i||null}function Z4(c){let e=[],a=null;return c.forEach(n=>{let t=I4(r.cssPrefix,n);t?a=t:n&&e.push(n)}),{iconName:a,rest:e}}function V2(c){return c.sort().filter((e,a,n)=>n.indexOf(e)===a)}function m1(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:a=!1}=e,n=null,t=L1.concat(J3),i=V2(c.filter(u=>t.includes(u))),o=V2(c.filter(u=>!L1.includes(u))),l=i.filter(u=>(n=u,!B2.includes(u))),[m=null]=l,f=E4(i),h=s(s({},Z4(o)),{},{prefix:f1(m,{family:f})});return s(s(s({},h),_4({values:c,family:f,styles:$,config:r,canonical:h,givenPrefix:n})),q4(a,n,h))}function q4(c,e,a){let{prefix:n,iconName:t}=a;if(c||!n||!t)return{prefix:n,iconName:t};let i=e==="fa"?h3(t):{},o=F(n,t);return t=i.iconName||o||t,n=i.prefix||n,n==="far"&&!$.far&&$.fas&&!r.autoFetchSvg&&(n="fas"),{prefix:n,iconName:t}}var T4=Y2.filter(c=>c!==p||c!==l1),D4=Object.keys(g1).filter(c=>c!==p).map(c=>Object.keys(g1[c])).flat();function _4(c){let{values:e,family:a,canonical:n,givenPrefix:t="",styles:i={},config:o={}}=c,l=a===l1,m=e.includes("fa-duotone")||e.includes("fad"),f=o.familyDefault==="duotone",h=n.prefix==="fad"||n.prefix==="fa-duotone";if(!l&&(m||f||h)&&(n.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(n.prefix="fab"),!n.prefix&&T4.includes(a)&&(Object.keys(i).find(z=>D4.includes(z))||o.autoFetchSvg)){let z=W3.get(a).defaultShortPrefixId;n.prefix=z,n.iconName=F(n.prefix,n.iconName)||n.iconName}return(n.prefix==="fa"||t==="fa")&&(n.prefix=P()||"fas"),n}var w1=class{constructor(){this.definitions={}}add(){for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];let t=a.reduce(this._pullDefinitions,{});Object.keys(t).forEach(i=>{this.definitions[i]=s(s({},this.definitions[i]||{}),t[i]),k1(i,t[i]);let o=R1[p][i];o&&k1(o,t[i]),m3()})}reset(){this.definitions={}}_pullDefinitions(e,a){let n=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(n).map(t=>{let{prefix:i,iconName:o,icon:l}=n[t],m=l[2];e[i]||(e[i]={}),m.length>0&&m.forEach(f=>{typeof f=="string"&&(e[i][f]=l)}),e[i][o]=l}),e}},N2=[],D={},_={},R4=Object.keys(_);function j4(c,e){let{mixoutsTo:a}=e;return N2=c,D={},Object.keys(_).forEach(n=>{R4.indexOf(n)===-1&&delete _[n]}),N2.forEach(n=>{let t=n.mixout?n.mixout():{};if(Object.keys(t).forEach(i=>{typeof t[i]=="function"&&(a[i]=t[i]),typeof t[i]=="object"&&Object.keys(t[i]).forEach(o=>{a[i]||(a[i]={}),a[i][o]=t[i][o]})}),n.hooks){let i=n.hooks();Object.keys(i).forEach(o=>{D[o]||(D[o]=[]),D[o].push(i[o])})}n.provides&&n.provides(_)}),a}function P1(c,e){for(var a=arguments.length,n=new Array(a>2?a-2:0),t=2;t<a;t++)n[t-2]=arguments[t];return(D[c]||[]).forEach(o=>{e=o.apply(null,[e,...n])}),e}function Z(c){for(var e=arguments.length,a=new Array(e>1?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n];(D[c]||[]).forEach(i=>{i.apply(null,a)})}function I(){let c=arguments[0],e=Array.prototype.slice.call(arguments,1);return _[c]?_[c].apply(null,e):void 0}function I1(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:e}=c,a=c.prefix||P();if(e)return e=F(a,e)||e,L2(u3.definitions,a,e)||L2(L.styles,a,e)}var u3=new w1,W4=()=>{r.autoReplaceSvg=!1,r.observeMutations=!1,Z("noAuto")},G4={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return y?(Z("beforeI2svg",c),I("pseudoElements2svg",c),I("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e}=c;r.autoReplaceSvg===!1&&(r.autoReplaceSvg=!0),r.observeMutations=!0,N4(()=>{Y4({autoReplaceSvgRoot:e}),Z("watch",c)})}},B4={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:F(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let e=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],a=f1(c[0]);return{prefix:a,iconName:F(a,e)||e}}if(typeof c=="string"&&(c.indexOf("".concat(r.cssPrefix,"-"))>-1||c.match(m4))){let e=m1(c.split(" "),{skipLookups:!0});return{prefix:e.prefix||P(),iconName:F(e.prefix,e.iconName)||e.iconName}}if(typeof c=="string"){let e=P();return{prefix:e,iconName:F(e,c)||c}}}},M={noAuto:W4,config:r,dom:G4,parse:B4,library:u3,findIconDefinition:I1,toHtml:K},Y4=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e=v}=c;(Object.keys(L.styles).length>0||r.autoFetchSvg)&&y&&r.autoReplaceSvg&&M.dom.i2svg({node:e})};function h1(c,e){return Object.defineProperty(c,"abstract",{get:e}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(a=>K(a))}}),Object.defineProperty(c,"node",{get:function(){if(!y)return;let a=v.createElement("div");return a.innerHTML=c.html,a.children}}),c}function U4(c){let{children:e,main:a,mask:n,attributes:t,styles:i,transform:o}=c;if(W1(o)&&a.found&&!n.found){let{width:l,height:m}=a,f={x:l/m/2,y:.5};t.style=r1(s(s({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:t,children:e}]}function $4(c){let{prefix:e,iconName:a,children:n,attributes:t,symbol:i}=c,o=i===!0?"".concat(e,"-").concat(r.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:s(s({},t),{},{id:o}),children:n}]}]}function Y1(c){let{icons:{main:e,mask:a},prefix:n,iconName:t,transform:i,symbol:o,title:l,maskId:m,titleId:f,extra:h,watchable:u=!1}=c,{width:z,height:d}=a.found?a:e,S=$3.includes(n),O=[r.replacementClass,t?"".concat(r.cssPrefix,"-").concat(t):""].filter(T=>h.classes.indexOf(T)===-1).filter(T=>T!==""||!!T).concat(h.classes).join(" "),b={children:[],attributes:s(s({},h.attributes),{},{"data-prefix":n,"data-icon":t,class:O,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(z," ").concat(d)})},x=S&&!~h.classes.indexOf("fa-fw")?{width:"".concat(z/d*16*.0625,"em")}:{};u&&(b.attributes[E]=""),l&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(f||U())},children:[l]}),delete b.attributes.title);let C=s(s({},b),{},{prefix:n,iconName:t,main:e,mask:a,maskId:m,transform:i,symbol:o,styles:s(s({},x),h.styles)}),{children:H,attributes:q}=a.found&&e.found?I("generateAbstractMask",C)||{children:[],attributes:{}}:I("generateAbstractIcon",C)||{children:[],attributes:{}};return C.children=H,C.attributes=q,o?$4(C):U4(C)}function y2(c){let{content:e,width:a,height:n,transform:t,title:i,extra:o,watchable:l=!1}=c,m=s(s(s({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(m[E]="");let f=s({},o.styles);W1(t)&&(f.transform=L4({transform:t,startCentered:!0,width:a,height:n}),f["-webkit-transform"]=f.transform);let h=r1(f);h.length>0&&(m.style=h);let u=[];return u.push({tag:"span",attributes:m,children:[e]}),i&&u.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),u}function X4(c){let{content:e,title:a,extra:n}=c,t=s(s(s({},n.attributes),a?{title:a}:{}),{},{class:n.classes.join(" ")}),i=r1(n.styles);i.length>0&&(t.style=i);let o=[];return o.push({tag:"span",attributes:t,children:[e]}),a&&o.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),o}var{styles:b1}=L;function O1(c){let e=c[0],a=c[1],[n]=c.slice(4),t=null;return Array.isArray(n)?t={tag:"g",attributes:{class:"".concat(r.cssPrefix,"-").concat(d1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(r.cssPrefix,"-").concat(d1.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(r.cssPrefix,"-").concat(d1.PRIMARY),fill:"currentColor",d:n[1]}}]}:t={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:e,height:a,icon:t}}var K4={found:!1,width:512,height:512};function J4(c,e){!K2&&!r.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(e,'" is missing.'))}function F1(c,e){let a=e;return e==="fa"&&r.styleDefault!==null&&(e=P()),new Promise((n,t)=>{if(a==="fa"){let i=h3(c)||{};c=i.iconName||c,e=i.prefix||e}if(c&&e&&b1[e]&&b1[e][c]){let i=b1[e][c];return n(O1(i))}J4(c,e),n(s(s({},K4),{},{icon:r.showMissingIcons&&c?I("missingIconAbstract")||{}:{}}))})}var S2=()=>{},E1=r.measurePerformance&&a1&&a1.mark&&a1.measure?a1:{mark:S2,measure:S2},G='FA "6.7.2"',Q4=c=>(E1.mark("".concat(G," ").concat(c," begins")),()=>v3(c)),v3=c=>{E1.mark("".concat(G," ").concat(c," ends")),E1.measure("".concat(G," ").concat(c),"".concat(G," ").concat(c," begins"),"".concat(G," ").concat(c," ends"))},U1={begin:Q4,end:v3},t1=()=>{};function A2(c){return typeof(c.getAttribute?c.getAttribute(E):null)=="string"}function c5(c){let e=c.getAttribute?c.getAttribute(D1):null,a=c.getAttribute?c.getAttribute(_1):null;return e&&a}function e5(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(r.replacementClass)}function a5(){return r.autoReplaceSvg===!0?i1.replace:i1[r.autoReplaceSvg]||i1.replace}function n5(c){return v.createElementNS("http://www.w3.org/2000/svg",c)}function t5(c){return v.createElement(c)}function p3(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:a=c.tag==="svg"?n5:t5}=e;if(typeof c=="string")return v.createTextNode(c);let n=a(c.tag);return Object.keys(c.attributes||[]).forEach(function(i){n.setAttribute(i,c.attributes[i])}),(c.children||[]).forEach(function(i){n.appendChild(p3(i,{ceFn:a}))}),n}function i5(c){let e=" ".concat(c.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var i1={replace:function(c){let e=c[0];if(e.parentNode)if(c[1].forEach(a=>{e.parentNode.insertBefore(p3(a),e)}),e.getAttribute(E)===null&&r.keepOriginalSource){let a=v.createComment(i5(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(c){let e=c[0],a=c[1];if(~j1(e).indexOf(r.replacementClass))return i1.replace(c);let n=new RegExp("".concat(r.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){let i=a[0].attributes.class.split(" ").reduce((o,l)=>(l===r.replacementClass||l.match(n)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}let t=a.map(i=>K(i)).join(`
`);e.setAttribute(E,""),e.innerHTML=t}};function k2(c){c()}function d3(c,e){let a=typeof e=="function"?e:t1;if(c.length===0)a();else{let n=k2;r.mutateApproach===l4&&(n=w.requestAnimationFrame||k2),n(()=>{let t=a5(),i=U1.begin("mutate");c.map(t),i(),a()})}}var $1=!1;function C3(){$1=!0}function Z1(){$1=!1}var s1=null;function w2(c){if(!d2||!r.observeMutations)return;let{treeCallback:e=t1,nodeCallback:a=t1,pseudoElementsCallback:n=t1,observeMutationsRoot:t=v}=c;s1=new d2(i=>{if($1)return;let o=P();j(i).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!A2(l.addedNodes[0])&&(r.searchPseudoElements&&n(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&r.searchPseudoElements&&n(l.target.parentNode),l.type==="attributes"&&A2(l.target)&&~u4.indexOf(l.attributeName))if(l.attributeName==="class"&&c5(l.target)){let{prefix:m,iconName:f}=m1(j1(l.target));l.target.setAttribute(D1,m||o),f&&l.target.setAttribute(_1,f)}else e5(l.target)&&a(l.target)})}),y&&s1.observe(t,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function o5(){s1&&s1.disconnect()}function s5(c){let e=c.getAttribute("style"),a=[];return e&&(a=e.split(";").reduce((n,t)=>{let i=t.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(n[o]=l.join(":").trim()),n},{})),a}function l5(c){let e=c.getAttribute("data-prefix"),a=c.getAttribute("data-icon"),n=c.innerText!==void 0?c.innerText.trim():"",t=m1(j1(c));return t.prefix||(t.prefix=P()),e&&a&&(t.prefix=e,t.iconName=a),t.iconName&&t.prefix||(t.prefix&&n.length>0&&(t.iconName=O4(t.prefix,c.innerText)||B1(t.prefix,A1(c.innerText))),!t.iconName&&r.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(t.iconName=c.firstChild.data)),t}function r5(c){let e=j(c.attributes).reduce((t,i)=>(t.name!=="class"&&t.name!=="style"&&(t[i.name]=i.value),t),{}),a=c.getAttribute("title"),n=c.getAttribute("data-fa-title-id");return r.autoA11y&&(a?e["aria-labelledby"]="".concat(r.replacementClass,"-title-").concat(n||U()):(e["aria-hidden"]="true",e.focusable="false")),e}function f5(){return{iconName:null,title:null,titleId:null,prefix:null,transform:g,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function P2(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:a,prefix:n,rest:t}=l5(c),i=r5(c),o=P1("parseNodeAttributes",{},c),l=e.styleParser?s5(c):[];return s({iconName:a,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:n,transform:g,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:t,styles:l,attributes:i}},o)}var{styles:m5}=L;function M3(c){let e=r.autoReplaceSvg==="nest"?P2(c,{styleParser:!1}):P2(c);return~e.extra.classes.indexOf(Q2)?I("generateLayersText",c,e):I("generateSvgReplacementMutation",c,e)}function h5(){return[...B3,...L1]}function I2(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!y)return Promise.resolve();let a=v.documentElement.classList,n=h=>a.add("".concat(b2,"-").concat(h)),t=h=>a.remove("".concat(b2,"-").concat(h)),i=r.autoFetchSvg?h5():B2.concat(Object.keys(m5));i.includes("fa")||i.push("fa");let o=[".".concat(Q2,":not([").concat(E,"])")].concat(i.map(h=>".".concat(h,":not([").concat(E,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=j(c.querySelectorAll(o))}catch{}if(l.length>0)n("pending"),t("complete");else return Promise.resolve();let m=U1.begin("onTree"),f=l.reduce((h,u)=>{try{let z=M3(u);z&&h.push(z)}catch(z){K2||z.name==="MissingIcon"&&console.error(z)}return h},[]);return new Promise((h,u)=>{Promise.all(f).then(z=>{d3(z,()=>{n("active"),n("complete"),t("pending"),typeof e=="function"&&e(),m(),h()})}).catch(z=>{m(),u(z)})})}function z5(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;M3(c).then(a=>{a&&d3([a],e)})}function u5(c){return function(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(e||{}).icon?e:I1(e||{}),{mask:t}=a;return t&&(t=(t||{}).icon?t:I1(t||{})),c(n,s(s({},a),{},{mask:t}))}}var v5=function(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:a=g,symbol:n=!1,mask:t=null,maskId:i=null,title:o=null,titleId:l=null,classes:m=[],attributes:f={},styles:h={}}=e;if(!c)return;let{prefix:u,iconName:z,icon:d}=c;return h1(s({type:"icon"},c),()=>(Z("beforeDOMElementCreation",{iconDefinition:c,params:e}),r.autoA11y&&(o?f["aria-labelledby"]="".concat(r.replacementClass,"-title-").concat(l||U()):(f["aria-hidden"]="true",f.focusable="false")),Y1({icons:{main:O1(d),mask:t?O1(t.icon):{found:!1,width:null,height:null,icon:{}}},prefix:u,iconName:z,transform:s(s({},g),a),symbol:n,title:o,maskId:i,titleId:l,extra:{attributes:f,styles:h,classes:m}})))},p5={mixout(){return{icon:u5(v5)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=I2,c.nodeCallback=z5,c}}},provides(c){c.i2svg=function(e){let{node:a=v,callback:n=()=>{}}=e;return I2(a,n)},c.generateSvgReplacementMutation=function(e,a){let{iconName:n,title:t,titleId:i,prefix:o,transform:l,symbol:m,mask:f,maskId:h,extra:u}=a;return new Promise((z,d)=>{Promise.all([F1(n,o),f.iconName?F1(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(S=>{let[O,b]=S;z([e,Y1({icons:{main:O,mask:b},prefix:o,iconName:n,transform:l,symbol:m,maskId:h,title:t,titleId:i,extra:u,watchable:!0})])}).catch(d)})},c.generateAbstractIcon=function(e){let{children:a,attributes:n,main:t,transform:i,styles:o}=e,l=r1(o);l.length>0&&(n.style=l);let m;return W1(i)&&(m=I("generateAbstractTransformGrouping",{main:t,transform:i,containerWidth:t.width,iconWidth:t.width})),a.push(m||t.icon),{children:a,attributes:n}}}},d5={mixout(){return{layer(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:a=[]}=e;return h1({type:"layer"},()=>{Z("beforeDOMElementCreation",{assembler:c,params:e});let n=[];return c(t=>{Array.isArray(t)?t.map(i=>{n=n.concat(i.abstract)}):n=n.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(r.cssPrefix,"-layers"),...a].join(" ")},children:n}]})}}}},C5={mixout(){return{counter(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:a=null,classes:n=[],attributes:t={},styles:i={}}=e;return h1({type:"counter",content:c},()=>(Z("beforeDOMElementCreation",{content:c,params:e}),X4({content:c.toString(),title:a,extra:{attributes:t,styles:i,classes:["".concat(r.cssPrefix,"-layers-counter"),...n]}})))}}}},M5={mixout(){return{text(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:a=g,title:n=null,classes:t=[],attributes:i={},styles:o={}}=e;return h1({type:"text",content:c},()=>(Z("beforeDOMElementCreation",{content:c,params:e}),y2({content:c,transform:s(s({},g),a),title:n,extra:{attributes:i,styles:o,classes:["".concat(r.cssPrefix,"-layers-text"),...t]}})))}}},provides(c){c.generateLayersText=function(e,a){let{title:n,transform:t,extra:i}=a,o=null,l=null;if(W2){let m=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();o=f.width/m,l=f.height/m}return r.autoA11y&&!n&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,y2({content:e.innerHTML,width:o,height:l,transform:t,title:n,extra:i,watchable:!0})])}}},b5=new RegExp('"',"ug"),O2=[1105920,1112319],F2=s(s(s(s({},{FontAwesome:{normal:"fas",400:"fas"}}),j3),o4),Q3),q1=Object.keys(F2).reduce((c,e)=>(c[e.toLowerCase()]=F2[e],c),{}),H5=Object.keys(q1).reduce((c,e)=>{let a=q1[e];return c[e]=a[900]||[...Object.entries(a)][0][1],c},{});function g5(c){let e=c.replace(b5,""),a=A4(e,0),n=a>=O2[0]&&a<=O2[1],t=e.length===2?e[0]===e[1]:!1;return{value:A1(t?e[0]:e),isSecondary:n||t}}function L5(c,e){let a=c.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(e),t=isNaN(n)?"normal":n;return(q1[a]||{})[t]||H5[a]}function E2(c,e){let a="".concat(s4).concat(e.replace(":","-"));return new Promise((n,t)=>{if(c.getAttribute(a)!==null)return n();let o=j(c.children).filter(z=>z.getAttribute(V1)===e)[0],l=w.getComputedStyle(c,e),m=l.getPropertyValue("font-family"),f=m.match(h4),h=l.getPropertyValue("font-weight"),u=l.getPropertyValue("content");if(o&&!f)return c.removeChild(o),n();if(f&&u!=="none"&&u!==""){let z=l.getPropertyValue("content"),d=L5(m,h),{value:S,isSecondary:O}=g5(z),b=f[0].startsWith("FontAwesome"),x=B1(d,S),C=x;if(b){let H=F4(S);H.iconName&&H.prefix&&(x=H.iconName,d=H.prefix)}if(x&&!O&&(!o||o.getAttribute(D1)!==d||o.getAttribute(_1)!==C)){c.setAttribute(a,C),o&&c.removeChild(o);let H=f5(),{extra:q}=H;q.attributes[V1]=e,F1(x,d).then(T=>{let P3=Y1(s(s({},H),{},{icons:{main:T,mask:z3()},prefix:d,iconName:C,extra:q,watchable:!0})),z1=v.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?c.insertBefore(z1,c.firstChild):c.appendChild(z1),z1.outerHTML=P3.map(I3=>K(I3)).join(`
`),c.removeAttribute(a),n()}).catch(t)}else n()}else n()})}function x5(c){return Promise.all([E2(c,"::before"),E2(c,"::after")])}function V5(c){return c.parentNode!==document.head&&!~r4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(V1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function Z2(c){if(y)return new Promise((e,a)=>{let n=j(c.querySelectorAll("*")).filter(V5).map(x5),t=U1.begin("searchPseudoElements");C3(),Promise.all(n).then(()=>{t(),Z1(),e()}).catch(()=>{t(),Z1(),a()})})}var N5={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=Z2,c}}},provides(c){c.pseudoElements2svg=function(e){let{node:a=v}=e;r.searchPseudoElements&&Z2(a)}}},q2=!1,y5={mixout(){return{dom:{unwatch(){C3(),q2=!0}}}},hooks(){return{bootstrap(){w2(P1("mutationObserverCallbacks",{}))},noAuto(){o5()},watch(c){let{observeMutationsRoot:e}=c;q2?Z1():w2(P1("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},T2=c=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((a,n)=>{let t=n.toLowerCase().split("-"),i=t[0],o=t.slice(1).join("-");if(i&&o==="h")return a.flipX=!0,a;if(i&&o==="v")return a.flipY=!0,a;if(o=parseFloat(o),isNaN(o))return a;switch(i){case"grow":a.size=a.size+o;break;case"shrink":a.size=a.size-o;break;case"left":a.x=a.x-o;break;case"right":a.x=a.x+o;break;case"up":a.y=a.y-o;break;case"down":a.y=a.y+o;break;case"rotate":a.rotate=a.rotate+o;break}return a},e)},S5={mixout(){return{parse:{transform:c=>T2(c)}}},hooks(){return{parseNodeAttributes(c,e){let a=e.getAttribute("data-fa-transform");return a&&(c.transform=T2(a)),c}}},provides(c){c.generateAbstractTransformGrouping=function(e){let{main:a,transform:n,containerWidth:t,iconWidth:i}=e,o={transform:"translate(".concat(t/2," 256)")},l="translate(".concat(n.x*32,", ").concat(n.y*32,") "),m="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),f="rotate(".concat(n.rotate," 0 0)"),h={transform:"".concat(l," ").concat(m," ").concat(f)},u={transform:"translate(".concat(i/2*-1," -256)")},z={outer:o,inner:h,path:u};return{tag:"g",attributes:s({},z.outer),children:[{tag:"g",attributes:s({},z.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:s(s({},a.icon.attributes),z.path)}]}]}}}},H1={x:0,y:0,width:"100%",height:"100%"};function D2(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||e)&&(c.attributes.fill="black"),c}function A5(c){return c.tag==="g"?c.children:[c]}var k5={hooks(){return{parseNodeAttributes(c,e){let a=e.getAttribute("data-fa-mask"),n=a?m1(a.split(" ").map(t=>t.trim())):z3();return n.prefix||(n.prefix=P()),c.mask=n,c.maskId=e.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(e){let{children:a,attributes:n,main:t,mask:i,maskId:o,transform:l}=e,{width:m,icon:f}=t,{width:h,icon:u}=i,z=g4({transform:l,containerWidth:h,iconWidth:m}),d={tag:"rect",attributes:s(s({},H1),{},{fill:"white"})},S=f.children?{children:f.children.map(D2)}:{},O={tag:"g",attributes:s({},z.inner),children:[D2(s({tag:f.tag,attributes:s(s({},f.attributes),z.path)},S))]},b={tag:"g",attributes:s({},z.outer),children:[O]},x="mask-".concat(o||U()),C="clip-".concat(o||U()),H={tag:"mask",attributes:s(s({},H1),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[d,b]},q={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:A5(u)},H]};return a.push(q,{tag:"rect",attributes:s({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(x,")")},H1)}),{children:a,attributes:n}}}},w5={provides(c){let e=!1;w.matchMedia&&(e=w.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let a=[],n={fill:"currentColor"},t={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:s(s({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let i=s(s({},t),{},{attributeName:"opacity"}),o={tag:"circle",attributes:s(s({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:s(s({},t),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:s(s({},i),{},{values:"1;0;1;1;0;1;"})}),a.push(o),a.push({tag:"path",attributes:s(s({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:s(s({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:s(s({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:s(s({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},P5={hooks(){return{parseNodeAttributes(c,e){let a=e.getAttribute("data-fa-symbol"),n=a===null?!1:a===""?!0:a;return c.symbol=n,c}}}},I5=[V4,p5,d5,C5,M5,N5,y5,S5,k5,w5,P5];j4(I5,{mixoutsTo:M});var e6=M.noAuto,b3=M.config,a6=M.library,H3=M.dom,g3=M.parse,n6=M.findIconDefinition,t6=M.toHtml,L3=M.icon,i6=M.layer,O5=M.text,F5=M.counter;var Z5=["*"],q5=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},T5=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},V3=c=>c!=null&&(c===90||c===180||c===270||c==="90"||c==="180"||c==="270"),D5=c=>{let e=V3(c.rotate),a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:e,"fa-rotate-by":c.rotate!=null&&!e,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(n=>a[n]?n:null).filter(n=>n)},X1=new WeakSet,x3="fa-auto-css";function _5(c,e){if(!e.autoAddCss||X1.has(c))return;if(c.getElementById(x3)!=null){e.autoAddCss=!1,X1.add(c);return}let a=c.createElement("style");a.setAttribute("type","text/css"),a.setAttribute("id",x3),a.innerHTML=H3.css();let n=c.head.childNodes,t=null;for(let i=n.length-1;i>-1;i--){let o=n[i],l=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(l)>-1&&(t=o)}c.head.insertBefore(a,t),e.autoAddCss=!1,X1.add(c)}var R5=c=>c.prefix!==void 0&&c.iconName!==void 0,j5=(c,e)=>R5(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:e,iconName:c},W5=(()=>{class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(a){b3.autoAddCss=a,this._autoAddCss=a}get autoAddCss(){return this._autoAddCss}static{this.\u0275fac=function(n){return new(n||c)}}static{this.\u0275prov=u1({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),G5=(()=>{class c{constructor(){this.definitions={}}addIcons(...a){for(let n of a){n.prefix in this.definitions||(this.definitions[n.prefix]={}),this.definitions[n.prefix][n.iconName]=n;for(let t of n.icon[2])typeof t=="string"&&(this.definitions[n.prefix][t]=n)}}addIconPacks(...a){for(let n of a){let t=Object.keys(n).map(i=>n[i]);this.addIcons(...t)}}getIconDefinition(a,n){return a in this.definitions&&n in this.definitions[a]?this.definitions[a][n]:null}static{this.\u0275fac=function(n){return new(n||c)}}static{this.\u0275prov=u1({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),B5=(()=>{class c{constructor(){this.stackItemSize="1x"}ngOnChanges(a){if("size"in a)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(n){return new(n||c)}}static{this.\u0275dir=t2({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},features:[J]})}}return c})(),Y5=(()=>{class c{constructor(a,n){this.renderer=a,this.elementRef=n}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(a){"size"in a&&(a.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${a.size.currentValue}`),a.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${a.size.previousValue}`))}static{this.\u0275fac=function(n){return new(n||c)(A(a2),A(Q1))}}static{this.\u0275cmp=W({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},features:[J],ngContentSelectors:Z5,decls:1,vars:0,template:function(n,t){n&1&&(r2(),f2(0))},encapsulation:2})}}return c})(),N3=(()=>{class c{constructor(a,n,t,i,o){this.sanitizer=a,this.config=n,this.iconLibrary=t,this.stackItem=i,this.document=J1(h2),o!=null&&i==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(a){if(this.icon==null&&this.config.fallbackIcon==null){T5();return}if(a){let n=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(n!=null){let t=this.buildParams();_5(this.document,this.config);let i=L3(n,t);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(i.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(a){let n=j5(a,this.config.defaultPrefix);if("icon"in n)return n;let t=this.iconLibrary.getIconDefinition(n.prefix,n.iconName);return t??(q5(n),null)}buildParams(){let a={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},n=typeof this.transform=="string"?g3.transform(this.transform):this.transform,t={};return a.rotate!=null&&!V3(a.rotate)&&(t["--fa-rotate-angle"]=`${a.rotate}`),{title:this.title,transform:n,classes:D5(a),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole},styles:t}}static{this.\u0275fac=function(n){return new(n||c)(A(z2),A(W5),A(G5),A(B5,8),A(Y5,8))}}static{this.\u0275cmp=W({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(n,t){n&2&&(l2("innerHTML",t.renderedIconHTML,c2),Q("title",t.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},features:[J],decls:0,vars:0,template:function(n,t){},encapsulation:2})}}return c})();var y3=(()=>{class c{static{this.\u0275fac=function(n){return new(n||c)}}static{this.\u0275mod=n2({type:c})}static{this.\u0275inj=K1({})}}return c})();var $5={prefix:"fab",iconName:"square-github",icon:[448,512,["github-square"],"f092","M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z"]},S3=$5;var A3={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]};var k3={prefix:"fab",iconName:"kaggle",icon:[320,512,[],"f5fa","M304.2 501.5L158.4 320.3 298.2 185c2.6-2.7 1.7-10.5-5.3-10.5h-69.2c-3.5 0-7 1.8-10.5 5.3L80.9 313.5V7.5q0-7.5-7.5-7.5H21.5Q14 0 14 7.5v497q0 7.5 7.5 7.5h51.9q7.5 0 7.5-7.5v-109l30.8-29.3 110.5 140.6c3 3.5 6.5 5.3 10.5 5.3h66.9q5.25 0 6-3z"]};var X5=(c,e)=>e.alt;function K5(c,e){if(c&1&&(c1(0,"a",2),s2(1,"fa-icon",3),e1()),c&2){let a=e.$implicit;p1("href",a.url,e2),v1(),p1("icon",a.icon)("size","3x"),Q("alt",a.alt)}}var w3=class c{contacts=[{icon:S3,alt:"GitHub icon",url:"https://github.com/Satoshi-Sh/"},{icon:k3,alt:"Kaggle icon",url:"https://www.kaggle.com/satoshiss"},{icon:A3,alt:"LinkedIn icon",url:"https://www.linkedin.com/in/satoshi-89bb58a8/"}];static \u0275fac=function(a){return new(a||c)};static \u0275cmp=W({type:c,selectors:[["app-contact"]],decls:6,vars:0,consts:[[1,"contact"],[1,"icons-div"],[3,"href"],[3,"icon","size"]],template:function(a,n){a&1&&(c1(0,"div",0)(1,"h1"),m2(2,"Contact"),e1(),c1(3,"div",1),i2(4,K5,2,4,"a",2,X5),e1()()),a&2&&(v1(4),o2(n.contacts))},dependencies:[y3,N3],styles:[".contact[_ngcontent-%COMP%]{margin:2rem;text-align:center}.icons-div[_ngcontent-%COMP%]{margin-top:5rem;width:10rem;margin-left:auto;margin-right:auto;display:grid;grid-template-columns:repeat(2,1fr);gap:2rem}.icons-div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000}.icons-div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:gray}"]})};export{w3 as ContactComponent};
