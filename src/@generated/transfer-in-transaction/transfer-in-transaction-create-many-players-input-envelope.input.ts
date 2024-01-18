import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransferInTransactionCreateManyPlayersInput } from './transfer-in-transaction-create-many-players.input';
import { Type } from 'class-transformer';

@InputType()
export class TransferInTransactionCreateManyPlayersInputEnvelope {

    @Field(() => [TransferInTransactionCreateManyPlayersInput], {nullable:false})
    @Type(() => TransferInTransactionCreateManyPlayersInput)
    data!: Array<TransferInTransactionCreateManyPlayersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
