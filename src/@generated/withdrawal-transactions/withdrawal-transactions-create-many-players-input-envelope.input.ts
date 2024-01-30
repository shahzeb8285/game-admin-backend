import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { withdrawal_transactionsCreateManyPlayersInput } from './withdrawal-transactions-create-many-players.input';
import { Type } from 'class-transformer';

@InputType()
export class withdrawal_transactionsCreateManyPlayersInputEnvelope {

    @Field(() => [withdrawal_transactionsCreateManyPlayersInput], {nullable:false})
    @Type(() => withdrawal_transactionsCreateManyPlayersInput)
    data!: Array<withdrawal_transactionsCreateManyPlayersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
