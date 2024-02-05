import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { rebate_transactionsCreateWithoutPlayerInput } from './rebate-transactions-create-without-player.input';
import { Type } from 'class-transformer';
import { rebate_transactionsCreateOrConnectWithoutPlayerInput } from './rebate-transactions-create-or-connect-without-player.input';
import { rebate_transactionsCreateManyPlayerInputEnvelope } from './rebate-transactions-create-many-player-input-envelope.input';
import { rebate_transactionsWhereUniqueInput } from './rebate-transactions-where-unique.input';

@InputType()
export class rebate_transactionsCreateNestedManyWithoutPlayerInput {

    @Field(() => [rebate_transactionsCreateWithoutPlayerInput], {nullable:true})
    @Type(() => rebate_transactionsCreateWithoutPlayerInput)
    create?: Array<rebate_transactionsCreateWithoutPlayerInput>;

    @Field(() => [rebate_transactionsCreateOrConnectWithoutPlayerInput], {nullable:true})
    @Type(() => rebate_transactionsCreateOrConnectWithoutPlayerInput)
    connectOrCreate?: Array<rebate_transactionsCreateOrConnectWithoutPlayerInput>;

    @Field(() => rebate_transactionsCreateManyPlayerInputEnvelope, {nullable:true})
    @Type(() => rebate_transactionsCreateManyPlayerInputEnvelope)
    createMany?: rebate_transactionsCreateManyPlayerInputEnvelope;

    @Field(() => [rebate_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => rebate_transactionsWhereUniqueInput)
    connect?: Array<rebate_transactionsWhereUniqueInput>;
}
