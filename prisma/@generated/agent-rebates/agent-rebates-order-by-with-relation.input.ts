import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { agentsOrderByWithRelationInput } from '../agents/agents-order-by-with-relation.input';

@InputType()
export class agent_rebatesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    agent_rebate_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    agent_id_r?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rebate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    from_date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    thru_date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_active?: keyof typeof SortOrder;

    @Field(() => agentsOrderByWithRelationInput, {nullable:true})
    agents?: agentsOrderByWithRelationInput;
}
