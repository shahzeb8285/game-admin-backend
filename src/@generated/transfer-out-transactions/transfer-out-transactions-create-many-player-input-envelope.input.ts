import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transfer_out_transactionsCreateManyPlayerInput } from './transfer-out-transactions-create-many-player.input';
import { Type } from 'class-transformer';

@InputType()
export class transfer_out_transactionsCreateManyPlayerInputEnvelope {

    @Field(() => [transfer_out_transactionsCreateManyPlayerInput], {nullable:false})
    @Type(() => transfer_out_transactionsCreateManyPlayerInput)
    data!: Array<transfer_out_transactionsCreateManyPlayerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
