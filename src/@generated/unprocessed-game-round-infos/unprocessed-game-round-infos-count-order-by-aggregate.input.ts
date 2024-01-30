import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class unprocessed_game_round_infosCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    game_round_info_id?: keyof typeof SortOrder;
}
