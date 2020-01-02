# Simple Learning

Simple Learning is the next generation tool to build online learning resources. It is a unified, non-cloud-based Vue Framework for developing and maintaining web content for any client platform or device. The Simple team is supported by a team committed to maintaining a solution that has a formal road map, agile development process, version control, programming documentation, user documentation, and training.

**Full Documentation for Simple Learning is available in the [Developer Wiki](http://medocs.gpstrategies.com/doku.php?id=sourcelib:simple:simplehome).**

## General Requirements

  * [NPM JS](https://nodejs.org/en/) Course Build tool recommended version 10.16.0 LTS
  * Vue-cli library - installed via npm
  * [SourceTree](https://www.sourcetreeapp.com/) Git client for managing files
  * [Visual Studio Code](https://code.visualstudio.com/) Development IDE
    * **Recommended Visual Studio Code plugins**
    * Copy Relative Path
    * Sass
    * Vue VS Code Extension Pack
    
## Installation

Follow the normal software installation priocess for your operating system to install NPM, Sourcetree and MS visual Studio Code.

Vue-cli must be install via command line.

1. In the Start Menu, under Windows System, right-click Command Prompt and select Run as Administrator (you will need CIT admin access credentials) 

2. Type the following commands, followed by pressing Enter. 

    <code>npm config get prefix</code>
      
    You should receive the following response: \Users\CIT\AppData\Roaming\npm 

3. Type:

    <code>npm config set prefix C:\Users\[username]\AppData\Roaming\npm</code>
    
      * **Note**: Replace [Username] with your GP username credential. You are changing the config prefix so it points to your local user directory instead of the CIT directory. 
      * **Note**: This is a settings change so it only needs to be done once. After changing the config prefix you should only need to open the CMD as an administrator to install command line utilities. Once the utilities are installed, you should have access to them through a standard CMD. 

4. Now install vue-cli using the following command

    <code>npm install -g vue-cli</code>
    
## Code Setup

### Getting Source Files 
Source files are stored in DevOps. First clone the project to your local hard drive using SourceTree. If the project does not yet exist you will need to create a new repo and fork the client template project. Review the directions in the [Getting Started with DevOps Git](http://medocs.gpstrategies.com/doku.php?id=vcslib:devops:gettingstarted) for forking a repo.

### First time setup for a project
Only the unique project files are stored in DevOps. The general share libraries must be install using npm after downloading the course files from DevOps. To download the files go to the project directory using a terminal, MS Visual Studio Code offers a built in terminal, and execute the following command.

   <code>npm install</code>