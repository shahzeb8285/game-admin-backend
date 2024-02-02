import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { playersOrderByWithRelationInput } from '../players/players-order-by-with-relation.input';

@InputType()
export class player_walletsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    player_wallet_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    player_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currency?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    frozen_amount?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    cdate?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    udate?: SortOrderInput;

    @Field(() => playersOrderByWithRelationInput, {nullable:true})
    players?: playersOrderByWithRelationInput;
}
