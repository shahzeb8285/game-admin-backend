import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrentActivePlayersWhereUniqueInput } from './current-active-players-where-unique.input';
import { Type } from 'class-transformer';
import { CurrentActivePlayersCreateWithoutPlayersInput } from './current-active-players-create-without-players.input';

@InputType()
export class CurrentActivePlayersCreateOrConnectWithoutPlayersInput {

    @Field(() => CurrentActivePlayersWhereUniqueInput, {nullable:false})
    @Type(() => CurrentActivePlayersWhereUniqueInput)
    where!: CurrentActivePlayersWhereUniqueInput;

    @Field(() => CurrentActivePlayersCreateWithoutPlayersInput, {nullable:false})
    @Type(() => CurrentActivePlayersCreateWithoutPlayersInput)
    create!: CurrentActivePlayersCreateWithoutPlayersInput;
}
