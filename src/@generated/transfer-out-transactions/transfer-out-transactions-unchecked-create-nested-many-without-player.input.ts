import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transfer_out_transactionsCreateWithoutPlayerInput } from './transfer-out-transactions-create-without-player.input';
import { Type } from 'class-transformer';
import { transfer_out_transactionsCreateOrConnectWithoutPlayerInput } from './transfer-out-transactions-create-or-connect-without-player.input';
import { transfer_out_transactionsCreateManyPlayerInputEnvelope } from './transfer-out-transactions-create-many-player-input-envelope.input';
import { transfer_out_transactionsWhereUniqueInput } from './transfer-out-transactions-where-unique.input';

@InputType()
export class transfer_out_transactionsUncheckedCreateNestedManyWithoutPlayerInput {

    @Field(() => [transfer_out_transactionsCreateWithoutPlayerInput], {nullable:true})
    @Type(() => transfer_out_transactionsCreateWithoutPlayerInput)
    create?: Array<transfer_out_transactionsCreateWithoutPlayerInput>;

    @Field(() => [transfer_out_transactionsCreateOrConnectWithoutPlayerInput], {nullable:true})
    @Type(() => transfer_out_transactionsCreateOrConnectWithoutPlayerInput)
    connectOrCreate?: Array<transfer_out_transactionsCreateOrConnectWithoutPlayerInput>;

    @Field(() => transfer_out_transactionsCreateManyPlayerInputEnvelope, {nullable:true})
    @Type(() => transfer_out_transactionsCreateManyPlayerInputEnvelope)
    createMany?: transfer_out_transactionsCreateManyPlayerInputEnvelope;

    @Field(() => [transfer_out_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => transfer_out_transactionsWhereUniqueInput)
    connect?: Array<transfer_out_transactionsWhereUniqueInput>;
}
