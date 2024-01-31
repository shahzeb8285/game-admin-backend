import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { playersOrderByWithRelationInput } from '../players/players-order-by-with-relation.input';
import { adminsOrderByWithRelationInput } from '../admins/admins-order-by-with-relation.input';

@InputType()
export class manual_adjustmentsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    manual_adjustment_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    player_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reason?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => playersOrderByWithRelationInput, {nullable:true})
    players?: playersOrderByWithRelationInput;

    @Field(() => adminsOrderByWithRelationInput, {nullable:true})
    admins?: adminsOrderByWithRelationInput;
}
