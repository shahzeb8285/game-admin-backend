import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { deposit_transactionsWhereInput } from './deposit-transactions-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumTransactionTypeFilter } from '../prisma/enum-transaction-type-filter.input';
import { PlayersRelationFilter } from '../prisma/players-relation-filter.input';
import { Admin_bank_accountsRelationFilter } from '../prisma/admin-bank-accounts-relation-filter.input';

@InputType()
export class deposit_transactionsWhereUniqueInput {

    @Field(() => String, {nullable:true})
    deposit_transaction_id?: string;

    @Field(() => [deposit_transactionsWhereInput], {nullable:true})
    AND?: Array<deposit_transactionsWhereInput>;

    @Field(() => [deposit_transactionsWhereInput], {nullable:true})
    OR?: Array<deposit_transactionsWhereInput>;

    @Field(() => [deposit_transactionsWhereInput], {nullable:true})
    NOT?: Array<deposit_transactionsWhereInput>;

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
    admin_bank_account_id_r?: StringFilter;

    @Field(() => PlayersRelationFilter, {nullable:true})
    players?: PlayersRelationFilter;

    @Field(() => Admin_bank_accountsRelationFilter, {nullable:true})
    admin_bank_accounts?: Admin_bank_accountsRelationFilter;
}
