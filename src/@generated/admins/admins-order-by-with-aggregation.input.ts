import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { adminsCountOrderByAggregateInput } from './admins-count-order-by-aggregate.input';
import { adminsMaxOrderByAggregateInput } from './admins-max-order-by-aggregate.input';
import { adminsMinOrderByAggregateInput } from './admins-min-order-by-aggregate.input';

@InputType()
export class adminsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    admin_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    admin_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    admin_password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    admin_role_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    udate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enabled?: keyof typeof SortOrder;

    @Field(() => adminsCountOrderByAggregateInput, {nullable:true})
    _count?: adminsCountOrderByAggregateInput;

    @Field(() => adminsMaxOrderByAggregateInput, {nullable:true})
    _max?: adminsMaxOrderByAggregateInput;

    @Field(() => adminsMinOrderByAggregateInput, {nullable:true})
    _min?: adminsMinOrderByAggregateInput;
}
