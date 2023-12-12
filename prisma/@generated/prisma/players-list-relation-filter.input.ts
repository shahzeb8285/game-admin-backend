import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereInput } from '../players/players-where.input';

@InputType()
export class PlayersListRelationFilter {

    @Field(() => playersWhereInput, {nullable:true})
    every?: playersWhereInput;

    @Field(() => playersWhereInput, {nullable:true})
    some?: playersWhereInput;

    @Field(() => playersWhereInput, {nullable:true})
    none?: playersWhereInput;
}
