import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_rebate_ratesWhereUniqueInput } from './player-rebate-rates-where-unique.input';
import { Type } from 'class-transformer';
import { player_rebate_ratesUpdateWithoutPlayersInput } from './player-rebate-rates-update-without-players.input';

@InputType()
export class player_rebate_ratesUpdateWithWhereUniqueWithoutPlayersInput {

    @Field(() => player_rebate_ratesWhereUniqueInput, {nullable:false})
    @Type(() => player_rebate_ratesWhereUniqueInput)
    where!: player_rebate_ratesWhereUniqueInput;

    @Field(() => player_rebate_ratesUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => player_rebate_ratesUpdateWithoutPlayersInput)
    data!: player_rebate_ratesUpdateWithoutPlayersInput;
}
