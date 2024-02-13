import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transfer_in_transactionsScalarWhereInput } from './transfer-in-transactions-scalar-where.input';
import { Type } from 'class-transformer';
import { transfer_in_transactionsUpdateManyMutationInput } from './transfer-in-transactions-update-many-mutation.input';

@InputType()
export class transfer_in_transactionsUpdateManyWithWhereWithoutProcessed_by_adminInput {

    @Field(() => transfer_in_transactionsScalarWhereInput, {nullable:false})
    @Type(() => transfer_in_transactionsScalarWhereInput)
    where!: transfer_in_transactionsScalarWhereInput;

    @Field(() => transfer_in_transactionsUpdateManyMutationInput, {nullable:false})
    @Type(() => transfer_in_transactionsUpdateManyMutationInput)
    data!: transfer_in_transactionsUpdateManyMutationInput;
}
