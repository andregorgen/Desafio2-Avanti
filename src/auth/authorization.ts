import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";


export const auth = (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ message: "Unauthorized - Token missing" });
    }
    const token = authorization.replace('Bearer ', '').trim();

    if (!token) {
        return res.status(401).json({ message: "Unauthorized - Token missing" });
    }
    try {
        const validPasword = jwt.verify(token, process.env.KEY_SERVER as string);

        if (!validPasword) {
            return res.status(401).json({ message: "Unauthorized - Invalid token" });
        }
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized - Invalid token" });
    }
}