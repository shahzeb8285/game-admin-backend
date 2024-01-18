import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerUpdateWithoutDeposit_transactionsInput } from './player-update-without-deposit-transactions.input';
import { Type } from 'class-transformer';
import { PlayerCreateWithoutDeposit_transactionsInput } from './player-create-without-deposit-transactions.input';
import { PlayerWhereInput } from './player-where.input';

@InputType()
export class PlayerUpsertWithoutDeposit_transactionsInput {

    @Field(() => PlayerUpdateWithoutDeposit_transactionsInput, {nullable:false})
    @Type(() => PlayerUpdateWithoutDeposit_transactionsInput)
    update!: PlayerUpdateWithoutDeposit_transactionsInput;

    @Field(() => PlayerCreateWithoutDeposit_transactionsInput, {nullable:false})
    @Type(() => PlayerCreateWithoutDeposit_transactionsInput)
    create!: PlayerCreateWithoutDeposit_transactionsInput;

    @Field(() => PlayerWhereInput, {nullable:true})
    @Type(() => PlayerWhereInput)
    where?: PlayerWhereInput;
}
