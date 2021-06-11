You're in a repository that forked a web-based code editor, Monaco, from the Microsoft Corporation.

`rosploco.html` is the file which contains most modifications, as described in the repository description. It has the autocomplete code and the documentation. For unintellectuals using YouTube to learn to make Roblox exploits, this file what you replace `monaco.html` with. Remember to download everything in the repository, though, since we're using Monaco 0.18.1, which might be a different version then what you already have (if you already have Monaco at all).

To use this in your project, you must credit me and Microsoft. We provide an easy way to do this. Just insert this code at the top of the rendered document:

```lua
-- Monaco and Autocomplete by Microsoft and EthanMcBloxxer on GitHub under the MIT License.
```

This is already there by default, so you shouldn't have much trouble.

Since Rosploco is a web-based program (as is Monaco), you can also use it interactively inside of your web browser. Just go to [ethanmcbloxxer.github.io/Rosploco/rosploco.html](https://ethanmcbloxxer.github.io/Rosploco/rosploco.html).

<img src="https://bloxxing.is-ne.at/OpQu4Q.png" align="right"/>

**ProTip**: We also provide a nice right-click menu, with options to get help, save the document, clear the editor, and refresh it. If you had these buttons on your exploit previously, you might not need them anymore. Test to be sure, though.

If you realize that some functions or documentation is outdated, then fork this repository, make your changes, and pull request. This is also applied to actual exploit developers, you can add your own functions and documentation to Rosploco in the same way. Just use this exoskeleton:

```js
// Your Exploit

{
	label: "mycustomfunction", // This is what shows up in the intellisense
	kind: monaco.languages.CompletionItemKind.Function, // You can change this to "Function", "Constant", or "Module" (for libraries, eg Crypt, Bit, etc.)
	detail: "Function", // Make this "Function", "Constant", "Module" and keep aligned with `kind`
	documentation: "This is a custom function for example purposes.", // Your documentation (what appears when you click more info)
  
	insertText: "mycustomfunction(${1:arg1}, "${2|enumoption1,enumoption2|}", $0)", // Follow the syntax highlighted in https://code.visualstudio.com/docs/editor/userdefinedsnippets#_snippet-syntax.
	insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet, // Keep this as-is
},
```

then add that under the proper exploiting autofill section. Remove all the comments other than `// Your Exploit`.

Supported Libraries:

* Keywords
* Lua Globals
* Roblox Globals
* bit32
* coroutine
* debug (only Roblox)
* math
* os
* string
* table
* utf8
* Methods (Instance / DataModel)
* Events (Instance / DataModel)
* Metatables
* Exploiting (Synapse, Script-Ware)
  * Environment
  * Script
  * Table
  * Input
  * Closure
  * Reflection
  * Filesystem
