import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransferOutTransactionCreateManyInput } from './transfer-out-transaction-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyTransferOutTransactionArgs {

    @Field(() => [TransferOutTransactionCreateManyInput], {nullable:false})
    @Type(() => TransferOutTransactionCreateManyInput)
    data!: Array<TransferOutTransactionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
