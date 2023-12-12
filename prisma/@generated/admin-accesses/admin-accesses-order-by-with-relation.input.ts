import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { admin_role_accessesOrderByRelationAggregateInput } from '../admin-role-accesses/admin-role-accesses-order-by-relation-aggregate.input';

@InputType()
export class admin_accessesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    admin_access_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    access_name?: keyof typeof SortOrder;

    @Field(() => admin_role_accessesOrderByRelationAggregateInput, {nullable:true})
    role_accesses?: admin_role_accessesOrderByRelationAggregateInput;
}
