import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateWithoutPlayer_rebate_ratesInput } from './players-create-without-player-rebate-rates.input';
import { Type } from 'class-transformer';
import { playersCreateOrConnectWithoutPlayer_rebate_ratesInput } from './players-create-or-connect-without-player-rebate-rates.input';
import { playersWhereUniqueInput } from './players-where-unique.input';

@InputType()
export class playersCreateNestedOneWithoutPlayer_rebate_ratesInput {

    @Field(() => playersCreateWithoutPlayer_rebate_ratesInput, {nullable:true})
    @Type(() => playersCreateWithoutPlayer_rebate_ratesInput)
    create?: playersCreateWithoutPlayer_rebate_ratesInput;

    @Field(() => playersCreateOrConnectWithoutPlayer_rebate_ratesInput, {nullable:true})
    @Type(() => playersCreateOrConnectWithoutPlayer_rebate_ratesInput)
    connectOrCreate?: playersCreateOrConnectWithoutPlayer_rebate_ratesInput;

    @Field(() => playersWhereUniqueInput, {nullable:true})
    @Type(() => playersWhereUniqueInput)
    connect?: playersWhereUniqueInput;
}
