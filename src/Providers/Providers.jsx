import React ,{Children, useEffect} from 'react'
import { getCookie } from '../utilits/helpers/coockis';
// export default function Providers() {
  
//     const Authorize = () => {
//          useEffect(()=> {
        
//     //     const createCooki= async () => {
//     //         await setCookie("credential" , {
//     //             name : "alireza",
//     //             access_token:"awdsad",
//     //             refresh_token: "asdhlui1g2h3"
//     //         });
//     //     };

//     //     createCooki();

//     // },[]); // so i create the cooki 

//          const readCookie= async () => {
//             const result = await getCookie("credential");
//             console.log(result)
//         };

//         readCookie();
//     },[]); // so i get the Cooki and clg them


//     };
//     const Providers = ({children}) => {
//         return (
//             <Authorize>
//                 {children}
//             </Authorize>
//         )
//     }
  
   
// }

const Authorize = ({ children }) => {
  useEffect(() => {
    const readCookie = async () => {
      const result = await getCookie("credential");
      console.log(result);
    };
    readCookie();
  }, []);

  return <>{children}</>; // حواست باشه حتماً یه چیزی return بشه
};

export default function Providers({ children }) {
  return (
    <Authorize>
      {children}
    </Authorize>
  );
}
