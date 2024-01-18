import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class AdminBankAccountScalarWhereWithAggregatesInput {

    @Field(() => [AdminBankAccountScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AdminBankAccountScalarWhereWithAggregatesInput>;

    @Field(() => [AdminBankAccountScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AdminBankAccountScalarWhereWithAggregatesInput>;

    @Field(() => [AdminBankAccountScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AdminBankAccountScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    admin_bank_account_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    bank_name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    account_number?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    holder_name?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    enabled?: BoolWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    method?: StringWithAggregatesFilter;
}
