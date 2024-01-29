import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AdminLoginLogCountOrderByAggregateInput } from './admin-login-log-count-order-by-aggregate.input';
import { AdminLoginLogMaxOrderByAggregateInput } from './admin-login-log-max-order-by-aggregate.input';
import { AdminLoginLogMinOrderByAggregateInput } from './admin-login-log-min-order-by-aggregate.input';

@InputType()
export class AdminLoginLogOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    admin_login_log_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    admin_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ip?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    login_time?: keyof typeof SortOrder;

    @Field(() => AdminLoginLogCountOrderByAggregateInput, {nullable:true})
    _count?: AdminLoginLogCountOrderByAggregateInput;

    @Field(() => AdminLoginLogMaxOrderByAggregateInput, {nullable:true})
    _max?: AdminLoginLogMaxOrderByAggregateInput;

    @Field(() => AdminLoginLogMinOrderByAggregateInput, {nullable:true})
    _min?: AdminLoginLogMinOrderByAggregateInput;
}
