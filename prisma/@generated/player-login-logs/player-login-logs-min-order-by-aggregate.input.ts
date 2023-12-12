import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class player_login_logsMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    player_id_r?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ip?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    login_time?: keyof typeof SortOrder;
}
