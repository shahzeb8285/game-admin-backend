import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { playersWhereInput } from './players-where.input';
import { Type } from 'class-transformer';
import { playersOrderByWithRelationInput } from './players-order-by-with-relation.input';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class playersAggregateArgs {

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;

    @Field(() => [playersOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<playersOrderByWithRelationInput>;

    @Field(() => playersWhereUniqueInput, {nullable:true})
    cursor?: playersWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
