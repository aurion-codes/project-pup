import {useState} from 'react'
// import { useNavigate } from "react-router-dom";


function Login() {

    // const [username, setUsername] = useState("")
    // const [password, setPassword] = useState("")
       const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
        password: ""
      })
    
    // const navigate = useNavigate()
    const [signed, setSigned] = useState(false)

    function handleUserForm (e) {
        setNewUser({...newUser, [e.target.name] : e.target.value})
      }
   

    // function handleSubmit(e){
    //     e.preventDefault()
        
    //     fetch('/login', {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({username, password}),

    //     })
    //     .then(response => {if (response.ok) {
    //       response.json().then((data) => {
    //         onLogin(data)
    //         setUsername("")
    //         setPassword("")
    //         navigate('/dogs')});
    //     } else {
    //       alert("Not a valid login.")
    //     }});
    // }
    function handleSignUp (e) {
        e.preventDefault()
        fetch('http://localhost:3000/users', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser)
        })
        .then(r => r.json())
        .then(data => {
          console.log(data)
          setNewUser({
            name: "",
            email: "",
            phone: "",
            location: "",
            password: ""
          })
          setSigned(true)
        })
      }
    

    

    return(
        <>
         <div>
        <h1>Login</h1>
        <form>
          <div>
            <input  type="text" name="username" placeholder="Username" />
          </div>
          <div>
            <input  type="password" name="password" placeholder="Password" />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
       <div>
           
       <h1>Sign Up</h1>
       <form>
         <div>
           <input value={newUser.name} type="text" name="name" placeholder="Name" />
         </div>
         <div>
           <input value={newUser.email} type="text" name="email" placeholder="Email" />
         </div>
         <div>
           <input value={newUser.password_digest} type="password" name="password" placeholder="Password" />
         </div>
         <div>
           <input type="password" name="password" placeholder="Password Confirmation" />
         </div>
         <input onSubmit={handleSignUp} type="submit" value="Submit" />
       </form>
     </div> 

     </>
    )
}

export default Login