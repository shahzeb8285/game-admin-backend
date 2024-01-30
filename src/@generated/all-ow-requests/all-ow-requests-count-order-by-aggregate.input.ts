import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class all_ow_requestsCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    all_ow_request_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    request?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;
}
