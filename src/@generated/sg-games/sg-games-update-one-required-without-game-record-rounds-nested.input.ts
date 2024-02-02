import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { sg_gamesCreateWithoutGame_record_roundsInput } from './sg-games-create-without-game-record-rounds.input';
import { Type } from 'class-transformer';
import { sg_gamesCreateOrConnectWithoutGame_record_roundsInput } from './sg-games-create-or-connect-without-game-record-rounds.input';
import { sg_gamesUpsertWithoutGame_record_roundsInput } from './sg-games-upsert-without-game-record-rounds.input';
import { sg_gamesWhereUniqueInput } from './sg-games-where-unique.input';
import { sg_gamesUpdateToOneWithWhereWithoutGame_record_roundsInput } from './sg-games-update-to-one-with-where-without-game-record-rounds.input';

@InputType()
export class sg_gamesUpdateOneRequiredWithoutGame_record_roundsNestedInput {

    @Field(() => sg_gamesCreateWithoutGame_record_roundsInput, {nullable:true})
    @Type(() => sg_gamesCreateWithoutGame_record_roundsInput)
    create?: sg_gamesCreateWithoutGame_record_roundsInput;

    @Field(() => sg_gamesCreateOrConnectWithoutGame_record_roundsInput, {nullable:true})
    @Type(() => sg_gamesCreateOrConnectWithoutGame_record_roundsInput)
    connectOrCreate?: sg_gamesCreateOrConnectWithoutGame_record_roundsInput;

    @Field(() => sg_gamesUpsertWithoutGame_record_roundsInput, {nullable:true})
    @Type(() => sg_gamesUpsertWithoutGame_record_roundsInput)
    upsert?: sg_gamesUpsertWithoutGame_record_roundsInput;

    @Field(() => sg_gamesWhereUniqueInput, {nullable:true})
    @Type(() => sg_gamesWhereUniqueInput)
    connect?: sg_gamesWhereUniqueInput;

    @Field(() => sg_gamesUpdateToOneWithWhereWithoutGame_record_roundsInput, {nullable:true})
    @Type(() => sg_gamesUpdateToOneWithWhereWithoutGame_record_roundsInput)
    update?: sg_gamesUpdateToOneWithWhereWithoutGame_record_roundsInput;
}
