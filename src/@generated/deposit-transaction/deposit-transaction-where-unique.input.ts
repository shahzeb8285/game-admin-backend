import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepositTransactionWhereInput } from './deposit-transaction-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumTransactionTypeFilter } from '../prisma/enum-transaction-type-filter.input';
import { PlayerRelationFilter } from '../player/player-relation-filter.input';
import { AdminBankAccountRelationFilter } from '../admin-bank-account/admin-bank-account-relation-filter.input';

@InputType()
export class DepositTransactionWhereUniqueInput {

    @Field(() => String, {nullable:true})
    deposit_transaction_id?: string;

    @Field(() => [DepositTransactionWhereInput], {nullable:true})
    AND?: Array<DepositTransactionWhereInput>;

    @Field(() => [DepositTransactionWhereInput], {nullable:true})
    OR?: Array<DepositTransactionWhereInput>;

    @Field(() => [DepositTransactionWhereInput], {nullable:true})
    NOT?: Array<DepositTransactionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    player_id_r?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    currency?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    request_time?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    process_time?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    processed_by?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    transaction_date?: StringFilter;

    @Field(() => EnumTransactionTypeFilter, {nullable:true})
    status?: EnumTransactionTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    admin_bank_account_id?: StringFilter;

    @Field(() => PlayerRelationFilter, {nullable:true})
    players?: PlayerRelationFilter;

    @Field(() => AdminBankAccountRelationFilter, {nullable:true})
    admin_bank_accounts?: AdminBankAccountRelationFilter;
}
