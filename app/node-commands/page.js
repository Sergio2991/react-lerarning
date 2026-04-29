import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `1. Check Node.js version : node -v

  2. Run a JavaScript file : node app.js

  3. Run a file with arguments : node app.js arg1 arg2 ( Arguments are available via process.argv)

  4. Start the Node REPL : node (use .help and .exit inside REPL)

  5. Evaluation inline Javascript : node -e "console.log(3 + 2)"

  6. Evaluate and print result : node -p "3 + 2"

  7. Syntax-check a file (no execution) : node --check app.js

  8. Run in watch mode (auto-restart on changes) : node --watch app.js (automatically restarts when the file changes).

  9. Debug with Chrome DevTools : node --inspect app.js (Open chrome://inspect to debug)

  10. Break on first line (debugger) : node --inspect-brk app.js (Pauses execution before running the first line)

  11. Show all v8 engine options : node --v8-options (Lists all available v8 flags)

  12. Run script from STDIN : node - (Reads JS from standard input)

  13. End Node options and pass the rest to the script : node -- app.js arg1 arg2 (-- tells Node to stop parsing flags)

  14. Abort on uncaught exceptions : node --abort-on-uncaught-exception app.js (Generates a core dump for debugging)

  15. Print help/ manual : man node (Shows the full Node.js ClI manual)



    `,
];

const NodeCommands = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <Link
        href="/"
        className="text-blue-600 hover:underline text-lg font-medium ml-5"
      >
        Home
      </Link>
      <div className="p-6 space-y-6">
        {examples.map((example, index) => (
          <CodeBlock key={index} code={example} /> //Here code refers to the code inside the component CodeBlock. I can name it anything but both has to be the same.
        ))}
      </div>
    </div>
  );
};

export default NodeCommands;
