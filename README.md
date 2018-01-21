# screeps-code
Code for screeps, an mmo rts game for programmers

[Screeps Website](https://screeps.com/)

## To get started
* Open a terminal
* Clone this repo with `git clone https://github.com/caleywoods/screeps-code.git`
* Run `cd screeps-code` to change into the screeps-code directory
* Run `npm install` to install the dependencies listed in `package.json`
* Install [Screepsmod-auth](https://github.com/ScreepsMods/screepsmod-auth) and get it working. I had to use the web GUI on my local machine to set the password.
* Rename `screeps.sample.json` to `screeps.json`
* Set your email and password up in `pserver` section, this is the email associated with your screeps account, not your steam email 
* Run `npm run push-pserver` to build the Typescript and deploy it to your remote scripts directory.
* The screeps client should prompt you to say that your remote scripts have changed and ask if you'd like to replace, I clicked "Always replace".
* In the screeps client make sure you switch your Branch to "main" in the Script tab, mine was set on "local".

### Notes
If you'd like to target an older version of JS then you can remove the `target` property in `tsconfig.json` to make it default to ES3.

This is now based on [screeps-typescript-starter](https://github.com/screepers/screeps-typescript-starter).

If you're having issues getting screepsmod-auth to work check the `mods.json` file in the server folder located (for me) at

`D:\SteamLibrary\steamapps\common\Screeps\server\mods.json`

This file should have a `"mods: []"` section, on Windows mine had to read:

    "mods": ["node_modules\\screepsmod-auth\\index.js"],

This was fixed for me by installing screepsmod-auth from the Steam workshop. Once that was done I could visit the web GUI url at `http://127.0.0.1:21025/authmod/password/` and set my password and sign-in via steam. Once that is finished then set your email and password in `screeps.json`.