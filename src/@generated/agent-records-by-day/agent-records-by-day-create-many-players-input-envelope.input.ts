import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agent_records_by_dayCreateManyPlayersInput } from './agent-records-by-day-create-many-players.input';
import { Type } from 'class-transformer';

@InputType()
export class agent_records_by_dayCreateManyPlayersInputEnvelope {

    @Field(() => [agent_records_by_dayCreateManyPlayersInput], {nullable:false})
    @Type(() => agent_records_by_dayCreateManyPlayersInput)
    data!: Array<agent_records_by_dayCreateManyPlayersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
