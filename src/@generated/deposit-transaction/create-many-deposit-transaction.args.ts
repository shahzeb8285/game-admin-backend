import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DepositTransactionCreateManyInput } from './deposit-transaction-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDepositTransactionArgs {

    @Field(() => [DepositTransactionCreateManyInput], {nullable:false})
    @Type(() => DepositTransactionCreateManyInput)
    data!: Array<DepositTransactionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
