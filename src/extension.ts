import { ExtensionContext, commands, window } from "vscode";


export function activate(context: ExtensionContext) {
    let helloWorld = async () => {
        let editor = window.activeTextEditor

        editor?.edit(editBuilder => {
            let position = editor?.selection.active
            position && editBuilder.insert(position, "hello world")
        })
    }
    let command = commands.registerCommand(
        "eggheadio.helloWorld",
        helloWorld
    )

    context.subscriptions.push(command)
}