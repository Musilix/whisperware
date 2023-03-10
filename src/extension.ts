import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log("whisperware is now active!");

  let disposable = vscode.commands.registerCommand(
    "whisperware.helloWorld",
    () => {
      vscode.window.showInformationMessage("Hello World from whisperware!");
    }
  );

  let fileSummarize = vscode.commands.registerCommand(
    "whisperware.explainFileLikeIm5",
    () => {
      vscode.window.showInformationMessage("This file sucks shit!");
    }
  );

  context.subscriptions.push(disposable, fileSummarize);
}

export function deactivate() {}
