// //admin perms in this file
// import { useState, Link, Navigation } from 'react-router-dom'

// // document.getElementById('btn1').disabled = true
// export default function AdminFunctionality(){
//     // const [isAdmin, setisAdmin] = useState({admin: true})
//     const handleAdminToggle = async (e) => {
//         e.preventDefault();
//        const buttonToggle = document.getElementById('btn1').disabled = true;
//         document.getElementById('btn1').innerHTML = 'Admin';
//         document.getElementById('btn1').style.backgroundColor = 'green';
//         document.getElementById('btn1').style.color = 'white';
//         document.getElementById('btn1').style.border = 'none';
//         document.getElementById('btn1').style.borderRadius = '5px';
//         document.getElementById('btn1').style.padding = '5px';
//         document.getElementById('btn1').style.margin = '5px';
//         document.getElementById('btn1').style.cursor = 'pointer';
//         document.getElementById('btn1').style.fontSize = '15px';
//         document.getElementById('btn1').style.fontWeight = 'bold';
//         document.getElementById('btn1').style.fontFamily = 'sans-serif';
//     // if(isAdmin === true){

//     // }
//         const repsonse = await fetch('http://localhost:8080/users/updateUser',{//atempting to use updateUSer to convert all admin perms to a button
//             method: 'UPDATE',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 email: 'admin',
//                 password: '123',
//             }),
//         }) 
//         return(
//             <div id="FormWrapper">
//                 <button><Link to='/'>Home</Link></button>
//               <button id="btn1">Attempt Admin Privs</button>
//             </div>
           
//         )

// }



// }

