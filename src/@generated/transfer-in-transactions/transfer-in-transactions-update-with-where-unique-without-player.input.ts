import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transfer_in_transactionsWhereUniqueInput } from './transfer-in-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { transfer_in_transactionsUpdateWithoutPlayerInput } from './transfer-in-transactions-update-without-player.input';

@InputType()
export class transfer_in_transactionsUpdateWithWhereUniqueWithoutPlayerInput {

    @Field(() => transfer_in_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => transfer_in_transactionsWhereUniqueInput)
    where!: transfer_in_transactionsWhereUniqueInput;

    @Field(() => transfer_in_transactionsUpdateWithoutPlayerInput, {nullable:false})
    @Type(() => transfer_in_transactionsUpdateWithoutPlayerInput)
    data!: transfer_in_transactionsUpdateWithoutPlayerInput;
}
