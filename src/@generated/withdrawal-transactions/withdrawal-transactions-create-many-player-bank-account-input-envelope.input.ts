import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { withdrawal_transactionsCreateManyPlayer_bank_accountInput } from './withdrawal-transactions-create-many-player-bank-account.input';
import { Type } from 'class-transformer';

@InputType()
export class withdrawal_transactionsCreateManyPlayer_bank_accountInputEnvelope {

    @Field(() => [withdrawal_transactionsCreateManyPlayer_bank_accountInput], {nullable:false})
    @Type(() => withdrawal_transactionsCreateManyPlayer_bank_accountInput)
    data!: Array<withdrawal_transactionsCreateManyPlayer_bank_accountInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
