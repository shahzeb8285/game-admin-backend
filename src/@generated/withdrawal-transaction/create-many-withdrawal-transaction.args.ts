import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WithdrawalTransactionCreateManyInput } from './withdrawal-transaction-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyWithdrawalTransactionArgs {

    @Field(() => [WithdrawalTransactionCreateManyInput], {nullable:false})
    @Type(() => WithdrawalTransactionCreateManyInput)
    data!: Array<WithdrawalTransactionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
