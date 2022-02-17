
import { useEffect, useState } from "react";
import {firestore} from "./firebase";  
import "./App.css"

// version 9 new  see it documentary very easy to understand
import {addDoc, collection, onSnapshot} from "firebase/firestore";


function App() {

  let [posts, setPosts] = useState([]);

  useEffect(()=>{
    let f = async ()=>{
      // let querySnapshot = await firestore.collection("posts").get();  prev version
        //  const querySnapshot = await getDocs(collection(firestore,"posts"));  new version 9 (saw it from documentary) it works but want to implement real time database
      
      // in order to implement real time database we need to use onsnapshot event einstead of get method
      await onSnapshot(collection(firestore,"posts"),(querySnapshot)=>{
        let tempArr = []
        querySnapshot.forEach((doc)=>{
         
         tempArr.push({
           id : doc.id,
           data : doc.data(),
         });
          
        });
  
        setPosts(tempArr);
      })

      // console.log(querySnapshot );
      // let tempArr = []
      // querySnapshot.forEach((doc)=>{
      //   // console.log({
      //   //   id : doc.id,
      //   //   data: doc.data(),
      //   // });

      //  tempArr.push({
      //    id : doc.id,
      //    data : doc.data(),
      //  });
        
      // });

      // setPosts(tempArr);

    };

    f();
  },[]);
  
  return (
    <div>
      <ul>
        {
          posts.map((el)=>{
            return(
              <li key={el.id}>{el.data.Body}</li>
            )
          })
        }
      </ul>

      <input 
      placeholder="What's on your mind?"
      type="text" 
      onKeyDown={(e)=>{
        // console.log(e.code)

        if(e.code ==="Enter"){
          // jobhi likha hua hai vo hame firebase me dalna hai
          let post = e.currentTarget.value
          // again ye(add) bhi ek async request hogi but abhi isko handle kare ki zrurat nh hai
          // firestore.collection("posts").add({Body:post})   prev version 8 not working now
             addDoc(collection(firestore,"posts"),{Body : post})  // new version 9

             e.currentTarget.value =""
        }
      }} />

    </div>
  );
}

export default App;
