let fetchDataWithCallback=new promise((resolve,reject)=>{
  reject("Error fetching data");
})
fetchDataWithCallback.catch((err)=>console.log(err))
