import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { rebate_transactionsScalarWhereInput } from './rebate-transactions-scalar-where.input';
import { Type } from 'class-transformer';
import { rebate_transactionsUpdateManyMutationInput } from './rebate-transactions-update-many-mutation.input';

@InputType()
export class rebate_transactionsUpdateManyWithWhereWithoutPlayerInput {

    @Field(() => rebate_transactionsScalarWhereInput, {nullable:false})
    @Type(() => rebate_transactionsScalarWhereInput)
    where!: rebate_transactionsScalarWhereInput;

    @Field(() => rebate_transactionsUpdateManyMutationInput, {nullable:false})
    @Type(() => rebate_transactionsUpdateManyMutationInput)
    data!: rebate_transactionsUpdateManyMutationInput;
}
