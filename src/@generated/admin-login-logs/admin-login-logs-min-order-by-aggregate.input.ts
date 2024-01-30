import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class admin_login_logsMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    admin_login_log_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    admin_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ip?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    login_time?: keyof typeof SortOrder;
}
