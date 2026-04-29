import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `
  Install a package : brew install git (install package git)

  Uninstall a package : brew uninstall git

  Search for a package : brew search python (Searches for formulas matching "python" (shown in Devhints))

  Show package info : brew info node (Display version, caveats, dependencies, etc)

  Update Homebrew : brew update (fetches the latest version of Homebrew and formula)

  Upgrade all packages : brew upgrade (Upgrades everything that is outdated)

  Upgrade a specific package : brew upgrade git (upgrades only git)

  List installed packages : brew list

  Cleanup old versions : brew cleanup (Removes outdated package versions)

  Check system for issues : brew doctor (Diagnoses common Homebrew problems)

  Link a package : brew link git ( brew link git)

  Unlink a package : brew unlink git (Removes symlinks for that package)

  Switch between versions : brew switch git 2.5.0 (Swithes to a specific installed version)

  Pin a package : brew pin git (Prevents a package from being upgraded)

  Unpin a package : brew unpin git (Allows upgrades again)

  Cask commands (for apps like Chrome, VS Code) : brew install --cask google-chrome ( Installs a GUI application)

  Uninstall a cask : brew uninstall --cask google-chrome

  List installed casks : brew list --cask (Shows installed GUI apps)

  






    `,
];

const HomeBrewCommands = () => {
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

export default HomeBrewCommands;
