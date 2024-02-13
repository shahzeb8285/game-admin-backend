import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { agentsOrderByWithRelationInput } from '../agents/agents-order-by-with-relation.input';
import { deposit_transactionsOrderByRelationAggregateInput } from '../deposit-transactions/deposit-transactions-order-by-relation-aggregate.input';
import { withdrawal_transactionsOrderByRelationAggregateInput } from '../withdrawal-transactions/withdrawal-transactions-order-by-relation-aggregate.input';
import { player_login_logsOrderByRelationAggregateInput } from '../player-login-logs/player-login-logs-order-by-relation-aggregate.input';
import { manual_adjustmentsOrderByRelationAggregateInput } from '../manual-adjustments/manual-adjustments-order-by-relation-aggregate.input';
import { rebate_transactionsOrderByRelationAggregateInput } from '../rebate-transactions/rebate-transactions-order-by-relation-aggregate.input';
import { game_record_roundsOrderByRelationAggregateInput } from '../game-record-rounds/game-record-rounds-order-by-relation-aggregate.input';
import { player_walletsOrderByWithRelationInput } from '../player-wallets/player-wallets-order-by-with-relation.input';
import { transfer_in_transactionsOrderByRelationAggregateInput } from '../transfer-in-transactions/transfer-in-transactions-order-by-relation-aggregate.input';
import { transfer_out_transactionsOrderByRelationAggregateInput } from '../transfer-out-transactions/transfer-out-transactions-order-by-relation-aggregate.input';

@InputType()
export class playersOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    player_id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    name?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    tg_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tg_first_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tg_last_name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    tg_username?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    tg_photo_url?: SortOrderInput;

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

    @Field(() => player_login_logsOrderByRelationAggregateInput, {nullable:true})
    player_login_logs?: player_login_logsOrderByRelationAggregateInput;

    @Field(() => manual_adjustmentsOrderByRelationAggregateInput, {nullable:true})
    manual_adjustments?: manual_adjustmentsOrderByRelationAggregateInput;

    @Field(() => rebate_transactionsOrderByRelationAggregateInput, {nullable:true})
    rebate_transactions?: rebate_transactionsOrderByRelationAggregateInput;

    @Field(() => game_record_roundsOrderByRelationAggregateInput, {nullable:true})
    game_record_rounds?: game_record_roundsOrderByRelationAggregateInput;

    @Field(() => player_walletsOrderByWithRelationInput, {nullable:true})
    wallet?: player_walletsOrderByWithRelationInput;

    @Field(() => transfer_in_transactionsOrderByRelationAggregateInput, {nullable:true})
    transfer_in_transactions?: transfer_in_transactionsOrderByRelationAggregateInput;

    @Field(() => transfer_out_transactionsOrderByRelationAggregateInput, {nullable:true})
    transfer_out_transactions?: transfer_out_transactionsOrderByRelationAggregateInput;
}
