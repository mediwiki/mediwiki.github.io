var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&n.path)}},n.exports),n.exports}var n=function(e){return e&&e.Math==Math&&e},i=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")(),r=function(e){try{return!!e()}catch(e){return!0}},a=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),o={}.propertyIsEnumerable,s=Object.getOwnPropertyDescriptor,l={f:s&&!o.call({1:2},1)?function(e){var t=s(this,e);return!!t&&t.enumerable}:o},c=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},u={}.toString,f=function(e){return u.call(e).slice(8,-1)},d="".split,p=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==f(e)?d.call(e,""):Object(e)}:Object,h=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},m=function(e){return p(h(e))},v=function(e){return"object"==typeof e?null!==e:"function"==typeof e},g=function(e,t){if(!v(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!v(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!v(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!v(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")},y={}.hasOwnProperty,b=function(e,t){return y.call(e,t)},S=i.document,E=v(S)&&v(S.createElement),x=!a&&!r((function(){return 7!=Object.defineProperty((e="div",E?S.createElement(e):{}),"a",{get:function(){return 7}}).a;var e})),w=Object.getOwnPropertyDescriptor,L={f:a?w:function(e,t){if(e=m(e),t=g(t,!0),x)try{return w(e,t)}catch(e){}if(b(e,t))return c(!l.f.call(e,t),e[t])}},T=function(e){if(!v(e))throw TypeError(String(e)+" is not an object");return e},C=Object.defineProperty,O={f:a?C:function(e,t,n){if(T(e),t=g(t,!0),T(n),x)try{return C(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},A=a?function(e,t,n){return O.f(e,t,c(1,n))}:function(e,t,n){return e[t]=n,e},k=function(e,t){try{A(i,e,t)}catch(n){i[e]=t}return t},I=i["__core-js_shared__"]||k("__core-js_shared__",{}),P=Function.toString;"function"!=typeof I.inspectSource&&(I.inspectSource=function(e){return P.call(e)});var M,N,R,j,_=I.inspectSource,F=i.WeakMap,W="function"==typeof F&&/native code/.test(_(F)),H=t((function(e){(e.exports=function(e,t){return I[e]||(I[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),$=0,D=Math.random(),B=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++$+D).toString(36)},q=H("keys"),U={},G=i.WeakMap;if(W){var V=new G,K=V.get,z=V.has,X=V.set;M=function(e,t){return X.call(V,e,t),t},N=function(e){return K.call(V,e)||{}},R=function(e){return z.call(V,e)}}else{var Y=q[j="state"]||(q[j]=B(j));U[Y]=!0,M=function(e,t){return A(e,Y,t),t},N=function(e){return b(e,Y)?e[Y]:{}},R=function(e){return b(e,Y)}}var J={set:M,get:N,has:R,enforce:function(e){return R(e)?N(e):M(e,{})},getterFor:function(e){return function(t){var n;if(!v(t)||(n=N(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},Z=t((function(e){var t=J.get,n=J.enforce,r=String(String).split("String");(e.exports=function(e,t,a,o){var s=!!o&&!!o.unsafe,l=!!o&&!!o.enumerable,c=!!o&&!!o.noTargetGet;"function"==typeof a&&("string"!=typeof t||b(a,"name")||A(a,"name",t),n(a).source=r.join("string"==typeof t?t:"")),e!==i?(s?!c&&e[t]&&(l=!0):delete e[t],l?e[t]=a:A(e,t,a)):l?e[t]=a:k(t,a)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||_(this)}))})),Q=i,ee=function(e){return"function"==typeof e?e:void 0},te=function(e,t){return arguments.length<2?ee(Q[e])||ee(i[e]):Q[e]&&Q[e][t]||i[e]&&i[e][t]},ne=Math.ceil,ie=Math.floor,re=function(e){return isNaN(e=+e)?0:(e>0?ie:ne)(e)},ae=Math.min,oe=function(e){return e>0?ae(re(e),9007199254740991):0},se=Math.max,le=Math.min,ce=function(e,t){var n=re(e);return n<0?se(n+t,0):le(n,t)},ue=function(e){return function(t,n,i){var r,a=m(t),o=oe(a.length),s=ce(i,o);if(e&&n!=n){for(;o>s;)if((r=a[s++])!=r)return!0}else for(;o>s;s++)if((e||s in a)&&a[s]===n)return e||s||0;return!e&&-1}},fe={includes:ue(!0),indexOf:ue(!1)},de=fe.indexOf,pe=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype"),he={f:Object.getOwnPropertyNames||function(e){return function(e,t){var n,i=m(e),r=0,a=[];for(n in i)!b(U,n)&&b(i,n)&&a.push(n);for(;t.length>r;)b(i,n=t[r++])&&(~de(a,n)||a.push(n));return a}(e,pe)}},me={f:Object.getOwnPropertySymbols},ve=te("Reflect","ownKeys")||function(e){var t=he.f(T(e)),n=me.f;return n?t.concat(n(e)):t},ge=function(e,t){for(var n=ve(t),i=O.f,r=L.f,a=0;a<n.length;a++){var o=n[a];b(e,o)||i(e,o,r(t,o))}},ye=/#|\.prototype\./,be=function(e,t){var n=Ee[Se(e)];return n==we||n!=xe&&("function"==typeof t?r(t):!!t)},Se=be.normalize=function(e){return String(e).replace(ye,".").toLowerCase()},Ee=be.data={},xe=be.NATIVE="N",we=be.POLYFILL="P",Le=be,Te=L.f,Ce=function(e,t){var n,r,a,o,s,l=e.target,c=e.global,u=e.stat;if(n=c?i:u?i[l]||k(l,{}):(i[l]||{}).prototype)for(r in t){if(o=t[r],a=e.noTargetGet?(s=Te(n,r))&&s.value:n[r],!Le(c?r:l+(u?".":"#")+r,e.forced)&&void 0!==a){if(typeof o==typeof a)continue;ge(o,a)}(e.sham||a&&a.sham)&&A(o,"sham",!0),Z(n,r,o,e)}},Oe=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e},Ae=function(e){return Object(h(e))},ke=Array.isArray||function(e){return"Array"==f(e)},Ie=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())})),Pe=Ie&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Me=H("wks"),Ne=i.Symbol,Re=Pe?Ne:Ne&&Ne.withoutSetter||B,je=function(e){return b(Me,e)||(Ie&&b(Ne,e)?Me[e]=Ne[e]:Me[e]=Re("Symbol."+e)),Me[e]},_e=je("species"),Fe=function(e,t){var n;return ke(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!ke(n.prototype)?v(n)&&null===(n=n[_e])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)},We=[].push,He=function(e){var t=1==e,n=2==e,i=3==e,r=4==e,a=6==e,o=5==e||a;return function(s,l,c,u){for(var f,d,h=Ae(s),m=p(h),v=function(e,t,n){if(Oe(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,i){return e.call(t,n,i)};case 3:return function(n,i,r){return e.call(t,n,i,r)}}return function(){return e.apply(t,arguments)}}(l,c,3),g=oe(m.length),y=0,b=u||Fe,S=t?b(s,g):n?b(s,0):void 0;g>y;y++)if((o||y in m)&&(d=v(f=m[y],y,h),e))if(t)S[y]=d;else if(d)switch(e){case 3:return!0;case 5:return f;case 6:return y;case 2:We.call(S,f)}else if(r)return!1;return a?-1:i||r?r:S}},$e={forEach:He(0),map:He(1),filter:He(2),some:He(3),every:He(4),find:He(5),findIndex:He(6)},De=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))},Be=Object.defineProperty,qe={},Ue=function(e){throw e},Ge=function(e,t){if(b(qe,e))return qe[e];t||(t={});var n=[][e],i=!!b(t,"ACCESSORS")&&t.ACCESSORS,o=b(t,0)?t[0]:Ue,s=b(t,1)?t[1]:void 0;return qe[e]=!!n&&!r((function(){if(i&&!a)return!0;var e={length:-1};i?Be(e,1,{enumerable:!0,get:Ue}):e[1]=1,n.call(e,o,s)}))},Ve=$e.every,Ke=De("every"),ze=Ge("every");Ce({target:"Array",proto:!0,forced:!Ke||!ze},{every:function(e){return Ve(this,e,arguments.length>1?arguments[1]:void 0)}});var Xe,Ye,Je=te("navigator","userAgent")||"",Ze=i.process,Qe=Ze&&Ze.versions,et=Qe&&Qe.v8;et?Ye=(Xe=et.split("."))[0]+Xe[1]:Je&&(!(Xe=Je.match(/Edge\/(\d+)/))||Xe[1]>=74)&&(Xe=Je.match(/Chrome\/(\d+)/))&&(Ye=Xe[1]);var tt=Ye&&+Ye,nt=je("species"),it=function(e){return tt>=51||!r((function(){var t=[];return(t.constructor={})[nt]=function(){return{foo:1}},1!==t[e](Boolean).foo}))},rt=$e.filter,at=it("filter"),ot=Ge("filter");Ce({target:"Array",proto:!0,forced:!at||!ot},{filter:function(e){return rt(this,e,arguments.length>1?arguments[1]:void 0)}});var st=$e.forEach,lt=De("forEach"),ct=Ge("forEach"),ut=lt&&ct?[].forEach:function(e){return st(this,e,arguments.length>1?arguments[1]:void 0)};Ce({target:"Array",proto:!0,forced:[].forEach!=ut},{forEach:ut});var ft=fe.indexOf,dt=[].indexOf,pt=!!dt&&1/[1].indexOf(1,-0)<0,ht=De("indexOf"),mt=Ge("indexOf",{ACCESSORS:!0,1:0});Ce({target:"Array",proto:!0,forced:pt||!ht||!mt},{indexOf:function(e){return pt?dt.apply(this,arguments)||0:ft(this,e,arguments.length>1?arguments[1]:void 0)}}),Ce({target:"Array",stat:!0},{isArray:ke});var vt=[].join,gt=p!=Object,yt=De("join",",");Ce({target:"Array",proto:!0,forced:gt||!yt},{join:function(e){return vt.call(m(this),void 0===e?",":e)}});var bt=Math.min,St=[].lastIndexOf,Et=!!St&&1/[1].lastIndexOf(1,-0)<0,xt=De("lastIndexOf"),wt=Ge("indexOf",{ACCESSORS:!0,1:0}),Lt=Et||!xt||!wt?function(e){if(Et)return St.apply(this,arguments)||0;var t=m(this),n=oe(t.length),i=n-1;for(arguments.length>1&&(i=bt(i,re(arguments[1]))),i<0&&(i=n+i);i>=0;i--)if(i in t&&t[i]===e)return i||0;return-1}:St;Ce({target:"Array",proto:!0,forced:Lt!==[].lastIndexOf},{lastIndexOf:Lt});var Tt=$e.map,Ct=it("map"),Ot=Ge("map");Ce({target:"Array",proto:!0,forced:!Ct||!Ot},{map:function(e){return Tt(this,e,arguments.length>1?arguments[1]:void 0)}});var At=function(e,t,n){var i=g(t);i in e?O.f(e,i,c(0,n)):e[i]=n},kt=it("slice"),It=Ge("slice",{ACCESSORS:!0,0:0,1:2}),Pt=je("species"),Mt=[].slice,Nt=Math.max;Ce({target:"Array",proto:!0,forced:!kt||!It},{slice:function(e,t){var n,i,r,a=m(this),o=oe(a.length),s=ce(e,o),l=ce(void 0===t?o:t,o);if(ke(a)&&("function"!=typeof(n=a.constructor)||n!==Array&&!ke(n.prototype)?v(n)&&null===(n=n[Pt])&&(n=void 0):n=void 0,n===Array||void 0===n))return Mt.call(a,s,l);for(i=new(void 0===n?Array:n)(Nt(l-s,0)),r=0;s<l;s++,r++)s in a&&At(i,r,a[s]);return i.length=r,i}});var Rt=O.f,jt=Function.prototype,_t=jt.toString,Ft=/^\s*function ([^ (]*)/;a&&!("name"in jt)&&Rt(jt,"name",{configurable:!0,get:function(){try{return _t.call(this).match(Ft)[1]}catch(e){return""}}});var Wt=he.f,Ht={}.toString,$t="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],Dt=function(e){return $t&&"[object Window]"==Ht.call(e)?function(e){try{return Wt(e)}catch(e){return $t.slice()}}(e):Wt(m(e))};Ce({target:"Object",stat:!0,forced:r((function(){return!Object.getOwnPropertyNames(1)}))},{getOwnPropertyNames:Dt});var Bt="\t\n\v\f\r                　\u2028\u2029\ufeff",qt="["+Bt+"]",Ut=RegExp("^"+qt+qt+"*"),Gt=RegExp(qt+qt+"*$"),Vt=function(e){return function(t){var n=String(h(t));return 1&e&&(n=n.replace(Ut,"")),2&e&&(n=n.replace(Gt,"")),n}},Kt={start:Vt(1),end:Vt(2),trim:Vt(3)},zt=Kt.trim,Xt=i.parseFloat,Yt=1/Xt(Bt+"-0")!=-1/0?function(e){var t=zt(String(e)),n=Xt(t);return 0===n&&"-"==t.charAt(0)?-0:n}:Xt;Ce({global:!0,forced:parseFloat!=Yt},{parseFloat:Yt});var Jt=Kt.trim,Zt=i.parseInt,Qt=/^[+-]?0[Xx]/,en=8!==Zt(Bt+"08")||22!==Zt(Bt+"0x16")?function(e,t){var n=Jt(String(e));return Zt(n,t>>>0||(Qt.test(n)?16:10))}:Zt;Ce({global:!0,forced:parseInt!=en},{parseInt:en});var tn=function(){var e=T(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t};function nn(e,t){return RegExp(e,t)}var rn,an,on={UNSUPPORTED_Y:r((function(){var e=nn("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),BROKEN_CARET:r((function(){var e=nn("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},sn=RegExp.prototype.exec,ln=String.prototype.replace,cn=sn,un=(rn=/a/,an=/b*/g,sn.call(rn,"a"),sn.call(an,"a"),0!==rn.lastIndex||0!==an.lastIndex),fn=on.UNSUPPORTED_Y||on.BROKEN_CARET,dn=void 0!==/()??/.exec("")[1];(un||dn||fn)&&(cn=function(e){var t,n,i,r,a=this,o=fn&&a.sticky,s=tn.call(a),l=a.source,c=0,u=e;return o&&(-1===(s=s.replace("y","")).indexOf("g")&&(s+="g"),u=String(e).slice(a.lastIndex),a.lastIndex>0&&(!a.multiline||a.multiline&&"\n"!==e[a.lastIndex-1])&&(l="(?: "+l+")",u=" "+u,c++),n=new RegExp("^(?:"+l+")",s)),dn&&(n=new RegExp("^"+l+"$(?!\\s)",s)),un&&(t=a.lastIndex),i=sn.call(o?n:a,u),o?i?(i.input=i.input.slice(c),i[0]=i[0].slice(c),i.index=a.lastIndex,a.lastIndex+=i[0].length):a.lastIndex=0:un&&i&&(a.lastIndex=a.global?i.index+i[0].length:t),dn&&i&&i.length>1&&ln.call(i[0],n,(function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(i[r]=void 0)})),i});var pn=cn;Ce({target:"RegExp",proto:!0,forced:/./.exec!==pn},{exec:pn});var hn,mn=je("match"),vn=function(e){var t;return v(e)&&(void 0!==(t=e[mn])?!!t:"RegExp"==f(e))},gn=function(e){if(vn(e))throw TypeError("The method doesn't accept regular expressions");return e},yn=je("match"),bn=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[yn]=!1,"/./"[e](t)}catch(e){}}return!1},Sn=L.f,En="".endsWith,xn=Math.min,wn=bn("endsWith");Ce({target:"String",proto:!0,forced:!!(wn||(hn=Sn(String.prototype,"endsWith"),!hn||hn.writable))&&!wn},{endsWith:function(e){var t=String(h(this));gn(e);var n=arguments.length>1?arguments[1]:void 0,i=oe(t.length),r=void 0===n?i:xn(oe(n),i),a=String(e);return En?En.call(t,a,r):t.slice(r-a.length,r)===a}});var Ln=je("species"),Tn=!r((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),Cn="$0"==="a".replace(/./,"$0"),On=je("replace"),An=!!/./[On]&&""===/./[On]("a","$0"),kn=!r((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),In=function(e,t,n,i){var a=je(e),o=!r((function(){var t={};return t[a]=function(){return 7},7!=""[e](t)})),s=o&&!r((function(){var t=!1,n=/a/;return"split"===e&&((n={}).constructor={},n.constructor[Ln]=function(){return n},n.flags="",n[a]=/./[a]),n.exec=function(){return t=!0,null},n[a](""),!t}));if(!o||!s||"replace"===e&&(!Tn||!Cn||An)||"split"===e&&!kn){var l=/./[a],c=n(a,""[e],(function(e,t,n,i,r){return t.exec===pn?o&&!r?{done:!0,value:l.call(t,n,i)}:{done:!0,value:e.call(n,t,i)}:{done:!1}}),{REPLACE_KEEPS_$0:Cn,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:An}),u=c[0],f=c[1];Z(String.prototype,e,u),Z(RegExp.prototype,a,2==t?function(e,t){return f.call(e,this,t)}:function(e){return f.call(e,this)})}i&&A(RegExp.prototype[a],"sham",!0)},Pn=function(e){return function(t,n){var i,r,a=String(h(t)),o=re(n),s=a.length;return o<0||o>=s?e?"":void 0:(i=a.charCodeAt(o))<55296||i>56319||o+1===s||(r=a.charCodeAt(o+1))<56320||r>57343?e?a.charAt(o):i:e?a.slice(o,o+2):r-56320+(i-55296<<10)+65536}},Mn={codeAt:Pn(!1),charAt:Pn(!0)}.charAt,Nn=function(e,t,n){return t+(n?Mn(e,t).length:1)},Rn=function(e,t){var n=e.exec;if("function"==typeof n){var i=n.call(e,t);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==f(e))throw TypeError("RegExp#exec called on incompatible receiver");return pn.call(e,t)},jn=Math.max,_n=Math.min,Fn=Math.floor,Wn=/\$([$&'`]|\d\d?|<[^>]*>)/g,Hn=/\$([$&'`]|\d\d?)/g;In("replace",2,(function(e,t,n,i){var r=i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,a=i.REPLACE_KEEPS_$0,o=r?"$":"$0";return[function(n,i){var r=h(this),a=null==n?void 0:n[e];return void 0!==a?a.call(n,r,i):t.call(String(r),n,i)},function(e,i){if(!r&&a||"string"==typeof i&&-1===i.indexOf(o)){var l=n(t,e,this,i);if(l.done)return l.value}var c=T(e),u=String(this),f="function"==typeof i;f||(i=String(i));var d=c.global;if(d){var p=c.unicode;c.lastIndex=0}for(var h=[];;){var m=Rn(c,u);if(null===m)break;if(h.push(m),!d)break;""===String(m[0])&&(c.lastIndex=Nn(u,oe(c.lastIndex),p))}for(var v,g="",y=0,b=0;b<h.length;b++){m=h[b];for(var S=String(m[0]),E=jn(_n(re(m.index),u.length),0),x=[],w=1;w<m.length;w++)x.push(void 0===(v=m[w])?v:String(v));var L=m.groups;if(f){var C=[S].concat(x,E,u);void 0!==L&&C.push(L);var O=String(i.apply(void 0,C))}else O=s(S,u,E,x,L,i);E>=y&&(g+=u.slice(y,E)+O,y=E+S.length)}return g+u.slice(y)}];function s(e,n,i,r,a,o){var s=i+e.length,l=r.length,c=Hn;return void 0!==a&&(a=Ae(a),c=Wn),t.call(o,c,(function(t,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,i);case"'":return n.slice(s);case"<":c=a[o.slice(1,-1)];break;default:var u=+o;if(0===u)return t;if(u>l){var f=Fn(u/10);return 0===f?t:f<=l?void 0===r[f-1]?o.charAt(1):r[f-1]+o.charAt(1):t}c=r[u-1]}return void 0===c?"":c}))}}));var $n=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t};In("search",1,(function(e,t,n){return[function(t){var n=h(this),i=null==t?void 0:t[e];return void 0!==i?i.call(t,n):new RegExp(t)[e](String(n))},function(e){var i=n(t,e,this);if(i.done)return i.value;var r=T(e),a=String(this),o=r.lastIndex;$n(o,0)||(r.lastIndex=0);var s=Rn(r,a);return $n(r.lastIndex,o)||(r.lastIndex=o),null===s?-1:s.index}]}));var Dn=je("species"),Bn=[].push,qn=Math.min,Un=!r((function(){return!RegExp(4294967295,"y")}));In("split",2,(function(e,t,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var i=String(h(this)),r=void 0===n?4294967295:n>>>0;if(0===r)return[];if(void 0===e)return[i];if(!vn(e))return t.call(i,e,r);for(var a,o,s,l=[],c=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),u=0,f=new RegExp(e.source,c+"g");(a=pn.call(f,i))&&!((o=f.lastIndex)>u&&(l.push(i.slice(u,a.index)),a.length>1&&a.index<i.length&&Bn.apply(l,a.slice(1)),s=a[0].length,u=o,l.length>=r));)f.lastIndex===a.index&&f.lastIndex++;return u===i.length?!s&&f.test("")||l.push(""):l.push(i.slice(u)),l.length>r?l.slice(0,r):l}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var r=h(this),a=null==t?void 0:t[e];return void 0!==a?a.call(t,r,n):i.call(String(r),t,n)},function(e,r){var a=n(i,e,this,r,i!==t);if(a.done)return a.value;var o=T(e),s=String(this),l=function(e,t){var n,i=T(e).constructor;return void 0===i||null==(n=T(i)[Dn])?t:Oe(n)}(o,RegExp),c=o.unicode,u=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(Un?"y":"g"),f=new l(Un?o:"^(?:"+o.source+")",u),d=void 0===r?4294967295:r>>>0;if(0===d)return[];if(0===s.length)return null===Rn(f,s)?[s]:[];for(var p=0,h=0,m=[];h<s.length;){f.lastIndex=Un?h:0;var v,g=Rn(f,Un?s:s.slice(h));if(null===g||(v=qn(oe(f.lastIndex+(Un?0:h)),s.length))===p)h=Nn(s,h,c);else{if(m.push(s.slice(p,h)),m.length===d)return m;for(var y=1;y<=g.length-1;y++)if(m.push(g[y]),m.length===d)return m;h=p=v}}return m.push(s.slice(p)),m}]}),!Un);var Gn=L.f,Vn="".startsWith,Kn=Math.min,zn=bn("startsWith");Ce({target:"String",proto:!0,forced:!(!zn&&!!function(){var e=Gn(String.prototype,"startsWith");return e&&!e.writable}())&&!zn},{startsWith:function(e){var t=String(h(this));gn(e);var n=oe(Kn(arguments.length>1?arguments[1]:void 0,t.length)),i=String(e);return Vn?Vn.call(t,i,n):t.slice(n,n+i.length)===i}});var Xn,Yn=Kt.trim;Ce({target:"String",proto:!0,forced:(Xn="trim",r((function(){return!!Bt[Xn]()||"​᠎"!="​᠎"[Xn]()||Bt[Xn].name!==Xn})))},{trim:function(){return Yn(this)}});for(var Jn in{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var Zn=i[Jn],Qn=Zn&&Zn.prototype;if(Qn&&Qn.forEach!==ut)try{A(Qn,"forEach",ut)}catch(e){Qn.forEach=ut}}var ei=[].slice,ti=function(e){return function(t,n){var i=arguments.length>2,r=i?ei.call(arguments,2):void 0;return e(i?function(){("function"==typeof t?t:Function(t)).apply(this,r)}:t,n)}};Ce({global:!0,bind:!0,forced:/MSIE .\./.test(Je)},{setTimeout:ti(i.setTimeout),setInterval:ti(i.setInterval)});String.prototype.startsWith||(String.prototype.startsWith=function(e,t){return this.substr(t||0,e.length)===e}),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){return(void 0===t||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e});export default function(){var e,t,n,i,r=(e=/(msie) ([\w.]+)/.exec(window.navigator.userAgent.toLowerCase()))&&"msie"===e[1]?parseFloat(e[2]):null,a=!1;function o(e){(i=e.menu||{}).path=i.path||function(){var e;if(document.querySelector('script[src$="menu.js"]')){var t=document.querySelector('script[src$="menu.js"]');t&&(e=t.src.slice(0,-7))}else e=import.meta.url.slice(0,import.meta.url.lastIndexOf("/")+1);return e}()||"plugin/menu/",i.path.endsWith("/")||(i.path+="/"),void 0===i.side&&(i.side="left"),void 0===i.numbers&&(i.numbers=!1),"string"!=typeof i.titleSelector&&(i.titleSelector="h1, h2, h3, h4, h5"),void 0===i.hideMissingTitles&&(i.hideMissingTitles=!1),void 0===i.useTextContentForMissingTitles&&(i.useTextContentForMissingTitles=!1),void 0===i.markers&&(i.markers=!0),"string"!=typeof i.themesPath&&(i.themesPath="dist/theme/"),i.themesPath.endsWith("/")||(i.themesPath+="/"),O("link#theme")||(i.themes=!1),!0===i.themes?i.themes=[{name:"Black",theme:i.themesPath+"black.css"},{name:"White",theme:i.themesPath+"white.css"},{name:"League",theme:i.themesPath+"league.css"},{name:"Sky",theme:i.themesPath+"sky.css"},{name:"Beige",theme:i.themesPath+"beige.css"},{name:"Simple",theme:i.themesPath+"simple.css"},{name:"Serif",theme:i.themesPath+"serif.css"},{name:"Blood",theme:i.themesPath+"blood.css"},{name:"Night",theme:i.themesPath+"night.css"},{name:"Moon",theme:i.themesPath+"moon.css"},{name:"Solarized",theme:i.themesPath+"solarized.css"}]:Array.isArray(i.themes)||(i.themes=!1),void 0===i.transitions&&(i.transitions=!1),!0===i.transitions?i.transitions=["None","Fade","Slide","Convex","Concave","Zoom"]:!1===i.transitions||Array.isArray(i.transitions)&&i.transitions.every((function(e){return"string"==typeof e}))||(console.error("reveal.js-menu error: transitions config value must be 'true' or an array of strings, eg ['None', 'Fade', 'Slide')"),i.transitions=!1),r&&r<=9&&(i.transitions=!1),void 0===i.openButton&&(i.openButton=!0),void 0===i.openSlideNumber&&(i.openSlideNumber=!1),void 0===i.keyboard&&(i.keyboard=!0),void 0===i.sticky&&(i.sticky=!1),void 0===i.autoOpen&&(i.autoOpen=!0),void 0===i.delayInit&&(i.delayInit=!1),void 0===i.openOnInit&&(i.openOnInit=!1)}var s=!0;function l(){s=!1}function c(){O("nav.slide-menu").addEventListener("mousemove",(function e(t){O("nav.slide-menu").removeEventListener("mousemove",e),s=!0}))}function u(e){var t=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-e.scrollLeft,n+=e.offsetTop-e.scrollTop,e=e.offsetParent;return{top:n,left:t}}(e).top-e.offsetParent.offsetTop;if(t<0)return-t;var n=e.offsetParent.offsetHeight-(e.offsetTop-e.offsetParent.scrollTop+e.offsetHeight);return n<0?n:0}function f(e){var t=u(e);t&&(l(),e.scrollIntoView(t>0),c())}function d(e){l(),e.offsetParent.scrollTop=e.offsetTop,c()}function p(e){l(),e.offsetParent.scrollTop=e.offsetTop-e.offsetParent.offsetHeight+e.offsetHeight,c()}function h(e){e.classList.add("selected"),f(e),i.sticky&&i.autoOpen&&E(e)}function m(e){if(b())switch(e.stopImmediatePropagation(),e.keyCode){case 72:case 37:!function(){var e=parseInt(O(".active-toolbar-button").getAttribute("data-button"))-1;e<0&&(e=T-1);S(null,O('.toolbar-panel-button[data-button="'+e+'"]').getAttribute("data-panel"))}();break;case 76:case 39:l=(parseInt(O(".active-toolbar-button").getAttribute("data-button"))+1)%T,S(null,O('.toolbar-panel-button[data-button="'+l+'"]').getAttribute("data-panel"));break;case 75:case 38:if(s=O(".active-menu-panel .slide-menu-items li.selected")||O(".active-menu-panel .slide-menu-items li.active"))A(".active-menu-panel .slide-menu-items li").forEach((function(e){e.classList.remove("selected")})),h(O('.active-menu-panel .slide-menu-items li[data-item="'+(parseInt(s.getAttribute("data-item"))-1)+'"]')||s);else(o=O(".active-menu-panel .slide-menu-items li.slide-menu-item"))&&h(o);break;case 74:case 40:if(s=O(".active-menu-panel .slide-menu-items li.selected")||O(".active-menu-panel .slide-menu-items li.active"))A(".active-menu-panel .slide-menu-items li").forEach((function(e){e.classList.remove("selected")})),h(O('.active-menu-panel .slide-menu-items li[data-item="'+(parseInt(s.getAttribute("data-item"))+1)+'"]')||s);else(o=O(".active-menu-panel .slide-menu-items li.slide-menu-item"))&&h(o);break;case 33:case 85:var t=A(".active-menu-panel .slide-menu-items li").filter((function(e){return u(e)>0})),n=A(".active-menu-panel .slide-menu-items li").filter((function(e){return 0==u(e)})),i=t.length>0&&Math.abs(u(t[t.length-1]))<t[t.length-1].clientHeight?t[t.length-1]:n[0];i&&(i.classList.contains("selected")&&t.length>0&&(p(i),i=(n=A(".active-menu-panel .slide-menu-items li").filter((function(e){return 0==u(e)})))[0]==i?t[t.length-1]:n[0]),A(".active-menu-panel .slide-menu-items li").forEach((function(e){e.classList.remove("selected")})),h(i),d(i));break;case 34:case 68:n=A(".active-menu-panel .slide-menu-items li").filter((function(e){return 0==u(e)}));var r=A(".active-menu-panel .slide-menu-items li").filter((function(e){return u(e)<0})),a=r.length>0&&Math.abs(u(r[0]))<r[0].clientHeight?r[0]:n[n.length-1];a&&(a.classList.contains("selected")&&r.length>0&&(d(a),a=(n=A(".active-menu-panel .slide-menu-items li").filter((function(e){return 0==u(e)})))[n.length-1]==a?r[0]:n[n.length-1]),A(".active-menu-panel .slide-menu-items li").forEach((function(e){e.classList.remove("selected")})),h(a),p(a));break;case 36:A(".active-menu-panel .slide-menu-items li").forEach((function(e){e.classList.remove("selected")})),(o=O(".active-menu-panel .slide-menu-items li:first-of-type"))&&(o.classList.add("selected"),f(o));break;case 35:var o;A(".active-menu-panel .slide-menu-items li").forEach((function(e){e.classList.remove("selected")})),(o=O(".active-menu-panel .slide-menu-items:last-of-type li:last-of-type"))&&(o.classList.add("selected"),f(o));break;case 32:case 13:var s;(s=O(".active-menu-panel .slide-menu-items li.selected"))&&E(s,!0);break;case 27:g(null,!0)}var l}function v(e){(e&&e.preventDefault(),b())||(O("body").classList.add("slide-menu-active"),O(".reveal").classList.add("has-"+i.effect+"-"+i.side),O(".slide-menu").classList.add("active"),O(".slide-menu-overlay").classList.add("active"),i.themes&&(A('div[data-panel="Themes"] li').forEach((function(e){e.classList.remove("active")})),A('li[data-theme="'+O("link#theme").getAttribute("href")+'"]').forEach((function(e){e.classList.add("active")}))),i.transitions&&(A('div[data-panel="Transitions"] li').forEach((function(e){e.classList.remove("active")})),A('li[data-transition="'+n.transition+'"]').forEach((function(e){e.classList.add("active")}))),A(".slide-menu-panel li.active").forEach((function(e){e.classList.add("selected"),f(e)})))}function g(e,t){e&&e.preventDefault(),i.sticky&&!t||(O("body").classList.remove("slide-menu-active"),O(".reveal").classList.remove("has-"+i.effect+"-"+i.side),O(".slide-menu").classList.remove("active"),O(".slide-menu-overlay").classList.remove("active"),A(".slide-menu-panel li.selected").forEach((function(e){e.classList.remove("selected")})))}function y(e){b()?g(e,!0):v(e)}function b(){return O("body").classList.contains("slide-menu-active")}function S(e,t){v(e);var n=t;"string"!=typeof t&&(n=e.currentTarget.getAttribute("data-panel")),O(".slide-menu-toolbar > li.active-toolbar-button").classList.remove("active-toolbar-button"),O('li[data-panel="'+n+'"]').classList.add("active-toolbar-button"),O(".slide-menu-panel.active-menu-panel").classList.remove("active-menu-panel"),O('div[data-panel="'+n+'"]').classList.add("active-menu-panel")}function E(e,n){var r=parseInt(e.getAttribute("data-slide-h")),a=parseInt(e.getAttribute("data-slide-v")),o=e.getAttribute("data-theme"),s=e.getAttribute("data-highlight-theme"),l=e.getAttribute("data-transition");isNaN(r)||isNaN(a)||t.slide(r,a),o&&I("theme",o),s&&I("highlight-theme",s),l&&t.configure({transition:l});var c=O("a",e);c&&(n||!i.sticky||i.autoOpen&&c.href.startsWith("#")||c.href.startsWith(window.location.origin+window.location.pathname+"#"))&&c.click(),g()}function x(e){"A"!==e.target.nodeName&&e.preventDefault(),E(e.currentTarget)}function w(){var e=t.getState();A("li.slide-menu-item, li.slide-menu-item-vertical").forEach((function(t){t.classList.remove("past"),t.classList.remove("active"),t.classList.remove("future");var n=parseInt(t.getAttribute("data-slide-h")),i=parseInt(t.getAttribute("data-slide-v"));n<e.indexh||n===e.indexh&&i<e.indexv?t.classList.add("past"):n===e.indexh&&i===e.indexv?t.classList.add("active"):t.classList.add("future")}))}function L(){var e=window.getComputedStyle(O(".reveal"));O(".slide-menu").style.fontFamily=e.fontFamily}var T=0;function C(){if(!a){var e=function(e,t,n,i,r,a){var o={"data-button":""+T++,class:"toolbar-panel-button"+(a?" active-toolbar-button":"")};t&&(o["data-panel"]=t);var s=k("li",o);return n.startsWith("fa-")?s.appendChild(k("i",{class:i+" "+n})):s.innerHTML=n+"</i>",s.appendChild(k("br"),O("i",s)),s.appendChild(k("span",{class:"slide-menu-toolbar-label"},e),O("i",s)),s.onclick=r,d.appendChild(s),s},r=function(e,r,a,o,s){function l(e,t){if(""===e)return null;var n=t?O(e,r):O(e);return n?n.textContent:null}var c=r.getAttribute("data-menu-title")||l(".menu-title",r)||l(i.titleSelector,r);if(!c&&i.useTextContentForMissingTitles&&(c=r.textContent.trim())&&(c=c.split("\n").map((function(e){return e.trim()})).join(" ").trim().replace(/^(.{16}[^\s]*).*/,"$1").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")+"..."),!c){if(i.hideMissingTitles)return"";e+=" no-title",c="Slide "+(a+1)}var u=k("li",{class:e,"data-item":a,"data-slide-h":o,"data-slide-v":void 0===s?0:s});if(i.markers&&(u.appendChild(k("i",{class:"fas fa-check-circle fa-fw past"})),u.appendChild(k("i",{class:"fas fa-arrow-alt-circle-right fa-fw active"})),u.appendChild(k("i",{class:"far fa-circle fa-fw future"}))),i.numbers){var f=[],d="h.v";switch("string"==typeof i.numbers?d=i.numbers:"string"==typeof n.slideNumber&&(d=n.slideNumber),d){case"c":f.push(a+1);break;case"c/t":f.push(a+1,"/",t.getTotalSlides());break;case"h/v":f.push(o+1),"number"!=typeof s||isNaN(s)||f.push("/",s+1);break;default:f.push(o+1),"number"!=typeof s||isNaN(s)||f.push(".",s+1)}u.appendChild(k("span",{class:"slide-menu-item-number"},f.join("")+". "))}return u.appendChild(k("span",{class:"slide-menu-item-title"},c)),u},o=function(e){s&&(A(".active-menu-panel .slide-menu-items li.selected").forEach((function(e){e.classList.remove("selected")})),e.currentTarget.classList.add("selected"))},l=O(".reveal").parentElement,c=k("div",{class:"slide-menu-wrapper"});l.appendChild(c);var u=k("nav",{class:"slide-menu slide-menu--"+i.side});"string"==typeof i.width&&(-1!=["normal","wide","third","half","full"].indexOf(i.width)?u.classList.add("slide-menu--"+i.width):(u.classList.add("slide-menu--custom"),u.style.width=i.width)),c.appendChild(u),L();var f=k("div",{class:"slide-menu-overlay"});c.appendChild(f),f.onclick=function(){g(null,!0)};var d=k("ol",{class:"slide-menu-toolbar"});O(".slide-menu").appendChild(d),e("Slides","Slides","fa-images","fas",S,!0),i.custom&&i.custom.forEach((function(t,n,i){e(t.title,"Custom"+n,t.icon,null,S)})),i.themes&&e("Themes","Themes","fa-adjust","fas",S),i.transitions&&e("Transitions","Transitions","fa-sticky-note","fas",S);var p=k("li",{id:"close",class:"toolbar-panel-button"});if(p.appendChild(k("i",{class:"fas fa-times"})),p.appendChild(k("br")),p.appendChild(k("span",{class:"slide-menu-toolbar-label"},"Close")),p.onclick=function(){g(null,!0)},d.appendChild(p),function e(){if(document.querySelector("section[data-markdown]:not([data-markdown-parsed])"))setTimeout(e,100);else{var t=k("div",{"data-panel":"Slides",class:"slide-menu-panel active-menu-panel"});t.appendChild(k("ul",{class:"slide-menu-items"})),u.appendChild(t);var n=O('.slide-menu-panel[data-panel="Slides"] > .slide-menu-items'),i=0;A(".slides > section").forEach((function(e,t){var a=A("section",e);if(a.length>0)a.forEach((function(e,a){var o=r(0===a?"slide-menu-item":"slide-menu-item-vertical",e,i,t,a);o&&n.appendChild(o),i++}));else{var o=r("slide-menu-item",e,i,t);o&&n.appendChild(o),i++}})),A(".slide-menu-item, .slide-menu-item-vertical").forEach((function(e){e.onclick=x})),w()}}(),t.addEventListener("slidechanged",w),i.custom){var h=function(){this.status>=200&&this.status<300?(this.panel.innerHTML=this.responseText,C(this.panel)):I(this)},E=function(){I(this)},C=function(e){A("ul.slide-menu-items li.slide-menu-item",e).forEach((function(e,t){e.setAttribute("data-item",t+1),e.onclick=x,e.addEventListener("mouseenter",o)}))},I=function(e){var t="<p>ERROR: The attempt to fetch "+e.responseURL+" failed with HTTP status "+e.status+" ("+e.statusText+").</p><p>Remember that you need to serve the presentation HTML from a HTTP server.</p>";e.panel.innerHTML=t};i.custom.forEach((function(e,t,n){var i=k("div",{"data-panel":"Custom"+t,class:"slide-menu-panel slide-menu-custom-panel"});e.content?(i.innerHTML=e.content,C(i)):e.src&&function(e,t){var n=new XMLHttpRequest;n.panel=e,n.arguments=Array.prototype.slice.call(arguments,2),n.onload=h,n.onerror=E,n.open("get",t,!0),n.send(null)}(i,e.src),u.appendChild(i)}))}if(i.themes){var P=k("div",{class:"slide-menu-panel","data-panel":"Themes"});u.appendChild(P);var M=k("ul",{class:"slide-menu-items"});P.appendChild(M),i.themes.forEach((function(e,t){var n={class:"slide-menu-item","data-item":""+(t+1)};e.theme&&(n["data-theme"]=e.theme),e.highlightTheme&&(n["data-highlight-theme"]=e.highlightTheme);var i=k("li",n,e.name);M.appendChild(i),i.onclick=x}))}if(i.transitions){P=k("div",{class:"slide-menu-panel","data-panel":"Transitions"});u.appendChild(P);M=k("ul",{class:"slide-menu-items"});P.appendChild(M),i.transitions.forEach((function(e,t){var n=k("li",{class:"slide-menu-item","data-transition":e.toLowerCase(),"data-item":""+(t+1)},e);M.appendChild(n),n.onclick=x}))}if(i.openButton){var N=k("div",{class:"slide-menu-button"}),R=k("a",{href:"#"});R.appendChild(k("i",{class:"fas fa-bars"})),N.appendChild(R),O(".reveal").appendChild(N),N.onclick=v}if(i.openSlideNumber)O("div.slide-number").onclick=v;A(".slide-menu-panel .slide-menu-items li").forEach((function(e){e.addEventListener("mouseenter",o)}))}if(i.keyboard){if(document.addEventListener("keydown",m,!1),window.addEventListener("message",(function(e){var t;try{t=JSON.parse(e.data)}catch(e){}t&&"triggerKey"===t.method&&m({keyCode:t.args[0],stopImmediatePropagation:function(){}})})),n.keyboardCondition&&"function"==typeof n.keyboardCondition){var j=n.keyboardCondition;n.keyboardCondition=function(e){return j(e)&&(!b()||77==e.keyCode)}}else n.keyboardCondition=function(e){return!b()||77==e.keyCode};t.addKeyBinding({keyCode:77,key:"M",description:"Toggle menu"},y)}i.openOnInit&&v(),a=!0}function O(e,t){return t||(t=document),t.querySelector(e)}function A(e,t){return t||(t=document),Array.prototype.slice.call(t.querySelectorAll(e))}function k(e,t,n){var i=document.createElement(e);return t&&Object.getOwnPropertyNames(t).forEach((function(e){i.setAttribute(e,t[e])})),n&&(i.innerHTML=n),i}function I(e,t){var n=O("link#"+e),i=n.parentElement,r=n.nextElementSibling;n.remove();var a=n.cloneNode();a.setAttribute("href",t),a.onload=function(){L()},i.insertBefore(a,r)}function P(e,t,n){var i,r=document.querySelector("head");"script"===t?((i=document.createElement("script")).type="text/javascript",i.src=e):"stylesheet"===t&&((i=document.createElement("link")).rel="stylesheet",i.href=e);var a=function(){"function"==typeof n&&(n.call(),n=null)};i.onload=a,i.onreadystatechange=function(){"loaded"===this.readyState&&a()},r.appendChild(i)}function M(){var e,a,o,s=!r||r>=9;t.isSpeakerNotes()&&window.location.search.endsWith("controls=false")&&(s=!1),s&&(i.delayInit||C(),e="menu-ready",(o=document.createEvent("HTMLEvents",1,2)).initEvent(e,!0,!0),function(e,t){for(var n in t)e[n]=t[n]}(o,a),document.querySelector(".reveal").dispatchEvent(o),n.postMessageEvents&&window.parent!==window.self&&window.parent.postMessage(JSON.stringify({namespace:"reveal",eventName:e,state:t.getState()}),"*"))}return{id:"menu",init:function(e){o(n=(t=e).getConfig()),P(i.path+"menu.css","stylesheet",(function(){void 0===i.loadIcons||i.loadIcons?P(i.path+"font-awesome/css/all.css","stylesheet",M):M()}))},toggle:y,openMenu:v,closeMenu:g,openPanel:S,isOpen:b,initialiseMenu:C,isMenuInitialised:function(){return a}}}
