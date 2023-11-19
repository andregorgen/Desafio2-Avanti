import { PrismaClient } from "@prisma/client";
import { Request, Response, NextFunction } from "express";

const prismaClient = new PrismaClient();
export const validationUserFields = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ mensagem: "name, email and password are mandatory" });
        }
        const checkedEmail = await prismaClient.users.findFirst({
            where: {
                email
            }
        })
        if (checkedEmail) {
            return res.status(400).json({ message: "email already exist" });
        }
        next();
    } catch (error) {
        res.status(500).json({ mensagem: "Server error when registering" });
    }
};
export const validationLoginFields = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ mensagem: "email and password are mandatory" });
        }
        const checkedEmail = await prismaClient.users.findUnique({
            where: {
                email
            }
        })
        if (!checkedEmail) {
            return res.status(400).json({ message: "incorrect email" });
        }
        next();
    } catch (error) {
        res.status(500).json({ mensagem: "Server error when logging in" });
    }
};