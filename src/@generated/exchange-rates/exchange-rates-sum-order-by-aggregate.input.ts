import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class exchange_ratesSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    game_per_real?: keyof typeof SortOrder;
}
