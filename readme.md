## Greetings!
Hey folks! Pannonians folks here, we'll be your guide here throughout this JavaScript journey.

Ocassionally you may find (appendix X) references in the text. Appendices are all the way down below in the file, and you can consult them for a reference.

# Operating System
### Prerequisites
> You must have a Linux based OS installed. Instructor will be using Ubuntu and in order to follow along as best as possible and not waste too much time on anything else, Ubuntu is a must.
> If you're using Windows at the moment, please consult Google on how to install dual-boot (Windows + Linux) on your machine, or dedicate a PC of your own for this course. 

## Ubuntu basics

- Common shortkeys and interface navigation using your keyboard
- Opening up terminal
- Some basic and a bit more advanced commands and usage (appendix 1)
- Installing essential tooling (Git, SSH keys for GitHub and GitHub account, nvm (NodeJS), VSCode code editor)
- Cloning training repositofy from Github

## Git version control
- Installing Git locally on your machine
- Exploring Git and how it's used
- Essential git commands (Appendix 2)
- Rules of working in a team with a lot of moving parts and how Git solves problems
- Pull vs Fetch
- Creating branches
- Creating Pull Requests (PR or PRs in the future)
- Mergin in initial pull request and congrats!

## JavaScript
- JS Files
- Comments
- Primitive types
- Arithmetics
- Assignment operators and variables
- Complex types (arrays and objects)
- Find, Filter, Map and Reduce
- Async / Await
- HTTP requests
- Practice 1
- Practice 2
- Final practice through group project and collaboration

## React
- React basics and it's usage and context, installing custom react app
- React in depth, core mechanics, shadow dom and hooks
- HTML/CSS basics and core essentials
  - Adidtional practice tools and websites where to practice HTML
  - CSS basics, flex and minimum, websites where to practice CSS
- React components
- Hooks and state management
- Hooks and side-effects
- Practice 1
- Practice 2
- Final practice through group project and collaboration

# Appendices

> Apendix 1

### Linux Ubuntu essentials

|**ctrl+alt+arrows**|change your currently active window/app (my keyboard is set to superkey (windows key) +tab)|
| :-: | :- |
|<p>**super+pageup/down (depends on linux version)**</p><p></p>|Move active window|
|**ctrl+alt+t**|open terminal|
|**Commands within Terminal in Linux**|
|**ctrl+shift+t**|open new tab within terminal|
|**alt+number**|switches between terminal tabs|
|**exit**|exit terminal|
|**xdg-open .**|opens a file or URL in the user's preferred application|
|**apt**|is a commandline package manager and provides commands for searching and managing as well as querring information about packages|
|**apt-update**|update application|
|**apt-cache search**|search for application|
|**apt install**|installation of application (you need to type which application you want to install)|
|**apt remove**|remove application (you need to type which application you want to remove)|
|**sudo**|Short for “SuperUser Do”, this command enables you to perform tasks that require administrative or root permissions.|
|**sudo su**|This command asks for the current user’s password as opposed to root.|
|**whoami**|displays the username currently in use.|
|**pwd**|use the pwd command to find out the path of the current working directory (folder) you are in.|
|**ls**|<p>is used to view the contents of a directory. By default, this command will display the contents of your current working directory.</p><p>`	`ls -R will list all the files in the sub-directories as well</p><p>`	`ls -a will show the hidden files</p><p>`	`ls -al will list the files and directories with detailed information like the permissions, size etc.</p>|
|**cd**|<p>to navigate through the Linux files and directories (it requres either the full path or the name of the directory, depending on the current working directory that you are in).</p><p>`	`cd .. move one directory up</p><p>`	`cd to go straight to the home folder</p><p>`	`cd- to move to your previous directory</p>|
|**cat**|(concatenate) it is used to list the contents of a file on the standard output. To run this command, type cat followed by the file's name and its extension. Example: cat file.txt|
|**cp**|<p>use this command to copy files from the current directory to a different directory.</p><p>for instance: cp scenery.jpg (from your current directory) into the Pictures directory.</p>|
|**mv**|primary use of this command is to move files, but it can be used to rename files. Arguments are similar to CP command. You need to type mv. the file's name, and the destionation's directory. Example: mv file.txt/home/username/Document|
|**mkdir**|Use mkdir command to make a new directory — if you type mkdir Music it will create a directory called Music|
|**touch**|The touch command allows you to create a blank new file through the Linux command line. As an example, enter touch /home/username/Documents/Web.html to create an HTML file entitled Web under the Documents directory.|
|**rm**|The rm command is used to delete directories and the contents within them. If you only want to delete the directory — as an alternative to rmdir — use rm -r.|
|**find**|using find searches for files and directories. As an example, find /home/ -name notes.txt command will search for a file called notes.txt within the home directory and its subdirectories.|
|**grep**|It lets you search through all the text in a given file. To illustrate, grep blue notepad.txt will search for the word blue in the notepad file. Lines that contain the searched word will be displayed fully.|
|**xargs**|The xargs command is used in a UNIX shell to convert input from standard input into arguments to a command. In other words, through the use of xargs the output of a command is used as the input of another command. We use a pipe ( | ) to pass the output to xargs|
|**curl**|curl is a command-line tool to transfer data to or from a server, using any of the supported protocols (HTTP, FTP, IMAP, POP3, SCP, SFTP, ...)|
|**wget**|you can download files from the internet with the help of the wget command. To do so, simply type wget followed by the download link.|
|**free**|<p>shows memory usage. </p><p>free -h shows memory usage in kb, mb, gb etc.</p>|
|**du**|<p>If you want to check how much space a file or a directory takes, the du (Disk Usage) command is the answer. However, the disk usage summary will show disk block numbers instead of the usual size format. </p><p>If you want to see it in bytes, kilobytes, and megabytes, add the -h argument to the command line.</p>|
|**> command**|Saves output in terminal as file|
|**chmod**|this command is used to change the read, write, and execute permissions of files and directories.|
|**top**|the top command will display a list of running processes and how much CPU each process uses.|
|**man**|displays the manual instructions of certain Linux commands.|

> Apendix 2

### Summary Table of Git Commands

| Command                         | Use                                                                      |
| ------------------------------- | ------------------------------------------------------------------------ |
| `git init`                      | Initialises a Git repository in that directory                           |
| `git add .`                     | Adds all changes to the staging area to be committed                     |
| `git add file_name`             | Adds changes to the specified file to the staging area to be committed   |
| `git commit`                    | Commits staged changes and allows you to write a commit message          |
| `git checkout SHA`              | Checks out a past commit with the given SHA                              |
| `git checkout SHA -- file_name` | Checks out the past version of a file from the commit with the given SHA |
| `git checkout -b branch_name`   | Creates and switches to a new branch                                     |
| `git checkout branch_name`      | Switches to the specified branch                                         |
| `git merge branch_name`         | Merges the branch you are on into the specified branch                    |
| `git log`                       | Outputs a log of past commits with their commit messages                  |
| `git status`                    | Outputs status, including what branch you are on and what changes are staged |
| `git diff`                      | Outputs the differences between the working directory and most recent commit |
| `git diff thing_a thing_b`      | Outputs the differences between two things, such as commits and branches     |
| `git clone URL`                 | Makes a clone of the repository at the specified URL                   |
| `git remote add origin URL`     | Links a local repository and an online repository at the specified URL |
| `git push origin branch_name`   | Pushes local changes to the specified branch of the online repository  |
| `git pull origin branch_name`   | Pull changes from the online repository into local repository          |