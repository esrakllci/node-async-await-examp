import axios from "axios";

async function getData(userId){
    try{
         const userResponse=await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
         const postResponse=await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

         const userData=userResponse.data;
         const postData=postResponse.data;
         
         const result={
            user:userData,
            post:postData
         };
         return result;
    }
    catch(error){
        throw error;
    }
    
}
(async()=>{
try{
    const userId=1;
    const result=await getData(userId);
    console.log(result.user);
    console.log("posts",result.post[0]);
}
catch(error){
    console.error('Bir hata oluştu:', error);
}
})();