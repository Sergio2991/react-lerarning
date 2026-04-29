import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `1. Install all dependencies
    Install everything from package.json : yarn install

2. Add a dependency 
    Add axios : yarn add axios

3. Add a dev dependecy
    Installs Tailwind as a dev dependency : yarn add --dev tailwindcss

4. Remove a dependency
    Removes axios : yarn remove axios

5. Initialize a new project
    Create a new package.json : yarn init -y

7. Run a script
    Run "dev" script from package.json : yarn dev

8. Build your project
    Runs the "build" script (next.js, React, etc) : yarn build

8. Run tests
    Run a test : yarn test

9. Upgrade a Package
    Update axios to the latest version :  yarn upgrade axios

10. Global install
    Installs a CLI globally : yarn global add vercel

11. Autoclean (remove unnecessary files)
    Clean unused files from dependencies

12. SHow help
    Lists all available Yarn commands : yarn help

    
    `,
];

const YarnCommands = () => {
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

export default YarnCommands;
