// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { connect } from "db/DataSource"
import { Education } from "db/entity/education.entity"
import { EducationType } from "types/education.type"

type Data<T = {}> = {
    status: string
    data: T
}

const getOne = async (id: number) => {
    const aa = await connect().then(async (conn) => {
        const repo = conn.getRepository(Education)
        return repo.findOneBy({ id })
    })
    return aa
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { id } = req.query
    if (req.method === "GET") {
        let data = {}
        if (id !== undefined && typeof +id === "number") {
            data = (await getOne(+id)) || {}
        }
        res.status(200).json({
            status: "Oke",
            data: data,
        })
    }
}
