import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_record_roundsWhereInput } from '../game-record-rounds/game-record-rounds-where.input';
import { Type } from 'class-transformer';
import { game_record_roundsOrderByWithRelationInput } from '../game-record-rounds/game-record-rounds-order-by-with-relation.input';
import { game_record_roundsWhereUniqueInput } from '../game-record-rounds/game-record-rounds-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Game_record_roundsScalarFieldEnum } from './game-record-rounds-scalar-field.enum';

@ArgsType()
export class FindFirstgameRecordRoundsArgs {

    @Field(() => game_record_roundsWhereInput, {nullable:true})
    @Type(() => game_record_roundsWhereInput)
    where?: game_record_roundsWhereInput;

    @Field(() => [game_record_roundsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<game_record_roundsOrderByWithRelationInput>;

    @Field(() => game_record_roundsWhereUniqueInput, {nullable:true})
    cursor?: game_record_roundsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Game_record_roundsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Game_record_roundsScalarFieldEnum>;
}
