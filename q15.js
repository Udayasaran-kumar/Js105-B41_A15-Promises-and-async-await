function registerUser(){
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve("user regiteration successfull");
    },1000)
  })
}
function sendVerification(){
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve("user verified");
    },1000)
  })
}
function loginUser(){
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve("user login successfull");
    },1000)
  })
}
function displayWelcomeMessage(){
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve("HI USER");
    },1000)
  })
}
async function problem() {
  try{
    await registerUser();
    await sendVerification();
    await loginUser();
    await displayWelcomeMessage();
  }
  catch(err){
    console.log(err);
  }
}
problem();
