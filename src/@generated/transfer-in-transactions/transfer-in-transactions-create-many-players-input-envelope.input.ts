import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transfer_in_transactionsCreateManyPlayersInput } from './transfer-in-transactions-create-many-players.input';
import { Type } from 'class-transformer';

@InputType()
export class transfer_in_transactionsCreateManyPlayersInputEnvelope {

    @Field(() => [transfer_in_transactionsCreateManyPlayersInput], {nullable:false})
    @Type(() => transfer_in_transactionsCreateManyPlayersInput)
    data!: Array<transfer_in_transactionsCreateManyPlayersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
