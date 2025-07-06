import { SignJWT  } from "jose";
import {jwtVerify} from "jose" ;

const key = new TextEncoder().encode("this is the secured key");


export const encryptJWT=async(payload)=>{
    return new SignJWT(payload)
    .setProtectedHeader({alg:"HS256"})
    .setIssuedAt()
    .setExpirationTime("1day")
    .sign(key);
}