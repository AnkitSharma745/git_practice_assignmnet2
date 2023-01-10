let num=13
let count=0
for(let i=2;i<num/2;i++){
  if(num%i==0){
    count++
  }
}
if(count==0){
  console.log("Yes")
}
else{
  console.log("No")
}