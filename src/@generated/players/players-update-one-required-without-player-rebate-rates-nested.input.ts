import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateWithoutPlayer_rebate_ratesInput } from './players-create-without-player-rebate-rates.input';
import { Type } from 'class-transformer';
import { playersCreateOrConnectWithoutPlayer_rebate_ratesInput } from './players-create-or-connect-without-player-rebate-rates.input';
import { playersUpsertWithoutPlayer_rebate_ratesInput } from './players-upsert-without-player-rebate-rates.input';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { playersUpdateToOneWithWhereWithoutPlayer_rebate_ratesInput } from './players-update-to-one-with-where-without-player-rebate-rates.input';

@InputType()
export class playersUpdateOneRequiredWithoutPlayer_rebate_ratesNestedInput {

    @Field(() => playersCreateWithoutPlayer_rebate_ratesInput, {nullable:true})
    @Type(() => playersCreateWithoutPlayer_rebate_ratesInput)
    create?: playersCreateWithoutPlayer_rebate_ratesInput;

    @Field(() => playersCreateOrConnectWithoutPlayer_rebate_ratesInput, {nullable:true})
    @Type(() => playersCreateOrConnectWithoutPlayer_rebate_ratesInput)
    connectOrCreate?: playersCreateOrConnectWithoutPlayer_rebate_ratesInput;

    @Field(() => playersUpsertWithoutPlayer_rebate_ratesInput, {nullable:true})
    @Type(() => playersUpsertWithoutPlayer_rebate_ratesInput)
    upsert?: playersUpsertWithoutPlayer_rebate_ratesInput;

    @Field(() => playersWhereUniqueInput, {nullable:true})
    @Type(() => playersWhereUniqueInput)
    connect?: playersWhereUniqueInput;

    @Field(() => playersUpdateToOneWithWhereWithoutPlayer_rebate_ratesInput, {nullable:true})
    @Type(() => playersUpdateToOneWithWhereWithoutPlayer_rebate_ratesInput)
    update?: playersUpdateToOneWithWhereWithoutPlayer_rebate_ratesInput;
}
