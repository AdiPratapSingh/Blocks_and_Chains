var name = "Adi Pratap Singh"
const sha256 = require('js-sha256');
var num = 0;
function find_num(name,num){
    var comp = 0x0000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF;
    var sha;
    var out = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF;
    while(comp<out){
        sha = name + String(num);
        out = sha256(sha);
        out = parseInt(out, 16);
        // console.log(typeof(out));
        num++;
    }
    console.log(--num);
    console.log(sha256(name + String(num)));
}
find_num(name,num);