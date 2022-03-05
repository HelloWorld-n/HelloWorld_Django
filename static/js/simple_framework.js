/**
 *  Simple Framework that does nothing special.
 *  No really, only thing it does is shortes the long_line commands.
 *  ver 0.0.5
*/

// HTML interface editing
function write_dcm(target, value) {
	document.getElementById(target).innerHTML = value;
}
function add_dcm(target, value) {
	document.getElementById(target).innerHTML += value;
}
function read_dcm(target) {
	return document.getElementById(target).value; // It's purpose is reading from <input>
}
function colorize(target, value) {
	document.getElementById(target).color = value;
}

// Randomizing stuff
function choice(array) {
	return array[Math.floor(Math.random() * array.length)];
}

// Sleeping
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

// Arrays

Array.prototype.remove_on_param = function (arg_param, arg_value) {
	for (let item in this) {
		if (this[item][arg_param] === arg_value) {
			this.splice(item, 1);
		}
	}
};


Array.prototype.change_on_param = function (arg_param_id, arg_value_id, arg_param_to_change, arg_value_to_change) {
	for (let item in this) {
		if (this[item][arg_param_id] === arg_value_id) {
			this[item][arg_param_to_change] = arg_value_to_change;
		}
	}
	return this[item];
};

Array.prototype.add = function (arg_value) {
	this[this.length] = arg_value;
}


// Timout edits

let $_originalSetTimeout = setTimeout;
let $_originalClearTimeout = clearTimeout;
let storedTimeouts = {};

setTimeout = function (func, delay) {
let result = $_originalSetTimeout(func, delay);
	storedTimeouts[result] = { "func": func, "func_str": String(func), "delay": delay };
	return result
};

clearTimeout = function (timerID) {
	delete storedTimeouts[timerID];
	$_originalClearTimeout(timerID);
};

// Interval edits

let $_originalSetInterval = setInterval;
let $_originalClearInterval = clearInterval;
let storedIntervals = {};

setInterval = function (func, delay) {
	let result = $_originalSetInterval(func, delay);
		storedIntervals[result] = { "func": func, "func_str": String(func), "delay": delay };
	return result   
};

clearInterval = function (timerID) {
	delete storedIntervals[timerID];
	$_originalClearInterval(timerID);
};
