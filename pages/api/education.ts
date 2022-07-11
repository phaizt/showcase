// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { SqliteDataSource, connect } from "db/DataSource"
import { Education } from "db/entity/education.entity"
import { EducationType } from "types/education.type"

type Data<T = {}> = {
    status: string
    data: T
}

const create = async (body: EducationType) => {
    const edu = new Education()
    Object.assign(edu, body)
    await SqliteDataSource.manager.save(edu)
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    connect()
    if (req.method === "POST") {
        create(req.body)
        res.status(200).json({
            status: "OK",
            data: {},
        })
    } else if (req.method === "GET") {
        res.status(200).json({
            status: "Oke",
            data: {},
        })
    }
}
