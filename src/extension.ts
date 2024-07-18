import * as vscode from "vscode";
import {Intellisense} from "./snippets/snippets";

export function activate(context: vscode.ExtensionContext) {
  Object.entries(Intellisense).forEach((snippetName) => {
    const completionItem = new vscode.CompletionItem(
      snippetName[1].prefix,
      snippetName[1].kind
    );
    completionItem.insertText = new vscode.SnippetString(
      snippetName[1].body.join("\n")
    );
    completionItem.detail = snippetName[1].description;

    // Register the snippet
    context.subscriptions.push(
      vscode.languages.registerCompletionItemProvider(
        "pretty-markup",
        {
          provideCompletionItems() {
            return [completionItem];
          },
        },
        snippetName[1].prefix
      )
    );
  });
}

export function deactivate() {}