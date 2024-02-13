import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transfer_in_transactionsWhereUniqueInput } from './transfer-in-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { transfer_in_transactionsUpdateWithoutPlayerInput } from './transfer-in-transactions-update-without-player.input';
import { transfer_in_transactionsCreateWithoutPlayerInput } from './transfer-in-transactions-create-without-player.input';

@InputType()
export class transfer_in_transactionsUpsertWithWhereUniqueWithoutPlayerInput {

    @Field(() => transfer_in_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => transfer_in_transactionsWhereUniqueInput)
    where!: transfer_in_transactionsWhereUniqueInput;

    @Field(() => transfer_in_transactionsUpdateWithoutPlayerInput, {nullable:false})
    @Type(() => transfer_in_transactionsUpdateWithoutPlayerInput)
    update!: transfer_in_transactionsUpdateWithoutPlayerInput;

    @Field(() => transfer_in_transactionsCreateWithoutPlayerInput, {nullable:false})
    @Type(() => transfer_in_transactionsCreateWithoutPlayerInput)
    create!: transfer_in_transactionsCreateWithoutPlayerInput;
}
