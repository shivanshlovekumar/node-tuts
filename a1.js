//const names = require('./4-names');
//const sayHi = require('./5-utils');
//const data = require('./6-alternative');
//console.log(names);
//require('./7-mind');
//sayHi('Ravi');
//sayHi(names.john);
//sayHi(names.Peeter);

//console.log(data);

//const os = require('os');

//Info about curretn user

//const user = os.userInfo();
//console.log(user);

//method returns the system up time in seconds
///console.log(`The Systmee up time is ${os.uptime()} seconds`);

/*const currentOs = {
	name:os.type(),
	release:os.release(),
	totalMem: os.totalmem(),
	freeMem:os.freemem()
}
*/

//console.log(currentOs);

//Http Module

const _ =  require('lodash');
const item = [1, [2,[3,[4]]]];
const newitems = _.flattenDeep(item);
console.log(newitems);
console.log('Hekki')