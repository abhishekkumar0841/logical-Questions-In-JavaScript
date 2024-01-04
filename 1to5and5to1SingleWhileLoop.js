function oneTo5And5ToOne() {
  let count = 1;
  let flag = true;

  while(count <= 5 && count >= 1){
    console.log(count);
    
    if(flag){
      count++
    }else{
      count--
    }

    if(count === 5){
      flag = false
    }
  }
}

oneTo5And5ToOne();