(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{gXTl:function(e,t,o){"use strict";o.r(t),o.d(t,"ExampleTuiColorModule",(function(){return w}));var n=o("2kYt"),r=o("sEIs"),a=o("SVIu"),u=o("Qq0t"),p=o("EM62"),i=o("OZlg"),l=o("e0eB"),c=o("EPR0"),d=o("VYb5"),m=o("yHor"),s=o("zGJC"),f=o("u8jZ");const C=["header","Color"];var y,g,b,E,T;function P(e,t){1&e&&(p["\u0275\u0275i18nStart"](0,y),p["\u0275\u0275element"](1,"code"),p["\u0275\u0275i18nEnd"]())}function h(e,t){1&e&&p["\u0275\u0275i18n"](0,g)}function x(e,t){1&e&&p["\u0275\u0275i18n"](0,b)}function S(e,t){if(1&e){const e=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"tui-doc-demo"),p["\u0275\u0275elementStart"](1,"div",2),p["\u0275\u0275text"](2," Some text "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"tui-doc-documentation"),p["\u0275\u0275template"](4,h,1,0,"ng-template",3),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().tuiBackground=t})),p["\u0275\u0275template"](5,x,1,0,"ng-template",4),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().tuiColor=t})),p["\u0275\u0275elementEnd"]()}if(2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("tuiColor",e.tuiColor)("tuiBackground",e.tuiBackground),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("documentationPropertyValues",e.variants)("documentationPropertyValue",e.tuiBackground),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.variants)("documentationPropertyValue",e.tuiColor)}}function V(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"ol",5),p["\u0275\u0275elementStart"](1,"li"),p["\u0275\u0275elementStart"](2,"p"),p["\u0275\u0275i18nStart"](3,E),p["\u0275\u0275element"](4,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](5,"tui-doc-code",6),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"li"),p["\u0275\u0275elementStart"](7,"p"),p["\u0275\u0275i18n"](8,T),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](9,"tui-doc-code",7),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](5),p["\u0275\u0275property"]("code",e.exampleImportModule),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}y="" + "\ufffd#1\ufffd" + "tuiColor / tuiBackground" + "\ufffd/#1\ufffd" + " set color or background color with a name from pallete ",g=" Background color name ",b=" Color name ",E=" Import " + "\ufffd#4\ufffd" + "TuiColorModule" + "\ufffd/#4\ufffd" + " into a module where you want to use our component ",T="Add to the template:";let k=(()=>{class e{constructor(){this.exampleImportModule="import {TuiColorModule} from '@taiga-ui/core';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiColorModule\n    ],\n...\n",this.exampleInsertTemplate='<p tuiColor="primary" tuiBackground="support-feijoa">\n    Text\n</p>\n',this.variants=["primary","secondary","success","error","support-20","support-19","support-18","support-17","support-16","support-15","support-14","support-12","support-10","support-09","support-08","support-07","support-06","support-05","support-04","support-03","support-02","support-01","support-11","support-21","support-13","base-01","base-02","base-03","base-04","base-05","base-06","base-07","base-08","base-09"],this.tuiColor="",this.tuiBackground=""}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-color"]],decls:5,vars:0,consts:[["package","CORE",6,"header"],["pageTab",""],[3,"tuiColor","tuiBackground"],["documentationPropertyName","tuiBackground","documentationPropertyMode","input","documentationPropertyType","TuiColor | string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiColor","documentationPropertyMode","input","documentationPropertyType","TuiColor | string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-page",0),p["\u0275\u0275i18nAttributes"](1,C),p["\u0275\u0275template"](2,P,2,0,"ng-template",1),p["\u0275\u0275template"](3,S,6,6,"ng-template",1),p["\u0275\u0275template"](4,V,10,2,"ng-template",1),p["\u0275\u0275elementEnd"]())},directives:[i.a,l.a,c.a,d.a,m.a,s.a,f.a],encapsulation:2,changeDetection:0}),e})(),w=(()=>{class e{}return e.\u0275mod=p["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[n.c,u.TuiColorModule,...a.d,r.f.forChild(Object(a.m)(k))]]}),e})()}}]);