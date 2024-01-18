import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransferOutTransactionCreateManyPlayersInput } from './transfer-out-transaction-create-many-players.input';
import { Type } from 'class-transformer';

@InputType()
export class TransferOutTransactionCreateManyPlayersInputEnvelope {

    @Field(() => [TransferOutTransactionCreateManyPlayersInput], {nullable:false})
    @Type(() => TransferOutTransactionCreateManyPlayersInput)
    data!: Array<TransferOutTransactionCreateManyPlayersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
