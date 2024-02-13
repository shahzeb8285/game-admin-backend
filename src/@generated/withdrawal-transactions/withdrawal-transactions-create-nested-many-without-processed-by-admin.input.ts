import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { withdrawal_transactionsCreateWithoutProcessed_by_adminInput } from './withdrawal-transactions-create-without-processed-by-admin.input';
import { Type } from 'class-transformer';
import { withdrawal_transactionsCreateOrConnectWithoutProcessed_by_adminInput } from './withdrawal-transactions-create-or-connect-without-processed-by-admin.input';
import { withdrawal_transactionsCreateManyProcessed_by_adminInputEnvelope } from './withdrawal-transactions-create-many-processed-by-admin-input-envelope.input';
import { withdrawal_transactionsWhereUniqueInput } from './withdrawal-transactions-where-unique.input';

@InputType()
export class withdrawal_transactionsCreateNestedManyWithoutProcessed_by_adminInput {

    @Field(() => [withdrawal_transactionsCreateWithoutProcessed_by_adminInput], {nullable:true})
    @Type(() => withdrawal_transactionsCreateWithoutProcessed_by_adminInput)
    create?: Array<withdrawal_transactionsCreateWithoutProcessed_by_adminInput>;

    @Field(() => [withdrawal_transactionsCreateOrConnectWithoutProcessed_by_adminInput], {nullable:true})
    @Type(() => withdrawal_transactionsCreateOrConnectWithoutProcessed_by_adminInput)
    connectOrCreate?: Array<withdrawal_transactionsCreateOrConnectWithoutProcessed_by_adminInput>;

    @Field(() => withdrawal_transactionsCreateManyProcessed_by_adminInputEnvelope, {nullable:true})
    @Type(() => withdrawal_transactionsCreateManyProcessed_by_adminInputEnvelope)
    createMany?: withdrawal_transactionsCreateManyProcessed_by_adminInputEnvelope;

    @Field(() => [withdrawal_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => withdrawal_transactionsWhereUniqueInput)
    connect?: Array<withdrawal_transactionsWhereUniqueInput>;
}
