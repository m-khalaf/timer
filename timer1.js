const args = process.argv.slice(2);
const numArr = args.map(str=>Number(str));
const posArr = numArr.filter(num=>num>0);

for (let time of posArr){
  setTimeout(()=>{
    process.stdout.write('\x07');
  },time*1000);
}