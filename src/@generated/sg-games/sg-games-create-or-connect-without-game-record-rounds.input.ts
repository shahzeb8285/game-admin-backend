import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { sg_gamesWhereUniqueInput } from './sg-games-where-unique.input';
import { Type } from 'class-transformer';
import { sg_gamesCreateWithoutGame_record_roundsInput } from './sg-games-create-without-game-record-rounds.input';

@InputType()
export class sg_gamesCreateOrConnectWithoutGame_record_roundsInput {

    @Field(() => sg_gamesWhereUniqueInput, {nullable:false})
    @Type(() => sg_gamesWhereUniqueInput)
    where!: sg_gamesWhereUniqueInput;

    @Field(() => sg_gamesCreateWithoutGame_record_roundsInput, {nullable:false})
    @Type(() => sg_gamesCreateWithoutGame_record_roundsInput)
    create!: sg_gamesCreateWithoutGame_record_roundsInput;
}
