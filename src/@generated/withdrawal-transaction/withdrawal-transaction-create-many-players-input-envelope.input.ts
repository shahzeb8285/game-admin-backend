import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WithdrawalTransactionCreateManyPlayersInput } from './withdrawal-transaction-create-many-players.input';
import { Type } from 'class-transformer';

@InputType()
export class WithdrawalTransactionCreateManyPlayersInputEnvelope {

    @Field(() => [WithdrawalTransactionCreateManyPlayersInput], {nullable:false})
    @Type(() => WithdrawalTransactionCreateManyPlayersInput)
    data!: Array<WithdrawalTransactionCreateManyPlayersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
