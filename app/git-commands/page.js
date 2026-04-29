import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `1.Setup & Configuration
    Set your name : git config --global user.name "Serge"
    Set your email : git config --global user.email "myemail@example.com"
    Check config : git config --list

2. Starting a Repository
    Initialize Git : git init
    Clone a repo : git clone <url>

3. Staging & Committing
    Check status : git status
    Add a file : git add <file>
    Add all files : git add.
    Commit : git commit -m "message"
    Amend last commit : git commit -ammend

4. Branching
    List branches : git branch
    Create branch : git branch <name>
    Switch branch : git checkout <name>
    Create + switch : git checkout -b <name>
    Delete branch : git branch -d <name>

5. Pushing & Pulling
    Push branch : git push origin <branch>
    Push all : git push
    Pull latest changes : git pull
    Set upstream : git push -u origin <branch>

6. Merging & Rebasing
    Merge branch into current : git merge <branch>
    Rebase onto another branch : git rebase <branch>
    Abort rebase :  git rebase --abort
    Continue rebase : git rebase -continue

7. Undoing & Fixing
    Unstage a file : --git reset <file>
    Unstage everything : git reset
    Discard local changes : git checkout -- <file>
    Hard reset to last commit :  git reset --hard HEAD
    Reset to a specific commit : git reset --hard <commit>

8. Viewing History
    Commit log : git log
    One-line log : git log --online
    Graph view : git log --oneline --graph--decorate --all
    Show changes : git diff
    Show staged changes :  git diff --staged

9. Remote Repositories
    List remotes : git remote -v
    Add remote :  git remote add origin <url>
    Remove remote : git remote remove origin
    Rename remote : git remote rename origin upstream

10. Tags & Releases
    Create tag : git tag <tag>
    Create annotaged tag  : git tag -a <tag> -m "message"
    Push tags : git push --tags
    Delete tag : git tag -d <tag>

11. Stashing
    Stash changes :  git stash
    List stashes :  git stash list
    Apply stash : git stash apply
    Drop stash : git stash drop
    Stash with message : git stash save "message"

12. Advanced / Useful
    Show who changed each line : git blame <file>
    Search in history :  git log -S "<text>"
    Clean untracked files : git clean -fd
    Show remote branches : git branch -r
`,
];

const GitCommands = () => {
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

export default GitCommands;
