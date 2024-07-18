import {CompletionItemKind} from "vscode";
export const Intellisense: object = {
  main: {
    scope: "Pretty Markup",
    prefix: "tag: main",
    body: ["main"],
    kind: CompletionItemKind.Property,
  },
  style: {
    scope: "Pretty Markup",
    prefix: 'tag: style"',
    body: ["style"],
    description:
      'The style markup is an abstraction of <link href="..." rel...\n It Requires only the src of the stylesheet',
    kind: CompletionItemKind.Property,
  },
  js: {
    scope: "Pretty Markup",
    prefix: "tag: javascript",
    body: ["javascript"],
    description:
      'The javascript markup is an abstraction of <script src="..." type...\n It Requires only the src of the JavaScript',
    kind: CompletionItemKind.Property,
  },
  div: {
    scope: "pretty-markup",
    prefix: "tag: div",
    body: ["div ${1:}"],
    kind: CompletionItemKind.Property,
  },
  p: {
    scope: "pretty-markup",
    prefix: "tag: p",
    body: ["p $0"],
    kind: CompletionItemKind.Property,
  },
  img: {
    scope: "pretty-markup",
    prefix: "tag: img",
    body: ['img src="" alt=""'],
    kind: CompletionItemKind.Property,
  },
  table: {
    scope: "pretty-markup",
    prefix: "tag: table",
    body: ["table"],
    kind: CompletionItemKind.Property,
  },
  button: {
    scope: "pretty-markup",
    prefix: "tag: button",
    body: ["button"],
    kind: CompletionItemKind.Property,
  },
  form: {
    scope: "pretty-markup",
    prefix: "tag: form",
    body: ["form"],
    attributes: ["action"],
    kind: CompletionItemKind.Property,
  },
  a: {
    scope: "pretty-markup",
    prefix: "tag: a",
    body: ['a href="${1:href}"'],
    kind: CompletionItemKind.Property,
  },
}; 