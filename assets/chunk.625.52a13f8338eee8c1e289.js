(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[625],{6381:function(t){(function(){var e,r,i,n,s,a
"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:"undefined"!=typeof process&&null!==process&&process.hrtime?(t.exports=function(){return(e()-s)/1e6},r=process.hrtime,n=(e=function(){var t
return 1e9*(t=r())[0]+t[1]})(),a=1e9*process.uptime(),s=n-a):Date.now?(t.exports=function(){return Date.now()-i},i=Date.now()):(t.exports=function(){return(new Date).getTime()-i},i=(new Date).getTime())}).call(this)},9152:(t,e,r)=>{for(var i=r(6381),n="undefined"==typeof window?global:window,s=["moz","webkit"],a="AnimationFrame",o=n["request"+a],u=n["cancel"+a]||n["cancelRequest"+a],h=0;!o&&h<s.length;h++)o=n[s[h]+"Request"+a],u=n[s[h]+"Cancel"+a]||n[s[h]+"CancelRequest"+a]
if(!o||!u){var c=0,l=0,f=[],p=1e3/60
o=function(t){if(0===f.length){var e=i(),r=Math.max(0,p-(e-c))
c=r+e,setTimeout((function(){var t=f.slice(0)
f.length=0
for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(c)}catch(t){setTimeout((function(){throw t}),0)}}),Math.round(r))}return f.push({handle:++l,callback:t,cancelled:!1}),l},u=function(t){for(var e=0;e<f.length;e++)f[e].handle===t&&(f[e].cancelled=!0)}}t.exports=function(t){return o.call(n,t)},t.exports.cancel=function(){u.apply(n,arguments)},t.exports.polyfill=function(t){t||(t=n),t.requestAnimationFrame=o,t.cancelAnimationFrame=u}},1925:t=>{t.exports=function(t){this.ok=!1,this.alpha=1,"#"==t.charAt(0)&&(t=t.substr(1,6)),t=(t=t.replace(/ /g,"")).toLowerCase()
var e={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dodgerblue:"1e90ff",feldspar:"d19275",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslateblue:"8470ff",lightslategray:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",violetred:"d02090",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"}
t=e[t]||t
for(var r=[{re:/^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,example:["rgba(123, 234, 45, 0.8)","rgba(255,234,245,1.0)"],process:function(t){return[parseInt(t[1]),parseInt(t[2]),parseInt(t[3]),parseFloat(t[4])]}},{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,example:["rgb(123, 234, 45)","rgb(255,234,245)"],process:function(t){return[parseInt(t[1]),parseInt(t[2]),parseInt(t[3])]}},{re:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,example:["#00ff00","336699"],process:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,example:["#fb0","f0f"],process:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}}],i=0;i<r.length;i++){var n=r[i].re,s=r[i].process,a=n.exec(t)
if(a){var o=s(a)
this.r=o[0],this.g=o[1],this.b=o[2],o.length>3&&(this.alpha=o[3]),this.ok=!0}}this.r=this.r<0||isNaN(this.r)?0:this.r>255?255:this.r,this.g=this.g<0||isNaN(this.g)?0:this.g>255?255:this.g,this.b=this.b<0||isNaN(this.b)?0:this.b>255?255:this.b,this.alpha=this.alpha<0?0:this.alpha>1||isNaN(this.alpha)?1:this.alpha,this.toRGB=function(){return"rgb("+this.r+", "+this.g+", "+this.b+")"},this.toRGBA=function(){return"rgba("+this.r+", "+this.g+", "+this.b+", "+this.alpha+")"},this.toHex=function(){var t=this.r.toString(16),e=this.g.toString(16),r=this.b.toString(16)
return 1==t.length&&(t="0"+t),1==e.length&&(e="0"+e),1==r.length&&(r="0"+r),"#"+t+e+r},this.getHelpXML=function(){for(var t=new Array,i=0;i<r.length;i++)for(var n=r[i].example,s=0;s<n.length;s++)t[t.length]=n[s]
for(var a in e)t[t.length]=a
var o=document.createElement("ul")
for(o.setAttribute("id","rgbcolor-examples"),i=0;i<t.length;i++)try{var u=document.createElement("li"),h=new RGBColor(t[i]),c=document.createElement("div")
c.style.cssText="margin: 3px; border: 1px solid black; background:"+h.toHex()+"; color:"+h.toHex(),c.appendChild(document.createTextNode("test"))
var l=document.createTextNode(" "+t[i]+" -> "+h.toRGB()+" -> "+h.toHex())
u.appendChild(c),u.appendChild(l),o.appendChild(u)}catch(t){}return o}}},356:(t,e,r)=>{"use strict"
var i=r(8095),n=r(4581),s=TypeError
t.exports=function(t){if(i(t))return t
throw new s(n(t)+" is not a function")}},7050:(t,e,r)=>{"use strict"
var i=r(7659),n=r(4581),s=TypeError
t.exports=function(t){if(i(t))return t
throw new s(n(t)+" is not a constructor")}},992:(t,e,r)=>{"use strict"
var i=r(4059),n=String,s=TypeError
t.exports=function(t){if(i(t))return t
throw new s("Can't set "+n(t)+" as a prototype")}},3523:(t,e,r)=>{"use strict"
var i=r(533),n=r(7998),s=r(343).f,a=i("unscopables"),o=Array.prototype
void 0===o[a]&&s(o,a,{configurable:!0,value:n(null)}),t.exports=function(t){o[a][t]=!0}},6567:(t,e,r)=>{"use strict"
var i=r(8133).charAt
t.exports=function(t,e,r){return e+(r?i(t,e).length:1)}},8033:(t,e,r)=>{"use strict"
var i=r(8635),n=TypeError
t.exports=function(t,e){if(i(e,t))return t
throw new n("Incorrect invocation")}},3817:(t,e,r)=>{"use strict"
var i=r(6116),n=String,s=TypeError
t.exports=function(t){if(i(t))return t
throw new s(n(t)+" is not an object")}},4751:(t,e,r)=>{"use strict"
var i=r(9787),n=r(3180),s=r(5124),a=function(t){return function(e,r,a){var o=i(e),u=s(o)
if(0===u)return!t&&-1
var h,c=n(a,u)
if(t&&r!=r){for(;u>c;)if((h=o[c++])!=h)return!0}else for(;u>c;c++)if((t||c in o)&&o[c]===r)return t||c||0
return!t&&-1}}
t.exports={includes:a(!0),indexOf:a(!1)}},8708:(t,e,r)=>{"use strict"
var i=r(2565)
t.exports=function(t,e){var r=[][t]
return!!r&&i((function(){r.call(null,e||function(){return 1},1)}))}},1456:(t,e,r)=>{"use strict"
var i=r(356),n=r(1607),s=r(3973),a=r(5124),o=TypeError,u="Reduce of empty array with no initial value",h=function(t){return function(e,r,h,c){var l=n(e),f=s(l),p=a(l)
if(i(r),0===p&&h<2)throw new o(u)
var g=t?p-1:0,d=t?-1:1
if(h<2)for(;;){if(g in f){c=f[g],g+=d
break}if(g+=d,t?g<0:p<=g)throw new o(u)}for(;t?g>=0:p>g;g+=d)g in f&&(c=r(c,f[g],g,l))
return c}}
t.exports={left:h(!1),right:h(!0)}},3014:(t,e,r)=>{"use strict"
var i=r(2374)
t.exports=i([].slice)},3990:(t,e,r)=>{"use strict"
var i=r(533)("iterator"),n=!1
try{var s=0,a={next:function(){return{done:!!s++}},return:function(){n=!0}}
a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(t){}t.exports=function(t,e){try{if(!e&&!n)return!1}catch(t){return!1}var r=!1
try{var s={}
s[i]=function(){return{next:function(){return{done:r=!0}}}},t(s)}catch(t){}return r}},8898:(t,e,r)=>{"use strict"
var i=r(2374),n=i({}.toString),s=i("".slice)
t.exports=function(t){return s(n(t),8,-1)}},8549:(t,e,r)=>{"use strict"
var i=r(7366),n=r(8095),s=r(8898),a=r(533)("toStringTag"),o=Object,u="Arguments"===s(function(){return arguments}())
t.exports=i?s:function(t){var e,r,i
return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=o(t),a))?r:u?s(e):"Object"===(i=s(e))&&n(e.callee)?"Arguments":i}},3802:(t,e,r)=>{"use strict"
var i=r(3519),n=r(6757),s=r(325),a=r(343)
t.exports=function(t,e,r){for(var o=n(e),u=a.f,h=s.f,c=0;c<o.length;c++){var l=o[c]
i(t,l)||r&&i(r,l)||u(t,l,h(e,l))}}},8774:(t,e,r)=>{"use strict"
var i=r(533)("match")
t.exports=function(t){var e=/./
try{"/./"[t](e)}catch(r){try{return e[i]=!1,"/./"[t](e)}catch(t){}}return!1}},9389:(t,e,r)=>{"use strict"
var i=r(2565)
t.exports=!i((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},7011:t=>{"use strict"
t.exports=function(t,e){return{value:t,done:e}}},6729:(t,e,r)=>{"use strict"
var i=r(970),n=r(343),s=r(6494)
t.exports=i?function(t,e,r){return n.f(t,e,s(1,r))}:function(t,e,r){return t[e]=r,t}},6494:t=>{"use strict"
t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},1276:(t,e,r)=>{"use strict"
var i=r(3861),n=r(343)
t.exports=function(t,e,r){return r.get&&i(r.get,e,{getter:!0}),r.set&&i(r.set,e,{setter:!0}),n.f(t,e,r)}},9454:(t,e,r)=>{"use strict"
var i=r(8095),n=r(343),s=r(3861),a=r(5155)
t.exports=function(t,e,r,o){o||(o={})
var u=o.enumerable,h=void 0!==o.name?o.name:e
if(i(r)&&s(r,h,o),o.global)u?t[e]=r:a(e,r)
else{try{o.unsafe?t[e]&&(u=!0):delete t[e]}catch(t){}u?t[e]=r:n.f(t,e,{value:r,enumerable:!1,configurable:!o.nonConfigurable,writable:!o.nonWritable})}return t}},5155:(t,e,r)=>{"use strict"
var i=r(8953),n=Object.defineProperty
t.exports=function(t,e){try{n(i,t,{value:e,configurable:!0,writable:!0})}catch(r){i[t]=e}return e}},970:(t,e,r)=>{"use strict"
var i=r(2565)
t.exports=!i((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},1021:(t,e,r)=>{"use strict"
var i=r(8953),n=r(6116),s=i.document,a=n(s)&&n(s.createElement)
t.exports=function(t){return a?s.createElement(t):{}}},7414:t=>{"use strict"
t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},6365:(t,e,r)=>{"use strict"
var i=r(1021)("span").classList,n=i&&i.constructor&&i.constructor.prototype
t.exports=n===Object.prototype?void 0:n},920:(t,e,r)=>{"use strict"
var i=r(1910),n=r(3034)
t.exports=!i&&!n&&"object"==typeof window&&"object"==typeof document},1910:t=>{"use strict"
t.exports="object"==typeof Deno&&Deno&&"object"==typeof Deno.version},870:(t,e,r)=>{"use strict"
var i=r(962)
t.exports=/ipad|iphone|ipod/i.test(i)&&"undefined"!=typeof Pebble},2989:(t,e,r)=>{"use strict"
var i=r(962)
t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(i)},3034:(t,e,r)=>{"use strict"
var i=r(8953),n=r(8898)
t.exports="process"===n(i.process)},1651:(t,e,r)=>{"use strict"
var i=r(962)
t.exports=/web0s(?!.*chrome)/i.test(i)},962:t=>{"use strict"
t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},38:(t,e,r)=>{"use strict"
var i,n,s=r(8953),a=r(962),o=s.process,u=s.Deno,h=o&&o.versions||u&&u.version,c=h&&h.v8
c&&(n=(i=c.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!n&&a&&(!(i=a.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=a.match(/Chrome\/(\d+)/))&&(n=+i[1]),t.exports=n},8137:t=>{"use strict"
t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},7568:(t,e,r)=>{"use strict"
var i=r(8953),n=r(325).f,s=r(6729),a=r(9454),o=r(5155),u=r(3802),h=r(78)
t.exports=function(t,e){var r,c,l,f,p,g=t.target,d=t.global,v=t.stat
if(r=d?i:v?i[g]||o(g,{}):i[g]&&i[g].prototype)for(c in e){if(f=e[c],l=t.dontCallGetSet?(p=n(r,c))&&p.value:r[c],!h(d?c:g+(v?".":"#")+c,t.forced)&&void 0!==l){if(typeof f==typeof l)continue
u(f,l)}(t.sham||l&&l.sham)&&s(f,"sham",!0),a(r,c,f,t)}}},2565:t=>{"use strict"
t.exports=function(t){try{return!!t()}catch(t){return!0}}},1738:(t,e,r)=>{"use strict"
r(6777)
var i=r(3155),n=r(9454),s=r(9197),a=r(2565),o=r(533),u=r(6729),h=o("species"),c=RegExp.prototype
t.exports=function(t,e,r,l){var f=o(t),p=!a((function(){var e={}
return e[f]=function(){return 7},7!==""[t](e)})),g=p&&!a((function(){var e=!1,r=/a/
return"split"===t&&((r={}).constructor={},r.constructor[h]=function(){return r},r.flags="",r[f]=/./[f]),r.exec=function(){return e=!0,null},r[f](""),!e}))
if(!p||!g||r){var d=/./[f],v=e(f,""[t],(function(t,e,r,n,a){var o=e.exec
return o===s||o===c.exec?p&&!a?{done:!0,value:i(d,e,r,n)}:{done:!0,value:i(t,r,e,n)}:{done:!1}}))
n(String.prototype,t,v[0]),n(c,f,v[1])}l&&u(c[f],"sham",!0)}},127:(t,e,r)=>{"use strict"
var i=r(2166),n=Function.prototype,s=n.apply,a=n.call
t.exports="object"==typeof Reflect&&Reflect.apply||(i?a.bind(s):function(){return a.apply(s,arguments)})},6230:(t,e,r)=>{"use strict"
var i=r(3390),n=r(356),s=r(2166),a=i(i.bind)
t.exports=function(t,e){return n(t),void 0===e?t:s?a(t,e):function(){return t.apply(e,arguments)}}},2166:(t,e,r)=>{"use strict"
var i=r(2565)
t.exports=!i((function(){var t=function(){}.bind()
return"function"!=typeof t||t.hasOwnProperty("prototype")}))},3155:(t,e,r)=>{"use strict"
var i=r(2166),n=Function.prototype.call
t.exports=i?n.bind(n):function(){return n.apply(n,arguments)}},4252:(t,e,r)=>{"use strict"
var i=r(970),n=r(3519),s=Function.prototype,a=i&&Object.getOwnPropertyDescriptor,o=n(s,"name"),u=o&&"something"===function(){}.name,h=o&&(!i||i&&a(s,"name").configurable)
t.exports={EXISTS:o,PROPER:u,CONFIGURABLE:h}},4772:(t,e,r)=>{"use strict"
var i=r(2374),n=r(356)
t.exports=function(t,e,r){try{return i(n(Object.getOwnPropertyDescriptor(t,e)[r]))}catch(t){}}},3390:(t,e,r)=>{"use strict"
var i=r(8898),n=r(2374)
t.exports=function(t){if("Function"===i(t))return n(t)}},2374:(t,e,r)=>{"use strict"
var i=r(2166),n=Function.prototype,s=n.call,a=i&&n.bind.bind(s,s)
t.exports=i?a:function(t){return function(){return s.apply(t,arguments)}}},1901:(t,e,r)=>{"use strict"
var i=r(8953),n=r(8095)
t.exports=function(t,e){return arguments.length<2?(r=i[t],n(r)?r:void 0):i[t]&&i[t][e]
var r}},5077:(t,e,r)=>{"use strict"
var i=r(8549),n=r(8720),s=r(2579),a=r(4995),o=r(533)("iterator")
t.exports=function(t){if(!s(t))return n(t,o)||n(t,"@@iterator")||a[i(t)]}},827:(t,e,r)=>{"use strict"
var i=r(3155),n=r(356),s=r(3817),a=r(4581),o=r(5077),u=TypeError
t.exports=function(t,e){var r=arguments.length<2?o(t):e
if(n(r))return s(i(r,t))
throw new u(a(t)+" is not iterable")}},8720:(t,e,r)=>{"use strict"
var i=r(356),n=r(2579)
t.exports=function(t,e){var r=t[e]
return n(r)?void 0:i(r)}},4624:(t,e,r)=>{"use strict"
var i=r(2374),n=r(1607),s=Math.floor,a=i("".charAt),o=i("".replace),u=i("".slice),h=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,c=/\$([$&'`]|\d{1,2})/g
t.exports=function(t,e,r,i,l,f){var p=r+t.length,g=i.length,d=c
return void 0!==l&&(l=n(l),d=h),o(f,d,(function(n,o){var h
switch(a(o,0)){case"$":return"$"
case"&":return t
case"`":return u(e,0,r)
case"'":return u(e,p)
case"<":h=l[u(o,1,-1)]
break
default:var c=+o
if(0===c)return n
if(c>g){var f=s(c/10)
return 0===f?n:f<=g?void 0===i[f-1]?a(o,1):i[f-1]+a(o,1):n}h=i[c-1]}return void 0===h?"":h}))}},8953:function(t){"use strict"
var e=function(t){return t&&t.Math===Math&&t}
t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof global&&global)||e("object"==typeof this&&this)||function(){return this}()||Function("return this")()},3519:(t,e,r)=>{"use strict"
var i=r(2374),n=r(1607),s=i({}.hasOwnProperty)
t.exports=Object.hasOwn||function(t,e){return s(n(t),e)}},9663:t=>{"use strict"
t.exports={}},2183:t=>{"use strict"
t.exports=function(t,e){try{1===arguments.length?console.error(t):console.error(t,e)}catch(t){}}},5831:(t,e,r)=>{"use strict"
var i=r(1901)
t.exports=i("document","documentElement")},9747:(t,e,r)=>{"use strict"
var i=r(970),n=r(2565),s=r(1021)
t.exports=!i&&!n((function(){return 7!==Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},3973:(t,e,r)=>{"use strict"
var i=r(2374),n=r(2565),s=r(8898),a=Object,o=i("".split)
t.exports=n((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"===s(t)?o(t,""):a(t)}:a},1024:(t,e,r)=>{"use strict"
var i=r(2374),n=r(8095),s=r(3819),a=i(Function.toString)
n(s.inspectSource)||(s.inspectSource=function(t){return a(t)}),t.exports=s.inspectSource},2991:(t,e,r)=>{"use strict"
var i,n,s,a=r(3648),o=r(8953),u=r(6116),h=r(6729),c=r(3519),l=r(3819),f=r(1701),p=r(9663),g="Object already initialized",d=o.TypeError,v=o.WeakMap
if(a||l.state){var y=l.state||(l.state=new v)
y.get=y.get,y.has=y.has,y.set=y.set,i=function(t,e){if(y.has(t))throw new d(g)
return e.facade=t,y.set(t,e),e},n=function(t){return y.get(t)||{}},s=function(t){return y.has(t)}}else{var m=f("state")
p[m]=!0,i=function(t,e){if(c(t,m))throw new d(g)
return e.facade=t,h(t,m,e),e},n=function(t){return c(t,m)?t[m]:{}},s=function(t){return c(t,m)}}t.exports={set:i,get:n,has:s,enforce:function(t){return s(t)?n(t):i(t,{})},getterFor:function(t){return function(e){var r
if(!u(e)||(r=n(e)).type!==t)throw new d("Incompatible receiver, "+t+" required")
return r}}}},6199:(t,e,r)=>{"use strict"
var i=r(533),n=r(4995),s=i("iterator"),a=Array.prototype
t.exports=function(t){return void 0!==t&&(n.Array===t||a[s]===t)}},6894:(t,e,r)=>{"use strict"
var i=r(8898)
t.exports=Array.isArray||function(t){return"Array"===i(t)}},8095:t=>{"use strict"
var e="object"==typeof document&&document.all
t.exports=void 0===e&&void 0!==e?function(t){return"function"==typeof t||t===e}:function(t){return"function"==typeof t}},7659:(t,e,r)=>{"use strict"
var i=r(2374),n=r(2565),s=r(8095),a=r(8549),o=r(1901),u=r(1024),h=function(){},c=o("Reflect","construct"),l=/^\s*(?:class|function)\b/,f=i(l.exec),p=!l.test(h),g=function(t){if(!s(t))return!1
try{return c(h,[],t),!0}catch(t){return!1}},d=function(t){if(!s(t))return!1
switch(a(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!f(l,u(t))}catch(t){return!0}}
d.sham=!0,t.exports=!c||n((function(){var t
return g(g.call)||!g(Object)||!g((function(){t=!0}))||t}))?d:g},78:(t,e,r)=>{"use strict"
var i=r(2565),n=r(8095),s=/#|\.prototype\./,a=function(t,e){var r=u[o(t)]
return r===c||r!==h&&(n(e)?i(e):!!e)},o=a.normalize=function(t){return String(t).replace(s,".").toLowerCase()},u=a.data={},h=a.NATIVE="N",c=a.POLYFILL="P"
t.exports=a},2579:t=>{"use strict"
t.exports=function(t){return null==t}},6116:(t,e,r)=>{"use strict"
var i=r(8095)
t.exports=function(t){return"object"==typeof t?null!==t:i(t)}},4059:(t,e,r)=>{"use strict"
var i=r(6116)
t.exports=function(t){return i(t)||null===t}},9385:t=>{"use strict"
t.exports=!1},5358:(t,e,r)=>{"use strict"
var i=r(6116),n=r(8898),s=r(533)("match")
t.exports=function(t){var e
return i(t)&&(void 0!==(e=t[s])?!!e:"RegExp"===n(t))}},4875:(t,e,r)=>{"use strict"
var i=r(1901),n=r(8095),s=r(8635),a=r(2170),o=Object
t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=i("Symbol")
return n(e)&&s(e.prototype,o(t))}},9598:(t,e,r)=>{"use strict"
var i=r(6230),n=r(3155),s=r(3817),a=r(4581),o=r(6199),u=r(5124),h=r(8635),c=r(827),l=r(5077),f=r(4933),p=TypeError,g=function(t,e){this.stopped=t,this.result=e},d=g.prototype
t.exports=function(t,e,r){var v,y,m,x,b,w,S,T=r&&r.that,A=!(!r||!r.AS_ENTRIES),O=!(!r||!r.IS_RECORD),C=!(!r||!r.IS_ITERATOR),P=!(!r||!r.INTERRUPTED),E=i(e,T),M=function(t){return v&&f(v,"normal",t),new g(!0,t)},N=function(t){return A?(s(t),P?E(t[0],t[1],M):E(t[0],t[1])):P?E(t,M):E(t)}
if(O)v=t.iterator
else if(C)v=t
else{if(!(y=l(t)))throw new p(a(t)+" is not iterable")
if(o(y)){for(m=0,x=u(t);x>m;m++)if((b=N(t[m]))&&h(d,b))return b
return new g(!1)}v=c(t,y)}for(w=O?t.next:v.next;!(S=n(w,v)).done;){try{b=N(S.value)}catch(t){f(v,"throw",t)}if("object"==typeof b&&b&&h(d,b))return b}return new g(!1)}},4933:(t,e,r)=>{"use strict"
var i=r(3155),n=r(3817),s=r(8720)
t.exports=function(t,e,r){var a,o
n(t)
try{if(!(a=s(t,"return"))){if("throw"===e)throw r
return r}a=i(a,t)}catch(t){o=!0,a=t}if("throw"===e)throw r
if(o)throw a
return n(a),r}},2356:(t,e,r)=>{"use strict"
var i=r(7143).IteratorPrototype,n=r(7998),s=r(6494),a=r(1889),o=r(4995),u=function(){return this}
t.exports=function(t,e,r,h){var c=e+" Iterator"
return t.prototype=n(i,{next:s(+!h,r)}),a(t,c,!1,!0),o[c]=u,t}},2490:(t,e,r)=>{"use strict"
var i=r(7568),n=r(3155),s=r(9385),a=r(4252),o=r(8095),u=r(2356),h=r(5321),c=r(6325),l=r(1889),f=r(6729),p=r(9454),g=r(533),d=r(4995),v=r(7143),y=a.PROPER,m=a.CONFIGURABLE,x=v.IteratorPrototype,b=v.BUGGY_SAFARI_ITERATORS,w=g("iterator"),S="keys",T="values",A="entries",O=function(){return this}
t.exports=function(t,e,r,a,g,v,C){u(r,e,a)
var P,E,M,N=function(t){if(t===g&&k)return k
if(!b&&t&&t in V)return V[t]
switch(t){case S:case T:case A:return function(){return new r(this,t)}}return function(){return new r(this)}},_=e+" Iterator",R=!1,V=t.prototype,I=V[w]||V["@@iterator"]||g&&V[g],k=!b&&I||N(g),L="Array"===e&&V.entries||I
if(L&&(P=h(L.call(new t)))!==Object.prototype&&P.next&&(s||h(P)===x||(c?c(P,x):o(P[w])||p(P,w,O)),l(P,_,!0,!0),s&&(d[_]=O)),y&&g===T&&I&&I.name!==T&&(!s&&m?f(V,"name",T):(R=!0,k=function(){return n(I,this)})),g)if(E={values:N(T),keys:v?k:N(S),entries:N(A)},C)for(M in E)(b||R||!(M in V))&&p(V,M,E[M])
else i({target:e,proto:!0,forced:b||R},E)
return s&&!C||V[w]===k||p(V,w,k,{name:g}),d[e]=k,E}},7143:(t,e,r)=>{"use strict"
var i,n,s,a=r(2565),o=r(8095),u=r(6116),h=r(7998),c=r(5321),l=r(9454),f=r(533),p=r(9385),g=f("iterator"),d=!1;[].keys&&("next"in(s=[].keys())?(n=c(c(s)))!==Object.prototype&&(i=n):d=!0),!u(i)||a((function(){var t={}
return i[g].call(t)!==t}))?i={}:p&&(i=h(i)),o(i[g])||l(i,g,(function(){return this})),t.exports={IteratorPrototype:i,BUGGY_SAFARI_ITERATORS:d}},4995:t=>{"use strict"
t.exports={}},5124:(t,e,r)=>{"use strict"
var i=r(6464)
t.exports=function(t){return i(t.length)}},3861:(t,e,r)=>{"use strict"
var i=r(2374),n=r(2565),s=r(8095),a=r(3519),o=r(970),u=r(4252).CONFIGURABLE,h=r(1024),c=r(2991),l=c.enforce,f=c.get,p=String,g=Object.defineProperty,d=i("".slice),v=i("".replace),y=i([].join),m=o&&!n((function(){return 8!==g((function(){}),"length",{value:8}).length})),x=String(String).split("String"),b=t.exports=function(t,e,r){"Symbol("===d(p(e),0,7)&&(e="["+v(p(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!a(t,"name")||u&&t.name!==e)&&(o?g(t,"name",{value:e,configurable:!0}):t.name=e),m&&r&&a(r,"arity")&&t.length!==r.arity&&g(t,"length",{value:r.arity})
try{r&&a(r,"constructor")&&r.constructor?o&&g(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var i=l(t)
return a(i,"source")||(i.source=y(x,"string"==typeof e?e:"")),t}
Function.prototype.toString=b((function(){return s(this)&&f(this).source||h(this)}),"toString")},1723:t=>{"use strict"
var e=Math.ceil,r=Math.floor
t.exports=Math.trunc||function(t){var i=+t
return(i>0?r:e)(i)}},1101:(t,e,r)=>{"use strict"
var i,n,s,a,o,u=r(8953),h=r(3495),c=r(6230),l=r(1899).set,f=r(3647),p=r(2989),g=r(870),d=r(1651),v=r(3034),y=u.MutationObserver||u.WebKitMutationObserver,m=u.document,x=u.process,b=u.Promise,w=h("queueMicrotask")
if(!w){var S=new f,T=function(){var t,e
for(v&&(t=x.domain)&&t.exit();e=S.get();)try{e()}catch(t){throw S.head&&i(),t}t&&t.enter()}
p||v||d||!y||!m?!g&&b&&b.resolve?((a=b.resolve(void 0)).constructor=b,o=c(a.then,a),i=function(){o(T)}):v?i=function(){x.nextTick(T)}:(l=c(l,u),i=function(){l(T)}):(n=!0,s=m.createTextNode(""),new y(T).observe(s,{characterData:!0}),i=function(){s.data=n=!n}),w=function(t){S.head||i(),S.add(t)}}t.exports=w},7305:(t,e,r)=>{"use strict"
var i=r(356),n=TypeError,s=function(t){var e,r
this.promise=new t((function(t,i){if(void 0!==e||void 0!==r)throw new n("Bad Promise constructor")
e=t,r=i})),this.resolve=i(e),this.reject=i(r)}
t.exports.f=function(t){return new s(t)}},1873:(t,e,r)=>{"use strict"
var i=r(5358),n=TypeError
t.exports=function(t){if(i(t))throw new n("The method doesn't accept regular expressions")
return t}},7998:(t,e,r)=>{"use strict"
var i,n=r(3817),s=r(1803),a=r(8137),o=r(9663),u=r(5831),h=r(1021),c=r(1701),l="prototype",f="script",p=c("IE_PROTO"),g=function(){},d=function(t){return"<"+f+">"+t+"</"+f+">"},v=function(t){t.write(d("")),t.close()
var e=t.parentWindow.Object
return t=null,e},y=function(){try{i=new ActiveXObject("htmlfile")}catch(t){}var t,e,r
y="undefined"!=typeof document?document.domain&&i?v(i):(e=h("iframe"),r="java"+f+":",e.style.display="none",u.appendChild(e),e.src=String(r),(t=e.contentWindow.document).open(),t.write(d("document.F=Object")),t.close(),t.F):v(i)
for(var n=a.length;n--;)delete y[l][a[n]]
return y()}
o[p]=!0,t.exports=Object.create||function(t,e){var r
return null!==t?(g[l]=n(t),r=new g,g[l]=null,r[p]=t):r=y(),void 0===e?r:s.f(r,e)}},1803:(t,e,r)=>{"use strict"
var i=r(970),n=r(4612),s=r(343),a=r(3817),o=r(9787),u=r(6046)
e.f=i&&!n?Object.defineProperties:function(t,e){a(t)
for(var r,i=o(e),n=u(e),h=n.length,c=0;h>c;)s.f(t,r=n[c++],i[r])
return t}},343:(t,e,r)=>{"use strict"
var i=r(970),n=r(9747),s=r(4612),a=r(3817),o=r(5011),u=TypeError,h=Object.defineProperty,c=Object.getOwnPropertyDescriptor,l="enumerable",f="configurable",p="writable"
e.f=i?s?function(t,e,r){if(a(t),e=o(e),a(r),"function"==typeof t&&"prototype"===e&&"value"in r&&p in r&&!r[p]){var i=c(t,e)
i&&i[p]&&(t[e]=r.value,r={configurable:f in r?r[f]:i[f],enumerable:l in r?r[l]:i[l],writable:!1})}return h(t,e,r)}:h:function(t,e,r){if(a(t),e=o(e),a(r),n)try{return h(t,e,r)}catch(t){}if("get"in r||"set"in r)throw new u("Accessors not supported")
return"value"in r&&(t[e]=r.value),t}},325:(t,e,r)=>{"use strict"
var i=r(970),n=r(3155),s=r(6695),a=r(6494),o=r(9787),u=r(5011),h=r(3519),c=r(9747),l=Object.getOwnPropertyDescriptor
e.f=i?l:function(t,e){if(t=o(t),e=u(e),c)try{return l(t,e)}catch(t){}if(h(t,e))return a(!n(s.f,t,e),t[e])}},8746:(t,e,r)=>{"use strict"
var i=r(3506),n=r(8137).concat("length","prototype")
e.f=Object.getOwnPropertyNames||function(t){return i(t,n)}},7407:(t,e)=>{"use strict"
e.f=Object.getOwnPropertySymbols},5321:(t,e,r)=>{"use strict"
var i=r(3519),n=r(8095),s=r(1607),a=r(1701),o=r(9389),u=a("IE_PROTO"),h=Object,c=h.prototype
t.exports=o?h.getPrototypeOf:function(t){var e=s(t)
if(i(e,u))return e[u]
var r=e.constructor
return n(r)&&e instanceof r?r.prototype:e instanceof h?c:null}},8635:(t,e,r)=>{"use strict"
var i=r(2374)
t.exports=i({}.isPrototypeOf)},3506:(t,e,r)=>{"use strict"
var i=r(2374),n=r(3519),s=r(9787),a=r(4751).indexOf,o=r(9663),u=i([].push)
t.exports=function(t,e){var r,i=s(t),h=0,c=[]
for(r in i)!n(o,r)&&n(i,r)&&u(c,r)
for(;e.length>h;)n(i,r=e[h++])&&(~a(c,r)||u(c,r))
return c}},6046:(t,e,r)=>{"use strict"
var i=r(3506),n=r(8137)
t.exports=Object.keys||function(t){return i(t,n)}},6695:(t,e)=>{"use strict"
var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,n=i&&!r.call({1:2},1)
e.f=n?function(t){var e=i(this,t)
return!!e&&e.enumerable}:r},6325:(t,e,r)=>{"use strict"
var i=r(4772),n=r(6116),s=r(3972),a=r(992)
t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={}
try{(t=i(Object.prototype,"__proto__","set"))(r,[]),e=r instanceof Array}catch(t){}return function(r,i){return s(r),a(i),n(r)?(e?t(r,i):r.__proto__=i,r):r}}():void 0)},1312:(t,e,r)=>{"use strict"
var i=r(3155),n=r(8095),s=r(6116),a=TypeError
t.exports=function(t,e){var r,o
if("string"===e&&n(r=t.toString)&&!s(o=i(r,t)))return o
if(n(r=t.valueOf)&&!s(o=i(r,t)))return o
if("string"!==e&&n(r=t.toString)&&!s(o=i(r,t)))return o
throw new a("Can't convert object to primitive value")}},6757:(t,e,r)=>{"use strict"
var i=r(1901),n=r(2374),s=r(8746),a=r(7407),o=r(3817),u=n([].concat)
t.exports=i("Reflect","ownKeys")||function(t){var e=s.f(o(t)),r=a.f
return r?u(e,r(t)):e}},3261:t=>{"use strict"
t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},4346:(t,e,r)=>{"use strict"
var i=r(8953),n=r(3676),s=r(8095),a=r(78),o=r(1024),u=r(533),h=r(920),c=r(1910),l=r(9385),f=r(38),p=n&&n.prototype,g=u("species"),d=!1,v=s(i.PromiseRejectionEvent),y=a("Promise",(function(){var t=o(n),e=t!==String(n)
if(!e&&66===f)return!0
if(l&&(!p.catch||!p.finally))return!0
if(!f||f<51||!/native code/.test(t)){var r=new n((function(t){t(1)})),i=function(t){t((function(){}),(function(){}))}
if((r.constructor={})[g]=i,!(d=r.then((function(){}))instanceof i))return!0}return!e&&(h||c)&&!v}))
t.exports={CONSTRUCTOR:y,REJECTION_EVENT:v,SUBCLASSING:d}},3676:(t,e,r)=>{"use strict"
var i=r(8953)
t.exports=i.Promise},5248:(t,e,r)=>{"use strict"
var i=r(3817),n=r(6116),s=r(7305)
t.exports=function(t,e){if(i(t),n(e)&&e.constructor===t)return e
var r=s.f(t)
return(0,r.resolve)(e),r.promise}},7811:(t,e,r)=>{"use strict"
var i=r(3676),n=r(3990),s=r(4346).CONSTRUCTOR
t.exports=s||!n((function(t){i.all(t).then(void 0,(function(){}))}))},3647:t=>{"use strict"
var e=function(){this.head=null,this.tail=null}
e.prototype={add:function(t){var e={item:t,next:null},r=this.tail
r?r.next=e:this.head=e,this.tail=e},get:function(){var t=this.head
if(t)return null===(this.head=t.next)&&(this.tail=null),t.item}},t.exports=e},376:(t,e,r)=>{"use strict"
var i=r(3155),n=r(3817),s=r(8095),a=r(8898),o=r(9197),u=TypeError
t.exports=function(t,e){var r=t.exec
if(s(r)){var h=i(r,t,e)
return null!==h&&n(h),h}if("RegExp"===a(t))return i(o,t,e)
throw new u("RegExp#exec called on incompatible receiver")}},9197:(t,e,r)=>{"use strict"
var i,n,s=r(3155),a=r(2374),o=r(3841),u=r(5721),h=r(3199),c=r(715),l=r(7998),f=r(2991).get,p=r(3809),g=r(3268),d=c("native-string-replace",String.prototype.replace),v=RegExp.prototype.exec,y=v,m=a("".charAt),x=a("".indexOf),b=a("".replace),w=a("".slice),S=(n=/b*/g,s(v,i=/a/,"a"),s(v,n,"a"),0!==i.lastIndex||0!==n.lastIndex),T=h.BROKEN_CARET,A=void 0!==/()??/.exec("")[1];(S||A||T||p||g)&&(y=function(t){var e,r,i,n,a,h,c,p=this,g=f(p),O=o(t),C=g.raw
if(C)return C.lastIndex=p.lastIndex,e=s(y,C,O),p.lastIndex=C.lastIndex,e
var P=g.groups,E=T&&p.sticky,M=s(u,p),N=p.source,_=0,R=O
if(E&&(M=b(M,"y",""),-1===x(M,"g")&&(M+="g"),R=w(O,p.lastIndex),p.lastIndex>0&&(!p.multiline||p.multiline&&"\n"!==m(O,p.lastIndex-1))&&(N="(?: "+N+")",R=" "+R,_++),r=new RegExp("^(?:"+N+")",M)),A&&(r=new RegExp("^"+N+"$(?!\\s)",M)),S&&(i=p.lastIndex),n=s(v,E?r:p,R),E?n?(n.input=w(n.input,_),n[0]=w(n[0],_),n.index=p.lastIndex,p.lastIndex+=n[0].length):p.lastIndex=0:S&&n&&(p.lastIndex=p.global?n.index+n[0].length:i),A&&n&&n.length>1&&s(d,n[0],r,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(n[a]=void 0)})),n&&P)for(n.groups=h=l(null),a=0;a<P.length;a++)h[(c=P[a])[0]]=n[c[1]]
return n}),t.exports=y},5721:(t,e,r)=>{"use strict"
var i=r(3817)
t.exports=function(){var t=i(this),e=""
return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e}},8532:(t,e,r)=>{"use strict"
var i=r(3155),n=r(3519),s=r(8635),a=r(5721),o=RegExp.prototype
t.exports=function(t){var e=t.flags
return void 0!==e||"flags"in o||n(t,"flags")||!s(o,t)?e:i(a,t)}},3199:(t,e,r)=>{"use strict"
var i=r(2565),n=r(8953).RegExp,s=i((function(){var t=n("a","y")
return t.lastIndex=2,null!==t.exec("abcd")})),a=s||i((function(){return!n("a","y").sticky})),o=s||i((function(){var t=n("^r","gy")
return t.lastIndex=2,null!==t.exec("str")}))
t.exports={BROKEN_CARET:o,MISSED_STICKY:a,UNSUPPORTED_Y:s}},3809:(t,e,r)=>{"use strict"
var i=r(2565),n=r(8953).RegExp
t.exports=i((function(){var t=n(".","s")
return!(t.dotAll&&t.test("\n")&&"s"===t.flags)}))},3268:(t,e,r)=>{"use strict"
var i=r(2565),n=r(8953).RegExp
t.exports=i((function(){var t=n("(?<a>b)","g")
return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},3972:(t,e,r)=>{"use strict"
var i=r(2579),n=TypeError
t.exports=function(t){if(i(t))throw new n("Can't call method on "+t)
return t}},3495:(t,e,r)=>{"use strict"
var i=r(8953),n=r(970),s=Object.getOwnPropertyDescriptor
t.exports=function(t){if(!n)return i[t]
var e=s(i,t)
return e&&e.value}},2967:(t,e,r)=>{"use strict"
var i=r(1901),n=r(1276),s=r(533),a=r(970),o=s("species")
t.exports=function(t){var e=i(t)
a&&e&&!e[o]&&n(e,o,{configurable:!0,get:function(){return this}})}},1889:(t,e,r)=>{"use strict"
var i=r(343).f,n=r(3519),s=r(533)("toStringTag")
t.exports=function(t,e,r){t&&!r&&(t=t.prototype),t&&!n(t,s)&&i(t,s,{configurable:!0,value:e})}},1701:(t,e,r)=>{"use strict"
var i=r(715),n=r(3414),s=i("keys")
t.exports=function(t){return s[t]||(s[t]=n(t))}},3819:(t,e,r)=>{"use strict"
var i=r(9385),n=r(8953),s=r(5155),a="__core-js_shared__",o=t.exports=n[a]||s(a,{});(o.versions||(o.versions=[])).push({version:"3.37.1",mode:i?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE",source:"https://github.com/zloirock/core-js"})},715:(t,e,r)=>{"use strict"
var i=r(3819)
t.exports=function(t,e){return i[t]||(i[t]=e||{})}},7303:(t,e,r)=>{"use strict"
var i=r(3817),n=r(7050),s=r(2579),a=r(533)("species")
t.exports=function(t,e){var r,o=i(t).constructor
return void 0===o||s(r=i(o)[a])?e:n(r)}},8133:(t,e,r)=>{"use strict"
var i=r(2374),n=r(4905),s=r(3841),a=r(3972),o=i("".charAt),u=i("".charCodeAt),h=i("".slice),c=function(t){return function(e,r){var i,c,l=s(a(e)),f=n(r),p=l.length
return f<0||f>=p?t?"":void 0:(i=u(l,f))<55296||i>56319||f+1===p||(c=u(l,f+1))<56320||c>57343?t?o(l,f):i:t?h(l,f,f+2):c-56320+(i-55296<<10)+65536}}
t.exports={codeAt:c(!1),charAt:c(!0)}},6e3:(t,e,r)=>{"use strict"
var i=r(4252).PROPER,n=r(2565),s=r(410)
t.exports=function(t){return n((function(){return!!s[t]()||"​᠎"!=="​᠎"[t]()||i&&s[t].name!==t}))}},3916:(t,e,r)=>{"use strict"
var i=r(2374),n=r(3972),s=r(3841),a=r(410),o=i("".replace),u=RegExp("^["+a+"]+"),h=RegExp("(^|[^"+a+"])["+a+"]+$"),c=function(t){return function(e){var r=s(n(e))
return 1&t&&(r=o(r,u,"")),2&t&&(r=o(r,h,"$1")),r}}
t.exports={start:c(1),end:c(2),trim:c(3)}},4129:(t,e,r)=>{"use strict"
var i=r(38),n=r(2565),s=r(8953).String
t.exports=!!Object.getOwnPropertySymbols&&!n((function(){var t=Symbol("symbol detection")
return!s(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},1899:(t,e,r)=>{"use strict"
var i,n,s,a,o=r(8953),u=r(127),h=r(6230),c=r(8095),l=r(3519),f=r(2565),p=r(5831),g=r(3014),d=r(1021),v=r(6638),y=r(2989),m=r(3034),x=o.setImmediate,b=o.clearImmediate,w=o.process,S=o.Dispatch,T=o.Function,A=o.MessageChannel,O=o.String,C=0,P={},E="onreadystatechange"
f((function(){i=o.location}))
var M=function(t){if(l(P,t)){var e=P[t]
delete P[t],e()}},N=function(t){return function(){M(t)}},_=function(t){M(t.data)},R=function(t){o.postMessage(O(t),i.protocol+"//"+i.host)}
x&&b||(x=function(t){v(arguments.length,1)
var e=c(t)?t:T(t),r=g(arguments,1)
return P[++C]=function(){u(e,void 0,r)},n(C),C},b=function(t){delete P[t]},m?n=function(t){w.nextTick(N(t))}:S&&S.now?n=function(t){S.now(N(t))}:A&&!y?(a=(s=new A).port2,s.port1.onmessage=_,n=h(a.postMessage,a)):o.addEventListener&&c(o.postMessage)&&!o.importScripts&&i&&"file:"!==i.protocol&&!f(R)?(n=R,o.addEventListener("message",_,!1)):n=E in d("script")?function(t){p.appendChild(d("script"))[E]=function(){p.removeChild(this),M(t)}}:function(t){setTimeout(N(t),0)}),t.exports={set:x,clear:b}},3180:(t,e,r)=>{"use strict"
var i=r(4905),n=Math.max,s=Math.min
t.exports=function(t,e){var r=i(t)
return r<0?n(r+e,0):s(r,e)}},9787:(t,e,r)=>{"use strict"
var i=r(3973),n=r(3972)
t.exports=function(t){return i(n(t))}},4905:(t,e,r)=>{"use strict"
var i=r(1723)
t.exports=function(t){var e=+t
return e!=e||0===e?0:i(e)}},6464:(t,e,r)=>{"use strict"
var i=r(4905),n=Math.min
t.exports=function(t){var e=i(t)
return e>0?n(e,9007199254740991):0}},1607:(t,e,r)=>{"use strict"
var i=r(3972),n=Object
t.exports=function(t){return n(i(t))}},6079:(t,e,r)=>{"use strict"
var i=r(3155),n=r(6116),s=r(4875),a=r(8720),o=r(1312),u=r(533),h=TypeError,c=u("toPrimitive")
t.exports=function(t,e){if(!n(t)||s(t))return t
var r,u=a(t,c)
if(u){if(void 0===e&&(e="default"),r=i(u,t,e),!n(r)||s(r))return r
throw new h("Can't convert object to primitive value")}return void 0===e&&(e="number"),o(t,e)}},5011:(t,e,r)=>{"use strict"
var i=r(6079),n=r(4875)
t.exports=function(t){var e=i(t,"string")
return n(e)?e:e+""}},7366:(t,e,r)=>{"use strict"
var i={}
i[r(533)("toStringTag")]="z",t.exports="[object z]"===String(i)},3841:(t,e,r)=>{"use strict"
var i=r(8549),n=String
t.exports=function(t){if("Symbol"===i(t))throw new TypeError("Cannot convert a Symbol value to a string")
return n(t)}},4581:t=>{"use strict"
var e=String
t.exports=function(t){try{return e(t)}catch(t){return"Object"}}},3414:(t,e,r)=>{"use strict"
var i=r(2374),n=0,s=Math.random(),a=i(1..toString)
t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++n+s,36)}},2170:(t,e,r)=>{"use strict"
var i=r(4129)
t.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},4612:(t,e,r)=>{"use strict"
var i=r(970),n=r(2565)
t.exports=i&&n((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},6638:t=>{"use strict"
var e=TypeError
t.exports=function(t,r){if(t<r)throw new e("Not enough arguments")
return t}},3648:(t,e,r)=>{"use strict"
var i=r(8953),n=r(8095),s=i.WeakMap
t.exports=n(s)&&/native code/.test(String(s))},533:(t,e,r)=>{"use strict"
var i=r(8953),n=r(715),s=r(3519),a=r(3414),o=r(4129),u=r(2170),h=i.Symbol,c=n("wks"),l=u?h.for||h:h&&h.withoutSetter||a
t.exports=function(t){return s(c,t)||(c[t]=o&&s(h,t)?h[t]:l("Symbol."+t)),c[t]}},410:t=>{"use strict"
t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},5658:(t,e,r)=>{"use strict"
var i=r(7568),n=r(3390),s=r(4751).indexOf,a=r(8708),o=n([].indexOf),u=!!o&&1/o([1],1,-0)<0
i({target:"Array",proto:!0,forced:u||!a("indexOf")},{indexOf:function(t){var e=arguments.length>1?arguments[1]:void 0
return u?o(this,t,e)||0:s(this,t,e)}})},1950:(t,e,r)=>{"use strict"
var i=r(9787),n=r(3523),s=r(4995),a=r(2991),o=r(343).f,u=r(2490),h=r(7011),c=r(9385),l=r(970),f="Array Iterator",p=a.set,g=a.getterFor(f)
t.exports=u(Array,"Array",(function(t,e){p(this,{type:f,target:i(t),index:0,kind:e})}),(function(){var t=g(this),e=t.target,r=t.index++
if(!e||r>=e.length)return t.target=void 0,h(void 0,!0)
switch(t.kind){case"keys":return h(r,!1)
case"values":return h(e[r],!1)}return h([r,e[r]],!1)}),"values")
var d=s.Arguments=s.Array
if(n("keys"),n("values"),n("entries"),!c&&l&&"values"!==d.name)try{o(d,"name",{value:"values"})}catch(t){}},9954:(t,e,r)=>{"use strict"
var i=r(7568),n=r(1456).left,s=r(8708),a=r(38)
i({target:"Array",proto:!0,forced:!r(3034)&&a>79&&a<83||!s("reduce")},{reduce:function(t){var e=arguments.length
return n(this,t,e,e>1?arguments[1]:void 0)}})},1856:(t,e,r)=>{"use strict"
var i=r(7568),n=r(2374),s=r(6894),a=n([].reverse),o=[1,2]
i({target:"Array",proto:!0,forced:String(o)===String(o.reverse())},{reverse:function(){return s(this)&&(this.length=this.length),a(this)}})},1301:(t,e,r)=>{"use strict"
var i=r(7568),n=r(3155),s=r(356),a=r(7305),o=r(3261),u=r(9598)
i({target:"Promise",stat:!0,forced:r(7811)},{all:function(t){var e=this,r=a.f(e),i=r.resolve,h=r.reject,c=o((function(){var r=s(e.resolve),a=[],o=0,c=1
u(t,(function(t){var s=o++,u=!1
c++,n(r,e,t).then((function(t){u||(u=!0,a[s]=t,--c||i(a))}),h)})),--c||i(a)}))
return c.error&&h(c.value),r.promise}})},6893:(t,e,r)=>{"use strict"
var i=r(7568),n=r(9385),s=r(4346).CONSTRUCTOR,a=r(3676),o=r(1901),u=r(8095),h=r(9454),c=a&&a.prototype
if(i({target:"Promise",proto:!0,forced:s,real:!0},{catch:function(t){return this.then(void 0,t)}}),!n&&u(a)){var l=o("Promise").prototype.catch
c.catch!==l&&h(c,"catch",l,{unsafe:!0})}},5934:(t,e,r)=>{"use strict"
var i,n,s,a=r(7568),o=r(9385),u=r(3034),h=r(8953),c=r(3155),l=r(9454),f=r(6325),p=r(1889),g=r(2967),d=r(356),v=r(8095),y=r(6116),m=r(8033),x=r(7303),b=r(1899).set,w=r(1101),S=r(2183),T=r(3261),A=r(3647),O=r(2991),C=r(3676),P=r(4346),E=r(7305),M="Promise",N=P.CONSTRUCTOR,_=P.REJECTION_EVENT,R=P.SUBCLASSING,V=O.getterFor(M),I=O.set,k=C&&C.prototype,L=C,D=k,j=h.TypeError,B=h.document,F=h.process,z=E.f,U=z,H=!!(B&&B.createEvent&&h.dispatchEvent),X="unhandledrejection",Y=function(t){var e
return!(!y(t)||!v(e=t.then))&&e},q=function(t,e){var r,i,n,s=e.value,a=1===e.state,o=a?t.ok:t.fail,u=t.resolve,h=t.reject,l=t.domain
try{o?(a||(2===e.rejection&&Z(e),e.rejection=1),!0===o?r=s:(l&&l.enter(),r=o(s),l&&(l.exit(),n=!0)),r===t.promise?h(new j("Promise-chain cycle")):(i=Y(r))?c(i,r,u,h):u(r)):h(s)}catch(t){l&&!n&&l.exit(),h(t)}},W=function(t,e){t.notified||(t.notified=!0,w((function(){for(var r,i=t.reactions;r=i.get();)q(r,t)
t.notified=!1,e&&!t.rejection&&Q(t)})))},G=function(t,e,r){var i,n
H?((i=B.createEvent("Event")).promise=e,i.reason=r,i.initEvent(t,!1,!0),h.dispatchEvent(i)):i={promise:e,reason:r},!_&&(n=h["on"+t])?n(i):t===X&&S("Unhandled promise rejection",r)},Q=function(t){c(b,h,(function(){var e,r=t.facade,i=t.value
if($(t)&&(e=T((function(){u?F.emit("unhandledRejection",i,r):G(X,r,i)})),t.rejection=u||$(t)?2:1,e.error))throw e.value}))},$=function(t){return 1!==t.rejection&&!t.parent},Z=function(t){c(b,h,(function(){var e=t.facade
u?F.emit("rejectionHandled",e):G("rejectionhandled",e,t.value)}))},K=function(t,e,r){return function(i){t(e,i,r)}},J=function(t,e,r){t.done||(t.done=!0,r&&(t=r),t.value=e,t.state=2,W(t,!0))},tt=function(t,e,r){if(!t.done){t.done=!0,r&&(t=r)
try{if(t.facade===e)throw new j("Promise can't be resolved itself")
var i=Y(e)
i?w((function(){var r={done:!1}
try{c(i,e,K(tt,r,t),K(J,r,t))}catch(e){J(r,e,t)}})):(t.value=e,t.state=1,W(t,!1))}catch(e){J({done:!1},e,t)}}}
if(N&&(D=(L=function(t){m(this,D),d(t),c(i,this)
var e=V(this)
try{t(K(tt,e),K(J,e))}catch(t){J(e,t)}}).prototype,(i=function(t){I(this,{type:M,done:!1,notified:!1,parent:!1,reactions:new A,rejection:!1,state:0,value:void 0})}).prototype=l(D,"then",(function(t,e){var r=V(this),i=z(x(this,L))
return r.parent=!0,i.ok=!v(t)||t,i.fail=v(e)&&e,i.domain=u?F.domain:void 0,0===r.state?r.reactions.add(i):w((function(){q(i,r)})),i.promise})),n=function(){var t=new i,e=V(t)
this.promise=t,this.resolve=K(tt,e),this.reject=K(J,e)},E.f=z=function(t){return t===L||void 0===t?new n(t):U(t)},!o&&v(C)&&k!==Object.prototype)){s=k.then,R||l(k,"then",(function(t,e){var r=this
return new L((function(t,e){c(s,r,t,e)})).then(t,e)}),{unsafe:!0})
try{delete k.constructor}catch(t){}f&&f(k,D)}a({global:!0,constructor:!0,wrap:!0,forced:N},{Promise:L}),p(L,M,!1,!0),g(M)},5888:(t,e,r)=>{"use strict"
r(5934),r(1301),r(6893),r(5693),r(3163),r(8962)},5693:(t,e,r)=>{"use strict"
var i=r(7568),n=r(3155),s=r(356),a=r(7305),o=r(3261),u=r(9598)
i({target:"Promise",stat:!0,forced:r(7811)},{race:function(t){var e=this,r=a.f(e),i=r.reject,h=o((function(){var a=s(e.resolve)
u(t,(function(t){n(a,e,t).then(r.resolve,i)}))}))
return h.error&&i(h.value),r.promise}})},3163:(t,e,r)=>{"use strict"
var i=r(7568),n=r(7305)
i({target:"Promise",stat:!0,forced:r(4346).CONSTRUCTOR},{reject:function(t){var e=n.f(this)
return(0,e.reject)(t),e.promise}})},8962:(t,e,r)=>{"use strict"
var i=r(7568),n=r(1901),s=r(9385),a=r(3676),o=r(4346).CONSTRUCTOR,u=r(5248),h=n("Promise"),c=s&&!o
i({target:"Promise",stat:!0,forced:s||o},{resolve:function(t){return u(c&&this===h?a:this,t)}})},6777:(t,e,r)=>{"use strict"
var i=r(7568),n=r(9197)
i({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},8971:(t,e,r)=>{"use strict"
var i=r(4252).PROPER,n=r(9454),s=r(3817),a=r(3841),o=r(2565),u=r(8532),h="toString",c=RegExp.prototype,l=c[h],f=o((function(){return"/a/b"!==l.call({source:"a",flags:"b"})})),p=i&&l.name!==h;(f||p)&&n(c,h,(function(){var t=s(this)
return"/"+a(t.source)+"/"+a(u(t))}),{unsafe:!0})},3359:(t,e,r)=>{"use strict"
var i,n=r(7568),s=r(3390),a=r(325).f,o=r(6464),u=r(3841),h=r(1873),c=r(3972),l=r(8774),f=r(9385),p=s("".slice),g=Math.min,d=l("endsWith")
n({target:"String",proto:!0,forced:!(!f&&!d&&(i=a(String.prototype,"endsWith"),i&&!i.writable)||d)},{endsWith:function(t){var e=u(c(this))
h(t)
var r=arguments.length>1?arguments[1]:void 0,i=e.length,n=void 0===r?i:g(o(r),i),s=u(t)
return p(e,n-s.length,n)===s}})},4517:(t,e,r)=>{"use strict"
var i=r(7568),n=r(2374),s=r(1873),a=r(3972),o=r(3841),u=r(8774),h=n("".indexOf)
i({target:"String",proto:!0,forced:!u("includes")},{includes:function(t){return!!~h(o(a(this)),o(s(t)),arguments.length>1?arguments[1]:void 0)}})},7711:(t,e,r)=>{"use strict"
var i=r(3155),n=r(1738),s=r(3817),a=r(2579),o=r(6464),u=r(3841),h=r(3972),c=r(8720),l=r(6567),f=r(376)
n("match",(function(t,e,r){return[function(e){var r=h(this),n=a(e)?void 0:c(e,t)
return n?i(n,e,r):new RegExp(e)[t](u(r))},function(t){var i=s(this),n=u(t),a=r(e,i,n)
if(a.done)return a.value
if(!i.global)return f(i,n)
var h=i.unicode
i.lastIndex=0
for(var c,p=[],g=0;null!==(c=f(i,n));){var d=u(c[0])
p[g]=d,""===d&&(i.lastIndex=l(n,o(i.lastIndex),h)),g++}return 0===g?null:p}]}))},3842:(t,e,r)=>{"use strict"
var i=r(127),n=r(3155),s=r(2374),a=r(1738),o=r(2565),u=r(3817),h=r(8095),c=r(2579),l=r(4905),f=r(6464),p=r(3841),g=r(3972),d=r(6567),v=r(8720),y=r(4624),m=r(376),x=r(533)("replace"),b=Math.max,w=Math.min,S=s([].concat),T=s([].push),A=s("".indexOf),O=s("".slice),C="$0"==="a".replace(/./,"$0"),P=!!/./[x]&&""===/./[x]("a","$0")
a("replace",(function(t,e,r){var s=P?"$":"$0"
return[function(t,r){var i=g(this),s=c(t)?void 0:v(t,x)
return s?n(s,t,i,r):n(e,p(i),t,r)},function(t,n){var a=u(this),o=p(t)
if("string"==typeof n&&-1===A(n,s)&&-1===A(n,"$<")){var c=r(e,a,o,n)
if(c.done)return c.value}var g=h(n)
g||(n=p(n))
var v,x=a.global
x&&(v=a.unicode,a.lastIndex=0)
for(var C,P=[];null!==(C=m(a,o))&&(T(P,C),x);)""===p(C[0])&&(a.lastIndex=d(o,f(a.lastIndex),v))
for(var E,M="",N=0,_=0;_<P.length;_++){for(var R,V=p((C=P[_])[0]),I=b(w(l(C.index),o.length),0),k=[],L=1;L<C.length;L++)T(k,void 0===(E=C[L])?E:String(E))
var D=C.groups
if(g){var j=S([V],k,I,o)
void 0!==D&&T(j,D),R=p(i(n,void 0,j))}else R=y(V,o,I,k,D,n)
I>=N&&(M+=O(o,N,I)+R,N=I+V.length)}return M+O(o,N)}]}),!!o((function(){var t=/./
return t.exec=function(){var t=[]
return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}))||!C||P)},5462:(t,e,r)=>{"use strict"
var i=r(3155),n=r(2374),s=r(1738),a=r(3817),o=r(2579),u=r(3972),h=r(7303),c=r(6567),l=r(6464),f=r(3841),p=r(8720),g=r(376),d=r(3199),v=r(2565),y=d.UNSUPPORTED_Y,m=Math.min,x=n([].push),b=n("".slice),w=!v((function(){var t=/(?:)/,e=t.exec
t.exec=function(){return e.apply(this,arguments)}
var r="ab".split(t)
return 2!==r.length||"a"!==r[0]||"b"!==r[1]})),S="c"==="abbc".split(/(b)*/)[1]||4!=="test".split(/(?:)/,-1).length||2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length
s("split",(function(t,e,r){var n="0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:i(e,this,t,r)}:e
return[function(e,r){var s=u(this),a=o(e)?void 0:p(e,t)
return a?i(a,e,s,r):i(n,f(s),e,r)},function(t,i){var s=a(this),o=f(t)
if(!S){var u=r(n,s,o,i,n!==e)
if(u.done)return u.value}var p=h(s,RegExp),d=s.unicode,v=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(y?"g":"y"),w=new p(y?"^(?:"+s.source+")":s,v),T=void 0===i?4294967295:i>>>0
if(0===T)return[]
if(0===o.length)return null===g(w,o)?[o]:[]
for(var A=0,O=0,C=[];O<o.length;){w.lastIndex=y?0:O
var P,E=g(w,y?b(o,O):o)
if(null===E||(P=m(l(w.lastIndex+(y?O:0)),o.length))===A)O=c(o,O,d)
else{if(x(C,b(o,A,O)),C.length===T)return C
for(var M=1;M<=E.length-1;M++)if(x(C,E[M]),C.length===T)return C
O=A=P}}return x(C,b(o,A)),C}]}),S||!w,y)},7754:(t,e,r)=>{"use strict"
var i,n=r(7568),s=r(3390),a=r(325).f,o=r(6464),u=r(3841),h=r(1873),c=r(3972),l=r(8774),f=r(9385),p=s("".slice),g=Math.min,d=l("startsWith")
n({target:"String",proto:!0,forced:!(!f&&!d&&(i=a(String.prototype,"startsWith"),i&&!i.writable)||d)},{startsWith:function(t){var e=u(c(this))
h(t)
var r=o(g(arguments.length>1?arguments[1]:void 0,e.length)),i=u(t)
return p(e,r,r+i.length)===i}})},4148:(t,e,r)=>{"use strict"
var i=r(7568),n=r(3916).trim
i({target:"String",proto:!0,forced:r(6e3)("trim")},{trim:function(){return n(this)}})},8339:(t,e,r)=>{"use strict"
var i=r(8953),n=r(7414),s=r(6365),a=r(1950),o=r(6729),u=r(1889),h=r(533)("iterator"),c=a.values,l=function(t,e){if(t){if(t[h]!==c)try{o(t,h,c)}catch(e){t[h]=c}if(u(t,e,!0),n[e])for(var r in a)if(t[r]!==a[r])try{o(t,r,a[r])}catch(e){t[r]=a[r]}}}
for(var f in n)l(i[f]&&i[f].prototype,f)
l(s,"DOMTokenList")},2625:(t,e,r)=>{"use strict"
function i(t,e,r,i,n,s,a){try{var o=t[s](a),u=o.value}catch(t){return void r(t)}o.done?e(u):Promise.resolve(u).then(i,n)}function n(t){return function(){var e=this,r=arguments
return new Promise((function(n,s){var a=t.apply(e,r)
function o(t){i(a,n,s,o,u,"next",t)}function u(t){i(a,n,s,o,u,"throw",t)}o(void 0)}))}}r.r(e),r.d(e,{AElement:()=>ue,AnimateColorElement:()=>re,AnimateElement:()=>ee,AnimateTransformElement:()=>ie,BoundingBox:()=>Rt,CB1:()=>et,CB2:()=>rt,CB3:()=>it,CB4:()=>nt,Canvg:()=>Be,CircleElement:()=>Ut,ClipPathElement:()=>Oe,DefsElement:()=>Qt,DescElement:()=>Re,Document:()=>Le,Element:()=>Ct,EllipseElement:()=>Ht,FeColorMatrixElement:()=>Se,FeCompositeElement:()=>Me,FeDropShadowElement:()=>Pe,FeGaussianBlurElement:()=>Ne,FeMorphologyElement:()=>Ee,FilterElement:()=>Ce,Font:()=>_t,FontElement:()=>ne,FontFaceElement:()=>se,GElement:()=>$t,GlyphElement:()=>Lt,GradientElement:()=>Zt,ImageElement:()=>pe,LineElement:()=>Xt,LinearGradientElement:()=>Kt,MarkerElement:()=>Gt,MaskElement:()=>Te,Matrix:()=>wt,MissingGlyphElement:()=>ae,Mouse:()=>lt,PSEUDO_ZERO:()=>Z,Parser:()=>yt,PathElement:()=>kt,PathParser:()=>Vt,PatternElement:()=>Wt,Point:()=>ct,PolygonElement:()=>qt,PolylineElement:()=>Yt,Property:()=>ut,QB1:()=>st,QB2:()=>at,QB3:()=>ot,RadialGradientElement:()=>Jt,RectElement:()=>zt,RenderedElement:()=>It,Rotate:()=>xt,SVGElement:()=>Ft,SVGFontLoader:()=>de,Scale:()=>bt,Screen:()=>gt,Skew:()=>St,SkewX:()=>Tt,SkewY:()=>At,StopElement:()=>te,StyleElement:()=>ve,SymbolElement:()=>ge,TRefElement:()=>oe,TSpanElement:()=>jt,TextElement:()=>Dt,TextPathElement:()=>le,TitleElement:()=>_e,Transform:()=>Ot,Translate:()=>mt,UnknownElement:()=>Pt,UseElement:()=>ye,ViewPort:()=>ht,compressSpaces:()=>I,default:()=>Be,getSelectorSpecificity:()=>$,normalizeAttributeName:()=>B,normalizeColor:()=>z,parseExternalUrl:()=>F,presets:()=>V,toNumbers:()=>D,trimLeft:()=>k,trimRight:()=>L,vectorMagnitude:()=>K,vectorsAngle:()=>tt,vectorsRatio:()=>J}),r(5888),r(7711),r(3842),r(7754),r(1950),r(8339)
var s=r(7234)
function a(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=(0,s.A)(t)||!t)return t
var r=t[Symbol.toPrimitive]
if(void 0!==r){var i=r.call(t,"string")
if("object"!=(0,s.A)(i))return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t)
return"symbol"==(0,s.A)(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r(9954),r(3359),r(5462)
var o=r(9152),u=(r(4148),r(1925)),h=(r(5658),r(4517),r(1856),function(t,e){return(h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)})
function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null")
function r(){this.constructor=t}h(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}function l(t,e){var r=t[0],i=t[1]
return[r*Math.cos(e)-i*Math.sin(e),r*Math.sin(e)+i*Math.cos(e)]}function f(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
for(var r=0;r<t.length;r++)if("number"!=typeof t[r])throw new Error("assertNumbers arguments["+r+"] is not a number. "+typeof t[r]+" == typeof "+t[r])
return!0}var p=Math.PI
function g(t,e,r){t.lArcFlag=0===t.lArcFlag?0:1,t.sweepFlag=0===t.sweepFlag?0:1
var i=t.rX,n=t.rY,s=t.x,a=t.y
i=Math.abs(t.rX),n=Math.abs(t.rY)
var o=l([(e-s)/2,(r-a)/2],-t.xRot/180*p),u=o[0],h=o[1],c=Math.pow(u,2)/Math.pow(i,2)+Math.pow(h,2)/Math.pow(n,2)
1<c&&(i*=Math.sqrt(c),n*=Math.sqrt(c)),t.rX=i,t.rY=n
var f=Math.pow(i,2)*Math.pow(h,2)+Math.pow(n,2)*Math.pow(u,2),g=(t.lArcFlag!==t.sweepFlag?1:-1)*Math.sqrt(Math.max(0,(Math.pow(i,2)*Math.pow(n,2)-f)/f)),d=i*h/n*g,v=-n*u/i*g,y=l([d,v],t.xRot/180*p)
t.cX=y[0]+(e+s)/2,t.cY=y[1]+(r+a)/2,t.phi1=Math.atan2((h-v)/n,(u-d)/i),t.phi2=Math.atan2((-h-v)/n,(-u-d)/i),0===t.sweepFlag&&t.phi2>t.phi1&&(t.phi2-=2*p),1===t.sweepFlag&&t.phi2<t.phi1&&(t.phi2+=2*p),t.phi1*=180/p,t.phi2*=180/p}function d(t,e,r){f(t,e,r)
var i=t*t+e*e-r*r
if(0>i)return[]
if(0===i)return[[t*r/(t*t+e*e),e*r/(t*t+e*e)]]
var n=Math.sqrt(i)
return[[(t*r+e*n)/(t*t+e*e),(e*r-t*n)/(t*t+e*e)],[(t*r-e*n)/(t*t+e*e),(e*r+t*n)/(t*t+e*e)]]}var v,y=Math.PI/180
function m(t,e,r){return(1-r)*t+r*e}function x(t,e,r,i){return t+Math.cos(i/180*p)*e+Math.sin(i/180*p)*r}function b(t,e,r,i){var n=1e-6,s=e-t,a=r-e,o=3*s+3*(i-r)-6*a,u=6*(a-s),h=3*s
return Math.abs(o)<n?[-h/u]:function(t,e,r){void 0===r&&(r=1e-6)
var i=t*t/4-e
if(i<-r)return[]
if(i<=r)return[-t/2]
var n=Math.sqrt(i)
return[-t/2-n,-t/2+n]}(u/o,h/o,n)}function w(t,e,r,i,n){var s=1-n
return t*(s*s*s)+e*(3*s*s*n)+r*(3*s*n*n)+i*(n*n*n)}!function(t){function e(){return n((function(t,e,r){return t.relative&&(void 0!==t.x1&&(t.x1+=e),void 0!==t.y1&&(t.y1+=r),void 0!==t.x2&&(t.x2+=e),void 0!==t.y2&&(t.y2+=r),void 0!==t.x&&(t.x+=e),void 0!==t.y&&(t.y+=r),t.relative=!1),t}))}function r(){var t=NaN,e=NaN,r=NaN,i=NaN
return n((function(n,s,a){return n.type&P.SMOOTH_CURVE_TO&&(n.type=P.CURVE_TO,t=isNaN(t)?s:t,e=isNaN(e)?a:e,n.x1=n.relative?s-t:2*s-t,n.y1=n.relative?a-e:2*a-e),n.type&P.CURVE_TO?(t=n.relative?s+n.x2:n.x2,e=n.relative?a+n.y2:n.y2):(t=NaN,e=NaN),n.type&P.SMOOTH_QUAD_TO&&(n.type=P.QUAD_TO,r=isNaN(r)?s:r,i=isNaN(i)?a:i,n.x1=n.relative?s-r:2*s-r,n.y1=n.relative?a-i:2*a-i),n.type&P.QUAD_TO?(r=n.relative?s+n.x1:n.x1,i=n.relative?a+n.y1:n.y1):(r=NaN,i=NaN),n}))}function i(){var t=NaN,e=NaN
return n((function(r,i,n){if(r.type&P.SMOOTH_QUAD_TO&&(r.type=P.QUAD_TO,t=isNaN(t)?i:t,e=isNaN(e)?n:e,r.x1=r.relative?i-t:2*i-t,r.y1=r.relative?n-e:2*n-e),r.type&P.QUAD_TO){t=r.relative?i+r.x1:r.x1,e=r.relative?n+r.y1:r.y1
var s=r.x1,a=r.y1
r.type=P.CURVE_TO,r.x1=((r.relative?0:i)+2*s)/3,r.y1=((r.relative?0:n)+2*a)/3,r.x2=(r.x+2*s)/3,r.y2=(r.y+2*a)/3}else t=NaN,e=NaN
return r}))}function n(t){var e=0,r=0,i=NaN,n=NaN
return function(s){if(isNaN(i)&&!(s.type&P.MOVE_TO))throw new Error("path must start with moveto")
var a=t(s,e,r,i,n)
return s.type&P.CLOSE_PATH&&(e=i,r=n),void 0!==s.x&&(e=s.relative?e+s.x:s.x),void 0!==s.y&&(r=s.relative?r+s.y:s.y),s.type&P.MOVE_TO&&(i=e,n=r),a}}function s(t,e,r,i,s,a){return f(t,e,r,i,s,a),n((function(n,o,u,h){var c=n.x1,l=n.x2,f=n.relative&&!isNaN(h),p=void 0!==n.x?n.x:f?0:o,g=void 0!==n.y?n.y:f?0:u
function d(t){return t*t}n.type&P.HORIZ_LINE_TO&&0!==e&&(n.type=P.LINE_TO,n.y=n.relative?0:u),n.type&P.VERT_LINE_TO&&0!==r&&(n.type=P.LINE_TO,n.x=n.relative?0:o),void 0!==n.x&&(n.x=n.x*t+g*r+(f?0:s)),void 0!==n.y&&(n.y=p*e+n.y*i+(f?0:a)),void 0!==n.x1&&(n.x1=n.x1*t+n.y1*r+(f?0:s)),void 0!==n.y1&&(n.y1=c*e+n.y1*i+(f?0:a)),void 0!==n.x2&&(n.x2=n.x2*t+n.y2*r+(f?0:s)),void 0!==n.y2&&(n.y2=l*e+n.y2*i+(f?0:a))
var v=t*i-e*r
if(void 0!==n.xRot&&(1!==t||0!==e||0!==r||1!==i))if(0===v)delete n.rX,delete n.rY,delete n.xRot,delete n.lArcFlag,delete n.sweepFlag,n.type=P.LINE_TO
else{var y=n.xRot*Math.PI/180,m=Math.sin(y),x=Math.cos(y),b=1/d(n.rX),w=1/d(n.rY),S=d(x)*b+d(m)*w,T=2*m*x*(b-w),A=d(m)*b+d(x)*w,O=S*i*i-T*e*i+A*e*e,C=T*(t*i+e*r)-2*(S*r*i+A*t*e),E=S*r*r-T*t*r+A*t*t,M=(Math.atan2(C,O-E)+Math.PI)%Math.PI/2,N=Math.sin(M),_=Math.cos(M)
n.rX=Math.abs(v)/Math.sqrt(O*d(_)+C*N*_+E*d(N)),n.rY=Math.abs(v)/Math.sqrt(O*d(N)-C*N*_+E*d(_)),n.xRot=180*M/Math.PI}return void 0!==n.sweepFlag&&0>v&&(n.sweepFlag=+!n.sweepFlag),n}))}t.ROUND=function(t){function e(e){return Math.round(e*t)/t}return void 0===t&&(t=1e13),f(t),function(t){return void 0!==t.x1&&(t.x1=e(t.x1)),void 0!==t.y1&&(t.y1=e(t.y1)),void 0!==t.x2&&(t.x2=e(t.x2)),void 0!==t.y2&&(t.y2=e(t.y2)),void 0!==t.x&&(t.x=e(t.x)),void 0!==t.y&&(t.y=e(t.y)),void 0!==t.rX&&(t.rX=e(t.rX)),void 0!==t.rY&&(t.rY=e(t.rY)),t}},t.TO_ABS=e,t.TO_REL=function(){return n((function(t,e,r){return t.relative||(void 0!==t.x1&&(t.x1-=e),void 0!==t.y1&&(t.y1-=r),void 0!==t.x2&&(t.x2-=e),void 0!==t.y2&&(t.y2-=r),void 0!==t.x&&(t.x-=e),void 0!==t.y&&(t.y-=r),t.relative=!0),t}))},t.NORMALIZE_HVZ=function(t,e,r){return void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),n((function(i,n,s,a,o){if(isNaN(a)&&!(i.type&P.MOVE_TO))throw new Error("path must start with moveto")
return e&&i.type&P.HORIZ_LINE_TO&&(i.type=P.LINE_TO,i.y=i.relative?0:s),r&&i.type&P.VERT_LINE_TO&&(i.type=P.LINE_TO,i.x=i.relative?0:n),t&&i.type&P.CLOSE_PATH&&(i.type=P.LINE_TO,i.x=i.relative?a-n:a,i.y=i.relative?o-s:o),i.type&P.ARC&&(0===i.rX||0===i.rY)&&(i.type=P.LINE_TO,delete i.rX,delete i.rY,delete i.xRot,delete i.lArcFlag,delete i.sweepFlag),i}))},t.NORMALIZE_ST=r,t.QT_TO_C=i,t.INFO=n,t.SANITIZE=function(t){void 0===t&&(t=0),f(t)
var e=NaN,r=NaN,i=NaN,s=NaN
return n((function(n,a,o,u,h){var c=Math.abs,l=!1,f=0,p=0
if(n.type&P.SMOOTH_CURVE_TO&&(f=isNaN(e)?0:a-e,p=isNaN(r)?0:o-r),n.type&(P.CURVE_TO|P.SMOOTH_CURVE_TO)?(e=n.relative?a+n.x2:n.x2,r=n.relative?o+n.y2:n.y2):(e=NaN,r=NaN),n.type&P.SMOOTH_QUAD_TO?(i=isNaN(i)?a:2*a-i,s=isNaN(s)?o:2*o-s):n.type&P.QUAD_TO?(i=n.relative?a+n.x1:n.x1,s=n.relative?o+n.y1:n.y2):(i=NaN,s=NaN),n.type&P.LINE_COMMANDS||n.type&P.ARC&&(0===n.rX||0===n.rY||!n.lArcFlag)||n.type&P.CURVE_TO||n.type&P.SMOOTH_CURVE_TO||n.type&P.QUAD_TO||n.type&P.SMOOTH_QUAD_TO){var g=void 0===n.x?0:n.relative?n.x:n.x-a,d=void 0===n.y?0:n.relative?n.y:n.y-o
f=isNaN(i)?void 0===n.x1?f:n.relative?n.x:n.x1-a:i-a,p=isNaN(s)?void 0===n.y1?p:n.relative?n.y:n.y1-o:s-o
var v=void 0===n.x2?0:n.relative?n.x:n.x2-a,y=void 0===n.y2?0:n.relative?n.y:n.y2-o
c(g)<=t&&c(d)<=t&&c(f)<=t&&c(p)<=t&&c(v)<=t&&c(y)<=t&&(l=!0)}return n.type&P.CLOSE_PATH&&c(a-u)<=t&&c(o-h)<=t&&(l=!0),l?[]:n}))},t.MATRIX=s,t.ROTATE=function(t,e,r){void 0===e&&(e=0),void 0===r&&(r=0),f(t,e,r)
var i=Math.sin(t),n=Math.cos(t)
return s(n,i,-i,n,e-e*n+r*i,r-e*i-r*n)},t.TRANSLATE=function(t,e){return void 0===e&&(e=0),f(t,e),s(1,0,0,1,t,e)},t.SCALE=function(t,e){return void 0===e&&(e=t),f(t,e),s(t,0,0,e,0,0)},t.SKEW_X=function(t){return f(t),s(1,0,Math.atan(t),1,0,0)},t.SKEW_Y=function(t){return f(t),s(1,Math.atan(t),0,1,0,0)},t.X_AXIS_SYMMETRY=function(t){return void 0===t&&(t=0),f(t),s(-1,0,0,1,t,0)},t.Y_AXIS_SYMMETRY=function(t){return void 0===t&&(t=0),f(t),s(1,0,0,-1,0,t)},t.A_TO_C=function(){return n((function(t,e,r){return P.ARC===t.type?function(t,e,r){var i,n,s,a
t.cX||g(t,e,r)
for(var o=Math.min(t.phi1,t.phi2),u=Math.max(t.phi1,t.phi2)-o,h=Math.ceil(u/90),c=new Array(h),f=e,p=r,d=0;d<h;d++){var v=m(t.phi1,t.phi2,d/h),x=m(t.phi1,t.phi2,(d+1)/h),b=x-v,w=4/3*Math.tan(b*y/4),S=[Math.cos(v*y)-w*Math.sin(v*y),Math.sin(v*y)+w*Math.cos(v*y)],T=S[0],A=S[1],O=[Math.cos(x*y),Math.sin(x*y)],C=O[0],E=O[1],M=[C+w*Math.sin(x*y),E-w*Math.cos(x*y)],N=M[0],_=M[1]
c[d]={relative:t.relative,type:P.CURVE_TO}
var R=function(e,r){var i=l([e*t.rX,r*t.rY],t.xRot),n=i[0],s=i[1]
return[t.cX+n,t.cY+s]}
i=R(T,A),c[d].x1=i[0],c[d].y1=i[1],n=R(N,_),c[d].x2=n[0],c[d].y2=n[1],s=R(C,E),c[d].x=s[0],c[d].y=s[1],t.relative&&(c[d].x1-=f,c[d].y1-=p,c[d].x2-=f,c[d].y2-=p,c[d].x-=f,c[d].y-=p),f=(a=[c[d].x,c[d].y])[0],p=a[1]}return c}(t,t.relative?0:e,t.relative?0:r):t}))},t.ANNOTATE_ARCS=function(){return n((function(t,e,r){return t.relative&&(e=0,r=0),P.ARC===t.type&&g(t,e,r),t}))},t.CLONE=function(){return function(t){var e={}
for(var r in t)e[r]=t[r]
return e}},t.CALCULATE_BOUNDS=function(){var t=e(),s=i(),a=r(),o=n((function(e,r,i){var n=a(s(t(function(t){var e={}
for(var r in t)e[r]=t[r]
return e}(e))))
function u(t){t>o.maxX&&(o.maxX=t),t<o.minX&&(o.minX=t)}function h(t){t>o.maxY&&(o.maxY=t),t<o.minY&&(o.minY=t)}if(n.type&P.DRAWING_COMMANDS&&(u(r),h(i)),n.type&P.HORIZ_LINE_TO&&u(n.x),n.type&P.VERT_LINE_TO&&h(n.y),n.type&P.LINE_TO&&(u(n.x),h(n.y)),n.type&P.CURVE_TO){u(n.x),h(n.y)
for(var c=0,l=b(r,n.x1,n.x2,n.x);c<l.length;c++)0<(V=l[c])&&1>V&&u(w(r,n.x1,n.x2,n.x,V))
for(var f=0,p=b(i,n.y1,n.y2,n.y);f<p.length;f++)0<(V=p[f])&&1>V&&h(w(i,n.y1,n.y2,n.y,V))}if(n.type&P.ARC){u(n.x),h(n.y),g(n,r,i)
for(var v=n.xRot/180*Math.PI,y=Math.cos(v)*n.rX,m=Math.sin(v)*n.rX,S=-Math.sin(v)*n.rY,T=Math.cos(v)*n.rY,A=n.phi1<n.phi2?[n.phi1,n.phi2]:-180>n.phi2?[n.phi2+360,n.phi1+360]:[n.phi2,n.phi1],O=A[0],C=A[1],E=function(t){var e=t[0],r=t[1],i=180*Math.atan2(r,e)/Math.PI
return i<O?i+360:i},M=0,N=d(S,-y,0).map(E);M<N.length;M++)(V=N[M])>O&&V<C&&u(x(n.cX,y,S,V))
for(var _=0,R=d(T,-m,0).map(E);_<R.length;_++){var V;(V=R[_])>O&&V<C&&h(x(n.cY,m,T,V))}}return e}))
return o.minX=1/0,o.maxX=-1/0,o.minY=1/0,o.maxY=-1/0,o}}(v||(v={}))
var S,T=function(){function t(){}return t.prototype.round=function(t){return this.transform(v.ROUND(t))},t.prototype.toAbs=function(){return this.transform(v.TO_ABS())},t.prototype.toRel=function(){return this.transform(v.TO_REL())},t.prototype.normalizeHVZ=function(t,e,r){return this.transform(v.NORMALIZE_HVZ(t,e,r))},t.prototype.normalizeST=function(){return this.transform(v.NORMALIZE_ST())},t.prototype.qtToC=function(){return this.transform(v.QT_TO_C())},t.prototype.aToC=function(){return this.transform(v.A_TO_C())},t.prototype.sanitize=function(t){return this.transform(v.SANITIZE(t))},t.prototype.translate=function(t,e){return this.transform(v.TRANSLATE(t,e))},t.prototype.scale=function(t,e){return this.transform(v.SCALE(t,e))},t.prototype.rotate=function(t,e,r){return this.transform(v.ROTATE(t,e,r))},t.prototype.matrix=function(t,e,r,i,n,s){return this.transform(v.MATRIX(t,e,r,i,n,s))},t.prototype.skewX=function(t){return this.transform(v.SKEW_X(t))},t.prototype.skewY=function(t){return this.transform(v.SKEW_Y(t))},t.prototype.xSymmetry=function(t){return this.transform(v.X_AXIS_SYMMETRY(t))},t.prototype.ySymmetry=function(t){return this.transform(v.Y_AXIS_SYMMETRY(t))},t.prototype.annotateArcs=function(){return this.transform(v.ANNOTATE_ARCS())},t}(),A=function(t){return" "===t||"\t"===t||"\r"===t||"\n"===t},O=function(t){return"0".charCodeAt(0)<=t.charCodeAt(0)&&t.charCodeAt(0)<="9".charCodeAt(0)},C=function(t){function e(){var e=t.call(this)||this
return e.curNumber="",e.curCommandType=-1,e.curCommandRelative=!1,e.canParseCommandOrComma=!0,e.curNumberHasExp=!1,e.curNumberHasExpDigits=!1,e.curNumberHasDecimal=!1,e.curArgs=[],e}return c(e,t),e.prototype.finish=function(t){if(void 0===t&&(t=[]),this.parse(" ",t),0!==this.curArgs.length||!this.canParseCommandOrComma)throw new SyntaxError("Unterminated command at the path end.")
return t},e.prototype.parse=function(t,e){var r=this
void 0===e&&(e=[])
for(var i=function(t){e.push(t),r.curArgs.length=0,r.canParseCommandOrComma=!0},n=0;n<t.length;n++){var s=t[n],a=!(this.curCommandType!==P.ARC||3!==this.curArgs.length&&4!==this.curArgs.length||1!==this.curNumber.length||"0"!==this.curNumber&&"1"!==this.curNumber),o=O(s)&&("0"===this.curNumber&&"0"===s||a)
if(!O(s)||o)if("e"!==s&&"E"!==s)if("-"!==s&&"+"!==s||!this.curNumberHasExp||this.curNumberHasExpDigits)if("."!==s||this.curNumberHasExp||this.curNumberHasDecimal||a){if(this.curNumber&&-1!==this.curCommandType){var u=Number(this.curNumber)
if(isNaN(u))throw new SyntaxError("Invalid number ending at "+n)
if(this.curCommandType===P.ARC)if(0===this.curArgs.length||1===this.curArgs.length){if(0>u)throw new SyntaxError('Expected positive number, got "'+u+'" at index "'+n+'"')}else if((3===this.curArgs.length||4===this.curArgs.length)&&"0"!==this.curNumber&&"1"!==this.curNumber)throw new SyntaxError('Expected a flag, got "'+this.curNumber+'" at index "'+n+'"')
this.curArgs.push(u),this.curArgs.length===E[this.curCommandType]&&(P.HORIZ_LINE_TO===this.curCommandType?i({type:P.HORIZ_LINE_TO,relative:this.curCommandRelative,x:u}):P.VERT_LINE_TO===this.curCommandType?i({type:P.VERT_LINE_TO,relative:this.curCommandRelative,y:u}):this.curCommandType===P.MOVE_TO||this.curCommandType===P.LINE_TO||this.curCommandType===P.SMOOTH_QUAD_TO?(i({type:this.curCommandType,relative:this.curCommandRelative,x:this.curArgs[0],y:this.curArgs[1]}),P.MOVE_TO===this.curCommandType&&(this.curCommandType=P.LINE_TO)):this.curCommandType===P.CURVE_TO?i({type:P.CURVE_TO,relative:this.curCommandRelative,x1:this.curArgs[0],y1:this.curArgs[1],x2:this.curArgs[2],y2:this.curArgs[3],x:this.curArgs[4],y:this.curArgs[5]}):this.curCommandType===P.SMOOTH_CURVE_TO?i({type:P.SMOOTH_CURVE_TO,relative:this.curCommandRelative,x2:this.curArgs[0],y2:this.curArgs[1],x:this.curArgs[2],y:this.curArgs[3]}):this.curCommandType===P.QUAD_TO?i({type:P.QUAD_TO,relative:this.curCommandRelative,x1:this.curArgs[0],y1:this.curArgs[1],x:this.curArgs[2],y:this.curArgs[3]}):this.curCommandType===P.ARC&&i({type:P.ARC,relative:this.curCommandRelative,rX:this.curArgs[0],rY:this.curArgs[1],xRot:this.curArgs[2],lArcFlag:this.curArgs[3],sweepFlag:this.curArgs[4],x:this.curArgs[5],y:this.curArgs[6]})),this.curNumber="",this.curNumberHasExpDigits=!1,this.curNumberHasExp=!1,this.curNumberHasDecimal=!1,this.canParseCommandOrComma=!0}if(!A(s))if(","===s&&this.canParseCommandOrComma)this.canParseCommandOrComma=!1
else if("+"!==s&&"-"!==s&&"."!==s)if(o)this.curNumber=s,this.curNumberHasDecimal=!1
else{if(0!==this.curArgs.length)throw new SyntaxError("Unterminated command at index "+n+".")
if(!this.canParseCommandOrComma)throw new SyntaxError('Unexpected character "'+s+'" at index '+n+". Command cannot follow comma")
if(this.canParseCommandOrComma=!1,"z"!==s&&"Z"!==s)if("h"===s||"H"===s)this.curCommandType=P.HORIZ_LINE_TO,this.curCommandRelative="h"===s
else if("v"===s||"V"===s)this.curCommandType=P.VERT_LINE_TO,this.curCommandRelative="v"===s
else if("m"===s||"M"===s)this.curCommandType=P.MOVE_TO,this.curCommandRelative="m"===s
else if("l"===s||"L"===s)this.curCommandType=P.LINE_TO,this.curCommandRelative="l"===s
else if("c"===s||"C"===s)this.curCommandType=P.CURVE_TO,this.curCommandRelative="c"===s
else if("s"===s||"S"===s)this.curCommandType=P.SMOOTH_CURVE_TO,this.curCommandRelative="s"===s
else if("q"===s||"Q"===s)this.curCommandType=P.QUAD_TO,this.curCommandRelative="q"===s
else if("t"===s||"T"===s)this.curCommandType=P.SMOOTH_QUAD_TO,this.curCommandRelative="t"===s
else{if("a"!==s&&"A"!==s)throw new SyntaxError('Unexpected character "'+s+'" at index '+n+".")
this.curCommandType=P.ARC,this.curCommandRelative="a"===s}else e.push({type:P.CLOSE_PATH}),this.canParseCommandOrComma=!0,this.curCommandType=-1}else this.curNumber=s,this.curNumberHasDecimal="."===s}else this.curNumber+=s,this.curNumberHasDecimal=!0
else this.curNumber+=s
else this.curNumber+=s,this.curNumberHasExp=!0
else this.curNumber+=s,this.curNumberHasExpDigits=this.curNumberHasExp}return e},e.prototype.transform=function(t){return Object.create(this,{parse:{value:function(e,r){void 0===r&&(r=[])
for(var i=0,n=Object.getPrototypeOf(this).parse.call(this,e);i<n.length;i++){var s=n[i],a=t(s)
Array.isArray(a)?r.push.apply(r,a):r.push(a)}return r}}})},e}(T),P=function(t){function e(r){var i=t.call(this)||this
return i.commands="string"==typeof r?e.parse(r):r,i}return c(e,t),e.prototype.encode=function(){return e.encode(this.commands)},e.prototype.getBounds=function(){var t=v.CALCULATE_BOUNDS()
return this.transform(t),t},e.prototype.transform=function(t){for(var e=[],r=0,i=this.commands;r<i.length;r++){var n=t(i[r])
Array.isArray(n)?e.push.apply(e,n):e.push(n)}return this.commands=e,this},e.encode=function(t){return function(t){var e=""
Array.isArray(t)||(t=[t])
for(var r=0;r<t.length;r++){var i=t[r]
if(i.type===P.CLOSE_PATH)e+="z"
else if(i.type===P.HORIZ_LINE_TO)e+=(i.relative?"h":"H")+i.x
else if(i.type===P.VERT_LINE_TO)e+=(i.relative?"v":"V")+i.y
else if(i.type===P.MOVE_TO)e+=(i.relative?"m":"M")+i.x+" "+i.y
else if(i.type===P.LINE_TO)e+=(i.relative?"l":"L")+i.x+" "+i.y
else if(i.type===P.CURVE_TO)e+=(i.relative?"c":"C")+i.x1+" "+i.y1+" "+i.x2+" "+i.y2+" "+i.x+" "+i.y
else if(i.type===P.SMOOTH_CURVE_TO)e+=(i.relative?"s":"S")+i.x2+" "+i.y2+" "+i.x+" "+i.y
else if(i.type===P.QUAD_TO)e+=(i.relative?"q":"Q")+i.x1+" "+i.y1+" "+i.x+" "+i.y
else if(i.type===P.SMOOTH_QUAD_TO)e+=(i.relative?"t":"T")+i.x+" "+i.y
else{if(i.type!==P.ARC)throw new Error('Unexpected command type "'+i.type+'" at index '+r+".")
e+=(i.relative?"a":"A")+i.rX+" "+i.rY+" "+i.xRot+" "+ +i.lArcFlag+" "+ +i.sweepFlag+" "+i.x+" "+i.y}}return e}(t)},e.parse=function(t){var e=new C,r=[]
return e.parse(t,r),e.finish(r),r},e.CLOSE_PATH=1,e.MOVE_TO=2,e.HORIZ_LINE_TO=4,e.VERT_LINE_TO=8,e.LINE_TO=16,e.CURVE_TO=32,e.SMOOTH_CURVE_TO=64,e.QUAD_TO=128,e.SMOOTH_QUAD_TO=256,e.ARC=512,e.LINE_COMMANDS=e.LINE_TO|e.HORIZ_LINE_TO|e.VERT_LINE_TO,e.DRAWING_COMMANDS=e.HORIZ_LINE_TO|e.VERT_LINE_TO|e.LINE_TO|e.CURVE_TO|e.SMOOTH_CURVE_TO|e.QUAD_TO|e.SMOOTH_QUAD_TO|e.ARC,e}(T),E=((S={})[P.MOVE_TO]=2,S[P.LINE_TO]=2,S[P.HORIZ_LINE_TO]=1,S[P.VERT_LINE_TO]=1,S[P.CLOSE_PATH]=0,S[P.QUAD_TO]=4,S[P.SMOOTH_QUAD_TO]=2,S[P.CURVE_TO]=6,S[P.SMOOTH_CURVE_TO]=4,S[P.ARC]=7,S)
function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}r(8971)
var N=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],_=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24]
var R=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.r=0,this.g=0,this.b=0,this.a=0,this.next=null},V=Object.freeze({__proto__:null,offscreen:function(){var{DOMParser:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e={window:null,ignoreAnimation:!0,ignoreMouse:!0,DOMParser:t,createCanvas:(t,e)=>new OffscreenCanvas(t,e),createImage:t=>n((function*(){var e=yield fetch(t),r=yield e.blob()
return yield createImageBitmap(r)}))()}
return"undefined"==typeof DOMParser&&void 0!==t||Reflect.deleteProperty(e,"DOMParser"),e},node:function(t){var{DOMParser:e,canvas:r,fetch:i}=t
return{window:null,ignoreAnimation:!0,ignoreMouse:!0,DOMParser:e,fetch:i,createCanvas:r.createCanvas,createImage:r.loadImage}}})
function I(t){return t.replace(/(?!\u3000)\s+/gm," ")}function k(t){return t.replace(/^[\n \t]+/,"")}function L(t){return t.replace(/[\n \t]+$/,"")}function D(t){return((t||"").match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm)||[]).map(parseFloat)}var j=/^[A-Z-]+$/
function B(t){return j.test(t)?t.toLowerCase():t}function F(t){var e=/url\(('([^']+)'|"([^"]+)"|([^'")]+))\)/.exec(t)||[]
return e[2]||e[3]||e[4]}function z(t){if(!t.startsWith("rgb"))return t
var e=3
return t.replace(/\d+(\.\d+)?/g,((t,r)=>e--&&r?String(Math.round(parseFloat(t))):t))}var U=/(\[[^\]]+\])/g,H=/(#[^\s+>~.[:]+)/g,X=/(\.[^\s+>~.[:]+)/g,Y=/(::[^\s+>~.[:]+|:first-line|:first-letter|:before|:after)/gi,q=/(:[\w-]+\([^)]*\))/gi,W=/(:[^\s+>~.[:]+)/g,G=/([^\s+>~.[:]+)/g
function Q(t,e){var r=e.exec(t)
return r?[t.replace(e," "),r.length]:[t,0]}function $(t){var e=[0,0,0],r=t.replace(/:not\(([^)]*)\)/g,"     $1 ").replace(/{[\s\S]*/gm," "),i=0
return[r,i]=Q(r,U),e[1]+=i,[r,i]=Q(r,H),e[0]+=i,[r,i]=Q(r,X),e[1]+=i,[r,i]=Q(r,Y),e[2]+=i,[r,i]=Q(r,q),e[1]+=i,[r,i]=Q(r,W),e[1]+=i,r=r.replace(/[*\s+>~]/g," ").replace(/[#.]/g," "),[r,i]=Q(r,G),e[2]+=i,e.join("")}var Z=1e-8
function K(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2))}function J(t,e){return(t[0]*e[0]+t[1]*e[1])/(K(t)*K(e))}function tt(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(J(t,e))}function et(t){return t*t*t}function rt(t){return 3*t*t*(1-t)}function it(t){return 3*t*(1-t)*(1-t)}function nt(t){return(1-t)*(1-t)*(1-t)}function st(t){return t*t}function at(t){return 2*t*(1-t)}function ot(t){return(1-t)*(1-t)}class ut{constructor(t,e,r){this.document=t,this.name=e,this.value=r,this.isNormalizedColor=!1}static empty(t){return new ut(t,"EMPTY","")}split(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:" ",{document:e,name:r}=this
return I(this.getString()).trim().split(t).map((t=>new ut(e,r,t)))}hasValue(t){var{value:e}=this
return null!==e&&""!==e&&(t||0!==e)&&void 0!==e}isString(t){var{value:e}=this,r="string"==typeof e
return r&&t?t.test(e):r}isUrlDefinition(){return this.isString(/^url\(/)}isPixels(){if(!this.hasValue())return!1
var t=this.getString()
switch(!0){case t.endsWith("px"):case/^[0-9]+$/.test(t):return!0
default:return!1}}setValue(t){return this.value=t,this}getValue(t){return void 0===t||this.hasValue()?this.value:t}getNumber(t){if(!this.hasValue())return void 0===t?0:parseFloat(t)
var{value:e}=this,r=parseFloat(e)
return this.isString(/%$/)&&(r/=100),r}getString(t){return void 0===t||this.hasValue()?void 0===this.value?"":String(this.value):String(t)}getColor(t){var e=this.getString(t)
return this.isNormalizedColor||(this.isNormalizedColor=!0,e=z(e),this.value=e),e}getDpi(){return 96}getRem(){return this.document.rootEmSize}getEm(){return this.document.emSize}getUnits(){return this.getString().replace(/[0-9.-]/g,"")}getPixels(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
if(!this.hasValue())return 0
var[r,i]="boolean"==typeof t?[void 0,t]:[t],{viewPort:n}=this.document.screen
switch(!0){case this.isString(/vmin$/):return this.getNumber()/100*Math.min(n.computeSize("x"),n.computeSize("y"))
case this.isString(/vmax$/):return this.getNumber()/100*Math.max(n.computeSize("x"),n.computeSize("y"))
case this.isString(/vw$/):return this.getNumber()/100*n.computeSize("x")
case this.isString(/vh$/):return this.getNumber()/100*n.computeSize("y")
case this.isString(/rem$/):return this.getNumber()*this.getRem()
case this.isString(/em$/):return this.getNumber()*this.getEm()
case this.isString(/ex$/):return this.getNumber()*this.getEm()/2
case this.isString(/px$/):return this.getNumber()
case this.isString(/pt$/):return this.getNumber()*this.getDpi()*(1/72)
case this.isString(/pc$/):return 15*this.getNumber()
case this.isString(/cm$/):return this.getNumber()*this.getDpi()/2.54
case this.isString(/mm$/):return this.getNumber()*this.getDpi()/25.4
case this.isString(/in$/):return this.getNumber()*this.getDpi()
case this.isString(/%$/)&&i:return this.getNumber()*this.getEm()
case this.isString(/%$/):return this.getNumber()*n.computeSize(r)
default:var s=this.getNumber()
return e&&s<1?s*n.computeSize(r):s}}getMilliseconds(){return this.hasValue()?this.isString(/ms$/)?this.getNumber():1e3*this.getNumber():0}getRadians(){if(!this.hasValue())return 0
switch(!0){case this.isString(/deg$/):return this.getNumber()*(Math.PI/180)
case this.isString(/grad$/):return this.getNumber()*(Math.PI/200)
case this.isString(/rad$/):return this.getNumber()
default:return this.getNumber()*(Math.PI/180)}}getDefinition(){var t=this.getString(),e=/#([^)'"]+)/.exec(t)
return e&&(e=e[1]),e||(e=t),this.document.definitions[e]}getFillStyleDefinition(t,e){var r=this.getDefinition()
if(!r)return null
if("function"==typeof r.createGradient)return r.createGradient(this.document.ctx,t,e)
if("function"==typeof r.createPattern){if(r.getHrefAttribute().hasValue()){var i=r.getAttribute("patternTransform")
r=r.getHrefAttribute().getDefinition(),i.hasValue()&&r.getAttribute("patternTransform",!0).setValue(i.value)}return r.createPattern(this.document.ctx,t,e)}return null}getTextBaseline(){return this.hasValue()?ut.textBaselineMapping[this.getString()]:null}addOpacity(t){for(var e=this.getColor(),r=e.length,i=0,n=0;n<r&&(","===e[n]&&i++,3!==i);n++);if(t.hasValue()&&this.isString()&&3!==i){var s=new u(e)
s.ok&&(s.alpha=t.getNumber(),e=s.toRGBA())}return new ut(this.document,this.name,e)}}ut.textBaselineMapping={baseline:"alphabetic","before-edge":"top","text-before-edge":"top",middle:"middle",central:"middle","after-edge":"bottom","text-after-edge":"bottom",ideographic:"ideographic",alphabetic:"alphabetic",hanging:"hanging",mathematical:"alphabetic"}
class ht{constructor(){this.viewPorts=[]}clear(){this.viewPorts=[]}setCurrent(t,e){this.viewPorts.push({width:t,height:e})}removeCurrent(){this.viewPorts.pop()}getCurrent(){var{viewPorts:t}=this
return t[t.length-1]}get width(){return this.getCurrent().width}get height(){return this.getCurrent().height}computeSize(t){return"number"==typeof t?t:"x"===t?this.width:"y"===t?this.height:Math.sqrt(Math.pow(this.width,2)+Math.pow(this.height,2))/Math.sqrt(2)}}class ct{constructor(t,e){this.x=t,this.y=e}static parse(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,[r=e,i=e]=D(t)
return new ct(r,i)}static parseScale(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,[r=e,i=r]=D(t)
return new ct(r,i)}static parsePath(t){for(var e=D(t),r=e.length,i=[],n=0;n<r;n+=2)i.push(new ct(e[n],e[n+1]))
return i}angleTo(t){return Math.atan2(t.y-this.y,t.x-this.x)}applyTransform(t){var{x:e,y:r}=this,i=e*t[0]+r*t[2]+t[4],n=e*t[1]+r*t[3]+t[5]
this.x=i,this.y=n}}class lt{constructor(t){this.screen=t,this.working=!1,this.events=[],this.eventElements=[],this.onClick=this.onClick.bind(this),this.onMouseMove=this.onMouseMove.bind(this)}isWorking(){return this.working}start(){if(!this.working){var{screen:t,onClick:e,onMouseMove:r}=this,i=t.ctx.canvas
i.onclick=e,i.onmousemove=r,this.working=!0}}stop(){if(this.working){var t=this.screen.ctx.canvas
this.working=!1,t.onclick=null,t.onmousemove=null}}hasEvents(){return this.working&&this.events.length>0}runEvents(){if(this.working){var{screen:t,events:e,eventElements:r}=this,{style:i}=t.ctx.canvas
i&&(i.cursor=""),e.forEach(((t,e)=>{for(var{run:i}=t,n=r[e];n;)i(n),n=n.parent})),this.events=[],this.eventElements=[]}}checkPath(t,e){if(this.working&&e){var{events:r,eventElements:i}=this
r.forEach(((r,n)=>{var{x:s,y:a}=r
!i[n]&&e.isPointInPath&&e.isPointInPath(s,a)&&(i[n]=t)}))}}checkBoundingBox(t,e){if(this.working&&e){var{events:r,eventElements:i}=this
r.forEach(((r,n)=>{var{x:s,y:a}=r
!i[n]&&e.isPointInBox(s,a)&&(i[n]=t)}))}}mapXY(t,e){for(var{window:r,ctx:i}=this.screen,n=new ct(t,e),s=i.canvas;s;)n.x-=s.offsetLeft,n.y-=s.offsetTop,s=s.offsetParent
return r.scrollX&&(n.x+=r.scrollX),r.scrollY&&(n.y+=r.scrollY),n}onClick(t){var{x:e,y:r}=this.mapXY(t.clientX,t.clientY)
this.events.push({type:"onclick",x:e,y:r,run(t){t.onClick&&t.onClick()}})}onMouseMove(t){var{x:e,y:r}=this.mapXY(t.clientX,t.clientY)
this.events.push({type:"onmousemove",x:e,y:r,run(t){t.onMouseMove&&t.onMouseMove()}})}}var ft="undefined"!=typeof window?window:null,pt="undefined"!=typeof fetch?fetch.bind(void 0):null
class gt{constructor(t){var{fetch:e=pt,window:r=ft}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
this.ctx=t,this.FRAMERATE=30,this.MAX_VIRTUAL_PIXELS=3e4,this.CLIENT_WIDTH=800,this.CLIENT_HEIGHT=600,this.viewPort=new ht,this.mouse=new lt(this),this.animations=[],this.waits=[],this.frameDuration=0,this.isReadyLock=!1,this.isFirstRender=!0,this.intervalId=null,this.window=r,this.fetch=e}wait(t){this.waits.push(t)}ready(){return this.readyPromise?this.readyPromise:Promise.resolve()}isReady(){if(this.isReadyLock)return!0
var t=this.waits.every((t=>t()))
return t&&(this.waits=[],this.resolveReady&&this.resolveReady()),this.isReadyLock=t,t}setDefaults(t){t.strokeStyle="rgba(0,0,0,0)",t.lineCap="butt",t.lineJoin="miter",t.miterLimit=4}setViewBox(t){var{document:e,ctx:r,aspectRatio:i,width:n,desiredWidth:s,height:a,desiredHeight:o,minX:u=0,minY:h=0,refX:c,refY:l,clip:f=!1,clipX:p=0,clipY:g=0}=t,d=I(i).replace(/^defer\s/,""),[v,y]=d.split(" "),m=v||"xMidYMid",x=y||"meet",b=n/s,w=a/o,S=Math.min(b,w),T=Math.max(b,w),A=s,O=o
"meet"===x&&(A*=S,O*=S),"slice"===x&&(A*=T,O*=T)
var C=new ut(e,"refX",c),P=new ut(e,"refY",l),E=C.hasValue()&&P.hasValue()
if(E&&r.translate(-S*C.getPixels("x"),-S*P.getPixels("y")),f){var M=S*p,N=S*g
r.beginPath(),r.moveTo(M,N),r.lineTo(n,N),r.lineTo(n,a),r.lineTo(M,a),r.closePath(),r.clip()}if(!E){var _="meet"===x&&S===w,R="slice"===x&&T===w,V="meet"===x&&S===b,k="slice"===x&&T===b
m.startsWith("xMid")&&(_||R)&&r.translate(n/2-A/2,0),m.endsWith("YMid")&&(V||k)&&r.translate(0,a/2-O/2),m.startsWith("xMax")&&(_||R)&&r.translate(n-A,0),m.endsWith("YMax")&&(V||k)&&r.translate(0,a-O)}switch(!0){case"none"===m:r.scale(b,w)
break
case"meet"===x:r.scale(S,S)
break
case"slice"===x:r.scale(T,T)}r.translate(-u,-h)}start(t){var{enableRedraw:e=!1,ignoreMouse:r=!1,ignoreAnimation:i=!1,ignoreDimensions:n=!1,ignoreClear:s=!1,forceRedraw:a,scaleWidth:u,scaleHeight:h,offsetX:c,offsetY:l}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{FRAMERATE:f,mouse:p}=this,g=1e3/f
if(this.frameDuration=g,this.readyPromise=new Promise((t=>{this.resolveReady=t})),this.isReady()&&this.render(t,n,s,u,h,c,l),e){var d=Date.now(),v=d,y=0,m=()=>{d=Date.now(),(y=d-v)>=g&&(v=d-y%g,this.shouldUpdate(i,a)&&(this.render(t,n,s,u,h,c,l),p.runEvents())),this.intervalId=o(m)}
r||p.start(),this.intervalId=o(m)}}stop(){this.intervalId&&(o.cancel(this.intervalId),this.intervalId=null),this.mouse.stop()}shouldUpdate(t,e){if(!t){var{frameDuration:r}=this
if(this.animations.reduce(((t,e)=>e.update(r)||t),!1))return!0}return!("function"!=typeof e||!e())||!(this.isReadyLock||!this.isReady())||!!this.mouse.hasEvents()}render(t,e,r,i,n,s,a){var{CLIENT_WIDTH:o,CLIENT_HEIGHT:u,viewPort:h,ctx:c,isFirstRender:l}=this,f=c.canvas
h.clear(),f.width&&f.height?h.setCurrent(f.width,f.height):h.setCurrent(o,u)
var p=t.getStyle("width"),g=t.getStyle("height")
!e&&(l||"number"!=typeof i&&"number"!=typeof n)&&(p.hasValue()&&(f.width=p.getPixels("x"),f.style&&(f.style.width="".concat(f.width,"px"))),g.hasValue()&&(f.height=g.getPixels("y"),f.style&&(f.style.height="".concat(f.height,"px"))))
var d=f.clientWidth||f.width,v=f.clientHeight||f.height
if(e&&p.hasValue()&&g.hasValue()&&(d=p.getPixels("x"),v=g.getPixels("y")),h.setCurrent(d,v),"number"==typeof s&&t.getAttribute("x",!0).setValue(s),"number"==typeof a&&t.getAttribute("y",!0).setValue(a),"number"==typeof i||"number"==typeof n){var y=D(t.getAttribute("viewBox").getString()),m=0,x=0
if("number"==typeof i){var b=t.getStyle("width")
b.hasValue()?m=b.getPixels("x")/i:isNaN(y[2])||(m=y[2]/i)}if("number"==typeof n){var w=t.getStyle("height")
w.hasValue()?x=w.getPixels("y")/n:isNaN(y[3])||(x=y[3]/n)}m||(m=x),x||(x=m),t.getAttribute("width",!0).setValue(i),t.getAttribute("height",!0).setValue(n)
var S=t.getStyle("transform",!0,!0)
S.setValue("".concat(S.getString()," scale(").concat(1/m,", ").concat(1/x,")"))}r||c.clearRect(0,0,d,v),t.render(c),l&&(this.isFirstRender=!1)}}gt.defaultWindow=ft,gt.defaultFetch=pt
var{defaultFetch:dt}=gt,vt="undefined"!=typeof DOMParser?DOMParser:null
class yt{constructor(){var{fetch:t=dt,DOMParser:e=vt}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
this.fetch=t,this.DOMParser=e}parse(t){var e=this
return n((function*(){return t.startsWith("<")?e.parseFromString(t):e.load(t)}))()}parseFromString(t){var e=new this.DOMParser
try{return this.checkDocument(e.parseFromString(t,"image/svg+xml"))}catch(r){return this.checkDocument(e.parseFromString(t,"text/xml"))}}checkDocument(t){var e=t.getElementsByTagName("parsererror")[0]
if(e)throw new Error(e.textContent)
return t}load(t){var e=this
return n((function*(){var r=yield e.fetch(t),i=yield r.text()
return e.parseFromString(i)}))()}}class mt{constructor(t,e){this.type="translate",this.point=null,this.point=ct.parse(e)}apply(t){var{x:e,y:r}=this.point
t.translate(e||0,r||0)}unapply(t){var{x:e,y:r}=this.point
t.translate(-1*e||0,-1*r||0)}applyToPoint(t){var{x:e,y:r}=this.point
t.applyTransform([1,0,0,1,e||0,r||0])}}class xt{constructor(t,e,r){this.type="rotate",this.angle=null,this.originX=null,this.originY=null,this.cx=0,this.cy=0
var i=D(e)
this.angle=new ut(t,"angle",i[0]),this.originX=r[0],this.originY=r[1],this.cx=i[1]||0,this.cy=i[2]||0}apply(t){var{cx:e,cy:r,originX:i,originY:n,angle:s}=this,a=e+i.getPixels("x"),o=r+n.getPixels("y")
t.translate(a,o),t.rotate(s.getRadians()),t.translate(-a,-o)}unapply(t){var{cx:e,cy:r,originX:i,originY:n,angle:s}=this,a=e+i.getPixels("x"),o=r+n.getPixels("y")
t.translate(a,o),t.rotate(-1*s.getRadians()),t.translate(-a,-o)}applyToPoint(t){var{cx:e,cy:r,angle:i}=this,n=i.getRadians()
t.applyTransform([1,0,0,1,e||0,r||0]),t.applyTransform([Math.cos(n),Math.sin(n),-Math.sin(n),Math.cos(n),0,0]),t.applyTransform([1,0,0,1,-e||0,-r||0])}}class bt{constructor(t,e,r){this.type="scale",this.scale=null,this.originX=null,this.originY=null
var i=ct.parseScale(e)
0!==i.x&&0!==i.y||(i.x=Z,i.y=Z),this.scale=i,this.originX=r[0],this.originY=r[1]}apply(t){var{scale:{x:e,y:r},originX:i,originY:n}=this,s=i.getPixels("x"),a=n.getPixels("y")
t.translate(s,a),t.scale(e,r||e),t.translate(-s,-a)}unapply(t){var{scale:{x:e,y:r},originX:i,originY:n}=this,s=i.getPixels("x"),a=n.getPixels("y")
t.translate(s,a),t.scale(1/e,1/r||e),t.translate(-s,-a)}applyToPoint(t){var{x:e,y:r}=this.scale
t.applyTransform([e||0,0,0,r||0,0,0])}}class wt{constructor(t,e,r){this.type="matrix",this.matrix=[],this.originX=null,this.originY=null,this.matrix=D(e),this.originX=r[0],this.originY=r[1]}apply(t){var{originX:e,originY:r,matrix:i}=this,n=e.getPixels("x"),s=r.getPixels("y")
t.translate(n,s),t.transform(i[0],i[1],i[2],i[3],i[4],i[5]),t.translate(-n,-s)}unapply(t){var{originX:e,originY:r,matrix:i}=this,n=i[0],s=i[2],a=i[4],o=i[1],u=i[3],h=i[5],c=1/(n*(1*u-0*h)-s*(1*o-0*h)+a*(0*o-0*u)),l=e.getPixels("x"),f=r.getPixels("y")
t.translate(l,f),t.transform(c*(1*u-0*h),c*(0*h-1*o),c*(0*a-1*s),c*(1*n-0*a),c*(s*h-a*u),c*(a*o-n*h)),t.translate(-l,-f)}applyToPoint(t){t.applyTransform(this.matrix)}}class St extends wt{constructor(t,e,r){super(t,e,r),this.type="skew",this.angle=null,this.angle=new ut(t,"angle",e)}}class Tt extends St{constructor(t,e,r){super(t,e,r),this.type="skewX",this.matrix=[1,0,Math.tan(this.angle.getRadians()),1,0,0]}}class At extends St{constructor(t,e,r){super(t,e,r),this.type="skewY",this.matrix=[1,Math.tan(this.angle.getRadians()),0,1,0,0]}}class Ot{constructor(t,e,r){this.document=t,this.transforms=[]
var i=function(t){return I(t).trim().replace(/\)([a-zA-Z])/g,") $1").replace(/\)(\s?,\s?)/g,") ").split(/\s(?=[a-z])/)}(e)
i.forEach((t=>{if("none"!==t){var[e,i]=function(t){var[e,r]=t.split("(")
return[e.trim(),r.trim().replace(")","")]}(t),n=Ot.transformTypes[e]
void 0!==n&&this.transforms.push(new n(this.document,i,r))}}))}static fromElement(t,e){var r=e.getStyle("transform",!1,!0),[i,n=i]=e.getStyle("transform-origin",!1,!0).split(),s=[i,n]
return r.hasValue()?new Ot(t,r.getString(),s):null}apply(t){for(var{transforms:e}=this,r=e.length,i=0;i<r;i++)e[i].apply(t)}unapply(t){for(var{transforms:e}=this,r=e.length-1;r>=0;r--)e[r].unapply(t)}applyToPoint(t){for(var{transforms:e}=this,r=e.length,i=0;i<r;i++)e[i].applyToPoint(t)}}Ot.transformTypes={translate:mt,rotate:xt,scale:bt,matrix:wt,skewX:Tt,skewY:At}
class Ct{constructor(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
if(this.document=t,this.node=e,this.captureTextNodes=r,this.attributes={},this.styles={},this.stylesSpecificity={},this.animationFrozen=!1,this.animationFrozenValue="",this.parent=null,this.children=[],e&&1===e.nodeType){if(Array.from(e.attributes).forEach((e=>{var r=B(e.nodeName)
this.attributes[r]=new ut(t,r,e.value)})),this.addStylesFromStyleDefinition(),this.getAttribute("style").hasValue()){var i=this.getAttribute("style").getString().split(";").map((t=>t.trim()))
i.forEach((e=>{if(e){var[r,i]=e.split(":").map((t=>t.trim()))
this.styles[r]=new ut(t,r,i)}}))}var{definitions:n}=t,s=this.getAttribute("id")
s.hasValue()&&(n[s.getString()]||(n[s.getString()]=this)),Array.from(e.childNodes).forEach((e=>{if(1===e.nodeType)this.addChild(e)
else if(r&&(3===e.nodeType||4===e.nodeType)){var i=t.createTextNode(e)
i.getText().length>0&&this.addChild(i)}}))}}getAttribute(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this.attributes[t]
if(!r&&e){var i=new ut(this.document,t,"")
return this.attributes[t]=i,i}return r||ut.empty(this.document)}getHrefAttribute(){for(var t in this.attributes)if("href"===t||t.endsWith(":href"))return this.attributes[t]
return ut.empty(this.document)}getStyle(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=this.styles[t]
if(i)return i
var n=this.getAttribute(t)
if(null!=n&&n.hasValue())return this.styles[t]=n,n
if(!r){var{parent:s}=this
if(s){var a=s.getStyle(t)
if(null!=a&&a.hasValue())return a}}if(e){var o=new ut(this.document,t,"")
return this.styles[t]=o,o}return i||ut.empty(this.document)}render(t){if("none"!==this.getStyle("display").getString()&&"hidden"!==this.getStyle("visibility").getString()){if(t.save(),this.getStyle("mask").hasValue()){var e=this.getStyle("mask").getDefinition()
e&&(this.applyEffects(t),e.apply(t,this))}else if("none"!==this.getStyle("filter").getValue("none")){var r=this.getStyle("filter").getDefinition()
r&&(this.applyEffects(t),r.apply(t,this))}else this.setContext(t),this.renderChildren(t),this.clearContext(t)
t.restore()}}setContext(t){}applyEffects(t){var e=Ot.fromElement(this.document,this)
e&&e.apply(t)
var r=this.getStyle("clip-path",!1,!0)
if(r.hasValue()){var i=r.getDefinition()
i&&i.apply(t)}}clearContext(t){}renderChildren(t){this.children.forEach((e=>{e.render(t)}))}addChild(t){var e=t instanceof Ct?t:this.document.createElement(t)
e.parent=this,Ct.ignoreChildTypes.includes(e.type)||this.children.push(e)}matchesSelector(t){var e,{node:r}=this
if("function"==typeof r.matches)return r.matches(t)
var i=null===(e=r.getAttribute)||void 0===e?void 0:e.call(r,"class")
return!(!i||""===i)&&i.split(" ").some((e=>".".concat(e)===t))}addStylesFromStyleDefinition(){var{styles:t,stylesSpecificity:e}=this.document
for(var r in t)if(!r.startsWith("@")&&this.matchesSelector(r)){var i=t[r],n=e[r]
if(i)for(var s in i){var a=this.stylesSpecificity[s]
void 0===a&&(a="000"),n>=a&&(this.styles[s]=i[s],this.stylesSpecificity[s]=n)}}}removeStyles(t,e){return e.reduce(((e,r)=>{var i=t.getStyle(r)
if(!i.hasValue())return e
var n=i.getString()
return i.setValue(""),[...e,[r,n]]}),[])}restoreStyles(t,e){e.forEach((e=>{var[r,i]=e
t.getStyle(r,!0).setValue(i)}))}isFirstChild(){var t
return 0===(null===(t=this.parent)||void 0===t?void 0:t.children.indexOf(this))}}Ct.ignoreChildTypes=["title"]
class Pt extends Ct{constructor(t,e,r){super(t,e,r)}}function Et(t){var e=t.trim()
return/^('|")/.test(e)?e:'"'.concat(e,'"')}function Mt(t){if(!t)return""
var e=t.trim().toLowerCase()
switch(e){case"normal":case"italic":case"oblique":case"inherit":case"initial":case"unset":return e
default:return/^oblique\s+(-|)\d+deg$/.test(e)?e:""}}function Nt(t){if(!t)return""
var e=t.trim().toLowerCase()
switch(e){case"normal":case"bold":case"lighter":case"bolder":case"inherit":case"initial":case"unset":return e
default:return/^[\d.]+$/.test(e)?e:""}}class _t{constructor(t,e,r,i,n,s){var a=s?"string"==typeof s?_t.parse(s):s:{}
this.fontFamily=n||a.fontFamily,this.fontSize=i||a.fontSize,this.fontStyle=t||a.fontStyle,this.fontWeight=r||a.fontWeight,this.fontVariant=e||a.fontVariant}static parse(){var t=arguments.length>1?arguments[1]:void 0,e="",r="",i="",n="",s="",a=I(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").trim().split(" "),o={fontSize:!1,fontStyle:!1,fontWeight:!1,fontVariant:!1}
return a.forEach((t=>{switch(!0){case!o.fontStyle&&_t.styles.includes(t):"inherit"!==t&&(e=t),o.fontStyle=!0
break
case!o.fontVariant&&_t.variants.includes(t):"inherit"!==t&&(r=t),o.fontStyle=!0,o.fontVariant=!0
break
case!o.fontWeight&&_t.weights.includes(t):"inherit"!==t&&(i=t),o.fontStyle=!0,o.fontVariant=!0,o.fontWeight=!0
break
case!o.fontSize:"inherit"!==t&&([n]=t.split("/")),o.fontStyle=!0,o.fontVariant=!0,o.fontWeight=!0,o.fontSize=!0
break
default:"inherit"!==t&&(s+=t)}})),new _t(e,r,i,n,s,t)}toString(){return[Mt(this.fontStyle),this.fontVariant,Nt(this.fontWeight),this.fontSize,(t=this.fontFamily,"undefined"==typeof process?t:t.trim().split(",").map(Et).join(","))].join(" ").trim()
var t}}_t.styles="normal|italic|oblique|inherit",_t.variants="normal|small-caps|inherit",_t.weights="normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit"
class Rt{constructor(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Number.NaN,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.NaN,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Number.NaN,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Number.NaN
this.x1=t,this.y1=e,this.x2=r,this.y2=i,this.addPoint(t,e),this.addPoint(r,i)}get x(){return this.x1}get y(){return this.y1}get width(){return this.x2-this.x1}get height(){return this.y2-this.y1}addPoint(t,e){void 0!==t&&((isNaN(this.x1)||isNaN(this.x2))&&(this.x1=t,this.x2=t),t<this.x1&&(this.x1=t),t>this.x2&&(this.x2=t)),void 0!==e&&((isNaN(this.y1)||isNaN(this.y2))&&(this.y1=e,this.y2=e),e<this.y1&&(this.y1=e),e>this.y2&&(this.y2=e))}addX(t){this.addPoint(t,null)}addY(t){this.addPoint(null,t)}addBoundingBox(t){if(t){var{x1:e,y1:r,x2:i,y2:n}=t
this.addPoint(e,r),this.addPoint(i,n)}}sumCubic(t,e,r,i,n){return Math.pow(1-t,3)*e+3*Math.pow(1-t,2)*t*r+3*(1-t)*Math.pow(t,2)*i+Math.pow(t,3)*n}bezierCurveAdd(t,e,r,i,n){var s=6*e-12*r+6*i,a=-3*e+9*r-9*i+3*n,o=3*r-3*e
if(0!==a){var u=Math.pow(s,2)-4*o*a
if(!(u<0)){var h=(-s+Math.sqrt(u))/(2*a)
0<h&&h<1&&(t?this.addX(this.sumCubic(h,e,r,i,n)):this.addY(this.sumCubic(h,e,r,i,n)))
var c=(-s-Math.sqrt(u))/(2*a)
0<c&&c<1&&(t?this.addX(this.sumCubic(c,e,r,i,n)):this.addY(this.sumCubic(c,e,r,i,n)))}}else{if(0===s)return
var l=-o/s
0<l&&l<1&&(t?this.addX(this.sumCubic(l,e,r,i,n)):this.addY(this.sumCubic(l,e,r,i,n)))}}addBezierCurve(t,e,r,i,n,s,a,o){this.addPoint(t,e),this.addPoint(a,o),this.bezierCurveAdd(!0,t,r,n,a),this.bezierCurveAdd(!1,e,i,s,o)}addQuadraticCurve(t,e,r,i,n,s){var a=t+2/3*(r-t),o=e+2/3*(i-e),u=a+1/3*(n-t),h=o+1/3*(s-e)
this.addBezierCurve(t,e,a,u,o,h,n,s)}isPointInBox(t,e){var{x1:r,y1:i,x2:n,y2:s}=this
return r<=t&&t<=n&&i<=e&&e<=s}}class Vt extends P{constructor(t){super(t.replace(/([+\-.])\s+/gm,"$1").replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g,"")),this.control=null,this.start=null,this.current=null,this.command=null,this.commands=this.commands,this.i=-1,this.previousCommand=null,this.points=[],this.angles=[]}reset(){this.i=-1,this.command=null,this.previousCommand=null,this.start=new ct(0,0),this.control=new ct(0,0),this.current=new ct(0,0),this.points=[],this.angles=[]}isEnd(){var{i:t,commands:e}=this
return t>=e.length-1}next(){var t=this.commands[++this.i]
return this.previousCommand=this.command,this.command=t,t}getPoint(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"x",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"y",r=new ct(this.command[t],this.command[e])
return this.makeAbsolute(r)}getAsControlPoint(t,e){var r=this.getPoint(t,e)
return this.control=r,r}getAsCurrentPoint(t,e){var r=this.getPoint(t,e)
return this.current=r,r}getReflectedControlPoint(){var t=this.previousCommand.type
if(t!==P.CURVE_TO&&t!==P.SMOOTH_CURVE_TO&&t!==P.QUAD_TO&&t!==P.SMOOTH_QUAD_TO)return this.current
var{current:{x:e,y:r},control:{x:i,y:n}}=this
return new ct(2*e-i,2*r-n)}makeAbsolute(t){if(this.command.relative){var{x:e,y:r}=this.current
t.x+=e,t.y+=r}return t}addMarker(t,e,r){var{points:i,angles:n}=this
r&&n.length>0&&!n[n.length-1]&&(n[n.length-1]=i[i.length-1].angleTo(r)),this.addMarkerAngle(t,e?e.angleTo(t):null)}addMarkerAngle(t,e){this.points.push(t),this.angles.push(e)}getMarkerPoints(){return this.points}getMarkerAngles(){for(var{angles:t}=this,e=t.length,r=0;r<e;r++)if(!t[r])for(var i=r+1;i<e;i++)if(t[i]){t[r]=t[i]
break}return t}}class It extends Ct{constructor(){super(...arguments),this.modifiedEmSizeStack=!1}calculateOpacity(){for(var t=1,e=this;e;){var r=e.getStyle("opacity",!1,!0)
r.hasValue(!0)&&(t*=r.getNumber()),e=e.parent}return t}setContext(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
if(!e){var r=this.getStyle("fill"),i=this.getStyle("fill-opacity"),n=this.getStyle("stroke"),s=this.getStyle("stroke-opacity")
if(r.isUrlDefinition()){var a=r.getFillStyleDefinition(this,i)
a&&(t.fillStyle=a)}else if(r.hasValue()){"currentColor"===r.getString()&&r.setValue(this.getStyle("color").getColor())
var o=r.getColor()
"inherit"!==o&&(t.fillStyle="none"===o?"rgba(0,0,0,0)":o)}if(i.hasValue()){var u=new ut(this.document,"fill",t.fillStyle).addOpacity(i).getColor()
t.fillStyle=u}if(n.isUrlDefinition()){var h=n.getFillStyleDefinition(this,s)
h&&(t.strokeStyle=h)}else if(n.hasValue()){"currentColor"===n.getString()&&n.setValue(this.getStyle("color").getColor())
var c=n.getString()
"inherit"!==c&&(t.strokeStyle="none"===c?"rgba(0,0,0,0)":c)}if(s.hasValue()){var l=new ut(this.document,"stroke",t.strokeStyle).addOpacity(s).getString()
t.strokeStyle=l}var f=this.getStyle("stroke-width")
if(f.hasValue()){var p=f.getPixels()
t.lineWidth=p||Z}var g=this.getStyle("stroke-linecap"),d=this.getStyle("stroke-linejoin"),v=this.getStyle("stroke-miterlimit"),y=this.getStyle("stroke-dasharray"),m=this.getStyle("stroke-dashoffset")
if(g.hasValue()&&(t.lineCap=g.getString()),d.hasValue()&&(t.lineJoin=d.getString()),v.hasValue()&&(t.miterLimit=v.getNumber()),y.hasValue()&&"none"!==y.getString()){var x=D(y.getString())
void 0!==t.setLineDash?t.setLineDash(x):void 0!==t.webkitLineDash?t.webkitLineDash=x:void 0===t.mozDash||1===x.length&&0===x[0]||(t.mozDash=x)
var b=m.getPixels()
void 0!==t.lineDashOffset?t.lineDashOffset=b:void 0!==t.webkitLineDashOffset?t.webkitLineDashOffset=b:void 0!==t.mozDashOffset&&(t.mozDashOffset=b)}}if(this.modifiedEmSizeStack=!1,void 0!==t.font){var w=this.getStyle("font"),S=this.getStyle("font-style"),T=this.getStyle("font-variant"),A=this.getStyle("font-weight"),O=this.getStyle("font-size"),C=this.getStyle("font-family"),P=new _t(S.getString(),T.getString(),A.getString(),O.hasValue()?"".concat(O.getPixels(!0),"px"):"",C.getString(),_t.parse(w.getString(),t.font))
S.setValue(P.fontStyle),T.setValue(P.fontVariant),A.setValue(P.fontWeight),O.setValue(P.fontSize),C.setValue(P.fontFamily),t.font=P.toString(),O.isPixels()&&(this.document.emSize=O.getPixels(),this.modifiedEmSizeStack=!0)}e||(this.applyEffects(t),t.globalAlpha=this.calculateOpacity())}clearContext(t){super.clearContext(t),this.modifiedEmSizeStack&&this.document.popEmSize()}}class kt extends It{constructor(t,e,r){super(t,e,r),this.type="path",this.pathParser=null,this.pathParser=new Vt(this.getAttribute("d").getString())}path(t){var{pathParser:e}=this,r=new Rt
for(e.reset(),t&&t.beginPath();!e.isEnd();)switch(e.next().type){case Vt.MOVE_TO:this.pathM(t,r)
break
case Vt.LINE_TO:this.pathL(t,r)
break
case Vt.HORIZ_LINE_TO:this.pathH(t,r)
break
case Vt.VERT_LINE_TO:this.pathV(t,r)
break
case Vt.CURVE_TO:this.pathC(t,r)
break
case Vt.SMOOTH_CURVE_TO:this.pathS(t,r)
break
case Vt.QUAD_TO:this.pathQ(t,r)
break
case Vt.SMOOTH_QUAD_TO:this.pathT(t,r)
break
case Vt.ARC:this.pathA(t,r)
break
case Vt.CLOSE_PATH:this.pathZ(t,r)}return r}getBoundingBox(t){return this.path()}getMarkers(){var{pathParser:t}=this,e=t.getMarkerPoints(),r=t.getMarkerAngles(),i=e.map(((t,e)=>[t,r[e]]))
return i}renderChildren(t){this.path(t),this.document.screen.mouse.checkPath(this,t)
var e=this.getStyle("fill-rule")
""!==t.fillStyle&&("inherit"!==e.getString("inherit")?t.fill(e.getString()):t.fill()),""!==t.strokeStyle&&("non-scaling-stroke"===this.getAttribute("vector-effect").getString()?(t.save(),t.setTransform(1,0,0,1,0,0),t.stroke(),t.restore()):t.stroke())
var r=this.getMarkers()
if(r){var i=r.length-1,n=this.getStyle("marker-start"),s=this.getStyle("marker-mid"),a=this.getStyle("marker-end")
if(n.isUrlDefinition()){var o=n.getDefinition(),[u,h]=r[0]
o.render(t,u,h)}if(s.isUrlDefinition())for(var c=s.getDefinition(),l=1;l<i;l++){var[f,p]=r[l]
c.render(t,f,p)}if(a.isUrlDefinition()){var g=a.getDefinition(),[d,v]=r[i]
g.render(t,d,v)}}}static pathM(t){var e=t.getAsCurrentPoint()
return t.start=t.current,{point:e}}pathM(t,e){var{pathParser:r}=this,{point:i}=kt.pathM(r),{x:n,y:s}=i
r.addMarker(i),e.addPoint(n,s),t&&t.moveTo(n,s)}static pathL(t){var{current:e}=t
return{current:e,point:t.getAsCurrentPoint()}}pathL(t,e){var{pathParser:r}=this,{current:i,point:n}=kt.pathL(r),{x:s,y:a}=n
r.addMarker(n,i),e.addPoint(s,a),t&&t.lineTo(s,a)}static pathH(t){var{current:e,command:r}=t,i=new ct((r.relative?e.x:0)+r.x,e.y)
return t.current=i,{current:e,point:i}}pathH(t,e){var{pathParser:r}=this,{current:i,point:n}=kt.pathH(r),{x:s,y:a}=n
r.addMarker(n,i),e.addPoint(s,a),t&&t.lineTo(s,a)}static pathV(t){var{current:e,command:r}=t,i=new ct(e.x,(r.relative?e.y:0)+r.y)
return t.current=i,{current:e,point:i}}pathV(t,e){var{pathParser:r}=this,{current:i,point:n}=kt.pathV(r),{x:s,y:a}=n
r.addMarker(n,i),e.addPoint(s,a),t&&t.lineTo(s,a)}static pathC(t){var{current:e}=t
return{current:e,point:t.getPoint("x1","y1"),controlPoint:t.getAsControlPoint("x2","y2"),currentPoint:t.getAsCurrentPoint()}}pathC(t,e){var{pathParser:r}=this,{current:i,point:n,controlPoint:s,currentPoint:a}=kt.pathC(r)
r.addMarker(a,s,n),e.addBezierCurve(i.x,i.y,n.x,n.y,s.x,s.y,a.x,a.y),t&&t.bezierCurveTo(n.x,n.y,s.x,s.y,a.x,a.y)}static pathS(t){var{current:e}=t
return{current:e,point:t.getReflectedControlPoint(),controlPoint:t.getAsControlPoint("x2","y2"),currentPoint:t.getAsCurrentPoint()}}pathS(t,e){var{pathParser:r}=this,{current:i,point:n,controlPoint:s,currentPoint:a}=kt.pathS(r)
r.addMarker(a,s,n),e.addBezierCurve(i.x,i.y,n.x,n.y,s.x,s.y,a.x,a.y),t&&t.bezierCurveTo(n.x,n.y,s.x,s.y,a.x,a.y)}static pathQ(t){var{current:e}=t
return{current:e,controlPoint:t.getAsControlPoint("x1","y1"),currentPoint:t.getAsCurrentPoint()}}pathQ(t,e){var{pathParser:r}=this,{current:i,controlPoint:n,currentPoint:s}=kt.pathQ(r)
r.addMarker(s,n,n),e.addQuadraticCurve(i.x,i.y,n.x,n.y,s.x,s.y),t&&t.quadraticCurveTo(n.x,n.y,s.x,s.y)}static pathT(t){var{current:e}=t,r=t.getReflectedControlPoint()
return t.control=r,{current:e,controlPoint:r,currentPoint:t.getAsCurrentPoint()}}pathT(t,e){var{pathParser:r}=this,{current:i,controlPoint:n,currentPoint:s}=kt.pathT(r)
r.addMarker(s,n,n),e.addQuadraticCurve(i.x,i.y,n.x,n.y,s.x,s.y),t&&t.quadraticCurveTo(n.x,n.y,s.x,s.y)}static pathA(t){var{current:e,command:r}=t,{rX:i,rY:n,xRot:s,lArcFlag:a,sweepFlag:o}=r,u=s*(Math.PI/180),h=t.getAsCurrentPoint(),c=new ct(Math.cos(u)*(e.x-h.x)/2+Math.sin(u)*(e.y-h.y)/2,-Math.sin(u)*(e.x-h.x)/2+Math.cos(u)*(e.y-h.y)/2),l=Math.pow(c.x,2)/Math.pow(i,2)+Math.pow(c.y,2)/Math.pow(n,2)
l>1&&(i*=Math.sqrt(l),n*=Math.sqrt(l))
var f=(a===o?-1:1)*Math.sqrt((Math.pow(i,2)*Math.pow(n,2)-Math.pow(i,2)*Math.pow(c.y,2)-Math.pow(n,2)*Math.pow(c.x,2))/(Math.pow(i,2)*Math.pow(c.y,2)+Math.pow(n,2)*Math.pow(c.x,2)))
isNaN(f)&&(f=0)
var p=new ct(f*i*c.y/n,f*-n*c.x/i),g=new ct((e.x+h.x)/2+Math.cos(u)*p.x-Math.sin(u)*p.y,(e.y+h.y)/2+Math.sin(u)*p.x+Math.cos(u)*p.y),d=tt([1,0],[(c.x-p.x)/i,(c.y-p.y)/n]),v=[(c.x-p.x)/i,(c.y-p.y)/n],y=[(-c.x-p.x)/i,(-c.y-p.y)/n],m=tt(v,y)
return J(v,y)<=-1&&(m=Math.PI),J(v,y)>=1&&(m=0),{currentPoint:h,rX:i,rY:n,sweepFlag:o,xAxisRotation:u,centp:g,a1:d,ad:m}}pathA(t,e){var{pathParser:r}=this,{currentPoint:i,rX:n,rY:s,sweepFlag:a,xAxisRotation:o,centp:u,a1:h,ad:c}=kt.pathA(r),l=1-a?1:-1,f=h+l*(c/2),p=new ct(u.x+n*Math.cos(f),u.y+s*Math.sin(f))
if(r.addMarkerAngle(p,f-l*Math.PI/2),r.addMarkerAngle(i,f-l*Math.PI),e.addPoint(i.x,i.y),t&&!isNaN(h)&&!isNaN(c)){var g=n>s?n:s,d=n>s?1:n/s,v=n>s?s/n:1
t.translate(u.x,u.y),t.rotate(o),t.scale(d,v),t.arc(0,0,g,h,h+c,Boolean(1-a)),t.scale(1/d,1/v),t.rotate(-o),t.translate(-u.x,-u.y)}}static pathZ(t){t.current=t.start}pathZ(t,e){kt.pathZ(this.pathParser),t&&e.x1!==e.x2&&e.y1!==e.y2&&t.closePath()}}class Lt extends kt{constructor(t,e,r){super(t,e,r),this.type="glyph",this.horizAdvX=this.getAttribute("horiz-adv-x").getNumber(),this.unicode=this.getAttribute("unicode").getString(),this.arabicForm=this.getAttribute("arabic-form").getString()}}class Dt extends It{constructor(t,e,r){super(t,e,new.target===Dt||r),this.type="text",this.x=0,this.y=0,this.measureCache=-1}setContext(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
super.setContext(t,e)
var r=this.getStyle("dominant-baseline").getTextBaseline()||this.getStyle("alignment-baseline").getTextBaseline()
r&&(t.textBaseline=r)}initializeCoordinates(){this.x=0,this.y=0,this.leafTexts=[],this.textChunkStart=0,this.minX=Number.POSITIVE_INFINITY,this.maxX=Number.NEGATIVE_INFINITY}getBoundingBox(t){if("text"!==this.type)return this.getTElementBoundingBox(t)
this.initializeCoordinates(),this.adjustChildCoordinatesRecursive(t)
var e=null
return this.children.forEach(((r,i)=>{var n=this.getChildBoundingBox(t,this,this,i)
e?e.addBoundingBox(n):e=n})),e}getFontSize(){var{document:t,parent:e}=this,r=_t.parse(t.ctx.font).fontSize
return e.getStyle("font-size").getNumber(r)}getTElementBoundingBox(t){var e=this.getFontSize()
return new Rt(this.x,this.y-e,this.x+this.measureText(t),this.y)}getGlyph(t,e,r){var i=e[r],n=null
if(t.isArabic){var s=e.length,a=e[r-1],o=e[r+1],u="isolated"
if((0===r||" "===a)&&r<s-1&&" "!==o&&(u="terminal"),r>0&&" "!==a&&r<s-1&&" "!==o&&(u="medial"),r>0&&" "!==a&&(r===s-1||" "===o)&&(u="initial"),void 0!==t.glyphs[i]){var h=t.glyphs[i]
n=h instanceof Lt?h:h[u]}}else n=t.glyphs[i]
return n||(n=t.missingGlyph),n}getText(){return""}getTextFromNode(t){var e=t||this.node,r=Array.from(e.parentNode.childNodes),i=r.indexOf(e),n=r.length-1,s=I(e.textContent||"")
return 0===i&&(s=k(s)),i===n&&(s=L(s)),s}renderChildren(t){if("text"===this.type){this.initializeCoordinates(),this.adjustChildCoordinatesRecursive(t),this.children.forEach(((e,r)=>{this.renderChild(t,this,this,r)}))
var{mouse:e}=this.document.screen
e.isWorking()&&e.checkBoundingBox(this,this.getBoundingBox(t))}else this.renderTElementChildren(t)}renderTElementChildren(t){var{document:e,parent:r}=this,i=this.getText(),n=r.getStyle("font-family").getDefinition()
if(n)for(var{unitsPerEm:s}=n.fontFace,a=_t.parse(e.ctx.font),o=r.getStyle("font-size").getNumber(a.fontSize),u=r.getStyle("font-style").getString(a.fontStyle),h=o/s,c=n.isRTL?i.split("").reverse().join(""):i,l=D(r.getAttribute("dx").getString()),f=c.length,p=0;p<f;p++){var g=this.getGlyph(n,c,p)
t.translate(this.x,this.y),t.scale(h,-h)
var d=t.lineWidth
t.lineWidth=t.lineWidth*s/o,"italic"===u&&t.transform(1,0,.4,1,0,0),g.render(t),"italic"===u&&t.transform(1,0,-.4,1,0,0),t.lineWidth=d,t.scale(1/h,-1/h),t.translate(-this.x,-this.y),this.x+=o*(g.horizAdvX||n.horizAdvX)/s,void 0===l[p]||isNaN(l[p])||(this.x+=l[p])}else{var{x:v,y:y}=this
t.fillStyle&&t.fillText(i,v,y),t.strokeStyle&&t.strokeText(i,v,y)}}applyAnchoring(){if(!(this.textChunkStart>=this.leafTexts.length)){var t,e=this.leafTexts[this.textChunkStart],r=e.getStyle("text-anchor").getString("start")
t="start"===r?e.x-this.minX:"end"===r?e.x-this.maxX:e.x-(this.minX+this.maxX)/2
for(var i=this.textChunkStart;i<this.leafTexts.length;i++)this.leafTexts[i].x+=t
this.minX=Number.POSITIVE_INFINITY,this.maxX=Number.NEGATIVE_INFINITY,this.textChunkStart=this.leafTexts.length}}adjustChildCoordinatesRecursive(t){this.children.forEach(((e,r)=>{this.adjustChildCoordinatesRecursiveCore(t,this,this,r)})),this.applyAnchoring()}adjustChildCoordinatesRecursiveCore(t,e,r,i){var n=r.children[i]
n.children.length>0?n.children.forEach(((r,i)=>{e.adjustChildCoordinatesRecursiveCore(t,e,n,i)})):this.adjustChildCoordinates(t,e,r,i)}adjustChildCoordinates(t,e,r,i){var n=r.children[i]
if("function"!=typeof n.measureText)return n
t.save(),n.setContext(t,!0)
var s=n.getAttribute("x"),a=n.getAttribute("y"),o=n.getAttribute("dx"),u=n.getAttribute("dy"),h=n.getStyle("font-family").getDefinition(),c=Boolean(h)&&h.isRTL
0===i&&(s.hasValue()||s.setValue(n.getInheritedAttribute("x")),a.hasValue()||a.setValue(n.getInheritedAttribute("y")),o.hasValue()||o.setValue(n.getInheritedAttribute("dx")),u.hasValue()||u.setValue(n.getInheritedAttribute("dy")))
var l=n.measureText(t)
return c&&(e.x-=l),s.hasValue()?(e.applyAnchoring(),n.x=s.getPixels("x"),o.hasValue()&&(n.x+=o.getPixels("x"))):(o.hasValue()&&(e.x+=o.getPixels("x")),n.x=e.x),e.x=n.x,c||(e.x+=l),a.hasValue()?(n.y=a.getPixels("y"),u.hasValue()&&(n.y+=u.getPixels("y"))):(u.hasValue()&&(e.y+=u.getPixels("y")),n.y=e.y),e.y=n.y,e.leafTexts.push(n),e.minX=Math.min(e.minX,n.x,n.x+l),e.maxX=Math.max(e.maxX,n.x,n.x+l),n.clearContext(t),t.restore(),n}getChildBoundingBox(t,e,r,i){var n=r.children[i]
if("function"!=typeof n.getBoundingBox)return null
var s=n.getBoundingBox(t)
return s?(n.children.forEach(((r,i)=>{var a=e.getChildBoundingBox(t,e,n,i)
s.addBoundingBox(a)})),s):null}renderChild(t,e,r,i){var n=r.children[i]
n.render(t),n.children.forEach(((r,i)=>{e.renderChild(t,e,n,i)}))}measureText(t){var{measureCache:e}=this
if(~e)return e
var r=this.getText(),i=this.measureTargetText(t,r)
return this.measureCache=i,i}measureTargetText(t,e){if(!e.length)return 0
var{parent:r}=this,i=r.getStyle("font-family").getDefinition()
if(i){for(var n=this.getFontSize(),s=i.isRTL?e.split("").reverse().join(""):e,a=D(r.getAttribute("dx").getString()),o=s.length,u=0,h=0;h<o;h++)u+=(this.getGlyph(i,s,h).horizAdvX||i.horizAdvX)*n/i.fontFace.unitsPerEm,void 0===a[h]||isNaN(a[h])||(u+=a[h])
return u}if(!t.measureText)return 10*e.length
t.save(),this.setContext(t,!0)
var{width:c}=t.measureText(e)
return this.clearContext(t),t.restore(),c}getInheritedAttribute(t){for(var e=this;e instanceof Dt&&e.isFirstChild();){var r=e.parent.getAttribute(t)
if(r.hasValue(!0))return r.getValue("0")
e=e.parent}return null}}class jt extends Dt{constructor(t,e,r){super(t,e,new.target===jt||r),this.type="tspan",this.text=this.children.length>0?"":this.getTextFromNode()}getText(){return this.text}}class Bt extends jt{constructor(){super(...arguments),this.type="textNode"}}class Ft extends It{constructor(){super(...arguments),this.type="svg",this.root=!1}setContext(t){var e,{document:r}=this,{screen:i,window:n}=r,s=t.canvas
if(i.setDefaults(t),s.style&&void 0!==t.font&&n&&void 0!==n.getComputedStyle){t.font=n.getComputedStyle(s).getPropertyValue("font")
var a=new ut(r,"fontSize",_t.parse(t.font).fontSize)
a.hasValue()&&(r.rootEmSize=a.getPixels("y"),r.emSize=r.rootEmSize)}this.getAttribute("x").hasValue()||this.getAttribute("x",!0).setValue(0),this.getAttribute("y").hasValue()||this.getAttribute("y",!0).setValue(0)
var{width:o,height:u}=i.viewPort
this.getStyle("width").hasValue()||this.getStyle("width",!0).setValue("100%"),this.getStyle("height").hasValue()||this.getStyle("height",!0).setValue("100%"),this.getStyle("color").hasValue()||this.getStyle("color",!0).setValue("black")
var h=this.getAttribute("refX"),c=this.getAttribute("refY"),l=this.getAttribute("viewBox"),f=l.hasValue()?D(l.getString()):null,p=!this.root&&"visible"!==this.getStyle("overflow").getValue("hidden"),g=0,d=0,v=0,y=0
f&&(g=f[0],d=f[1]),this.root||(o=this.getStyle("width").getPixels("x"),u=this.getStyle("height").getPixels("y"),"marker"===this.type&&(v=g,y=d,g=0,d=0)),i.viewPort.setCurrent(o,u),!this.node||this.parent&&"foreignObject"!==(null===(e=this.node.parentNode)||void 0===e?void 0:e.nodeName)||!this.getStyle("transform",!1,!0).hasValue()||this.getStyle("transform-origin",!1,!0).hasValue()||this.getStyle("transform-origin",!0,!0).setValue("50% 50%"),super.setContext(t),t.translate(this.getAttribute("x").getPixels("x"),this.getAttribute("y").getPixels("y")),f&&(o=f[2],u=f[3]),r.setViewBox({ctx:t,aspectRatio:this.getAttribute("preserveAspectRatio").getString(),width:i.viewPort.width,desiredWidth:o,height:i.viewPort.height,desiredHeight:u,minX:g,minY:d,refX:h.getValue(),refY:c.getValue(),clip:p,clipX:v,clipY:y}),f&&(i.viewPort.removeCurrent(),i.viewPort.setCurrent(o,u))}clearContext(t){super.clearContext(t),this.document.screen.viewPort.removeCurrent()}resize(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=this.getAttribute("width",!0),n=this.getAttribute("height",!0),s=this.getAttribute("viewBox"),a=this.getAttribute("style"),o=i.getNumber(0),u=n.getNumber(0)
if(r)if("string"==typeof r)this.getAttribute("preserveAspectRatio",!0).setValue(r)
else{var h=this.getAttribute("preserveAspectRatio")
h.hasValue()&&h.setValue(h.getString().replace(/^\s*(\S.*\S)\s*$/,"$1"))}if(i.setValue(t),n.setValue(e),s.hasValue()||s.setValue("0 0 ".concat(o||t," ").concat(u||e)),a.hasValue()){var c=this.getStyle("width"),l=this.getStyle("height")
c.hasValue()&&c.setValue("".concat(t,"px")),l.hasValue()&&l.setValue("".concat(e,"px"))}}}class zt extends kt{constructor(){super(...arguments),this.type="rect"}path(t){var e=this.getAttribute("x").getPixels("x"),r=this.getAttribute("y").getPixels("y"),i=this.getStyle("width",!1,!0).getPixels("x"),n=this.getStyle("height",!1,!0).getPixels("y"),s=this.getAttribute("rx"),a=this.getAttribute("ry"),o=s.getPixels("x"),u=a.getPixels("y")
if(s.hasValue()&&!a.hasValue()&&(u=o),a.hasValue()&&!s.hasValue()&&(o=u),o=Math.min(o,i/2),u=Math.min(u,n/2),t){var h=(Math.sqrt(2)-1)/3*4
t.beginPath(),n>0&&i>0&&(t.moveTo(e+o,r),t.lineTo(e+i-o,r),t.bezierCurveTo(e+i-o+h*o,r,e+i,r+u-h*u,e+i,r+u),t.lineTo(e+i,r+n-u),t.bezierCurveTo(e+i,r+n-u+h*u,e+i-o+h*o,r+n,e+i-o,r+n),t.lineTo(e+o,r+n),t.bezierCurveTo(e+o-h*o,r+n,e,r+n-u+h*u,e,r+n-u),t.lineTo(e,r+u),t.bezierCurveTo(e,r+u-h*u,e+o-h*o,r,e+o,r),t.closePath())}return new Rt(e,r,e+i,r+n)}getMarkers(){return null}}class Ut extends kt{constructor(){super(...arguments),this.type="circle"}path(t){var e=this.getAttribute("cx").getPixels("x"),r=this.getAttribute("cy").getPixels("y"),i=this.getAttribute("r").getPixels()
return t&&i>0&&(t.beginPath(),t.arc(e,r,i,0,2*Math.PI,!1),t.closePath()),new Rt(e-i,r-i,e+i,r+i)}getMarkers(){return null}}class Ht extends kt{constructor(){super(...arguments),this.type="ellipse"}path(t){var e=(Math.sqrt(2)-1)/3*4,r=this.getAttribute("rx").getPixels("x"),i=this.getAttribute("ry").getPixels("y"),n=this.getAttribute("cx").getPixels("x"),s=this.getAttribute("cy").getPixels("y")
return t&&r>0&&i>0&&(t.beginPath(),t.moveTo(n+r,s),t.bezierCurveTo(n+r,s+e*i,n+e*r,s+i,n,s+i),t.bezierCurveTo(n-e*r,s+i,n-r,s+e*i,n-r,s),t.bezierCurveTo(n-r,s-e*i,n-e*r,s-i,n,s-i),t.bezierCurveTo(n+e*r,s-i,n+r,s-e*i,n+r,s),t.closePath()),new Rt(n-r,s-i,n+r,s+i)}getMarkers(){return null}}class Xt extends kt{constructor(){super(...arguments),this.type="line"}getPoints(){return[new ct(this.getAttribute("x1").getPixels("x"),this.getAttribute("y1").getPixels("y")),new ct(this.getAttribute("x2").getPixels("x"),this.getAttribute("y2").getPixels("y"))]}path(t){var[{x:e,y:r},{x:i,y:n}]=this.getPoints()
return t&&(t.beginPath(),t.moveTo(e,r),t.lineTo(i,n)),new Rt(e,r,i,n)}getMarkers(){var[t,e]=this.getPoints(),r=t.angleTo(e)
return[[t,r],[e,r]]}}class Yt extends kt{constructor(t,e,r){super(t,e,r),this.type="polyline",this.points=[],this.points=ct.parsePath(this.getAttribute("points").getString())}path(t){var{points:e}=this,[{x:r,y:i}]=e,n=new Rt(r,i)
return t&&(t.beginPath(),t.moveTo(r,i)),e.forEach((e=>{var{x:r,y:i}=e
n.addPoint(r,i),t&&t.lineTo(r,i)})),n}getMarkers(){var{points:t}=this,e=t.length-1,r=[]
return t.forEach(((i,n)=>{n!==e&&r.push([i,i.angleTo(t[n+1])])})),r.length>0&&r.push([t[t.length-1],r[r.length-1][1]]),r}}class qt extends Yt{constructor(){super(...arguments),this.type="polygon"}path(t){var e=super.path(t),[{x:r,y:i}]=this.points
return t&&(t.lineTo(r,i),t.closePath()),e}}class Wt extends Ct{constructor(){super(...arguments),this.type="pattern"}createPattern(t,e,r){var i=this.getStyle("width").getPixels("x",!0),n=this.getStyle("height").getPixels("y",!0),s=new Ft(this.document,null)
s.attributes.viewBox=new ut(this.document,"viewBox",this.getAttribute("viewBox").getValue()),s.attributes.width=new ut(this.document,"width","".concat(i,"px")),s.attributes.height=new ut(this.document,"height","".concat(n,"px")),s.attributes.transform=new ut(this.document,"transform",this.getAttribute("patternTransform").getValue()),s.children=this.children
var a=this.document.createCanvas(i,n),o=a.getContext("2d"),u=this.getAttribute("x"),h=this.getAttribute("y")
u.hasValue()&&h.hasValue()&&o.translate(u.getPixels("x",!0),h.getPixels("y",!0)),r.hasValue()?this.styles["fill-opacity"]=r:Reflect.deleteProperty(this.styles,"fill-opacity")
for(var c=-1;c<=1;c++)for(var l=-1;l<=1;l++)o.save(),s.attributes.x=new ut(this.document,"x",c*a.width),s.attributes.y=new ut(this.document,"y",l*a.height),s.render(o),o.restore()
return t.createPattern(a,"repeat")}}class Gt extends Ct{constructor(){super(...arguments),this.type="marker"}render(t,e,r){if(e){var{x:i,y:n}=e,s=this.getAttribute("orient").getString("auto"),a=this.getAttribute("markerUnits").getString("strokeWidth")
t.translate(i,n),"auto"===s&&t.rotate(r),"strokeWidth"===a&&t.scale(t.lineWidth,t.lineWidth),t.save()
var o=new Ft(this.document,null)
o.type=this.type,o.attributes.viewBox=new ut(this.document,"viewBox",this.getAttribute("viewBox").getValue()),o.attributes.refX=new ut(this.document,"refX",this.getAttribute("refX").getValue()),o.attributes.refY=new ut(this.document,"refY",this.getAttribute("refY").getValue()),o.attributes.width=new ut(this.document,"width",this.getAttribute("markerWidth").getValue()),o.attributes.height=new ut(this.document,"height",this.getAttribute("markerHeight").getValue()),o.attributes.overflow=new ut(this.document,"overflow",this.getAttribute("overflow").getValue()),o.attributes.fill=new ut(this.document,"fill",this.getAttribute("fill").getColor("black")),o.attributes.stroke=new ut(this.document,"stroke",this.getAttribute("stroke").getValue("none")),o.children=this.children,o.render(t),t.restore(),"strokeWidth"===a&&t.scale(1/t.lineWidth,1/t.lineWidth),"auto"===s&&t.rotate(-r),t.translate(-i,-n)}}}class Qt extends Ct{constructor(){super(...arguments),this.type="defs"}render(){}}class $t extends It{constructor(){super(...arguments),this.type="g"}getBoundingBox(t){var e=new Rt
return this.children.forEach((r=>{e.addBoundingBox(r.getBoundingBox(t))})),e}}class Zt extends Ct{constructor(t,e,r){super(t,e,r),this.attributesToInherit=["gradientUnits"],this.stops=[]
var{stops:i,children:n}=this
n.forEach((t=>{"stop"===t.type&&i.push(t)}))}getGradientUnits(){return this.getAttribute("gradientUnits").getString("objectBoundingBox")}createGradient(t,e,r){var i=this
this.getHrefAttribute().hasValue()&&(i=this.getHrefAttribute().getDefinition(),this.inheritStopContainer(i))
var{stops:n}=i,s=this.getGradient(t,e)
if(!s)return this.addParentOpacity(r,n[n.length-1].color)
if(n.forEach((t=>{s.addColorStop(t.offset,this.addParentOpacity(r,t.color))})),this.getAttribute("gradientTransform").hasValue()){var{document:a}=this,{MAX_VIRTUAL_PIXELS:o,viewPort:u}=a.screen,[h]=u.viewPorts,c=new zt(a,null)
c.attributes.x=new ut(a,"x",-o/3),c.attributes.y=new ut(a,"y",-o/3),c.attributes.width=new ut(a,"width",o),c.attributes.height=new ut(a,"height",o)
var l=new $t(a,null)
l.attributes.transform=new ut(a,"transform",this.getAttribute("gradientTransform").getValue()),l.children=[c]
var f=new Ft(a,null)
f.attributes.x=new ut(a,"x",0),f.attributes.y=new ut(a,"y",0),f.attributes.width=new ut(a,"width",h.width),f.attributes.height=new ut(a,"height",h.height),f.children=[l]
var p=a.createCanvas(h.width,h.height),g=p.getContext("2d")
return g.fillStyle=s,f.render(g),g.createPattern(p,"no-repeat")}return s}inheritStopContainer(t){this.attributesToInherit.forEach((e=>{!this.getAttribute(e).hasValue()&&t.getAttribute(e).hasValue()&&this.getAttribute(e,!0).setValue(t.getAttribute(e).getValue())}))}addParentOpacity(t,e){return t.hasValue()?new ut(this.document,"color",e).addOpacity(t).getColor():e}}class Kt extends Zt{constructor(t,e,r){super(t,e,r),this.type="linearGradient",this.attributesToInherit.push("x1","y1","x2","y2")}getGradient(t,e){var r="objectBoundingBox"===this.getGradientUnits(),i=r?e.getBoundingBox(t):null
if(r&&!i)return null
this.getAttribute("x1").hasValue()||this.getAttribute("y1").hasValue()||this.getAttribute("x2").hasValue()||this.getAttribute("y2").hasValue()||(this.getAttribute("x1",!0).setValue(0),this.getAttribute("y1",!0).setValue(0),this.getAttribute("x2",!0).setValue(1),this.getAttribute("y2",!0).setValue(0))
var n=r?i.x+i.width*this.getAttribute("x1").getNumber():this.getAttribute("x1").getPixels("x"),s=r?i.y+i.height*this.getAttribute("y1").getNumber():this.getAttribute("y1").getPixels("y"),a=r?i.x+i.width*this.getAttribute("x2").getNumber():this.getAttribute("x2").getPixels("x"),o=r?i.y+i.height*this.getAttribute("y2").getNumber():this.getAttribute("y2").getPixels("y")
return n===a&&s===o?null:t.createLinearGradient(n,s,a,o)}}class Jt extends Zt{constructor(t,e,r){super(t,e,r),this.type="radialGradient",this.attributesToInherit.push("cx","cy","r","fx","fy","fr")}getGradient(t,e){var r="objectBoundingBox"===this.getGradientUnits(),i=e.getBoundingBox(t)
if(r&&!i)return null
this.getAttribute("cx").hasValue()||this.getAttribute("cx",!0).setValue("50%"),this.getAttribute("cy").hasValue()||this.getAttribute("cy",!0).setValue("50%"),this.getAttribute("r").hasValue()||this.getAttribute("r",!0).setValue("50%")
var n=r?i.x+i.width*this.getAttribute("cx").getNumber():this.getAttribute("cx").getPixels("x"),s=r?i.y+i.height*this.getAttribute("cy").getNumber():this.getAttribute("cy").getPixels("y"),a=n,o=s
this.getAttribute("fx").hasValue()&&(a=r?i.x+i.width*this.getAttribute("fx").getNumber():this.getAttribute("fx").getPixels("x")),this.getAttribute("fy").hasValue()&&(o=r?i.y+i.height*this.getAttribute("fy").getNumber():this.getAttribute("fy").getPixels("y"))
var u=r?(i.width+i.height)/2*this.getAttribute("r").getNumber():this.getAttribute("r").getPixels(),h=this.getAttribute("fr").getPixels()
return t.createRadialGradient(a,o,h,n,s,u)}}class te extends Ct{constructor(t,e,r){super(t,e,r),this.type="stop"
var i=Math.max(0,Math.min(1,this.getAttribute("offset").getNumber())),n=this.getStyle("stop-opacity"),s=this.getStyle("stop-color",!0)
""===s.getString()&&s.setValue("#000"),n.hasValue()&&(s=s.addOpacity(n)),this.offset=i,this.color=s.getColor()}}class ee extends Ct{constructor(t,e,r){super(t,e,r),this.type="animate",this.duration=0,this.initialValue=null,this.initialUnits="",this.removed=!1,this.frozen=!1,t.screen.animations.push(this),this.begin=this.getAttribute("begin").getMilliseconds(),this.maxDuration=this.begin+this.getAttribute("dur").getMilliseconds(),this.from=this.getAttribute("from"),this.to=this.getAttribute("to"),this.values=new ut(t,"values",null)
var i=this.getAttribute("values")
i.hasValue()&&this.values.setValue(i.getString().split(";"))}getProperty(){var t=this.getAttribute("attributeType").getString(),e=this.getAttribute("attributeName").getString()
return"CSS"===t?this.parent.getStyle(e,!0):this.parent.getAttribute(e,!0)}calcValue(){var{initialUnits:t}=this,{progress:e,from:r,to:i}=this.getProgress(),n=r.getNumber()+(i.getNumber()-r.getNumber())*e
return"%"===t&&(n*=100),"".concat(n).concat(t)}update(t){var{parent:e}=this,r=this.getProperty()
if(this.initialValue||(this.initialValue=r.getString(),this.initialUnits=r.getUnits()),this.duration>this.maxDuration){var i=this.getAttribute("fill").getString("remove")
if("indefinite"===this.getAttribute("repeatCount").getString()||"indefinite"===this.getAttribute("repeatDur").getString())this.duration=0
else if("freeze"!==i||this.frozen){if("remove"===i&&!this.removed)return this.removed=!0,r.setValue(e.animationFrozen?e.animationFrozenValue:this.initialValue),!0}else this.frozen=!0,e.animationFrozen=!0,e.animationFrozenValue=r.getString()
return!1}this.duration+=t
var n=!1
if(this.begin<this.duration){var s=this.calcValue(),a=this.getAttribute("type")
if(a.hasValue()){var o=a.getString()
s="".concat(o,"(").concat(s,")")}r.setValue(s),n=!0}return n}getProgress(){var{document:t,values:e}=this,r={progress:(this.duration-this.begin)/(this.maxDuration-this.begin)}
if(e.hasValue()){var i=r.progress*(e.getValue().length-1),n=Math.floor(i),s=Math.ceil(i)
r.from=new ut(t,"from",parseFloat(e.getValue()[n])),r.to=new ut(t,"to",parseFloat(e.getValue()[s])),r.progress=(i-n)/(s-n)}else r.from=this.from,r.to=this.to
return r}}class re extends ee{constructor(){super(...arguments),this.type="animateColor"}calcValue(){var{progress:t,from:e,to:r}=this.getProgress(),i=new u(e.getColor()),n=new u(r.getColor())
if(i.ok&&n.ok){var s=i.r+(n.r-i.r)*t,a=i.g+(n.g-i.g)*t,o=i.b+(n.b-i.b)*t
return"rgb(".concat(Math.floor(s),", ").concat(Math.floor(a),", ").concat(Math.floor(o),")")}return this.getAttribute("from").getColor()}}class ie extends ee{constructor(){super(...arguments),this.type="animateTransform"}calcValue(){var{progress:t,from:e,to:r}=this.getProgress(),i=D(e.getString()),n=D(r.getString()),s=i.map(((e,r)=>e+(n[r]-e)*t)).join(" ")
return s}}class ne extends Ct{constructor(t,e,r){super(t,e,r),this.type="font",this.glyphs={},this.horizAdvX=this.getAttribute("horiz-adv-x").getNumber()
var{definitions:i}=t,{children:n}=this
for(var s of n)switch(s.type){case"font-face":this.fontFace=s
var a=s.getStyle("font-family")
a.hasValue()&&(i[a.getString()]=this)
break
case"missing-glyph":this.missingGlyph=s
break
case"glyph":var o=s
o.arabicForm?(this.isRTL=!0,this.isArabic=!0,void 0===this.glyphs[o.unicode]&&(this.glyphs[o.unicode]={}),this.glyphs[o.unicode][o.arabicForm]=o):this.glyphs[o.unicode]=o}}render(){}}class se extends Ct{constructor(t,e,r){super(t,e,r),this.type="font-face",this.ascent=this.getAttribute("ascent").getNumber(),this.descent=this.getAttribute("descent").getNumber(),this.unitsPerEm=this.getAttribute("units-per-em").getNumber()}}class ae extends kt{constructor(){super(...arguments),this.type="missing-glyph",this.horizAdvX=0}}class oe extends Dt{constructor(){super(...arguments),this.type="tref"}getText(){var t=this.getHrefAttribute().getDefinition()
if(t){var e=t.children[0]
if(e)return e.getText()}return""}}class ue extends Dt{constructor(t,e,r){super(t,e,r),this.type="a"
var{childNodes:i}=e,n=i[0],s=i.length>0&&Array.from(i).every((t=>3===t.nodeType))
this.hasText=s,this.text=s?this.getTextFromNode(n):""}getText(){return this.text}renderChildren(t){if(this.hasText){super.renderChildren(t)
var{document:e,x:r,y:i}=this,{mouse:n}=e.screen,s=new ut(e,"fontSize",_t.parse(e.ctx.font).fontSize)
n.isWorking()&&n.checkBoundingBox(this,new Rt(r,i-s.getPixels("y"),r+this.measureText(t),i))}else if(this.children.length>0){var a=new $t(this.document,null)
a.children=this.children,a.parent=this,a.render(t)}}onClick(){var{window:t}=this.document
t&&t.open(this.getHrefAttribute().getString())}onMouseMove(){this.document.ctx.canvas.style.cursor="pointer"}}function he(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t)
e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function ce(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?he(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):he(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}class le extends Dt{constructor(t,e,r){super(t,e,r),this.type="textPath",this.textWidth=0,this.textHeight=0,this.pathLength=-1,this.glyphInfo=null,this.letterSpacingCache=[],this.measuresCache=new Map([["",0]])
var i=this.getHrefAttribute().getDefinition()
this.text=this.getTextFromNode(),this.dataArray=this.parsePathData(i)}getText(){return this.text}path(t){var{dataArray:e}=this
t&&t.beginPath(),e.forEach((e=>{var{type:r,points:i}=e
switch(r){case Vt.LINE_TO:t&&t.lineTo(i[0],i[1])
break
case Vt.MOVE_TO:t&&t.moveTo(i[0],i[1])
break
case Vt.CURVE_TO:t&&t.bezierCurveTo(i[0],i[1],i[2],i[3],i[4],i[5])
break
case Vt.QUAD_TO:t&&t.quadraticCurveTo(i[0],i[1],i[2],i[3])
break
case Vt.ARC:var[n,s,a,o,u,h,c,l]=i,f=a>o?a:o,p=a>o?1:a/o,g=a>o?o/a:1
t&&(t.translate(n,s),t.rotate(c),t.scale(p,g),t.arc(0,0,f,u,u+h,Boolean(1-l)),t.scale(1/p,1/g),t.rotate(-c),t.translate(-n,-s))
break
case Vt.CLOSE_PATH:t&&t.closePath()}}))}renderChildren(t){this.setTextData(t),t.save()
var e=this.parent.getStyle("text-decoration").getString(),r=this.getFontSize(),{glyphInfo:i}=this,n=t.fillStyle
"underline"===e&&t.beginPath(),i.forEach(((i,n)=>{var{p0:s,p1:a,rotation:o,text:u}=i
t.save(),t.translate(s.x,s.y),t.rotate(o),t.fillStyle&&t.fillText(u,0,0),t.strokeStyle&&t.strokeText(u,0,0),t.restore(),"underline"===e&&(0===n&&t.moveTo(s.x,s.y+r/8),t.lineTo(a.x,a.y+r/5))})),"underline"===e&&(t.lineWidth=r/20,t.strokeStyle=n,t.stroke(),t.closePath()),t.restore()}getLetterSpacingAt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0
return this.letterSpacingCache[t]||0}findSegmentToFitChar(t,e,r,i,n,s,a,o,u){var h=s,c=this.measureText(t,o)
" "===o&&"justify"===e&&r<i&&(c+=(i-r)/n),u>-1&&(h+=this.getLetterSpacingAt(u))
var l=this.textHeight/20,f=this.getEquidistantPointOnPath(h,l,0),p=this.getEquidistantPointOnPath(h+c,l,0),g={p0:f,p1:p},d=f&&p?Math.atan2(p.y-f.y,p.x-f.x):0
if(a){var v=Math.cos(Math.PI/2+d)*a,y=Math.cos(-d)*a
g.p0=ce(ce({},f),{},{x:f.x+v,y:f.y+y}),g.p1=ce(ce({},p),{},{x:p.x+v,y:p.y+y})}return{offset:h+=c,segment:g,rotation:d}}measureText(t,e){var{measuresCache:r}=this,i=e||this.getText()
if(r.has(i))return r.get(i)
var n=this.measureTargetText(t,i)
return r.set(i,n),n}setTextData(t){if(!this.glyphInfo){var e=this.getText(),r=e.split(""),i=e.split(" ").length-1,n=this.parent.getAttribute("dx").split().map((t=>t.getPixels("x"))),s=this.parent.getAttribute("dy").getPixels("y"),a=this.parent.getStyle("text-anchor").getString("start"),o=this.getStyle("letter-spacing"),u=this.parent.getStyle("letter-spacing"),h=0
o.hasValue()&&"inherit"!==o.getValue()?o.hasValue()&&"initial"!==o.getValue()&&"unset"!==o.getValue()&&(h=o.getPixels()):h=u.getPixels()
var c=[],l=e.length
this.letterSpacingCache=c
for(var f=0;f<l;f++)c.push(void 0!==n[f]?n[f]:h)
var p=c.reduce(((t,e,r)=>0===r?0:t+e||0),0),g=this.measureText(t),d=Math.max(g+p,0)
this.textWidth=g,this.textHeight=this.getFontSize(),this.glyphInfo=[]
var v=this.getPathLength(),y=this.getStyle("startOffset").getNumber(0)*v,m=0
"middle"!==a&&"center"!==a||(m=-d/2),"end"!==a&&"right"!==a||(m=-d),m+=y,r.forEach(((e,n)=>{var{offset:o,segment:u,rotation:h}=this.findSegmentToFitChar(t,a,d,v,i,m,s,e,n)
m=o,u.p0&&u.p1&&this.glyphInfo.push({text:r[n],p0:u.p0,p1:u.p1,rotation:h})}))}}parsePathData(t){if(this.pathLength=-1,!t)return[]
var e=[],{pathParser:r}=t
for(r.reset();!r.isEnd();){var{current:i}=r,n=i?i.x:0,s=i?i.y:0,a=r.next(),o=a.type,u=[]
switch(a.type){case Vt.MOVE_TO:this.pathM(r,u)
break
case Vt.LINE_TO:o=this.pathL(r,u)
break
case Vt.HORIZ_LINE_TO:o=this.pathH(r,u)
break
case Vt.VERT_LINE_TO:o=this.pathV(r,u)
break
case Vt.CURVE_TO:this.pathC(r,u)
break
case Vt.SMOOTH_CURVE_TO:o=this.pathS(r,u)
break
case Vt.QUAD_TO:this.pathQ(r,u)
break
case Vt.SMOOTH_QUAD_TO:o=this.pathT(r,u)
break
case Vt.ARC:u=this.pathA(r)
break
case Vt.CLOSE_PATH:kt.pathZ(r)}a.type!==Vt.CLOSE_PATH?e.push({type:o,points:u,start:{x:n,y:s},pathLength:this.calcLength(n,s,o,u)}):e.push({type:Vt.CLOSE_PATH,points:[],pathLength:0})}return e}pathM(t,e){var{x:r,y:i}=kt.pathM(t).point
e.push(r,i)}pathL(t,e){var{x:r,y:i}=kt.pathL(t).point
return e.push(r,i),Vt.LINE_TO}pathH(t,e){var{x:r,y:i}=kt.pathH(t).point
return e.push(r,i),Vt.LINE_TO}pathV(t,e){var{x:r,y:i}=kt.pathV(t).point
return e.push(r,i),Vt.LINE_TO}pathC(t,e){var{point:r,controlPoint:i,currentPoint:n}=kt.pathC(t)
e.push(r.x,r.y,i.x,i.y,n.x,n.y)}pathS(t,e){var{point:r,controlPoint:i,currentPoint:n}=kt.pathS(t)
return e.push(r.x,r.y,i.x,i.y,n.x,n.y),Vt.CURVE_TO}pathQ(t,e){var{controlPoint:r,currentPoint:i}=kt.pathQ(t)
e.push(r.x,r.y,i.x,i.y)}pathT(t,e){var{controlPoint:r,currentPoint:i}=kt.pathT(t)
return e.push(r.x,r.y,i.x,i.y),Vt.QUAD_TO}pathA(t){var{rX:e,rY:r,sweepFlag:i,xAxisRotation:n,centp:s,a1:a,ad:o}=kt.pathA(t)
return 0===i&&o>0&&(o-=2*Math.PI),1===i&&o<0&&(o+=2*Math.PI),[s.x,s.y,e,r,a,o,n,i]}calcLength(t,e,r,i){var n=0,s=null,a=null,o=0
switch(r){case Vt.LINE_TO:return this.getLineLength(t,e,i[0],i[1])
case Vt.CURVE_TO:for(n=0,s=this.getPointOnCubicBezier(0,t,e,i[0],i[1],i[2],i[3],i[4],i[5]),o=.01;o<=1;o+=.01)a=this.getPointOnCubicBezier(o,t,e,i[0],i[1],i[2],i[3],i[4],i[5]),n+=this.getLineLength(s.x,s.y,a.x,a.y),s=a
return n
case Vt.QUAD_TO:for(n=0,s=this.getPointOnQuadraticBezier(0,t,e,i[0],i[1],i[2],i[3]),o=.01;o<=1;o+=.01)a=this.getPointOnQuadraticBezier(o,t,e,i[0],i[1],i[2],i[3]),n+=this.getLineLength(s.x,s.y,a.x,a.y),s=a
return n
case Vt.ARC:n=0
var u=i[4],h=i[5],c=i[4]+h,l=Math.PI/180
if(Math.abs(u-c)<l&&(l=Math.abs(u-c)),s=this.getPointOnEllipticalArc(i[0],i[1],i[2],i[3],u,0),h<0)for(o=u-l;o>c;o-=l)a=this.getPointOnEllipticalArc(i[0],i[1],i[2],i[3],o,0),n+=this.getLineLength(s.x,s.y,a.x,a.y),s=a
else for(o=u+l;o<c;o+=l)a=this.getPointOnEllipticalArc(i[0],i[1],i[2],i[3],o,0),n+=this.getLineLength(s.x,s.y,a.x,a.y),s=a
return a=this.getPointOnEllipticalArc(i[0],i[1],i[2],i[3],c,0),n+this.getLineLength(s.x,s.y,a.x,a.y)}return 0}getPointOnLine(t,e,r,i,n){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:r,o=(n-r)/(i-e+Z),u=Math.sqrt(t*t/(1+o*o))
i<e&&(u*=-1)
var h=o*u,c=null
if(i===e)c={x:s,y:a+h}
else if((a-r)/(s-e+Z)===o)c={x:s+u,y:a+h}
else{var l,f,p=this.getLineLength(e,r,i,n)
if(p<Z)return null
var g=(s-e)*(i-e)+(a-r)*(n-r)
l=e+(g/=p*p)*(i-e),f=r+g*(n-r)
var d=this.getLineLength(s,a,l,f),v=Math.sqrt(t*t-d*d)
u=Math.sqrt(v*v/(1+o*o)),i<e&&(u*=-1),c={x:l+u,y:f+(h=o*u)}}return c}getPointOnPath(t){var e=this.getPathLength(),r=0,i=null
if(t<-5e-5||t-5e-5>e)return null
var{dataArray:n}=this
for(var s of n){if(!s||!(s.pathLength<5e-5||r+s.pathLength+5e-5<t)){var a=t-r,o=0
switch(s.type){case Vt.LINE_TO:i=this.getPointOnLine(a,s.start.x,s.start.y,s.points[0],s.points[1],s.start.x,s.start.y)
break
case Vt.ARC:var u=s.points[4],h=s.points[5],c=s.points[4]+h
if(o=u+a/s.pathLength*h,h<0&&o<c||h>=0&&o>c)break
i=this.getPointOnEllipticalArc(s.points[0],s.points[1],s.points[2],s.points[3],o,s.points[6])
break
case Vt.CURVE_TO:(o=a/s.pathLength)>1&&(o=1),i=this.getPointOnCubicBezier(o,s.start.x,s.start.y,s.points[0],s.points[1],s.points[2],s.points[3],s.points[4],s.points[5])
break
case Vt.QUAD_TO:(o=a/s.pathLength)>1&&(o=1),i=this.getPointOnQuadraticBezier(o,s.start.x,s.start.y,s.points[0],s.points[1],s.points[2],s.points[3])}if(i)return i
break}r+=s.pathLength}return null}getLineLength(t,e,r,i){return Math.sqrt((r-t)*(r-t)+(i-e)*(i-e))}getPathLength(){return-1===this.pathLength&&(this.pathLength=this.dataArray.reduce(((t,e)=>e.pathLength>0?t+e.pathLength:t),0)),this.pathLength}getPointOnCubicBezier(t,e,r,i,n,s,a,o,u){return{x:o*et(t)+s*rt(t)+i*it(t)+e*nt(t),y:u*et(t)+a*rt(t)+n*it(t)+r*nt(t)}}getPointOnQuadraticBezier(t,e,r,i,n,s,a){return{x:s*st(t)+i*at(t)+e*ot(t),y:a*st(t)+n*at(t)+r*ot(t)}}getPointOnEllipticalArc(t,e,r,i,n,s){var a=Math.cos(s),o=Math.sin(s),u=r*Math.cos(n),h=i*Math.sin(n)
return{x:t+(u*a-h*o),y:e+(u*o+h*a)}}buildEquidistantCache(t,e){var r=this.getPathLength(),i=e||.25,n=t||r/100
if(!this.equidistantCache||this.equidistantCache.step!==n||this.equidistantCache.precision!==i){this.equidistantCache={step:n,precision:i,points:[]}
for(var s=0,a=0;a<=r;a+=i){var o=this.getPointOnPath(a),u=this.getPointOnPath(a+i)
o&&u&&(s+=this.getLineLength(o.x,o.y,u.x,u.y))>=n&&(this.equidistantCache.points.push({x:o.x,y:o.y,distance:a}),s-=n)}}}getEquidistantPointOnPath(t,e,r){if(this.buildEquidistantCache(e,r),t<0||t-this.getPathLength()>5e-5)return null
var i=Math.round(t/this.getPathLength()*(this.equidistantCache.points.length-1))
return this.equidistantCache.points[i]||null}}var fe=/^\s*data:(([^/,;]+\/[^/,;]+)(?:;([^,;=]+=[^,;=]+))?)?(?:;(base64))?,(.*)$/i
class pe extends It{constructor(t,e,r){super(t,e,r),this.type="image",this.loaded=!1
var i=this.getHrefAttribute().getString()
if(i){var n=i.endsWith(".svg")||/^\s*data:image\/svg\+xml/i.test(i)
t.images.push(this),n?this.loadSvg(i):this.loadImage(i),this.isSvg=n}}loadImage(t){var e=this
return n((function*(){try{var r=yield e.document.createImage(t)
e.image=r}catch(e){console.error('Error while loading image "'.concat(t,'":'),e)}e.loaded=!0}))()}loadSvg(t){var e=this
return n((function*(){var r=fe.exec(t)
if(r){var i=r[5]
"base64"===r[4]?e.image=atob(i):e.image=decodeURIComponent(i)}else try{var n=yield e.document.fetch(t),s=yield n.text()
e.image=s}catch(e){console.error('Error while loading image "'.concat(t,'":'),e)}e.loaded=!0}))()}renderChildren(t){var{document:e,image:r,loaded:i}=this,n=this.getAttribute("x").getPixels("x"),s=this.getAttribute("y").getPixels("y"),a=this.getStyle("width").getPixels("x"),o=this.getStyle("height").getPixels("y")
if(i&&r&&a&&o){if(t.save(),t.translate(n,s),this.isSvg){var u=e.canvg.forkString(t,this.image,{ignoreMouse:!0,ignoreAnimation:!0,ignoreDimensions:!0,ignoreClear:!0,offsetX:0,offsetY:0,scaleWidth:a,scaleHeight:o})
u.document.documentElement.parent=this,u.render()}else{var h=this.image
e.setViewBox({ctx:t,aspectRatio:this.getAttribute("preserveAspectRatio").getString(),width:a,desiredWidth:h.width,height:o,desiredHeight:h.height}),this.loaded&&(void 0===h.complete||h.complete)&&t.drawImage(h,0,0)}t.restore()}}getBoundingBox(){var t=this.getAttribute("x").getPixels("x"),e=this.getAttribute("y").getPixels("y"),r=this.getStyle("width").getPixels("x"),i=this.getStyle("height").getPixels("y")
return new Rt(t,e,t+r,e+i)}}class ge extends It{constructor(){super(...arguments),this.type="symbol"}render(t){}}class de{constructor(t){this.document=t,this.loaded=!1,t.fonts.push(this)}load(t,e){var r=this
return n((function*(){try{var{document:i}=r,n=(yield i.canvg.parser.load(e)).getElementsByTagName("font")
Array.from(n).forEach((e=>{var r=i.createElement(e)
i.definitions[t]=r}))}catch(t){console.error('Error while loading font "'.concat(e,'":'),t)}r.loaded=!0}))()}}class ve extends Ct{constructor(t,e,r){super(t,e,r),this.type="style"
var i=I(Array.from(e.childNodes).map((t=>t.textContent)).join("").replace(/(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm,"").replace(/@import.*;/g,""))
i.split("}").forEach((e=>{var r=e.trim()
if(r){var i=r.split("{"),n=i[0].split(","),s=i[1].split(";")
n.forEach((e=>{var r=e.trim()
if(r){var i=t.styles[r]||{}
if(s.forEach((e=>{var r=e.indexOf(":"),n=e.substr(0,r).trim(),s=e.substr(r+1,e.length-r).trim()
n&&s&&(i[n]=new ut(t,n,s))})),t.styles[r]=i,t.stylesSpecificity[r]=$(r),"@font-face"===r){var n=i["font-family"].getString().replace(/"|'/g,"")
i.src.getString().split(",").forEach((e=>{if(e.indexOf('format("svg")')>0){var r=F(e)
r&&new de(t).load(n,r)}}))}}}))}}))}}ve.parseExternalUrl=F
class ye extends It{constructor(){super(...arguments),this.type="use"}setContext(t){super.setContext(t)
var e=this.getAttribute("x"),r=this.getAttribute("y")
e.hasValue()&&t.translate(e.getPixels("x"),0),r.hasValue()&&t.translate(0,r.getPixels("y"))}path(t){var{element:e}=this
e&&e.path(t)}renderChildren(t){var{document:e,element:r}=this
if(r){var i=r
if("symbol"===r.type&&((i=new Ft(e,null)).attributes.viewBox=new ut(e,"viewBox",r.getAttribute("viewBox").getString()),i.attributes.preserveAspectRatio=new ut(e,"preserveAspectRatio",r.getAttribute("preserveAspectRatio").getString()),i.attributes.overflow=new ut(e,"overflow",r.getAttribute("overflow").getString()),i.children=r.children,r.styles.opacity=new ut(e,"opacity",this.calculateOpacity())),"svg"===i.type){var n=this.getStyle("width",!1,!0),s=this.getStyle("height",!1,!0)
n.hasValue()&&(i.attributes.width=new ut(e,"width",n.getString())),s.hasValue()&&(i.attributes.height=new ut(e,"height",s.getString()))}var a=i.parent
i.parent=this,i.render(t),i.parent=a}}getBoundingBox(t){var{element:e}=this
return e?e.getBoundingBox(t):null}elementTransform(){var{document:t,element:e}=this
return Ot.fromElement(t,e)}get element(){return this.cachedElement||(this.cachedElement=this.getHrefAttribute().getDefinition()),this.cachedElement}}function me(t,e,r,i,n,s){return t[r*i*4+4*e+s]}function xe(t,e,r,i,n,s,a){t[r*i*4+4*e+s]=a}function be(t,e,r){return t[e]*r}function we(t,e,r,i){return e+Math.cos(t)*r+Math.sin(t)*i}class Se extends Ct{constructor(t,e,r){super(t,e,r),this.type="feColorMatrix"
var i=D(this.getAttribute("values").getString())
switch(this.getAttribute("type").getString("matrix")){case"saturate":var n=i[0]
i=[.213+.787*n,.715-.715*n,.072-.072*n,0,0,.213-.213*n,.715+.285*n,.072-.072*n,0,0,.213-.213*n,.715-.715*n,.072+.928*n,0,0,0,0,0,1,0,0,0,0,0,1]
break
case"hueRotate":var s=i[0]*Math.PI/180
i=[we(s,.213,.787,-.213),we(s,.715,-.715,-.715),we(s,.072,-.072,.928),0,0,we(s,.213,-.213,.143),we(s,.715,.285,.14),we(s,.072,-.072,-.283),0,0,we(s,.213,-.213,-.787),we(s,.715,-.715,.715),we(s,.072,.928,.072),0,0,0,0,0,1,0,0,0,0,0,1]
break
case"luminanceToAlpha":i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.2125,.7154,.0721,0,0,0,0,0,0,1]}this.matrix=i,this.includeOpacity=this.getAttribute("includeOpacity").hasValue()}apply(t,e,r,i,n){for(var{includeOpacity:s,matrix:a}=this,o=t.getImageData(0,0,i,n),u=0;u<n;u++)for(var h=0;h<i;h++){var c=me(o.data,h,u,i,0,0),l=me(o.data,h,u,i,0,1),f=me(o.data,h,u,i,0,2),p=me(o.data,h,u,i,0,3),g=be(a,0,c)+be(a,1,l)+be(a,2,f)+be(a,3,p)+be(a,4,1),d=be(a,5,c)+be(a,6,l)+be(a,7,f)+be(a,8,p)+be(a,9,1),v=be(a,10,c)+be(a,11,l)+be(a,12,f)+be(a,13,p)+be(a,14,1),y=be(a,15,c)+be(a,16,l)+be(a,17,f)+be(a,18,p)+be(a,19,1)
s&&(g=0,d=0,v=0,y*=p/255),xe(o.data,h,u,i,0,0,g),xe(o.data,h,u,i,0,1,d),xe(o.data,h,u,i,0,2,v),xe(o.data,h,u,i,0,3,y)}t.clearRect(0,0,i,n),t.putImageData(o,0,0)}}class Te extends Ct{constructor(){super(...arguments),this.type="mask"}apply(t,e){var{document:r}=this,i=this.getAttribute("x").getPixels("x"),n=this.getAttribute("y").getPixels("y"),s=this.getStyle("width").getPixels("x"),a=this.getStyle("height").getPixels("y")
if(!s&&!a){var o=new Rt
this.children.forEach((e=>{o.addBoundingBox(e.getBoundingBox(t))})),i=Math.floor(o.x1),n=Math.floor(o.y1),s=Math.floor(o.width),a=Math.floor(o.height)}var u=this.removeStyles(e,Te.ignoreStyles),h=r.createCanvas(i+s,n+a),c=h.getContext("2d")
r.screen.setDefaults(c),this.renderChildren(c),new Se(r,{nodeType:1,childNodes:[],attributes:[{nodeName:"type",value:"luminanceToAlpha"},{nodeName:"includeOpacity",value:"true"}]}).apply(c,0,0,i+s,n+a)
var l=r.createCanvas(i+s,n+a),f=l.getContext("2d")
r.screen.setDefaults(f),e.render(f),f.globalCompositeOperation="destination-in",f.fillStyle=c.createPattern(h,"no-repeat"),f.fillRect(0,0,i+s,n+a),t.fillStyle=f.createPattern(l,"no-repeat"),t.fillRect(0,0,i+s,n+a),this.restoreStyles(e,u)}render(t){}}Te.ignoreStyles=["mask","transform","clip-path"]
var Ae=()=>{}
class Oe extends Ct{constructor(){super(...arguments),this.type="clipPath"}apply(t){var{document:e}=this,r=Reflect.getPrototypeOf(t),{beginPath:i,closePath:n}=t
r&&(r.beginPath=Ae,r.closePath=Ae),Reflect.apply(i,t,[]),this.children.forEach((i=>{if(void 0!==i.path){var s=void 0!==i.elementTransform?i.elementTransform():null
s||(s=Ot.fromElement(e,i)),s&&s.apply(t),i.path(t),r&&(r.closePath=n),s&&s.unapply(t)}})),Reflect.apply(n,t,[]),t.clip(),r&&(r.beginPath=i,r.closePath=n)}render(t){}}class Ce extends Ct{constructor(){super(...arguments),this.type="filter"}apply(t,e){var{document:r,children:i}=this,n=e.getBoundingBox(t)
if(n){var s=0,a=0
i.forEach((t=>{var e=t.extraFilterDistance||0
s=Math.max(s,e),a=Math.max(a,e)}))
var o=Math.floor(n.width),u=Math.floor(n.height),h=o+2*s,c=u+2*a
if(!(h<1||c<1)){var l=Math.floor(n.x),f=Math.floor(n.y),p=this.removeStyles(e,Ce.ignoreStyles),g=r.createCanvas(h,c),d=g.getContext("2d")
r.screen.setDefaults(d),d.translate(-l+s,-f+a),e.render(d),i.forEach((t=>{"function"==typeof t.apply&&t.apply(d,0,0,h,c)})),t.drawImage(g,0,0,h,c,l-s,f-a,h,c),this.restoreStyles(e,p)}}}render(t){}}Ce.ignoreStyles=["filter","transform","clip-path"]
class Pe extends Ct{constructor(t,e,r){super(t,e,r),this.type="feDropShadow",this.addStylesFromStyleDefinition()}apply(t,e,r,i,n){}}class Ee extends Ct{constructor(){super(...arguments),this.type="feMorphology"}apply(t,e,r,i,n){}}class Me extends Ct{constructor(){super(...arguments),this.type="feComposite"}apply(t,e,r,i,n){}}class Ne extends Ct{constructor(t,e,r){super(t,e,r),this.type="feGaussianBlur",this.blurRadius=Math.floor(this.getAttribute("stdDeviation").getNumber()),this.extraFilterDistance=this.blurRadius}apply(t,e,r,i,n){var{document:s,blurRadius:a}=this,o=s.window?s.window.document.body:null,u=t.canvas
u.id=s.getUniqueId(),o&&(u.style.display="none",o.appendChild(u)),function(t,e,r,i,n,s){if(!(isNaN(s)||s<1)){s|=0
var a=function(t,e,r,i,n){if("string"==typeof t&&(t=document.getElementById(t)),!t||"object"!==M(t)||!("getContext"in t))throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!")
var s=t.getContext("2d")
try{return s.getImageData(e,r,i,n)}catch(t){throw new Error("unable to access image data: "+t)}}(t,e,r,i,n)
a=function(t,e,r,i,n,s){for(var a,o=t.data,u=2*s+1,h=i-1,c=n-1,l=s+1,f=l*(l+1)/2,p=new R,g=p,d=1;d<u;d++)g=g.next=new R,d===l&&(a=g)
g.next=p
for(var v=null,y=null,m=0,x=0,b=N[s],w=_[s],S=0;S<n;S++){g=p
for(var T=o[x],A=o[x+1],O=o[x+2],C=o[x+3],P=0;P<l;P++)g.r=T,g.g=A,g.b=O,g.a=C,g=g.next
for(var E=0,M=0,V=0,I=0,k=l*T,L=l*A,D=l*O,j=l*C,B=f*T,F=f*A,z=f*O,U=f*C,H=1;H<l;H++){var X=x+((h<H?h:H)<<2),Y=o[X],q=o[X+1],W=o[X+2],G=o[X+3],Q=l-H
B+=(g.r=Y)*Q,F+=(g.g=q)*Q,z+=(g.b=W)*Q,U+=(g.a=G)*Q,E+=Y,M+=q,V+=W,I+=G,g=g.next}v=p,y=a
for(var $=0;$<i;$++){var Z=U*b>>>w
if(o[x+3]=Z,0!==Z){var K=255/Z
o[x]=(B*b>>>w)*K,o[x+1]=(F*b>>>w)*K,o[x+2]=(z*b>>>w)*K}else o[x]=o[x+1]=o[x+2]=0
B-=k,F-=L,z-=D,U-=j,k-=v.r,L-=v.g,D-=v.b,j-=v.a
var J=$+s+1
J=m+(J<h?J:h)<<2,B+=E+=v.r=o[J],F+=M+=v.g=o[J+1],z+=V+=v.b=o[J+2],U+=I+=v.a=o[J+3],v=v.next
var tt=y,et=tt.r,rt=tt.g,it=tt.b,nt=tt.a
k+=et,L+=rt,D+=it,j+=nt,E-=et,M-=rt,V-=it,I-=nt,y=y.next,x+=4}m+=i}for(var st=0;st<i;st++){var at=o[x=st<<2],ot=o[x+1],ut=o[x+2],ht=o[x+3],ct=l*at,lt=l*ot,ft=l*ut,pt=l*ht,gt=f*at,dt=f*ot,vt=f*ut,yt=f*ht
g=p
for(var mt=0;mt<l;mt++)g.r=at,g.g=ot,g.b=ut,g.a=ht,g=g.next
for(var xt=i,bt=0,wt=0,St=0,Tt=0,At=1;At<=s;At++){x=xt+st<<2
var Ot=l-At
gt+=(g.r=at=o[x])*Ot,dt+=(g.g=ot=o[x+1])*Ot,vt+=(g.b=ut=o[x+2])*Ot,yt+=(g.a=ht=o[x+3])*Ot,Tt+=at,bt+=ot,wt+=ut,St+=ht,g=g.next,At<c&&(xt+=i)}x=st,v=p,y=a
for(var Ct=0;Ct<n;Ct++){var Pt=x<<2
o[Pt+3]=ht=yt*b>>>w,ht>0?(ht=255/ht,o[Pt]=(gt*b>>>w)*ht,o[Pt+1]=(dt*b>>>w)*ht,o[Pt+2]=(vt*b>>>w)*ht):o[Pt]=o[Pt+1]=o[Pt+2]=0,gt-=ct,dt-=lt,vt-=ft,yt-=pt,ct-=v.r,lt-=v.g,ft-=v.b,pt-=v.a,Pt=st+((Pt=Ct+l)<c?Pt:c)*i<<2,gt+=Tt+=v.r=o[Pt],dt+=bt+=v.g=o[Pt+1],vt+=wt+=v.b=o[Pt+2],yt+=St+=v.a=o[Pt+3],v=v.next,ct+=at=y.r,lt+=ot=y.g,ft+=ut=y.b,pt+=ht=y.a,Tt-=at,bt-=ot,wt-=ut,St-=ht,y=y.next,x+=i}}return t}(a,0,0,i,n,s),t.getContext("2d").putImageData(a,e,r)}}(u,e,r,i,n,a),o&&o.removeChild(u)}}class _e extends Ct{constructor(){super(...arguments),this.type="title"}}class Re extends Ct{constructor(){super(...arguments),this.type="desc"}}var Ve={svg:Ft,rect:zt,circle:Ut,ellipse:Ht,line:Xt,polyline:Yt,polygon:qt,path:kt,pattern:Wt,marker:Gt,defs:Qt,linearGradient:Kt,radialGradient:Jt,stop:te,animate:ee,animateColor:re,animateTransform:ie,font:ne,"font-face":se,"missing-glyph":ae,glyph:Lt,text:Dt,tspan:jt,tref:oe,a:ue,textPath:le,image:pe,g:$t,symbol:ge,style:ve,use:ye,mask:Te,clipPath:Oe,filter:Ce,feDropShadow:Pe,feMorphology:Ee,feComposite:Me,feColorMatrix:Se,feGaussianBlur:Ne,title:_e,desc:Re}
function Ie(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t)
e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function ke(){return ke=n((function*(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=document.createElement("img")
return e&&(r.crossOrigin="Anonymous"),new Promise(((e,i)=>{r.onload=()=>{e(r)},r.onerror=(t,e,r,n,s)=>{i(s)},r.src=t}))})),ke.apply(this,arguments)}class Le{constructor(t){var{rootEmSize:e=12,emSize:r=12,createCanvas:i=Le.createCanvas,createImage:n=Le.createImage,anonymousCrossOrigin:s}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
this.canvg=t,this.definitions={},this.styles={},this.stylesSpecificity={},this.images=[],this.fonts=[],this.emSizeStack=[],this.uniqueId=0,this.screen=t.screen,this.rootEmSize=e,this.emSize=r,this.createCanvas=i,this.createImage=this.bindCreateImage(n,s),this.screen.wait(this.isImagesLoaded.bind(this)),this.screen.wait(this.isFontsLoaded.bind(this))}bindCreateImage(t,e){return"boolean"==typeof e?(r,i)=>t(r,"boolean"==typeof i?i:e):t}get window(){return this.screen.window}get fetch(){return this.screen.fetch}get ctx(){return this.screen.ctx}get emSize(){var{emSizeStack:t}=this
return t[t.length-1]}set emSize(t){var{emSizeStack:e}=this
e.push(t)}popEmSize(){var{emSizeStack:t}=this
t.pop()}getUniqueId(){return"canvg".concat(++this.uniqueId)}isImagesLoaded(){return this.images.every((t=>t.loaded))}isFontsLoaded(){return this.fonts.every((t=>t.loaded))}createDocumentElement(t){var e=this.createElement(t.documentElement)
return e.root=!0,e.addStylesFromStyleDefinition(),this.documentElement=e,e}createElement(t){var e=t.nodeName.replace(/^[^:]+:/,""),r=Le.elementTypes[e]
return void 0!==r?new r(this,t):new Pt(this,t)}createTextNode(t){return new Bt(this,t)}setViewBox(t){this.screen.setViewBox(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?Ie(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Ie(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({document:this},t))}}function De(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t)
e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function je(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?De(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):De(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}Le.createCanvas=function(t,e){var r=document.createElement("canvas")
return r.width=t,r.height=e,r},Le.createImage=function(t){return ke.apply(this,arguments)},Le.elementTypes=Ve
class Be{constructor(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
this.parser=new yt(r),this.screen=new gt(t,r),this.options=r
var i=new Le(this,r),n=i.createDocumentElement(e)
this.document=i,this.documentElement=n}static from(t,e){var r=arguments
return n((function*(){var i=r.length>2&&void 0!==r[2]?r[2]:{},n=new yt(i),s=yield n.parse(e)
return new Be(t,s,i)}))()}static fromString(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=new yt(r).parseFromString(e)
return new Be(t,i,r)}fork(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
return Be.from(t,e,je(je({},this.options),r))}forkString(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
return Be.fromString(t,e,je(je({},this.options),r))}ready(){return this.screen.ready()}isReady(){return this.screen.isReady()}render(){var t=arguments,e=this
return n((function*(){var r=t.length>0&&void 0!==t[0]?t[0]:{}
e.start(je({enableRedraw:!0,ignoreAnimation:!0,ignoreMouse:!0},r)),yield e.ready(),e.stop()}))()}start(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{documentElement:e,screen:r,options:i}=this
r.start(e,je(je({enableRedraw:!0},i),t))}stop(){this.screen.stop()}resize(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
this.documentElement.resize(t,e,r)}}}}])
