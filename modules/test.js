import { USER_CSS } from "./USER/USER_css.js";

export function UI_TEST_Load() {
    console.log("I'm test!");
    console.log(USER_CSS.cssRules)
    let CSSrules_List = [];
    Array.from(USER_CSS.cssRules).forEach(element => { let CSSrule = {}; CSSrule.cssText = element.cssText; CSSrules_List.push(CSSrule); });
    console.log(CSSrules_List)
    let CSSrules_Object = { CSSrules_List, Id: 1 }
    console.log(JSON.stringify(CSSrules_Object))
    // let CSSrules = [];
    // Array.from(USER_CSS.cssRules).forEach(element => { let CSSrule = {}; CSSrule.cssText = element.cssText; CSSrules.push(CSSrule); });

    // let a = JSON.stringify(CSSrules);
    // console.log(a);

    // let testCSS = new CSSStyleSheet()
    // document.adoptedStyleSheets = [testCSS];
    // let b = JSON.parse(a);
    // b.forEach(element => { testCSS.insertRule(element.cssText, testCSS.cssRules.length) });
    // console.log(testCSS);

}