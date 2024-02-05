import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { game_record_roundsOrderByRelationAggregateInput } from '../game-record-rounds/game-record-rounds-order-by-relation-aggregate.input';

@InputType()
export class fl_categoriesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    fl_categories_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    category_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    category_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    csort?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    rebate_priority?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    udate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enabled?: keyof typeof SortOrder;

    @Field(() => game_record_roundsOrderByRelationAggregateInput, {nullable:true})
    game_record_rounds?: game_record_roundsOrderByRelationAggregateInput;
}
