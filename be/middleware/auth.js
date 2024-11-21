import 'dotenv/config'
import jwt from "jsonwebtoken"

export const auth = async (req, res, next) => {
    try {
        const token = req.headers?.authorization?.split(' ')[1];
        if(!token) {
            return res.status(400).json({
                message: "Không có token"
            })
        }
        jwt.verify(token, process.env.KEY_SECRET, (err, decode) => {
            if (err) {
                return res.status(401).json({message: "Sai token hoặc token hết hạn"})
            }
            next();
        })
    } catch (error) {
        res.status(500).json({message: error})
    }
} 