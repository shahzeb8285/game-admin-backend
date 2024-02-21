import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { players } from '../players/players.model';
import { agent_rebate_rates } from '../agent-rebate-rates/agent-rebate-rates.model';
import { agent_shares } from '../agent-shares/agent-shares.model';
import { agent_records_by_day } from '../agent-records-by-day/agent-records-by-day.model';
import { AgentsCount } from '../prisma/agents-count.output';

@ObjectType()
export class agents {
  @Field(() => ID, { nullable: false })
  agent_id!: string;

  @Field(() => String, { nullable: false })
  agent_name!: string;

  @Field(() => String, { nullable: false })
  agent_password!: string;

  @Field(() => String, { nullable: true })
  parent_agent_id!: string | null;

  @Field(() => String, { nullable: false })
  created_by!: string;

  @Field(() => Date, { nullable: false })
  cdate!: Date;

  @Field(() => Date, { nullable: false })
  udate!: Date;

  @Field(() => Boolean, { nullable: false, defaultValue: true })
  enabled!: boolean;

  @Field(() => agents, { nullable: true })
  parent?: agents | null;

  @Field(() => [agents], { nullable: true })
  children?: Array<agents>;

  @Field(() => [players], { nullable: true })
  players?: Array<players>;

  @Field(() => [agent_rebate_rates], { nullable: true })
  agent_rebate_rates?: Array<agent_rebate_rates>;

  @Field(() => [agent_shares], { nullable: true })
  agent_shares?: Array<agent_shares>;

  @Field(() => [agent_records_by_day], { nullable: true })
  agent_records_by_day?: Array<agent_records_by_day>;

  @Field(() => AgentsCount, { nullable: false })
  _count?: AgentsCount;
}
