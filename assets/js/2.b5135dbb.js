(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{290:function(t,a,e){"use strict";var r=e(3),n=e(19),o=e(28),u=e(108),i=e(106),s=e(4),m=e(151).f,l=e(150).f,c=e(10).f,f=e(291).trim,p=r.Number,b=p,N=p.prototype,d="Number"==o(e(107)(N)),h="trim"in String.prototype,I=function(t){var a=i(t,!1);if("string"==typeof a&&a.length>2){var e,r,n,o=(a=h?a.trim():f(a,3)).charCodeAt(0);if(43===o||45===o){if(88===(e=a.charCodeAt(2))||120===e)return NaN}else if(48===o){switch(a.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+a}for(var u,s=a.slice(2),m=0,l=s.length;m<l;m++)if((u=s.charCodeAt(m))<48||u>n)return NaN;return parseInt(s,r)}}return+a};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var a=arguments.length<1?0:t,e=this;return e instanceof p&&(d?s(function(){N.valueOf.call(e)}):"Number"!=o(e))?u(new b(I(a)),e,p):I(a)};for(var v,g=e(8)?m(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;g.length>E;E++)n(b,v=g[E])&&!n(p,v)&&c(p,v,l(b,v));p.prototype=N,N.constructor=p,e(14)(r,"Number",p)}},291:function(t,a,e){var r=e(9),n=e(29),o=e(4),u=e(292),i="["+u+"]",s=RegExp("^"+i+i+"*"),m=RegExp(i+i+"*$"),l=function(t,a,e){var n={},i=o(function(){return!!u[t]()||"​"!="​"[t]()}),s=n[t]=i?a(c):u[t];e&&(n[e]=s),r(r.P+r.F*i,"String",n)},c=l.trim=function(t,a){return t=String(n(t)),1&a&&(t=t.replace(s,"")),2&a&&(t=t.replace(m,"")),t};t.exports=l},292:function(t,a){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},308:function(t,a,e){"use strict";e.r(a);e(290),e(13);var r={data:function(){return{tableData:{column:[{prop:"id",label:"ID"},{prop:"name",label:"姓名"},{prop:"amount1",label:"数值1",sortable:!0},{prop:"amount2",label:"数值2",sortable:!0},{prop:"amount3",label:"数值3",sortable:!0}],data:[{id:"12987122",name:"王小虎",amount1:"234",amount2:"3",amount3:10},{id:"12987123",name:"王小虎",amount1:"165",amount2:"4",amount3:12},{id:"12987124",name:"王小虎",amount1:"324",amount2:"1",amount3:9},{id:"12987125",name:"王小虎",amount1:"621",amount2:"2",amount3:17},{id:"12987126",name:"王小虎",amount1:"539",amount2:"4",amount3:15}]}}},methods:{getSummaries:function(t){var a=t.columns,e=t.data,r=[];return a.forEach(function(t,a){if(0!==a){var n=e.map(function(a){return Number(a[t.property])});n.every(function(t){return isNaN(t)})?r[a]="N/A":(r[a]=n.reduce(function(t,a){var e=Number(a);return isNaN(e)?t:t+a},0),r[a]+=" 元")}else r[a]="总价"}),r}}},n=e(1),o=Object(n.a)(r,function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("lb-table",{attrs:{column:this.tableData.column,data:this.tableData.data,border:"","show-summary":""}}),this._v(" "),a("lb-table",{staticStyle:{"margin-top":"20px"},attrs:{column:this.tableData.column,data:this.tableData.data,"summary-method":this.getSummaries,height:"250",border:"","show-summary":""}})],1)},[],!1,null,null,null);a.default=o.exports}}]);