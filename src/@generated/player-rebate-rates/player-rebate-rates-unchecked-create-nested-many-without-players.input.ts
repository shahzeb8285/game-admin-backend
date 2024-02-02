import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_rebate_ratesCreateWithoutPlayersInput } from './player-rebate-rates-create-without-players.input';
import { Type } from 'class-transformer';
import { player_rebate_ratesCreateOrConnectWithoutPlayersInput } from './player-rebate-rates-create-or-connect-without-players.input';
import { player_rebate_ratesCreateManyPlayersInputEnvelope } from './player-rebate-rates-create-many-players-input-envelope.input';
import { player_rebate_ratesWhereUniqueInput } from './player-rebate-rates-where-unique.input';

@InputType()
export class player_rebate_ratesUncheckedCreateNestedManyWithoutPlayersInput {

    @Field(() => [player_rebate_ratesCreateWithoutPlayersInput], {nullable:true})
    @Type(() => player_rebate_ratesCreateWithoutPlayersInput)
    create?: Array<player_rebate_ratesCreateWithoutPlayersInput>;

    @Field(() => [player_rebate_ratesCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => player_rebate_ratesCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<player_rebate_ratesCreateOrConnectWithoutPlayersInput>;

    @Field(() => player_rebate_ratesCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => player_rebate_ratesCreateManyPlayersInputEnvelope)
    createMany?: player_rebate_ratesCreateManyPlayersInputEnvelope;

    @Field(() => [player_rebate_ratesWhereUniqueInput], {nullable:true})
    @Type(() => player_rebate_ratesWhereUniqueInput)
    connect?: Array<player_rebate_ratesWhereUniqueInput>;
}
