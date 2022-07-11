// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { connect } from "db/DataSource"
import { Education } from "db/entity/education.entity"
import { EducationType } from "types/education.type"

type Data<T = {}> = {
    status: string
    data: T
}

const list = async () => {
    const aa = await connect().then(async (conn) => {
        return conn.manager.find(Education)
    })
    return aa
}

const create = async (body: EducationType) => {
    connect().then(async (conn) => {
        const edu = new Education()
        Object.assign(edu, body)
        conn.manager.save(edu)
    })
}

const destroy = async () => {
    connect().then(async (conn) => {
        conn.manager.clear(Education)
    })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method === "POST") {
        create(req.body)
        res.status(200).json({
            status: "OK",
            data: {},
        })
    } else if (req.method === "GET") {
        res.status(200).json({
            status: "Oke",
            data: await list(),
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
