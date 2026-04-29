import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `1. Navigation & Directory Commands
        List files : ls
        Show current directory : pwd
        Change directory : cd name-of-the-file
        Go up one level : cd..
        Create a folder : mkdir name-of-the-folder
        Remove an empty folder : rmdir name-of-the-folder
        
2. File Operations
    Create an empty file : touch example.js
    Copy files : file.txt backup.txt ( copies file.txt to backup.txt)
    Move or Rename : mv oldname.txt newname.txt (renames the file)
    Delete a file : rm name-of-the-file.js
    Delete a folder and its content : rm -r thisfolder
    Show file contents :  cat thisfile.js
    View long files : less thisfile.js
    Show first 20 lines : head -n 20 thisfile.log
    Show last lines : tail -f thisfile.js
    Compare two files : diff file1.txt file2.txt
    Detect file type : file img.png

3. Search Commands
    Search for files : find . -name "*.js" (find all .js files in current folder)
    Search text inside files : grep "error" thisfile.js
    Recursive search : grep -r "token" src (search inside all file src)
    Fast file search : locate thisfile.json

4. Permissons & Ownership
    Change permissions : chmod 755 script.sh (make script executable)
    Change owner : sude chown serge file.txt (set owner to serge)
    Change group : sudo chgrp staff file.txt (sets group to staff)

5. User & Group Commands
    Show current user : whoami
    Show user identity : id
    Show groups : groups

6. System & Process Management
    List processes : ps
    Live system monitor : top
    Stop process : kill (kill 1234 : kill process 1234)
    Stop by name : killall (kill node : kills all Node.js processes)
    Disk usage : df -h
    Folder size : du -sh thisfolder ( du -sh node_modules)
    System info : uname -a

7. Networking Commands
    Test connection : ping (ping google.com : checks if Google is reachable)
    Fetch URL : curl (https://api.github.com : prints API reponse)
    Download file : wget ( wget https://example.com/file.zip)
    Connect to remote server : ssh (ssh user@192.168.1.10 : opens SSH session)
    Trace network path : traceroute : traceroute google.com ( shows hops to Google)

8. Compression & Archiving
    Create zip : zip (zip archive.zip file1 file2 : compresses files)
    Extract zip : unzip (unzip archive.zip : extracts contents)
    Create/Extract archives : tar (tar -czh backup.tar.gz this folder : create archive) / (tar -xzf backup.tar.gz : extract archive)
    
9. Useful Utilities
    Show manual : man ( man ls : show documentation for ls)
    Clear terminal : clear
    Print text : echo (echo "Hello Serge" : prints Hello Serge)
    Set environment variable : export (export Node_ENV=production : sets env variable)
    `,
];

const TerminalCommands = () => {
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

export default TerminalCommands;
