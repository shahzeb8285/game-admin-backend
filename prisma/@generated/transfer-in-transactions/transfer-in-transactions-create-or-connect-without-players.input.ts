import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transfer_in_transactionsWhereUniqueInput } from './transfer-in-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { transfer_in_transactionsCreateWithoutPlayersInput } from './transfer-in-transactions-create-without-players.input';

@InputType()
export class transfer_in_transactionsCreateOrConnectWithoutPlayersInput {

    @Field(() => transfer_in_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => transfer_in_transactionsWhereUniqueInput)
    where!: transfer_in_transactionsWhereUniqueInput;

    @Field(() => transfer_in_transactionsCreateWithoutPlayersInput, {nullable:false})
    @Type(() => transfer_in_transactionsCreateWithoutPlayersInput)
    create!: transfer_in_transactionsCreateWithoutPlayersInput;
}
