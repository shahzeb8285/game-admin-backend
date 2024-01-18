import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrentActivePlayersWhereUniqueInput } from './current-active-players-where-unique.input';
import { Type } from 'class-transformer';
import { CurrentActivePlayersUpdateWithoutPlayersInput } from './current-active-players-update-without-players.input';

@InputType()
export class CurrentActivePlayersUpdateWithWhereUniqueWithoutPlayersInput {

    @Field(() => CurrentActivePlayersWhereUniqueInput, {nullable:false})
    @Type(() => CurrentActivePlayersWhereUniqueInput)
    where!: CurrentActivePlayersWhereUniqueInput;

    @Field(() => CurrentActivePlayersUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => CurrentActivePlayersUpdateWithoutPlayersInput)
    data!: CurrentActivePlayersUpdateWithoutPlayersInput;
}
