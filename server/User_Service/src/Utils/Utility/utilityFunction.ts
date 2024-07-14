import AdminAccountModel from "../../Models/Admin/AdminAccount";
import UserAccountModel from "../../Models/User/UserAccount";

export default class utilityFunction {
    constructor() { }

    otpGenerator(nums: number) {
        const maxValue = Math.pow(10, nums)
        const minValue = Math.pow(10, nums - 1)
        let value = Math.floor(Math.random() * maxValue) + 1
        if (value < minValue) {
            return minValue + value
        }
        return value
    }

    async checkingUserDuplicate(email: string, username: string) {
        try {
            const existingAdmin = await AdminAccountModel.findOne({
                $or: [
                    { username: { $regex: new RegExp(`^${username}$`, "i") } },
                    { email: { $regex: new RegExp(`^${email}$`, "i") } }
                ]
            });
            const existingUser = await UserAccountModel.findOne({
                $or: [
                    { username: { $regex: new RegExp(`^${username}$`, "i") } },
                    { email: { $regex: new RegExp(`^${email}$`, "i") } }
                ]
            });
            if (existingAdmin) {
                const duplicateField = existingAdmin.username.toLowerCase() === username.toLowerCase() ? 'username' : 'email';
                const errorMessage = `An account with the same ${duplicateField} already exists.`;
                return {
                    success: false,
                    message: errorMessage
                }
            }
            if (existingUser) {
                const duplicateField = existingUser.username.toLowerCase() === username.toLowerCase() ? 'username' : 'email';
                const errorMessage = `An account with the same ${duplicateField} already exists.`;
                return {
                    success: false,
                    message: errorMessage
                }
            }
            return {
                success: true,
                message: 'OK'
            }
        } catch (err: any) {
            console.log(err)
            return {
                success: false,
                message: err.toString()
            }
        }
    }
}