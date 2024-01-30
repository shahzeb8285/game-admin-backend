import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class game_actionsMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    game_action_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    actid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    timestamp?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_round_info_id?: keyof typeof SortOrder;
}
