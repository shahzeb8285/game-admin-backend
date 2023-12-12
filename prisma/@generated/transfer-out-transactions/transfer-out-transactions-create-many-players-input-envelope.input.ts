import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transfer_out_transactionsCreateManyPlayersInput } from './transfer-out-transactions-create-many-players.input';
import { Type } from 'class-transformer';

@InputType()
export class transfer_out_transactionsCreateManyPlayersInputEnvelope {

    @Field(() => [transfer_out_transactionsCreateManyPlayersInput], {nullable:false})
    @Type(() => transfer_out_transactionsCreateManyPlayersInput)
    data!: Array<transfer_out_transactionsCreateManyPlayersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
