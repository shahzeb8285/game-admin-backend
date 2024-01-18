import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { admin_rolesCountOrderByAggregateInput } from './admin-roles-count-order-by-aggregate.input';
import { admin_rolesMaxOrderByAggregateInput } from './admin-roles-max-order-by-aggregate.input';
import { admin_rolesMinOrderByAggregateInput } from './admin-roles-min-order-by-aggregate.input';

@InputType()
export class admin_rolesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    admin_role_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    admin_role_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enabled?: keyof typeof SortOrder;

    @Field(() => admin_rolesCountOrderByAggregateInput, {nullable:true})
    _count?: admin_rolesCountOrderByAggregateInput;

    @Field(() => admin_rolesMaxOrderByAggregateInput, {nullable:true})
    _max?: admin_rolesMaxOrderByAggregateInput;

    @Field(() => admin_rolesMinOrderByAggregateInput, {nullable:true})
    _min?: admin_rolesMinOrderByAggregateInput;
}
