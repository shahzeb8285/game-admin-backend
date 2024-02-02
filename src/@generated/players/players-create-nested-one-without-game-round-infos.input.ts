import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateWithoutGame_round_infosInput } from './players-create-without-game-round-infos.input';
import { Type } from 'class-transformer';
import { playersCreateOrConnectWithoutGame_round_infosInput } from './players-create-or-connect-without-game-round-infos.input';
import { playersWhereUniqueInput } from './players-where-unique.input';

@InputType()
export class playersCreateNestedOneWithoutGame_round_infosInput {

    @Field(() => playersCreateWithoutGame_round_infosInput, {nullable:true})
    @Type(() => playersCreateWithoutGame_round_infosInput)
    create?: playersCreateWithoutGame_round_infosInput;

    @Field(() => playersCreateOrConnectWithoutGame_round_infosInput, {nullable:true})
    @Type(() => playersCreateOrConnectWithoutGame_round_infosInput)
    connectOrCreate?: playersCreateOrConnectWithoutGame_round_infosInput;

    @Field(() => playersWhereUniqueInput, {nullable:true})
    @Type(() => playersWhereUniqueInput)
    connect?: playersWhereUniqueInput;
}
