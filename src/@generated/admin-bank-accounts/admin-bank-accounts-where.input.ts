import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Enumbank_methodFilter } from '../prisma/enumbank-method-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { Deposit_transactionsListRelationFilter } from '../prisma/deposit-transactions-list-relation-filter.input';

@InputType()
export class admin_bank_accountsWhereInput {

    @Field(() => [admin_bank_accountsWhereInput], {nullable:true})
    AND?: Array<admin_bank_accountsWhereInput>;

    @Field(() => [admin_bank_accountsWhereInput], {nullable:true})
    OR?: Array<admin_bank_accountsWhereInput>;

    @Field(() => [admin_bank_accountsWhereInput], {nullable:true})
    NOT?: Array<admin_bank_accountsWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    admin_bank_account_id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    bank_name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    account_number?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    holder_name?: StringFilter;

    @Field(() => Enumbank_methodFilter, {nullable:true})
    method?: Enumbank_methodFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    udate?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    enabled?: BoolFilter;

    @Field(() => Deposit_transactionsListRelationFilter, {nullable:true})
    deposit_transactions?: Deposit_transactionsListRelationFilter;
}
