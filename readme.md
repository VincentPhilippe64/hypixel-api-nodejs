# Hypixel JavaScript API
An easy-to-use Hypixel API Wrapper for Node.js.
Coded with ❤ by `MineBlock64` !
Version:  **0.1.3**

## Installation
```npm i hypixel-api-nodejs```

## Usage
To use the commands, you need an API key that can be gathered by running */api new* on the Hypixel server.
The value returned by the function is a JavaScript Object already parsed that can be immediatly used.

### Format
Every functions have this format:
```javascript
hypixel.getPlayerByName(key, ign).then(player => {
    console.log(player);
}).catch(err => {
    console.log("ERROR: " + err);
});
```


### Functions

Get player informations from the In-Game Name:
```javascript
hypixel.getPlayerByName(key, ign);
```

Get player informations from the UUID:
```javascript
hypixel.getPlayerByUuid(key, uuid);
```

Get guild informations from its name:
```javascript
hypixel.getGuildByName(key, name);
```

Get guild informations from its ID:
```javascript
hypixel.getGuildById(key, id);
```

Get guild informations from a members' UUID:
```javascript
hypixel.getGuildByPlayer(key, uuid);
```

Get player's friends from its In-Game Name:
```javascript
hypixel.getFriendsByName(key, ign);
```

Get player's friends from its UUID:
```javascript
hypixel.getFriendsByUuid(key, uuid);
```

Get informations about your own API key:
```javascript
hypixel.getKeyInformations(key);
```

Get leaderboards of every mini-games:
```javascript
hypixel.getLeaderboards(key);
```

Get informations about every boosters currently active on the network:
```javascript
hypixel.getBoosters(key);
```

Get session informations from player's UUID:      (WARNING: The endpoint of this is going to be deprecated as said on the Hypixel API GitHub)
```javascript
hypixel.getSession(key, uuid);
```

Get Watchdog informations:
```javascript
hypixel.getWatchdogInformations(key, uuid);
```


## Examples

```javascript
const hypixel = require("hypixel-api-nodejs");
var key = '';   //Your own api key

hypixel.getPlayerByName(key, 'MineBlock64').then(player => {    //Retrieve JavaScript Object from request
	var lastlogin = player.player.lastLogin;   //Get player's last connection on the server
	var date = new Date(lastlogin);   //Milliseconds to date
	console.log(date.toString());
});
```

```javascript
const hypixel = require("hypixel-api-nodejs");
var key = '';   //Your own api key
var days = 0;

hypixel.getGuildByName(key, 'The+Moon').then(guild => {   //Spaces must be set as "+" or "%2B" depending on your encoding
	var exp = guild.guild.members[0].expHistory;   //Get selected members' experience of this week

	for(i = 0; i < exp.length; i++) {
		console.log("Experience " + days + " ago:  " + exp[i]);
		days++;
	}
});
```

```javascript
const hypixel = require("hypixel-api-nodejs");
var key = '';   //Your own api key

hypixel.getPlayerByUuid(key, 'da8ac1c348c04dd695df800c29fbddc3').then(player => {   //Retrieve JavaScript Object from request
	var mm = player.player.stats.MurderMystery;   //Get player's Murder Mystery Statistics

	console.log(mm.wins);   //Total Murder Mystery wins
	console.log(mm.deaths_mountain_MURDER_CLASSIC);   //Total deaths amount on the Moutain map in the Classic mode
	console.log(mm.quickest_murderer_win_time_seconds_transport);   //Return the quickest time as murderer on the Transport map in seconds
	console.log(mm.packages);   //Return an array of every items/favorite maps this player has
	console.log(mm.wasSpecialRoleLastGame);   //Return a boolean; true if the player has got a special role (Murderer/Detective) the current or last game played; false if the player was Innocent
	console.log(mm.suicides);   //Total suicides in the game
});
```

```javascript
const hypixel = require("hypixel-api-nodejs");
var key = '';   //Your own api key

hypixel.getKeyInformations(key).then(mykey => {   //Retrieve JavaScript Object from request
	console.log(mykey.record.totalQueries);   //Display the total amount of time your key has been used to make a request
});
```

```javascript
const hypixel = require("hypixel-api-nodejs");
var key = '';   //Your own api key
var position = 1;

hypixel.getLeaderboards(key).then(leaderboards => {   //Retrieve JavaScript Object from request
	var mmlb = leaderboards.leaderboards.MURDER_MYSTERY[0].leaders;   //Fetching top 15 overall leaders of Murder Mystery

	for(i = 0; i < mmlb.length; i++) {
		hypixel.getPlayerByUuid(key, mmbl[i]).then(player => {   //Request player's datas from the UUID
			var ign = player.player.displayName;   //Getting In-Game Name value
			console.log(position + ". " + ign);
			position++;
		});
	}
});

/* Console:
1. BadRoller
2. Gigizu_
3. Li1Sur
4. ViolentCookiez
5. if7ueh7
6. TragicallyTrue
7. Waiting4Hytale
8. iTPcencioh
9. Freakilicious
10. JKRN
11. Nqdine
12. xmasPanPan4044
13. TheFirstOracle
14. MineBlock64
15. YeoWun            */
```
