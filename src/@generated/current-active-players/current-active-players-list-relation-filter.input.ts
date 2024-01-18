import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrentActivePlayersWhereInput } from './current-active-players-where.input';

@InputType()
export class CurrentActivePlayersListRelationFilter {

    @Field(() => CurrentActivePlayersWhereInput, {nullable:true})
    every?: CurrentActivePlayersWhereInput;

    @Field(() => CurrentActivePlayersWhereInput, {nullable:true})
    some?: CurrentActivePlayersWhereInput;

    @Field(() => CurrentActivePlayersWhereInput, {nullable:true})
    none?: CurrentActivePlayersWhereInput;
}
