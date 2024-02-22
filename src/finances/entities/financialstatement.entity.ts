import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { agent_rebate_rates } from 'src/@generated/agent-rebate-rates/agent-rebate-rates.model';
import { agents } from 'src/@generated/agents/agents.model';
import { fl_categories } from 'src/@generated/fl-categories/fl-categories.model';
import { player_rebate_rates } from 'src/@generated/player-rebate-rates/player-rebate-rates.model';
import { players } from 'src/@generated/players/players.model';

@ObjectType()
export class FinancialStatementEntity {


    @Field(() => [FinancialStatementDepositEntity], {nullable:true})
    deposits: [FinancialStatementDepositEntity];

    @Field(() => [FinancialStatementWithdrawEntity], {nullable:true})
    withdrawals:[FinancialStatementWithdrawEntity]

    @Field(() => [FinancialStatementPnlEntity], {nullable:true})
    pnl:[FinancialStatementPnlEntity]
  
}




@ObjectType()
export class FinancialStatementDepositEntity {


    @Field(() => String, {nullable:false})
    player_id?: string;


    @Field(() => String, {nullable:false})
    tg_id?: string;

    @Field(() => String, {nullable:false})
    agent_name?: string;

    
    @Field(() => Number, {nullable:false})
    deposit_number?: number;

   
    @Field(() => Number, {nullable:false})
    deposit_amount?: number;



   
}

@ObjectType()
export class FinancialStatementWithdrawEntity {


    @Field(() => String, {nullable:false})
    player_id?: string;

    
    @Field(() => Number, {nullable:false})
    withdrawal_number?: number;

   
    @Field(() => Number, {nullable:false})
    withdrawal_amount?: number;



   
}

@ObjectType()
export class FinancialStatementPnlEntity {


    @Field(() => String, {nullable:false})
    player_id?: string;


    @Field(() => String, {nullable:false})
    sum?: string;

   
}

