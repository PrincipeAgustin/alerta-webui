(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f0ed7a2"],{"215f":function(t,e,s){},"64d4":function(t,e,s){"use strict";s("215f")},ed05:function(t,e,s){"use strict";s.r(e);var r=s("b0af"),n=s("99d9"),i=s("0e8f"),a=s("a722"),o=function(){var t=this,e=t._self._c;return e(r["a"],{staticClass:"alert-indicator",on:{click:function(e){return t.selectAsi()}}},[e(n["b"],{staticClass:"pa-0",style:{"background-color":t.severityColor(t.maxSeverity)}},[e("div",{staticClass:"text-uppercase text-xs-center py-2"},[t._v(" "+t._s(t.title)+" ")])]),e(n["a"],{staticClass:"pa-0 mx-0",style:{"background-color":t.isDark?"":"#F5F5F5"}},[e(a["a"],[e(i["a"],[e("div",{staticClass:"counts-container"},[t.counts?e(a["a"],{attrs:{"align-start":"","justify-space-between":""}},t._l(t.$config.indicators.severity,(function(s){return e("div",{key:s,staticClass:"count text-xs-center py-2",style:{"background-color":t.severityColor(s)}},[t._v(" "+t._s(t.counts[s]||0)+" ")])})),0):t._e()],1)])],1)],1)],1)},c=[],u=s("b85c"),l=(s("d3b7"),s("3ca3"),s("ddb0"),s("9861"),s("4e08")),h={props:{title:{type:String,default:""},query:{type:[String,Array,Object],default:""}},data:function(){return{counts:null,openCounts:null,maxSeverity:null,timer:null}},computed:{isDark:function(){return this.$store.getters.getPreference("isDark")},refresh:function(){return this.$store.state.refresh},refreshInterval:function(){return this.$store.getters.getPreference("refreshInterval")||this.$store.getters.getConfig("refresh_interval")}},watch:{refresh:function(t){t&&(this.getMostSevere(),this.getCounts())}},created:function(){this.cancelTimer(),this.refreshCounts()},beforeDestroy:function(){this.cancelTimer()},methods:{selectAsi:function(){this.setSearch(new URLSearchParams(this.query)),this.setFilter(new URLSearchParams(this.query)),this.refreshList()},setSearch:function(t){this.$store.dispatch("alerts/updateQuery",t)},setFilter:function(t){this.$store.dispatch("alerts/setFilter",{environment:t.get("environment"),text:t.get("text"),status:t.has("status")?t.getAll("status"):null,customer:t.has("customer")?t.getAll("customer"):null,service:t.has("service")?t.getAll("service"):null,group:t.has("group")?t.getAll("group"):null})},severityColor:function(t){return this.counts&&this.counts[t]>0?this.$store.getters.getConfig("colors").severity[t]:"transparent"},getCounts:function(){var t=this;return l["a"].getCounts(new URLSearchParams(this.query)).then((function(e){return t.counts=e.severityCounts}))},getMostSevere:function(){var t=this,e=new URLSearchParams(this.query);e.append("status","open"),l["a"].getCounts(e).then((function(e){t.maxSeverity=t.$config.alarm_model.defaults.normal_severity;var s,r=Object(u["a"])(t.$config.indicators.severity);try{for(r.s();!(s=r.n()).done;){var n=s.value;if(e.severityCounts[n]>0){t.maxSeverity=n;break}}}catch(i){r.e(i)}finally{r.f()}}))},refreshCounts:function(){var t=this;this.getMostSevere(),this.getCounts().then((function(){return t.timer=setTimeout((function(){return t.refreshCounts()}),t.refreshInterval)}))},refreshList:function(){var t=this;this.$store.dispatch("set",["refresh",!0]),setTimeout((function(){t.$store.dispatch("set",["refresh",!1])}),300)},cancelTimer:function(){this.timer&&(clearTimeout(this.timer),this.timer=null)}}},f=h,v=(s("64d4"),s("2877")),g=Object(v["a"])(f,o,c,!1,null,"2fffb3c6",null);e["default"]=g.exports}}]);
//# sourceMappingURL=chunk-5f0ed7a2.b7cd01ea.js.map