var request = require('request');
const rp = require('request-promise');

	exports.getPlayerByName = function(key, ign) {
		var apiUrl = "https://api.hypixel.net/player?key=" + key + "&name=" + ign;
		
		return rp(apiUrl).then(body => {
            let responseData = JSON.parse(body);
            return responseData;
        });
	}

	exports.getPlayerByUuid = function(key, uuid) {
		var apiUrl = "https://api.hypixel.net/player?key=" + key + "&uuid=" + uuid;
		
		return rp(apiUrl).then(body => {
            let responseData = JSON.parse(body);
            return responseData;
        });
	}

	exports.getGuildByName = function(key, name) {
		var apiUrl = "https://api.hypixel.net/guild?key=" + key + "&name=" + name;
		
		return rp(apiUrl).then(body => {
            let responseData = JSON.parse(body);
            return responseData;
        });
	}

	exports.getGuildByPlayer = function(key, player) {
		var apiUrl = "https://api.hypixel.net/guild?key=" + key + "&player=" + player;
		
		return rp(apiUrl).then(body => {
            let responseData = JSON.parse(body);
            return responseData;
        });
	}

	exports.getGuildById = function(key, id) {
		var apiUrl = "https://api.hypixel.net/guild?key=" + key + "&id=" + id;
		
		return rp(apiUrl).then(body => {
            let responseData = JSON.parse(body);
            return responseData;
        });
	}

	exports.getFriendsByUuid = function(key, uuid) {
		var apiUrl = "https://api.hypixel.net/friends?key=" + key + "&uuid=" + uuid;
		
		return rp(apiUrl).then(body => {
            let responseData = JSON.parse(body);
            return responseData;
        });
	}

	exports.getFriendsByName = function(key, ign) {
		var apiUrl = "https://api.hypixel.net/player?key=" + key + "&name=" + ign;
		
		return rp(apiUrl).then(body => {
            let responseData = JSON.parse(body);
            let uuid = responseData.player.uuid;
            var apiUrl = "https://api.hypixel.net/friends?key=" + key + "&uuid=" + uuid;
		
				return rp(apiUrl).then(body => {
            	let responseData = JSON.parse(body);
            	return responseData;
        	});
        });
	}

	exports.getKeyInformations = function(key) {
		var apiUrl = "https://api.hypixel.net/key?key=" + key;
		
		return rp(apiUrl).then(body => {
            let responseData = JSON.parse(body);
            return responseData;
        });
	}

	exports.getSession = function(key, uuid) {
		var apiUrl = "https://api.hypixel.net/session?key=" + key + "&uuid=" + uuid;
		
		return rp(apiUrl).then(body => {
            let responseData = JSON.parse(body);
            return responseData;
        });
	}

	exports.getLeaderboards = function(key) {
		var apiUrl = "https://api.hypixel.net/leaderboards?key=" + key;
		
		return rp(apiUrl).then(body => {
            let responseData = JSON.parse(body);
            return responseData;
        });
	}

	exports.getBoosters = function(key) {
		var apiUrl = "https://api.hypixel.net/boosters?key=" + key;
		
		return rp(apiUrl).then(body => {
            let responseData = JSON.parse(body);
            return responseData;
        });
	}

	exports.getWatchdogInformations = function(key) {
		var apiUrl = "https://api.hypixel.net/watchdogstats?key=" + key;
		
		return rp(apiUrl).then(body => {
            let responseData = JSON.parse(body);
            return responseData;
        });
	}