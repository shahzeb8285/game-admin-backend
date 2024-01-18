import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransferInTransactionCreateManyInput } from './transfer-in-transaction-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyTransferInTransactionArgs {

    @Field(() => [TransferInTransactionCreateManyInput], {nullable:false})
    @Type(() => TransferInTransactionCreateManyInput)
    data!: Array<TransferInTransactionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
