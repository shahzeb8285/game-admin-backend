import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepositTransactionCreateManyPlayersInput } from './deposit-transaction-create-many-players.input';
import { Type } from 'class-transformer';

@InputType()
export class DepositTransactionCreateManyPlayersInputEnvelope {

    @Field(() => [DepositTransactionCreateManyPlayersInput], {nullable:false})
    @Type(() => DepositTransactionCreateManyPlayersInput)
    data!: Array<DepositTransactionCreateManyPlayersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
