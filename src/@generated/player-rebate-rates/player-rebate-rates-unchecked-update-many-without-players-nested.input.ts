import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_rebate_ratesCreateWithoutPlayersInput } from './player-rebate-rates-create-without-players.input';
import { Type } from 'class-transformer';
import { player_rebate_ratesCreateOrConnectWithoutPlayersInput } from './player-rebate-rates-create-or-connect-without-players.input';
import { player_rebate_ratesUpsertWithWhereUniqueWithoutPlayersInput } from './player-rebate-rates-upsert-with-where-unique-without-players.input';
import { player_rebate_ratesCreateManyPlayersInputEnvelope } from './player-rebate-rates-create-many-players-input-envelope.input';
import { player_rebate_ratesWhereUniqueInput } from './player-rebate-rates-where-unique.input';
import { player_rebate_ratesUpdateWithWhereUniqueWithoutPlayersInput } from './player-rebate-rates-update-with-where-unique-without-players.input';
import { player_rebate_ratesUpdateManyWithWhereWithoutPlayersInput } from './player-rebate-rates-update-many-with-where-without-players.input';
import { player_rebate_ratesScalarWhereInput } from './player-rebate-rates-scalar-where.input';

@InputType()
export class player_rebate_ratesUncheckedUpdateManyWithoutPlayersNestedInput {

    @Field(() => [player_rebate_ratesCreateWithoutPlayersInput], {nullable:true})
    @Type(() => player_rebate_ratesCreateWithoutPlayersInput)
    create?: Array<player_rebate_ratesCreateWithoutPlayersInput>;

    @Field(() => [player_rebate_ratesCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => player_rebate_ratesCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<player_rebate_ratesCreateOrConnectWithoutPlayersInput>;

    @Field(() => [player_rebate_ratesUpsertWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => player_rebate_ratesUpsertWithWhereUniqueWithoutPlayersInput)
    upsert?: Array<player_rebate_ratesUpsertWithWhereUniqueWithoutPlayersInput>;

    @Field(() => player_rebate_ratesCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => player_rebate_ratesCreateManyPlayersInputEnvelope)
    createMany?: player_rebate_ratesCreateManyPlayersInputEnvelope;

    @Field(() => [player_rebate_ratesWhereUniqueInput], {nullable:true})
    @Type(() => player_rebate_ratesWhereUniqueInput)
    set?: Array<player_rebate_ratesWhereUniqueInput>;

    @Field(() => [player_rebate_ratesWhereUniqueInput], {nullable:true})
    @Type(() => player_rebate_ratesWhereUniqueInput)
    disconnect?: Array<player_rebate_ratesWhereUniqueInput>;

    @Field(() => [player_rebate_ratesWhereUniqueInput], {nullable:true})
    @Type(() => player_rebate_ratesWhereUniqueInput)
    delete?: Array<player_rebate_ratesWhereUniqueInput>;

    @Field(() => [player_rebate_ratesWhereUniqueInput], {nullable:true})
    @Type(() => player_rebate_ratesWhereUniqueInput)
    connect?: Array<player_rebate_ratesWhereUniqueInput>;

    @Field(() => [player_rebate_ratesUpdateWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => player_rebate_ratesUpdateWithWhereUniqueWithoutPlayersInput)
    update?: Array<player_rebate_ratesUpdateWithWhereUniqueWithoutPlayersInput>;

    @Field(() => [player_rebate_ratesUpdateManyWithWhereWithoutPlayersInput], {nullable:true})
    @Type(() => player_rebate_ratesUpdateManyWithWhereWithoutPlayersInput)
    updateMany?: Array<player_rebate_ratesUpdateManyWithWhereWithoutPlayersInput>;

    @Field(() => [player_rebate_ratesScalarWhereInput], {nullable:true})
    @Type(() => player_rebate_ratesScalarWhereInput)
    deleteMany?: Array<player_rebate_ratesScalarWhereInput>;
}
