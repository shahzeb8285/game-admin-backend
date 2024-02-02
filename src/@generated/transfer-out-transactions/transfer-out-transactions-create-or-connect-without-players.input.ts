import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transfer_out_transactionsWhereUniqueInput } from './transfer-out-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { transfer_out_transactionsCreateWithoutPlayersInput } from './transfer-out-transactions-create-without-players.input';

@InputType()
export class transfer_out_transactionsCreateOrConnectWithoutPlayersInput {

    @Field(() => transfer_out_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => transfer_out_transactionsWhereUniqueInput)
    where!: transfer_out_transactionsWhereUniqueInput;

    @Field(() => transfer_out_transactionsCreateWithoutPlayersInput, {nullable:false})
    @Type(() => transfer_out_transactionsCreateWithoutPlayersInput)
    create!: transfer_out_transactionsCreateWithoutPlayersInput;
}
