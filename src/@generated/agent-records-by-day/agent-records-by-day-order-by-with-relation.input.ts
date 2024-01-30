import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { agentsOrderByWithRelationInput } from '../agents/agents-order-by-with-relation.input';

@InputType()
export class agent_records_by_dayOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    agent_records_by_day_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_records_by_day_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    player_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rebate_category_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    agent_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    child_agent_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effective_bet_amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rebate_income?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rebate_expense?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_pnl_income?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_pnl_expense?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    udate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_active?: keyof typeof SortOrder;

    @Field(() => agentsOrderByWithRelationInput, {nullable:true})
    agents?: agentsOrderByWithRelationInput;
}
