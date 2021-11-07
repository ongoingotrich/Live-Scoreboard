# Live-Scoreboard
Live scoreboard for streaming software's.  Free and open source 

Live-Scoreboard-
A free open source live scoreboard for OBS and other streaming software’s. Customizable and easy to use/set up. Change Teams, Points, Games/timeouts and colors.

------------------------------------------------------------------------------------------------------------------------------------------------------------
To use with Github (recomended method) 

Open your streaming software and add a new browser source. Set the resolution to 1920/1080. Make the browser source link https://ongoingotrich.github.io/Live-Scoreboard/index.html  (viewing in a regular browser with github sites seems to break some of the css. Dont worry it will display much nice and different in OBS)

Now you need to go to “view” under obs and select docs. Under that select “custom browser docs” and add a new one with what ever name you want and with this link https://ongoingotrich.github.io/Live-Scoreboard/control.html

now your done!!


-------------------------------------------------------------------------------------------------------------------------------------------------------------
VSC method

To use start by clicking the greed code button at the top of this page. Select download as zip.

To use it must be injected into a live webserver. You can add it to your own webserver or if you do not have one download visualstudiocode at https://code.visualstudio.com/

Open VScode and open the scorebord folder.

Install Live server by ritwik dey by the extensions tab.

Right Click on index.html and select “open with live server” (First Option). Repeat this for control.html as well. It should open 2 new tabs in your browser.

Now open OBS and add a new browser source. Set the resolution to 1920/1080. Make the browser source link the index.html link that was opened in your browser. It sould look like this: http://127.0.0.1:5500/index.html

Now you need to go to “view” under obs and select docs. Under that select “custom browser docs” and add a new one with what ever name you want and your control.html ur witch should look like this: http://127.0.0.1:5500/control.html

And your done. If you have any questions create a new issue and I will get back to you. This project will be activly updated.
