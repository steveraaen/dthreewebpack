/*var mysql = require('mysql')
var fs = require('fs')
var state = {
	joined: null
}
const connection = mysql.createConnection({
    host: 'steveport.com',
    port: '3306',
    user: 'tranch5_sjr',
    password: 'modernWater360',
    database: 'tranch5_milb'
});
    connection.connect();
var arr = []
    connection.query('show tables', function(error, result) {
    	
    	for(let i = 0; i < result.length; i++) {
    		if(result[i].Tables_in_tranch5_milb.length === 3) {
    			var mlbp = result[i].Tables_in_tranch5_milb

     			connection.query(`select *, "${mlbp}" as currentteam from ${mlbp} 
    				inner join playerteammaster on ${mlbp}.playerCode = playerteammaster.player`, function(err, res) {
    					if (err) throw err;
    					arr.push(res)
    					fs.appendFile('results', JSON.stringify(res), () => {
    						if(err) throw err
    					})
    				})   				
    		}
    	}
console.log(arr)
 connection.end
    })
   */