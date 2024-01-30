import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_records_by_periodWhereInput } from '../game-records-by-period/game-records-by-period-where.input';
import { Type } from 'class-transformer';
import { game_records_by_periodOrderByWithRelationInput } from '../game-records-by-period/game-records-by-period-order-by-with-relation.input';
import { game_records_by_periodWhereUniqueInput } from '../game-records-by-period/game-records-by-period-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Game_records_by_periodScalarFieldEnum } from './game-records-by-period-scalar-field.enum';

@ArgsType()
export class FindManygameRecordsByPeriodArgs {

    @Field(() => game_records_by_periodWhereInput, {nullable:true})
    @Type(() => game_records_by_periodWhereInput)
    where?: game_records_by_periodWhereInput;

    @Field(() => [game_records_by_periodOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<game_records_by_periodOrderByWithRelationInput>;

    @Field(() => game_records_by_periodWhereUniqueInput, {nullable:true})
    cursor?: game_records_by_periodWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Game_records_by_periodScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Game_records_by_periodScalarFieldEnum>;
}
