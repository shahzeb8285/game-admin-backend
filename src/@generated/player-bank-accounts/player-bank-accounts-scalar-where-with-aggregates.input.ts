import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { Enumbank_methodWithAggregatesFilter } from '../prisma/enumbank-method-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class player_bank_accountsScalarWhereWithAggregatesInput {

    @Field(() => [player_bank_accountsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<player_bank_accountsScalarWhereWithAggregatesInput>;

    @Field(() => [player_bank_accountsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<player_bank_accountsScalarWhereWithAggregatesInput>;

    @Field(() => [player_bank_accountsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<player_bank_accountsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    player_bank_account_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    player_id?: StringWithAggregatesFilter;

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
