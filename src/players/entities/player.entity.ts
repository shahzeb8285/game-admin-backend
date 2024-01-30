import { ObjectType, Field, Int } from '@nestjs/graphql';
import { agents as Agent } from '../../@generated/agents/agents.model';
// import { Agent } from '../../agents/entities/agent.entity';

@ObjectType()
export class Player1 {
  @Field(() => String, { nullable: false })
  player_id!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  tg_id!: string;

  @Field(() => String, { nullable: false })
  tg_first_name!: string;

  @Field(() => String, { nullable: false })
  tg_last_name!: string;

  @Field(() => String, { nullable: false })
  tg_username!: string;

  @Field(() => String, { nullable: false })
  tg_photo_url!: string;

  @Field(() => String, { nullable: false })
  user_language!: string;

  @Field(() => String, { nullable: false })
  registrationIp!: string;

  @Field(() => String, { nullable: false })
  agent_id!: string;

  @Field(() => Date, { nullable: false })
  cdate!: Date;

  @Field(() => Date, { nullable: false })
  udate!: Date;

  @Field(() => Boolean, { nullable: false, defaultValue: true })
  enabled!: boolean;

  @Field(() => String, { nullable: false })
  registration_date!: string;

  @Field(() => Agent, { nullable: false })
  agent?: Agent;
}
