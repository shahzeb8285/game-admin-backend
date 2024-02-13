import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { deposit_transactionsCreateWithoutProcessed_by_adminInput } from './deposit-transactions-create-without-processed-by-admin.input';
import { Type } from 'class-transformer';
import { deposit_transactionsCreateOrConnectWithoutProcessed_by_adminInput } from './deposit-transactions-create-or-connect-without-processed-by-admin.input';
import { deposit_transactionsCreateManyProcessed_by_adminInputEnvelope } from './deposit-transactions-create-many-processed-by-admin-input-envelope.input';
import { deposit_transactionsWhereUniqueInput } from './deposit-transactions-where-unique.input';

@InputType()
export class deposit_transactionsCreateNestedManyWithoutProcessed_by_adminInput {

    @Field(() => [deposit_transactionsCreateWithoutProcessed_by_adminInput], {nullable:true})
    @Type(() => deposit_transactionsCreateWithoutProcessed_by_adminInput)
    create?: Array<deposit_transactionsCreateWithoutProcessed_by_adminInput>;

    @Field(() => [deposit_transactionsCreateOrConnectWithoutProcessed_by_adminInput], {nullable:true})
    @Type(() => deposit_transactionsCreateOrConnectWithoutProcessed_by_adminInput)
    connectOrCreate?: Array<deposit_transactionsCreateOrConnectWithoutProcessed_by_adminInput>;

    @Field(() => deposit_transactionsCreateManyProcessed_by_adminInputEnvelope, {nullable:true})
    @Type(() => deposit_transactionsCreateManyProcessed_by_adminInputEnvelope)
    createMany?: deposit_transactionsCreateManyProcessed_by_adminInputEnvelope;

    @Field(() => [deposit_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => deposit_transactionsWhereUniqueInput)
    connect?: Array<deposit_transactionsWhereUniqueInput>;
}
