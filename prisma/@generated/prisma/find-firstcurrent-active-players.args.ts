import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { current_active_playersWhereInput } from '../current-active-players/current-active-players-where.input';
import { Type } from 'class-transformer';
import { current_active_playersOrderByWithRelationInput } from '../current-active-players/current-active-players-order-by-with-relation.input';
import { current_active_playersWhereUniqueInput } from '../current-active-players/current-active-players-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Current_active_playersScalarFieldEnum } from './current-active-players-scalar-field.enum';

@ArgsType()
export class FindFirstcurrentActivePlayersArgs {

    @Field(() => current_active_playersWhereInput, {nullable:true})
    @Type(() => current_active_playersWhereInput)
    where?: current_active_playersWhereInput;

    @Field(() => [current_active_playersOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<current_active_playersOrderByWithRelationInput>;

    @Field(() => current_active_playersWhereUniqueInput, {nullable:true})
    cursor?: current_active_playersWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Current_active_playersScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Current_active_playersScalarFieldEnum>;
}
