import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { agentsOrderByWithRelationInput } from '../agents/agents-order-by-with-relation.input';
import { deposit_transactionsOrderByRelationAggregateInput } from '../deposit-transactions/deposit-transactions-order-by-relation-aggregate.input';
import { withdrawal_transactionsOrderByRelationAggregateInput } from '../withdrawal-transactions/withdrawal-transactions-order-by-relation-aggregate.input';
import { player_login_logsOrderByRelationAggregateInput } from '../player-login-logs/player-login-logs-order-by-relation-aggregate.input';
import { manual_adjustmentsOrderByRelationAggregateInput } from '../manual-adjustments/manual-adjustments-order-by-relation-aggregate.input';
import { player_rebate_ratesOrderByRelationAggregateInput } from '../player-rebate-rates/player-rebate-rates-order-by-relation-aggregate.input';
import { game_records_by_periodOrderByRelationAggregateInput } from '../game-records-by-period/game-records-by-period-order-by-relation-aggregate.input';
import { game_records_by_dayOrderByRelationAggregateInput } from '../game-records-by-day/game-records-by-day-order-by-relation-aggregate.input';
import { agent_records_by_dayOrderByRelationAggregateInput } from '../agent-records-by-day/agent-records-by-day-order-by-relation-aggregate.input';
import { player_bank_accountsOrderByRelationAggregateInput } from '../player-bank-accounts/player-bank-accounts-order-by-relation-aggregate.input';
import { player_walletsOrderByRelationAggregateInput } from '../player-wallets/player-wallets-order-by-relation-aggregate.input';
import { transfer_in_transactionsOrderByRelationAggregateInput } from '../transfer-in-transactions/transfer-in-transactions-order-by-relation-aggregate.input';
import { transfer_out_transactionsOrderByRelationAggregateInput } from '../transfer-out-transactions/transfer-out-transactions-order-by-relation-aggregate.input';
import { wallet_requestsOrderByRelationAggregateInput } from '../wallet-requests/wallet-requests-order-by-relation-aggregate.input';
import { game_round_infosOrderByRelationAggregateInput } from '../game-round-infos/game-round-infos-order-by-relation-aggregate.input';
import { game_record_roundsOrderByRelationAggregateInput } from '../game-record-rounds/game-record-rounds-order-by-relation-aggregate.input';

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

    @Field(() => SortOrder, {nullable:true})
    tg_username?: keyof typeof SortOrder;

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

    @Field(() => player_rebate_ratesOrderByRelationAggregateInput, {nullable:true})
    player_rebate_rates?: player_rebate_ratesOrderByRelationAggregateInput;

    @Field(() => game_records_by_periodOrderByRelationAggregateInput, {nullable:true})
    game_records_by_period?: game_records_by_periodOrderByRelationAggregateInput;

    @Field(() => game_records_by_dayOrderByRelationAggregateInput, {nullable:true})
    game_records_by_day?: game_records_by_dayOrderByRelationAggregateInput;

    @Field(() => agent_records_by_dayOrderByRelationAggregateInput, {nullable:true})
    agent_records_by_day?: agent_records_by_dayOrderByRelationAggregateInput;

    @Field(() => player_bank_accountsOrderByRelationAggregateInput, {nullable:true})
    player_bank_accounts?: player_bank_accountsOrderByRelationAggregateInput;

    @Field(() => player_walletsOrderByRelationAggregateInput, {nullable:true})
    player_wallets?: player_walletsOrderByRelationAggregateInput;

    @Field(() => transfer_in_transactionsOrderByRelationAggregateInput, {nullable:true})
    transfer_in_transactions?: transfer_in_transactionsOrderByRelationAggregateInput;

    @Field(() => transfer_out_transactionsOrderByRelationAggregateInput, {nullable:true})
    transfer_out_transactions?: transfer_out_transactionsOrderByRelationAggregateInput;

    @Field(() => wallet_requestsOrderByRelationAggregateInput, {nullable:true})
    wallet_requests?: wallet_requestsOrderByRelationAggregateInput;

    @Field(() => game_round_infosOrderByRelationAggregateInput, {nullable:true})
    game_round_infos?: game_round_infosOrderByRelationAggregateInput;

    @Field(() => game_record_roundsOrderByRelationAggregateInput, {nullable:true})
    game_record_rounds?: game_record_roundsOrderByRelationAggregateInput;
}
