import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Education {
    @PrimaryGeneratedColumn()
    id!: number

    @Column('varchar',{nullable:true})
    school?: string

    @Column('varchar',{nullable:true})
    degree?: string

    @Column('varchar',{nullable:true})
    field_of_study?: string

    @Column('varchar',{nullable:true})
    start_year?: string

    @Column('varchar',{nullable:true})
    end_year?: string

    @Column('varchar',{nullable:true})
    grade?: string

    @Column('varchar',{nullable:true})
    description?: string
}
