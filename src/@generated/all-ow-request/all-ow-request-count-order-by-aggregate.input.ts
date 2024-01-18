import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class AllOwRequestCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    allow_request_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    request?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;
}
