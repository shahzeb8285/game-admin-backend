import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transfer_out_transactionsWhereUniqueInput } from './transfer-out-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { transfer_out_transactionsUpdateWithoutPlayerInput } from './transfer-out-transactions-update-without-player.input';

@InputType()
export class transfer_out_transactionsUpdateWithWhereUniqueWithoutPlayerInput {

    @Field(() => transfer_out_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => transfer_out_transactionsWhereUniqueInput)
    where!: transfer_out_transactionsWhereUniqueInput;

    @Field(() => transfer_out_transactionsUpdateWithoutPlayerInput, {nullable:false})
    @Type(() => transfer_out_transactionsUpdateWithoutPlayerInput)
    data!: transfer_out_transactionsUpdateWithoutPlayerInput;
}
