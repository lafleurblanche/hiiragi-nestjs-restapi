/* TypeORM */
import {
  Column,
  Entity,
  PrimaryGeneratedColumn
} from "typeorm";


@Entity("hiiragi_rw01")
export class HiiragiRW01Model {

  /** レコードID(自動採番) */
  @PrimaryGeneratedColumn({
    name: 'id',
    unsigned: true,
    type: 'smallint',
    comment: 'ID',
  })
  readonly id!: number;

  /** 路線ID */
  @Column('varchar', { name: "route_id" })
  readonly routeId!: string;

  /** 駅名コード */
  @Column('varchar', { name: "sta_code" })
  readonly staCode!: string;

  /** 駅名 */
  @Column('varchar', { name: "sta_name" })
  readonly staName!: string;

}
