import { Request, Response } from 'express';
import bcrypt from "bcrypt";
import { PrismaClient } from '@prisma/client';
import jwt from "jsonwebtoken";

const prismaClient = new PrismaClient();

export class createUser {
    async handle(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body;

            const passwordEncrypted = await bcrypt.hash(password, 10);
            await prismaClient.users.create({
                data: {
                    name,
                    email,
                    password: passwordEncrypted
                }
            })
            return res.status(200).json({
                name,
                email,
                message: "User created successfully"

            });
        } catch (error) {
            return res.status(500).json({ message: "Server error when registering" });
        }
    }
}
export class LoginUser {
    async handle(req: Request, res: Response) {
        try {
            const { email, password } = req.body;

            const userObject = await prismaClient.users.findUnique({
                where: { email }
            });
            if (!userObject) {
                return res.status(401).json({ message: 'User not found' });
            }

            const { password: dbPassword, ...user } = userObject

            const validPassword = await bcrypt.compare(password, dbPassword);

            if (!validPassword) {
                return res.status(401).json({ message: 'incorrect password' });
            }
            const token = await jwt.sign({ id: user.id }, process.env.KEY_SERVER as string, { expiresIn: '2h' })

            return res.status(200).json({ user, token });
        } catch (error) {
            return res.status(500).json({ message: "Server error when logging in" });
        }
    }
}