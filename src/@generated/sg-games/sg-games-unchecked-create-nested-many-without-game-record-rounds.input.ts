import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { sg_gamesCreateWithoutGame_record_roundsInput } from './sg-games-create-without-game-record-rounds.input';
import { Type } from 'class-transformer';
import { sg_gamesCreateOrConnectWithoutGame_record_roundsInput } from './sg-games-create-or-connect-without-game-record-rounds.input';
import { sg_gamesCreateManyGame_record_roundsInputEnvelope } from './sg-games-create-many-game-record-rounds-input-envelope.input';
import { sg_gamesWhereUniqueInput } from './sg-games-where-unique.input';

@InputType()
export class sg_gamesUncheckedCreateNestedManyWithoutGame_record_roundsInput {

    @Field(() => [sg_gamesCreateWithoutGame_record_roundsInput], {nullable:true})
    @Type(() => sg_gamesCreateWithoutGame_record_roundsInput)
    create?: Array<sg_gamesCreateWithoutGame_record_roundsInput>;

    @Field(() => [sg_gamesCreateOrConnectWithoutGame_record_roundsInput], {nullable:true})
    @Type(() => sg_gamesCreateOrConnectWithoutGame_record_roundsInput)
    connectOrCreate?: Array<sg_gamesCreateOrConnectWithoutGame_record_roundsInput>;

    @Field(() => sg_gamesCreateManyGame_record_roundsInputEnvelope, {nullable:true})
    @Type(() => sg_gamesCreateManyGame_record_roundsInputEnvelope)
    createMany?: sg_gamesCreateManyGame_record_roundsInputEnvelope;

    @Field(() => [sg_gamesWhereUniqueInput], {nullable:true})
    @Type(() => sg_gamesWhereUniqueInput)
    connect?: Array<sg_gamesWhereUniqueInput>;
}
