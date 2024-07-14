import { Request } from "express";
interface UserObject {
    id: string;
    username: string,
    accountVerified: false
}
interface AdminObject {
    id: string;
    username: string,
}
interface CustomRequest extends Request {
    user?: UserObject;
    admin?: AdminObject;
}

export {CustomRequest, UserObject}