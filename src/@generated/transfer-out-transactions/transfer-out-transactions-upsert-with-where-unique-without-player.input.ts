import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transfer_out_transactionsWhereUniqueInput } from './transfer-out-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { transfer_out_transactionsUpdateWithoutPlayerInput } from './transfer-out-transactions-update-without-player.input';
import { transfer_out_transactionsCreateWithoutPlayerInput } from './transfer-out-transactions-create-without-player.input';

@InputType()
export class transfer_out_transactionsUpsertWithWhereUniqueWithoutPlayerInput {

    @Field(() => transfer_out_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => transfer_out_transactionsWhereUniqueInput)
    where!: transfer_out_transactionsWhereUniqueInput;

    @Field(() => transfer_out_transactionsUpdateWithoutPlayerInput, {nullable:false})
    @Type(() => transfer_out_transactionsUpdateWithoutPlayerInput)
    update!: transfer_out_transactionsUpdateWithoutPlayerInput;

    @Field(() => transfer_out_transactionsCreateWithoutPlayerInput, {nullable:false})
    @Type(() => transfer_out_transactionsCreateWithoutPlayerInput)
    create!: transfer_out_transactionsCreateWithoutPlayerInput;
}
