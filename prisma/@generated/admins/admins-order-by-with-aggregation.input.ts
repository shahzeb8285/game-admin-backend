import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AdminsCountOrderByAggregateInput } from './admins-count-order-by-aggregate.input';
import { AdminsMaxOrderByAggregateInput } from './admins-max-order-by-aggregate.input';
import { AdminsMinOrderByAggregateInput } from './admins-min-order-by-aggregate.input';

@InputType()
export class AdminsOrderByWithAggregationInput {

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

    @Field(() => AdminsCountOrderByAggregateInput, {nullable:true})
    _count?: AdminsCountOrderByAggregateInput;

    @Field(() => AdminsMaxOrderByAggregateInput, {nullable:true})
    _max?: AdminsMaxOrderByAggregateInput;

    @Field(() => AdminsMinOrderByAggregateInput, {nullable:true})
    _min?: AdminsMinOrderByAggregateInput;
}
