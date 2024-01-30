import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { agentsOrderByWithRelationInput } from '../agents/agents-order-by-with-relation.input';
import { deposit_transactionsOrderByRelationAggregateInput } from '../deposit-transactions/deposit-transactions-order-by-relation-aggregate.input';
import { withdrawal_transactionsOrderByRelationAggregateInput } from '../withdrawal-transactions/withdrawal-transactions-order-by-relation-aggregate.input';

@InputType()
export class playersOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    player_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tg_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tg_first_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tg_last_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tg_username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tg_photo_url?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_language?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    registration_ip?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    agent_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    registration_date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fundist_password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    udate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enabled?: keyof typeof SortOrder;

    @Field(() => agentsOrderByWithRelationInput, {nullable:true})
    agent?: agentsOrderByWithRelationInput;

    @Field(() => deposit_transactionsOrderByRelationAggregateInput, {nullable:true})
    deposit_transactions?: deposit_transactionsOrderByRelationAggregateInput;

    @Field(() => withdrawal_transactionsOrderByRelationAggregateInput, {nullable:true})
    withdrawal_transactions?: withdrawal_transactionsOrderByRelationAggregateInput;
}
