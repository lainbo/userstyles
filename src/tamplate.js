// ==UserScript==
// @name 全局鸿蒙黑体
// @namespace franciszhao
// @version 0.0.1
// @description 一款使用华为品牌字体替换网页原有字体的用户样式表，为你呈现更统一美观的页面风格。
// @license MIT
// @grant GM_addStyle
// @run-at document-start
// @include *
// ==/UserScript==

(function () {
  let css = '';
  css += `

  `;

  if (
    location.hostname === 'baidu.com' ||
    location.hostname.endsWith('.baidu.com')
  ) {
    css += `
      * {
        font-family: 'HarmonyOS Sans SC', 'HarmonyOS', 'system-ui',
          -apple-system, ui-sans-serif, sans-serif;
      }
    `;
  }
  if (
    location.hostname === 'gitee.com' ||
    location.hostname.endsWith('.gitee.com')
  ) {
    css += `
    .file_holder .file_content.code .lines pre,
    .file_holder .file_content.blame .lines pre {
        font-family: 'JetBrains Mono', 'Noto Sans Mono CJK SC',
        'Source Code Pro', 'Noto Mono', 'SF Mono', 'Roboto Mono', ui-monospace,
        monospace, 'Segoe UI Symbol' !important;
      }
    `;
  }
  if (
    location.hostname === 'github.com' ||
    location.hostname.endsWith('.github.com')
  ) {
    css += `
      .text-mono {
        font-family: 'JetBrains Mono', 'Noto Sans Mono CJK SC',
          'Source Code Pro', 'Noto Mono', 'SF Mono', 'Roboto Mono', ui-monospace,
          monospace, 'Segoe UI Symbol' !important;
      }
      .blob-num,
      .blob-code-inner {
        font-family: 'JetBrains Mono', 'Noto Sans Mono CJK SC',
          'Source Code Pro', 'Noto Mono', 'SF Mono', 'Roboto Mono', ui-monospace,
          monospace, 'Segoe UI Symbol';
      }
    `;
  }
  if (
    location.hostname === 'greasyfork.org' ||
    location.hostname.endsWith('.greasyfork.org')
  ) {
    css += `
      #script_version_code,
      .ace_editor {
        font-family: 'JetBrains Mono', 'Noto Sans Mono CJK SC',
          'Source Code Pro', 'Noto Mono', 'SF Mono', 'Roboto Mono', ui-monospace,
          monospace,   'Segoe UI Symbol' !important;
      }
    `;
  }
  if (
    location.hostname === 'ithome.com' ||
    location.hostname.endsWith('.ithome.com')
  ) {
    css += `
      .post_comment {
        font-family: 'HarmonyOS Sans SC', 'HarmonyOS', 'system-ui',
          -apple-system, ui-sans-serif, sans-serif;
      }
    `;
  }
  if (
    location.hostname === 'sspai.com' ||
    location.hostname.endsWith('.sspai.com')
  ) {
    css += `
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      .title,
      .content,
      p,
      a {
        font-family: 'HarmonyOS Sans SC', 'HarmonyOS', 'system-ui',
          -apple-system, ui-sans-serif, sans-serif !important;
      }
    `;
  }

  if (
    new RegExp('^(?:https://www\\.baidu\\.com/(s|#)?.*)$').test(
      location.href,
    ) ||
    new RegExp('^(?:https://(\\w+\\.)?bing\\.com/(search)?.*)$').test(
      location.href,
    ) ||
    new RegExp('^(?:https://www\\.google(\\.\\w+){1,2}/(search)?.*)$').test(
      location.href,
    ) ||
    new RegExp('^(?:https://www\\.so\\.com/s?.*)$').test(location.href) ||
    new RegExp('^(?:https://(www\\.)?sogou\\.com/(web|sogou)?.*)$').test(
      location.href,
    )
  ) {
    css += `
      * {
        font-family: 'HarmonyOS Sans SC', 'HarmonyOS', 'system-ui',
          -apple-system, ui-sans-serif, sans-serif !important;
      }
    `;
  }
  if (typeof GM_addStyle !== 'undefined') {
    GM_addStyle(css);
  } else {
    let styleNode = document.createElement('style');
    styleNode.appendChild(document.createTextNode(css));
    (document.querySelector('head') || document.documentElement).appendChild(
      styleNode,
    );
  }
})();
