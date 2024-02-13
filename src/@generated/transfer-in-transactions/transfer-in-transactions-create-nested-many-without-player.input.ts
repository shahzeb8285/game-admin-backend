import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transfer_in_transactionsCreateWithoutPlayerInput } from './transfer-in-transactions-create-without-player.input';
import { Type } from 'class-transformer';
import { transfer_in_transactionsCreateOrConnectWithoutPlayerInput } from './transfer-in-transactions-create-or-connect-without-player.input';
import { transfer_in_transactionsCreateManyPlayerInputEnvelope } from './transfer-in-transactions-create-many-player-input-envelope.input';
import { transfer_in_transactionsWhereUniqueInput } from './transfer-in-transactions-where-unique.input';

@InputType()
export class transfer_in_transactionsCreateNestedManyWithoutPlayerInput {

    @Field(() => [transfer_in_transactionsCreateWithoutPlayerInput], {nullable:true})
    @Type(() => transfer_in_transactionsCreateWithoutPlayerInput)
    create?: Array<transfer_in_transactionsCreateWithoutPlayerInput>;

    @Field(() => [transfer_in_transactionsCreateOrConnectWithoutPlayerInput], {nullable:true})
    @Type(() => transfer_in_transactionsCreateOrConnectWithoutPlayerInput)
    connectOrCreate?: Array<transfer_in_transactionsCreateOrConnectWithoutPlayerInput>;

    @Field(() => transfer_in_transactionsCreateManyPlayerInputEnvelope, {nullable:true})
    @Type(() => transfer_in_transactionsCreateManyPlayerInputEnvelope)
    createMany?: transfer_in_transactionsCreateManyPlayerInputEnvelope;

    @Field(() => [transfer_in_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => transfer_in_transactionsWhereUniqueInput)
    connect?: Array<transfer_in_transactionsWhereUniqueInput>;
}
