import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_rebate_ratesCreateManyPlayersInput } from './player-rebate-rates-create-many-players.input';
import { Type } from 'class-transformer';

@InputType()
export class player_rebate_ratesCreateManyPlayersInputEnvelope {

    @Field(() => [player_rebate_ratesCreateManyPlayersInput], {nullable:false})
    @Type(() => player_rebate_ratesCreateManyPlayersInput)
    data!: Array<player_rebate_ratesCreateManyPlayersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
