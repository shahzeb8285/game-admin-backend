import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { sg_gamesWhereInput } from '../sg-games/sg-games-where.input';

@InputType()
export class Sg_gamesRelationFilter {

    @Field(() => sg_gamesWhereInput, {nullable:true})
    is?: sg_gamesWhereInput;

    @Field(() => sg_gamesWhereInput, {nullable:true})
    isNot?: sg_gamesWhereInput;
}
