import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transfer_out_transactionsScalarWhereInput } from './transfer-out-transactions-scalar-where.input';
import { Type } from 'class-transformer';
import { transfer_out_transactionsUpdateManyMutationInput } from './transfer-out-transactions-update-many-mutation.input';

@InputType()
export class transfer_out_transactionsUpdateManyWithWhereWithoutProcessed_by_adminInput {

    @Field(() => transfer_out_transactionsScalarWhereInput, {nullable:false})
    @Type(() => transfer_out_transactionsScalarWhereInput)
    where!: transfer_out_transactionsScalarWhereInput;

    @Field(() => transfer_out_transactionsUpdateManyMutationInput, {nullable:false})
    @Type(() => transfer_out_transactionsUpdateManyMutationInput)
    data!: transfer_out_transactionsUpdateManyMutationInput;
}
