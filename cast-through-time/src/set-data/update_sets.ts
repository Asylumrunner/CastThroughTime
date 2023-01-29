import * as Magic from "mtgsdk-ts";

Magic.Sets.where({type: "core"}).then(results => {
	for (const set of results) console.log(set.name);
});

Magic.Sets.where({type: "expansion"}).then(results => {
	for (const set of results) console.log(set.name);
});

