const {readFile, writeFile} = require('fs').promises;
/*const util 	=	require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);
*/
/*const getText = (path) =>{
	return new Promise((resolve, reject)=>{
		readFile(path,'utf8',(err,data)=>{
			if(err){
				reject(err);
				//return;
			}else{
				resolve(data);
				//console.log(data);
			}
		});
	});
}
*/

//getText('./content/first.txt')
//.then(result=>console.log(result))
//.catch(err=>console.log(err)
//);

const start = async() =>{
	try{
		//const first = await readFilePromise('./content/first.txt','utf8');
		//const second = await readFilePromise('./content/second.txt','utf8');


		const first = await readFile('./content/first.txt','utf8');
		const second = await readFile('./content/second.txt','utf8');

		await writeFile('./content/restult-mind-love.txt',`This is AWSOME: ${first} ${second}`,{flag:'a'});
		console.log(first,second);

	}catch(error){
		console.log(error);
	}
}
start();