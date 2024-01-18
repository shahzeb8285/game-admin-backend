import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerWhereInput } from './player-where.input';

@InputType()
export class PlayerListRelationFilter {

    @Field(() => PlayerWhereInput, {nullable:true})
    every?: PlayerWhereInput;

    @Field(() => PlayerWhereInput, {nullable:true})
    some?: PlayerWhereInput;

    @Field(() => PlayerWhereInput, {nullable:true})
    none?: PlayerWhereInput;
}
