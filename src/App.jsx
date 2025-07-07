import React , {useEffect}from 'react'
import { getCookie } from './utilits/helpers/coockis'
const App =  () => {
    useEffect(()=> {
        
    //     const createCooki= async () => {
    //         await setCookie("credential" , {
    //             name : "alireza",
    //             access_token:"awdsad",
    //             refresh_token: "asdhlui1g2h3"
    //         });
    //     };

    //     createCooki();

    // },[]);

         const readCookie= async () => {
            const result = await getCookie("credential");
            console.log(result)
        };

        readCookie();
    },[]);


    return (
        <>
            <h1>hello mother fucker</h1>
        </>
    )
}
export default App;