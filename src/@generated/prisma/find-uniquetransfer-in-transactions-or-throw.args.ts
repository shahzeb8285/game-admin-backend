import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { transfer_in_transactionsWhereUniqueInput } from '../transfer-in-transactions/transfer-in-transactions-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquetransferInTransactionsOrThrowArgs {

    @Field(() => transfer_in_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => transfer_in_transactionsWhereUniqueInput)
    where!: transfer_in_transactionsWhereUniqueInput;
}
