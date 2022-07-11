import { DataSource } from "typeorm"
import { Education } from "./entity/education.entity"
import "reflect-metadata"

export const SqliteDataSource = new DataSource({
    type: "sqlite",
    database: "showcase.sqlite",
    entities: [Education],
    synchronize: true,
})

export const connect = async () => {
    if (!SqliteDataSource.isInitialized) {
        await SqliteDataSource.initialize()
    }
}
