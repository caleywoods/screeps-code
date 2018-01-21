# screeps-code
Code for screeps, an mmo rts game for programmers

[Screeps Website](https://screeps.com/)

## To get started
* Open a terminal
* Clone this repo with `git clone https://github.com/caleywoods/screeps-code.git`
* Run `cd screeps-code` to change into the screeps-code directory
* Run `npm install` to install the dependencies listed in `package.json`
* Run `npm run build` to transpile the Typescript files out into JavaScript code.
* If you're running a Screeps private server on your machine you will need a way to move the files to the directory Screeps watches.

### Notes
If you'd like to target an older version of JS then you can remove the `target` property in `tsconfig.json` to make it default to ES3.

The game has a set file location where it looks for your scripts. If you're on Windows and running a private server on your machine (something supported by Screeps) then you can likely use the batch script I've included to robocopy (Windows 10 has this util) files from your code folder over to the file location where Screeps watches if you don't make the file location your project location. This is crude right now but it works for the time being.