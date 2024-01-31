import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { Enumbank_methodWithAggregatesFilter } from '../prisma/enumbank-method-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class admin_bank_accountsScalarWhereWithAggregatesInput {

    @Field(() => [admin_bank_accountsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<admin_bank_accountsScalarWhereWithAggregatesInput>;

    @Field(() => [admin_bank_accountsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<admin_bank_accountsScalarWhereWithAggregatesInput>;

    @Field(() => [admin_bank_accountsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<admin_bank_accountsScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    admin_bank_account_id?: UuidWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    bank_name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    account_number?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    holder_name?: StringWithAggregatesFilter;

    @Field(() => Enumbank_methodWithAggregatesFilter, {nullable:true})
    method?: Enumbank_methodWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    cdate?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    udate?: DateTimeWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    enabled?: BoolWithAggregatesFilter;
}
