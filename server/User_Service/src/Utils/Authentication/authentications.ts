import jwt from "jsonwebtoken";
import { Response, NextFunction } from "express";
import {CustomRequest} from "./authenticationInterface";
import UserAccountModel from "../../Models/User/UserAccount";

export default class Authentication {
    constructor() { }

    async generateToken(id: string): Promise<string> {
        return jwt.sign({ id }, process.env.JWT_SECRET!, {
            expiresIn: process.env.JWT_EXPIRES_IN!,
        });
    }

    async userAuthenticationToken(res: Response, user: string, userType:string = 'userToken'): Promise<{ success: boolean, userToken: string }> {
        // Token Generation
        const token = await this.generateToken(user);

        // Cookie validation days setup
        const options = {
            expires: new Date(
                Date.now() + parseInt(process.env.JWT_COOKIE_EXPIRES_IN!) * 60 * 1000
            ),
            httpOnly: true,
        };

        console.log(new Date(
            Date.now() + parseInt(process.env.JWT_COOKIE_EXPIRES_IN!) * 60 * 1000
        ).getTime())
        // Token setting in header
        res.cookie(userType, token, options);

        // Return values
        return { success: true, userToken: token };
    }

    async verifyAuthorization(req: CustomRequest, res: Response, next: NextFunction): Promise<void | object> {
        // Fetching token
        let token: string | undefined = undefined;
        if (req.cookies.userToken) {
            token = req.cookies.userToken;
        } else if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
            const authHeader = req.headers.authorization.split(" ");
            if (authHeader.length === 2 && authHeader[1].toLowerCase() !== "null") {
                token = authHeader[1];
            }
        }

        // Returning if no token
        if (!token) {
            return res.status(401).json({
                success: false,
                message: `Please login.`,
            });
        }

        // Decoding user using token
        function verifyToken(token: string): Promise<any> {
            return new Promise((resolve, reject) => {
                jwt.verify(token, process.env.JWT_SECRET!, (err, decoded) => {
                    if (err) {
                        reject(new Error("Invalid token"));
                    } else {
                        resolve(decoded);
                    }
                });
            });
        }

        try {
            const decoded = await verifyToken(token);
            const user:any = await UserAccountModel.findById({_id: decoded.id});

            if (!user) {
                return next(new Error("Please login again"));
            } else {
                req.user = {
                    id: user._id,
                    username: user.username,
                    accountVerified: user.accountVerified
                };
                next();
            }
        } catch (err) {
            return next(new Error("Unauthorized"));
        }
    }
}