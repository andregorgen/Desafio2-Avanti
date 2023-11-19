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