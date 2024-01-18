import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerWhereInput } from './player-where.input';
import { Type } from 'class-transformer';
import { PlayerUpdateWithoutWithdrawal_transactionsInput } from './player-update-without-withdrawal-transactions.input';

@InputType()
export class PlayerUpdateToOneWithWhereWithoutWithdrawal_transactionsInput {

    @Field(() => PlayerWhereInput, {nullable:true})
    @Type(() => PlayerWhereInput)
    where?: PlayerWhereInput;

    @Field(() => PlayerUpdateWithoutWithdrawal_transactionsInput, {nullable:false})
    @Type(() => PlayerUpdateWithoutWithdrawal_transactionsInput)
    data!: PlayerUpdateWithoutWithdrawal_transactionsInput;
}
