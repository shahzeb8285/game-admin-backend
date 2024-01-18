import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerWhereInput } from './player-where.input';
import { Type } from 'class-transformer';
import { PlayerUpdateWithoutDeposit_transactionsInput } from './player-update-without-deposit-transactions.input';

@InputType()
export class PlayerUpdateToOneWithWhereWithoutDeposit_transactionsInput {

    @Field(() => PlayerWhereInput, {nullable:true})
    @Type(() => PlayerWhereInput)
    where?: PlayerWhereInput;

    @Field(() => PlayerUpdateWithoutDeposit_transactionsInput, {nullable:false})
    @Type(() => PlayerUpdateWithoutDeposit_transactionsInput)
    data!: PlayerUpdateWithoutDeposit_transactionsInput;
}
