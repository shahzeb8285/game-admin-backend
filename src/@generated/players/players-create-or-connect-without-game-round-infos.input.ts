import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutGame_round_infosInput } from './players-create-without-game-round-infos.input';

@InputType()
export class playersCreateOrConnectWithoutGame_round_infosInput {

    @Field(() => playersWhereUniqueInput, {nullable:false})
    @Type(() => playersWhereUniqueInput)
    where!: playersWhereUniqueInput;

    @Field(() => playersCreateWithoutGame_round_infosInput, {nullable:false})
    @Type(() => playersCreateWithoutGame_round_infosInput)
    create!: playersCreateWithoutGame_round_infosInput;
}
