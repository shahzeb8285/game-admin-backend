import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { sg_gamesUpdateWithoutGame_record_roundsInput } from './sg-games-update-without-game-record-rounds.input';
import { Type } from 'class-transformer';
import { sg_gamesCreateWithoutGame_record_roundsInput } from './sg-games-create-without-game-record-rounds.input';
import { sg_gamesWhereInput } from './sg-games-where.input';

@InputType()
export class sg_gamesUpsertWithoutGame_record_roundsInput {

    @Field(() => sg_gamesUpdateWithoutGame_record_roundsInput, {nullable:false})
    @Type(() => sg_gamesUpdateWithoutGame_record_roundsInput)
    update!: sg_gamesUpdateWithoutGame_record_roundsInput;

    @Field(() => sg_gamesCreateWithoutGame_record_roundsInput, {nullable:false})
    @Type(() => sg_gamesCreateWithoutGame_record_roundsInput)
    create!: sg_gamesCreateWithoutGame_record_roundsInput;

    @Field(() => sg_gamesWhereInput, {nullable:true})
    @Type(() => sg_gamesWhereInput)
    where?: sg_gamesWhereInput;
}
