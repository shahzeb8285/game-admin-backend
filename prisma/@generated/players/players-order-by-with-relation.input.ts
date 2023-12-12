import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { agentsOrderByWithRelationInput } from '../agents/agents-order-by-with-relation.input';
import { player_login_logsOrderByRelationAggregateInput } from '../player-login-logs/player-login-logs-order-by-relation-aggregate.input';
import { current_active_playersOrderByRelationAggregateInput } from '../current-active-players/current-active-players-order-by-relation-aggregate.input';
import { game_historyOrderByRelationAggregateInput } from '../game-history/game-history-order-by-relation-aggregate.input';
import { manual_adjustmentsOrderByRelationAggregateInput } from '../manual-adjustments/manual-adjustments-order-by-relation-aggregate.input';
import { player_walletsOrderByRelationAggregateInput } from '../player-wallets/player-wallets-order-by-relation-aggregate.input';
import { wallet_requestsOrderByRelationAggregateInput } from '../wallet-requests/wallet-requests-order-by-relation-aggregate.input';
import { deposit_transactionsOrderByRelationAggregateInput } from '../deposit-transactions/deposit-transactions-order-by-relation-aggregate.input';
import { withdrawal_transactionsOrderByRelationAggregateInput } from '../withdrawal-transactions/withdrawal-transactions-order-by-relation-aggregate.input';
import { transfer_in_transactionsOrderByRelationAggregateInput } from '../transfer-in-transactions/transfer-in-transactions-order-by-relation-aggregate.input';
import { transfer_out_transactionsOrderByRelationAggregateInput } from '../transfer-out-transactions/transfer-out-transactions-order-by-relation-aggregate.input';

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
    tg_user_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tg_photo_url?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_language?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    registration_ip?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    agent_id_r?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    udate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enabled?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    registration_date?: keyof typeof SortOrder;

    @Field(() => agentsOrderByWithRelationInput, {nullable:true})
    agent?: agentsOrderByWithRelationInput;

    @Field(() => player_login_logsOrderByRelationAggregateInput, {nullable:true})
    player_login_logs?: player_login_logsOrderByRelationAggregateInput;

    @Field(() => current_active_playersOrderByRelationAggregateInput, {nullable:true})
    current_active_players?: current_active_playersOrderByRelationAggregateInput;

    @Field(() => game_historyOrderByRelationAggregateInput, {nullable:true})
    game_history?: game_historyOrderByRelationAggregateInput;

    @Field(() => manual_adjustmentsOrderByRelationAggregateInput, {nullable:true})
    manual_adjustments?: manual_adjustmentsOrderByRelationAggregateInput;

    @Field(() => player_walletsOrderByRelationAggregateInput, {nullable:true})
    player_wallets?: player_walletsOrderByRelationAggregateInput;

    @Field(() => wallet_requestsOrderByRelationAggregateInput, {nullable:true})
    wallet_requests?: wallet_requestsOrderByRelationAggregateInput;

    @Field(() => deposit_transactionsOrderByRelationAggregateInput, {nullable:true})
    deposit_transactions?: deposit_transactionsOrderByRelationAggregateInput;

    @Field(() => withdrawal_transactionsOrderByRelationAggregateInput, {nullable:true})
    withdrawal_transactions?: withdrawal_transactionsOrderByRelationAggregateInput;

    @Field(() => transfer_in_transactionsOrderByRelationAggregateInput, {nullable:true})
    transfer_in_transactions?: transfer_in_transactionsOrderByRelationAggregateInput;

    @Field(() => transfer_out_transactionsOrderByRelationAggregateInput, {nullable:true})
    transfer_out_transactions?: transfer_out_transactionsOrderByRelationAggregateInput;
}
