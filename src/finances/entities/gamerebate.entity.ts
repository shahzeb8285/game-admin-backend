import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { agent_rebate_rates } from 'src/@generated/agent-rebate-rates/agent-rebate-rates.model';
import { agents } from 'src/@generated/agents/agents.model';
import { fl_categories } from 'src/@generated/fl-categories/fl-categories.model';
import { player_default_rebate_rates } from 'src/@generated/player-default-rebate-rates/player-default-rebate-rates.model';
import { player_rebate_rates } from 'src/@generated/player-rebate-rates/player-rebate-rates.model';
import { players } from 'src/@generated/players/players.model';

@ObjectType()
export class AgentGameRebateEntity {
  @Field(() => agents, { nullable: true })
  agent?: agents;

  @Field(() => [fl_categories], { nullable: true })
  categories?: [fl_categories];

  @Field(() => [agent_rebate_rates], { nullable: true })
  agentRebates?: [agent_rebate_rates];

  @Field(() => [agent_rebate_rates], { nullable: true })
  parentRebates?: [agent_rebate_rates];

  @Field(() => [player_default_rebate_rates], { nullable: true })
  defaultPlayerRebates?: [player_default_rebate_rates];
}

@ObjectType()
export class PlayerGameRebateEntity {
  @Field(() => players, { nullable: true })
  player?: players;

  @Field(() => [fl_categories], { nullable: true })
  categories?: [fl_categories];

  @Field(() => [player_rebate_rates], { nullable: true })
  player_rebate?: [player_rebate_rates];

  @Field(() => [agent_rebate_rates], { nullable: true })
  parentRebates?: [agent_rebate_rates];
}
