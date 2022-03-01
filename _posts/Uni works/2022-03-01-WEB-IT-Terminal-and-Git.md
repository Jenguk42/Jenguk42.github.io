---
title: "Terminal and Git (INFO30005 W1)"

categories: 
- Uni works

tags:
- INFO30005
- Version control
  
toc: true
toc_sticky: true
---

## Using the terminal

Why use it?

- The terminal provides a text (not GUI) interface to your operating system and computer.
- This is useful during software development and systems administration.
- We need to be able to precisely script our interactions with the computer.

Basic commands

- pwd: print working directory
- mkdir: create a new directory (mkdir terminal-demo)
- cd: change directory to (cd terminal-demo)
- touch: create new file with no content in it (touch myfile)
- ls: list all files and sub directories (ls -l: long listing, get other information about the files. ls -a: show hidden files. ls dirname: show files in directory 'dirname'.)
- (command) --help: Get description about the command
- echo: output the script (echo "hello world" > newfile1: Make a new file with content in it)
- cat: print out the content of the file (cat newfile1)
- cp: copy the content of the file to another file (cp myfile2 myfile3 )
- mv: rename file (mv existingfile newfilename) or move the file to another dir (mv newfilename newdirectory)
- tree: Show a visual representation of the directory
- rm: remove file (rm myfile)
- rmdir, rm -r: remove directory recursively
- find: search for the file within the directory (find . -name "my*")
- pipe and grep
  - tree | grep new (from the output of the tree command, find the file that contains 'new')
  - Piping: redirect the output to become the input of another command
- curl: Send a get command to the website, and print the response (curl 'https://google.com')
- help: List out all the available shell commands
- sudo: Run the command as a superuser
- vi, pico, code: file editors used in command line

## Git & Version Control

Why Git?

- Free and open-source
- Fast, good for teams
- Branching, staging
- Very widely-used

Commits

- Commits are snapshots of the project
- WD -(add)-> Staging -(commit)-> Local -(push)-> Remote
- Commands
  - git init: creates the repository
  - git clone: clones a remote repository
  - git status: status of the repository
  - git diff: compares with last commit
  - git add \<file>: add file to staging area
  - git add -A: add all to staging area
  - git commit -m "\<message>": commit changes to repository

Checkout

- git checkout file1
  - Retrieve a lost/broken file
  - Look at an earlier snapshot
- git log: shows the commit history
- git checkout \<commit_id>: moves head to that commit to temporarily look at the earlier snapshot
- git checkout \<branch>: back to 'current' commit

Branches

- git branch: shows branches
- git checkout -b \<branch>: creates new branch
- git merge \<branch>: mergest with branch
- git branch -d \<branch>: deletes branch

Best practices:

1. Commit often
2. Commit related changes together
3. Commit completed work
4. Commit with meaningful messages
5. Branch before you build
6. Naming branches: branches of the same type get the same prefix
   - When searching branches:
      1. git branch --list "feature/\*"
      2. git log --graph --oneline --decorate --branches="feature/\*"
      3. git --branches="feature/\*"

7. Take extra backups outside of Git
8. Agree on workflow
9. Learn Git as a team
