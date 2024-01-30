import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class admin_accessesMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    admin_access_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    access_name?: keyof typeof SortOrder;
}
