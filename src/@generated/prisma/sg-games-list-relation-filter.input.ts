import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { sg_gamesWhereInput } from '../sg-games/sg-games-where.input';

@InputType()
export class Sg_gamesListRelationFilter {

    @Field(() => sg_gamesWhereInput, {nullable:true})
    every?: sg_gamesWhereInput;

    @Field(() => sg_gamesWhereInput, {nullable:true})
    some?: sg_gamesWhereInput;

    @Field(() => sg_gamesWhereInput, {nullable:true})
    none?: sg_gamesWhereInput;
}
