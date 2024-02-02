import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutPlayer_rebate_ratesInput } from './players-create-without-player-rebate-rates.input';

@InputType()
export class playersCreateOrConnectWithoutPlayer_rebate_ratesInput {

    @Field(() => playersWhereUniqueInput, {nullable:false})
    @Type(() => playersWhereUniqueInput)
    where!: playersWhereUniqueInput;

    @Field(() => playersCreateWithoutPlayer_rebate_ratesInput, {nullable:false})
    @Type(() => playersCreateWithoutPlayer_rebate_ratesInput)
    create!: playersCreateWithoutPlayer_rebate_ratesInput;
}
