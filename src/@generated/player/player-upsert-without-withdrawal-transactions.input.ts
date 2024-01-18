import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerUpdateWithoutWithdrawal_transactionsInput } from './player-update-without-withdrawal-transactions.input';
import { Type } from 'class-transformer';
import { PlayerCreateWithoutWithdrawal_transactionsInput } from './player-create-without-withdrawal-transactions.input';
import { PlayerWhereInput } from './player-where.input';

@InputType()
export class PlayerUpsertWithoutWithdrawal_transactionsInput {

    @Field(() => PlayerUpdateWithoutWithdrawal_transactionsInput, {nullable:false})
    @Type(() => PlayerUpdateWithoutWithdrawal_transactionsInput)
    update!: PlayerUpdateWithoutWithdrawal_transactionsInput;

    @Field(() => PlayerCreateWithoutWithdrawal_transactionsInput, {nullable:false})
    @Type(() => PlayerCreateWithoutWithdrawal_transactionsInput)
    create!: PlayerCreateWithoutWithdrawal_transactionsInput;

    @Field(() => PlayerWhereInput, {nullable:true})
    @Type(() => PlayerWhereInput)
    where?: PlayerWhereInput;
}
