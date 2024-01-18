import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlayerWhereInput } from './player-where.input';
import { Type } from 'class-transformer';
import { PlayerOrderByWithRelationInput } from './player-order-by-with-relation.input';
import { PlayerWhereUniqueInput } from './player-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PlayerScalarFieldEnum } from './player-scalar-field.enum';

@ArgsType()
export class FindFirstPlayerArgs {

    @Field(() => PlayerWhereInput, {nullable:true})
    @Type(() => PlayerWhereInput)
    where?: PlayerWhereInput;

    @Field(() => [PlayerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PlayerOrderByWithRelationInput>;

    @Field(() => PlayerWhereUniqueInput, {nullable:true})
    cursor?: PlayerWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PlayerScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PlayerScalarFieldEnum>;
}
