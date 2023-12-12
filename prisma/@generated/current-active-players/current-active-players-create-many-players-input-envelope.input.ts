import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { current_active_playersCreateManyPlayersInput } from './current-active-players-create-many-players.input';
import { Type } from 'class-transformer';

@InputType()
export class current_active_playersCreateManyPlayersInputEnvelope {

    @Field(() => [current_active_playersCreateManyPlayersInput], {nullable:false})
    @Type(() => current_active_playersCreateManyPlayersInput)
    data!: Array<current_active_playersCreateManyPlayersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
