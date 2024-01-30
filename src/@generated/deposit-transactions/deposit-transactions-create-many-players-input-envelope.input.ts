import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { deposit_transactionsCreateManyPlayersInput } from './deposit-transactions-create-many-players.input';
import { Type } from 'class-transformer';

@InputType()
export class deposit_transactionsCreateManyPlayersInputEnvelope {

    @Field(() => [deposit_transactionsCreateManyPlayersInput], {nullable:false})
    @Type(() => deposit_transactionsCreateManyPlayersInput)
    data!: Array<deposit_transactionsCreateManyPlayersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
