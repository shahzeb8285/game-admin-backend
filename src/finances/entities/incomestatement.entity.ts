import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class IncomeStatementEntity {


    @Field(() => [IncomeStatementAgentEntity], {nullable:true})
    agents: [IncomeStatementAgentEntity];

    @Field(() => [IncomeStatementPlayerEntity], {nullable:true})
    players:[IncomeStatementPlayerEntity]

 
}




@ObjectType()
export class IncomeStatementAgentEntity {


    @Field(() => String, {nullable:false})
    agent_id?: string;


    @Field(() => String, {nullable:false})
    agent_name?: string;

    @Field(() => String, {nullable:false})
    parent_agent_id?: string;

    
    @Field(() => Number, {nullable:false})
    effective_bet?: number;

   
    @Field(() => Number, {nullable:false})
    rebate_income?: number;


    @Field(() => Number, {nullable:false})
    rebate_expense?: number;

    @Field(() => Number, {nullable:false})
    pnl?: number;

    @Field(() => Number, {nullable:false})
    pnl_expense?: number;

    @Field(() => Number, {nullable:false})
    net_income?: number;



   
}


@ObjectType()
export class IncomeStatementPlayerEntity {


    @Field(() => String, {nullable:false})
    player_id?: string;


    @Field(() => String, {nullable:false})
    agent_id?: string;

   
    @Field(() => Number, {nullable:false})
    effective_bet?: number;

   
    @Field(() => Number, {nullable:false})
    pnl?: number;

    @Field(() => Number, {nullable:false})
    rebate?: number;


   
}

