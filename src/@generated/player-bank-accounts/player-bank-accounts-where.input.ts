import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Enumbank_methodFilter } from '../prisma/enumbank-method-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { Withdrawal_transactionsListRelationFilter } from '../prisma/withdrawal-transactions-list-relation-filter.input';

@InputType()
export class player_bank_accountsWhereInput {

    @Field(() => [player_bank_accountsWhereInput], {nullable:true})
    AND?: Array<player_bank_accountsWhereInput>;

    @Field(() => [player_bank_accountsWhereInput], {nullable:true})
    OR?: Array<player_bank_accountsWhereInput>;

    @Field(() => [player_bank_accountsWhereInput], {nullable:true})
    NOT?: Array<player_bank_accountsWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    player_bank_account_id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    player_id?: StringFilter;

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

    @Field(() => Withdrawal_transactionsListRelationFilter, {nullable:true})
    withdrawal_transactions?: Withdrawal_transactionsListRelationFilter;
}
