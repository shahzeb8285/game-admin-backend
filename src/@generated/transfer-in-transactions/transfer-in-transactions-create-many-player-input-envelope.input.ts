import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transfer_in_transactionsCreateManyPlayerInput } from './transfer-in-transactions-create-many-player.input';
import { Type } from 'class-transformer';

@InputType()
export class transfer_in_transactionsCreateManyPlayerInputEnvelope {

    @Field(() => [transfer_in_transactionsCreateManyPlayerInput], {nullable:false})
    @Type(() => transfer_in_transactionsCreateManyPlayerInput)
    data!: Array<transfer_in_transactionsCreateManyPlayerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
