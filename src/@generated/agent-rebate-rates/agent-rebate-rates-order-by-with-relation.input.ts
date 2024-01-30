import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { agentsOrderByWithRelationInput } from '../agents/agents-order-by-with-relation.input';

@InputType()
export class agent_rebate_ratesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    agent_rebate_rate_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    agent_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rebate_category_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rebate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_active?: keyof typeof SortOrder;

    @Field(() => agentsOrderByWithRelationInput, {nullable:true})
    agents?: agentsOrderByWithRelationInput;
}
