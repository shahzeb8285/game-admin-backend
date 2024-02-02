import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereInput } from './players-where.input';
import { Type } from 'class-transformer';
import { playersUpdateWithoutPlayer_rebate_ratesInput } from './players-update-without-player-rebate-rates.input';

@InputType()
export class playersUpdateToOneWithWhereWithoutPlayer_rebate_ratesInput {

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;

    @Field(() => playersUpdateWithoutPlayer_rebate_ratesInput, {nullable:false})
    @Type(() => playersUpdateWithoutPlayer_rebate_ratesInput)
    data!: playersUpdateWithoutPlayer_rebate_ratesInput;
}
