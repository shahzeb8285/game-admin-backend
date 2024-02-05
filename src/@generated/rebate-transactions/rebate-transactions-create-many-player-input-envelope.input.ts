import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { rebate_transactionsCreateManyPlayerInput } from './rebate-transactions-create-many-player.input';
import { Type } from 'class-transformer';

@InputType()
export class rebate_transactionsCreateManyPlayerInputEnvelope {

    @Field(() => [rebate_transactionsCreateManyPlayerInput], {nullable:false})
    @Type(() => rebate_transactionsCreateManyPlayerInput)
    data!: Array<rebate_transactionsCreateManyPlayerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
