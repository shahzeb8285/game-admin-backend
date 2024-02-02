import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateWithoutGame_round_infosInput } from './players-create-without-game-round-infos.input';
import { Type } from 'class-transformer';
import { playersCreateOrConnectWithoutGame_round_infosInput } from './players-create-or-connect-without-game-round-infos.input';
import { playersUpsertWithoutGame_round_infosInput } from './players-upsert-without-game-round-infos.input';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { playersUpdateToOneWithWhereWithoutGame_round_infosInput } from './players-update-to-one-with-where-without-game-round-infos.input';

@InputType()
export class playersUpdateOneRequiredWithoutGame_round_infosNestedInput {

    @Field(() => playersCreateWithoutGame_round_infosInput, {nullable:true})
    @Type(() => playersCreateWithoutGame_round_infosInput)
    create?: playersCreateWithoutGame_round_infosInput;

    @Field(() => playersCreateOrConnectWithoutGame_round_infosInput, {nullable:true})
    @Type(() => playersCreateOrConnectWithoutGame_round_infosInput)
    connectOrCreate?: playersCreateOrConnectWithoutGame_round_infosInput;

    @Field(() => playersUpsertWithoutGame_round_infosInput, {nullable:true})
    @Type(() => playersUpsertWithoutGame_round_infosInput)
    upsert?: playersUpsertWithoutGame_round_infosInput;

    @Field(() => playersWhereUniqueInput, {nullable:true})
    @Type(() => playersWhereUniqueInput)
    connect?: playersWhereUniqueInput;

    @Field(() => playersUpdateToOneWithWhereWithoutGame_round_infosInput, {nullable:true})
    @Type(() => playersUpdateToOneWithWhereWithoutGame_round_infosInput)
    update?: playersUpdateToOneWithWhereWithoutGame_round_infosInput;
}
