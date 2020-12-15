function table(n) {
  for(let i = 1; i <= 10; i++) {
	  // console.log(i);
	  for(let j = 1; j <= 10; j++){
		  // console.log(i * j);
		  console.log(`${j} * ${i} = ${j * i}`);
	  }
	  console.log('\t');
  }
}

module.exports = table;

