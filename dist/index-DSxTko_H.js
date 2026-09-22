import { jsx as r } from "react/jsx-runtime";
import { useState as s, useEffect as l, useLayoutEffect as c } from "react";
import { marked as f } from "marked";
import m from "mermaid";
import { S as u } from "./index-CMgrBNKi.js";
m.initialize({ startOnLoad: !1 });
function L({ content: e }) {
  const [t, d] = s(""), [o, i] = s(!0);
  return l(() => {
    (async () => {
      const a = await f.parse(e);
      d(a), i(!1);
    })();
  }, [e]), c(() => {
    const n = document.querySelectorAll(".mermaid");
    console.log("Mermaid elements found:", n.length), (async () => {
      console.log("Loading Mermaid..."), await m.run();
    })();
  }, [t, o]), o ? /* @__PURE__ */ r(u, { lines: 10 }) : /* @__PURE__ */ r("div", { className: "markdown-body", dangerouslySetInnerHTML: { __html: t } });
}
export {
  L as default
};
