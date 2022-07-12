// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { connect } from "db/DataSource"
import { Education } from "db/entity/education.entity"
import { EducationType } from "types/education.type"

type Data<T = {}> = {
    status: string
    data: T
}

const list = async (name: string) => {
    const list = await connect().then(async (conn) => {
        const repo = conn.manager.getRepository(Education)
        return repo.find({
            where: {
                name: name,
            },
            order: {
                id: "desc",
            },
        })
    })
    return list
}

const create = async (body: EducationType) => {
    return await connect().then(async (conn) => {
        const edu = new Education()
        Object.assign(edu, body)
        return await conn.manager.save(edu)
    })
}

const destroy = async () => {
    connect().then(async (conn) => {
        conn.manager.clear(Education)
    })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method === "POST") {
        const data = await create(req.body)
        console.log(data)
        res.status(200).json({
            status: "OK",
            data: data,
        })
    } else if (req.method === "GET") {
        const name: string = req.query.name?.toString() || ""
        res.status(200).json({
            status: "Oke",
            data: await list(name),
        })
    } else if (req.method === "DELETE") {
        if (req.body.destroy === 1) {
            destroy()
        }
        res.status(200).json({
            status: "Oke",
            data: {},
        })
    }
}
