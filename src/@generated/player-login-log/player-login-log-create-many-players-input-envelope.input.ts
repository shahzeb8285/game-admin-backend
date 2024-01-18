import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerLoginLogCreateManyPlayersInput } from './player-login-log-create-many-players.input';
import { Type } from 'class-transformer';

@InputType()
export class PlayerLoginLogCreateManyPlayersInputEnvelope {

    @Field(() => [PlayerLoginLogCreateManyPlayersInput], {nullable:false})
    @Type(() => PlayerLoginLogCreateManyPlayersInput)
    data!: Array<PlayerLoginLogCreateManyPlayersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
