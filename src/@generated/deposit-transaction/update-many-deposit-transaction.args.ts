import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DepositTransactionUpdateManyMutationInput } from './deposit-transaction-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DepositTransactionWhereInput } from './deposit-transaction-where.input';

@ArgsType()
export class UpdateManyDepositTransactionArgs {

    @Field(() => DepositTransactionUpdateManyMutationInput, {nullable:false})
    @Type(() => DepositTransactionUpdateManyMutationInput)
    data!: DepositTransactionUpdateManyMutationInput;

    @Field(() => DepositTransactionWhereInput, {nullable:true})
    @Type(() => DepositTransactionWhereInput)
    where?: DepositTransactionWhereInput;
}
