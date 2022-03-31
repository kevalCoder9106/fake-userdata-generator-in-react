import { clear } from "@testing-library/user-event/dist/clear";
import { useState, useEffect } from "react";

const useGenerator = () => {
    const [userData,addUser] = useState([])

    const addUserData = (data) => {
        addUser((prevData) => {
            if (prevData) { 
                return [...prevData,data]
            }
            else{
                return [data]
            }
        })
    }

    useEffect(() => {
        // adding interval while fetching data 
        const interval = setInterval(() => {
            // fetching user data
            fetch('https://api.namefake.com/random/random',{
                headers:{"Access-Control-Allow-Origin":"*"}
            }) 
            .then(response => response.json())
            .then(result => {
                const data = {
                    name:result.name,
                    username:result.username,
                    password:result.password
                }
                addUserData(data)
            })
        }, 1000); // 1000ms delay

        return () => clearInterval(interval)
    })

    return userData
}

export default useGenerator