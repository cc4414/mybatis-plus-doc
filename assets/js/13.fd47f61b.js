(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{167:function(e,a,s){"use strict";s.r(a);var n=s(0),t=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"热加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#热加载","aria-hidden":"true"}},[e._v("#")]),e._v(" 热加载")]),e._v(" "),s("blockquote",[s("p",[e._v("开启动态加载 mapper.xml")])]),e._v(" "),s("ul",[s("li",[e._v("多数据源配置多个 MybatisMapperRefresh 启动 bean")]),e._v(" "),s("li",[e._v("默认情况下,eclipse保存会自动编译,idea需自己手动编译一次")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('参数说明：\n      sqlSessionFactory:session工厂\n      mapperLocations:mapper匹配路径\n      enabled:是否开启动态加载  默认:false\n      delaySeconds:项目启动延迟加载时间  单位：秒  默认:10s\n      sleepSeconds:刷新时间间隔  单位：秒 默认:20s\n  提供了两个构造,挑选一个配置进入spring配置文件即可：\n\n构造1:\n    <bean class="com.baomidou.mybatisplus.spring.MybatisMapperRefresh">\n        <constructor-arg name="sqlSessionFactory" ref="sqlSessionFactory"/>\n        <constructor-arg name="mapperLocations" value="classpath*:mybatis/mappers/*/*.xml"/>\n        <constructor-arg name="enabled" value="true"/>\n    </bean>\n\n构造2:\n    <bean class="com.baomidou.mybatisplus.spring.MybatisMapperRefresh">\n        <constructor-arg name="sqlSessionFactory" ref="sqlSessionFactory"/>\n        <constructor-arg name="mapperLocations" value="classpath*:mybatis/mappers/*/*.xml"/>\n        <constructor-arg name="delaySeconds" value="10"/>\n        <constructor-arg name="sleepSeconds" value="20"/>\n        <constructor-arg name="enabled" value="true"/>\n    </bean>\n')])])])])}],!1,null,null,null);t.options.__file="hot-loading.md";a.default=t.exports}}]);