import {useState} from 'react'
// import { useNavigate } from "react-router-dom";

function Login({setUser}) {

    // const navigate = useNavigate()

    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })

    function changeLoginData(e){
        setLoginData({
            ...loginData, 
            [e.target.name]: e.target.value
        })
    }

    // function submitLoginData (e) {
    //     e.preventDefault() 

    //     fetch('/login', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(loginData)
    //     })
    //     .then(res => {
    //         if (res.ok) {
    //             res.json().then(jsonData => {
    //                 setUser(jsonData)
    //                 navigate('/dogs')
    //             })
    //         }
    //     })
    // }

    return(
        <>
         <div>
        <h1>Login</h1>
        <form>
          <div>
            <input onChange={changeLoginData} type="text" name="username" placeholder="Username" />
          </div>
          <div>
            <input onChange={changeLoginData} type="password" name="password" placeholder="Password" />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
       <div>
       <h1>Sign Up</h1>
       <form>
         <div>
           <input type="text" name="name" placeholder="Name" />
         </div>
         <div>
           <input type="password" name="email" placeholder="Email" />
         </div>
         <div>
           <input type="password" name="password" placeholder="Password" />
         </div>
         <div>
           <input type="password" name="password" placeholder="Password Confirmation" />
         </div>
         <input type="submit" value="Submit" />
       </form>
     </div> 

     </>
    )
}

export default Login