import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { admin_login_logsCountOrderByAggregateInput } from './admin-login-logs-count-order-by-aggregate.input';
import { admin_login_logsMaxOrderByAggregateInput } from './admin-login-logs-max-order-by-aggregate.input';
import { admin_login_logsMinOrderByAggregateInput } from './admin-login-logs-min-order-by-aggregate.input';

@InputType()
export class admin_login_logsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    login_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    admin_id_r?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ip?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    login_time?: keyof typeof SortOrder;

    @Field(() => admin_login_logsCountOrderByAggregateInput, {nullable:true})
    _count?: admin_login_logsCountOrderByAggregateInput;

    @Field(() => admin_login_logsMaxOrderByAggregateInput, {nullable:true})
    _max?: admin_login_logsMaxOrderByAggregateInput;

    @Field(() => admin_login_logsMinOrderByAggregateInput, {nullable:true})
    _min?: admin_login_logsMinOrderByAggregateInput;
}
