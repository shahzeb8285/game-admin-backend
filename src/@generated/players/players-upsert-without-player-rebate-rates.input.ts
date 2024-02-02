import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersUpdateWithoutPlayer_rebate_ratesInput } from './players-update-without-player-rebate-rates.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutPlayer_rebate_ratesInput } from './players-create-without-player-rebate-rates.input';
import { playersWhereInput } from './players-where.input';

@InputType()
export class playersUpsertWithoutPlayer_rebate_ratesInput {

    @Field(() => playersUpdateWithoutPlayer_rebate_ratesInput, {nullable:false})
    @Type(() => playersUpdateWithoutPlayer_rebate_ratesInput)
    update!: playersUpdateWithoutPlayer_rebate_ratesInput;

    @Field(() => playersCreateWithoutPlayer_rebate_ratesInput, {nullable:false})
    @Type(() => playersCreateWithoutPlayer_rebate_ratesInput)
    create!: playersCreateWithoutPlayer_rebate_ratesInput;

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;
}
