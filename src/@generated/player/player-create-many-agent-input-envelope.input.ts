import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerCreateManyAgentInput } from './player-create-many-agent.input';
import { Type } from 'class-transformer';

@InputType()
export class PlayerCreateManyAgentInputEnvelope {

    @Field(() => [PlayerCreateManyAgentInput], {nullable:false})
    @Type(() => PlayerCreateManyAgentInput)
    data!: Array<PlayerCreateManyAgentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
