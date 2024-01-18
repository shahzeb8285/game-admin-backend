import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transfer_out_transactionsWhereUniqueInput } from './transfer-out-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { transfer_out_transactionsUpdateWithoutPlayersInput } from './transfer-out-transactions-update-without-players.input';

@InputType()
export class transfer_out_transactionsUpdateWithWhereUniqueWithoutPlayersInput {

    @Field(() => transfer_out_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => transfer_out_transactionsWhereUniqueInput)
    where!: transfer_out_transactionsWhereUniqueInput;

    @Field(() => transfer_out_transactionsUpdateWithoutPlayersInput, {nullable:false})
    @Type(() => transfer_out_transactionsUpdateWithoutPlayersInput)
    data!: transfer_out_transactionsUpdateWithoutPlayersInput;
}
