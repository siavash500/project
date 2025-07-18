import Cookies from "js-cookie";
import {decryptJWT , encryptJWT} from './jwt'

export const setCookie = async (key ,data) =>
    Cookies.set(key , await encryptJWT(data));

export const getCookie = async(key) =>
    await decryptJWT(Cookies.get(key));

export const removeCooki = async (key) =>
    Cookies.remove(key);