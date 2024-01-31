import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { AgentsRelationFilter } from '../prisma/agents-relation-filter.input';
import { Deposit_transactionsListRelationFilter } from '../prisma/deposit-transactions-list-relation-filter.input';
import { Withdrawal_transactionsListRelationFilter } from '../prisma/withdrawal-transactions-list-relation-filter.input';

@InputType()
export class playersWhereInput {

    @Field(() => [playersWhereInput], {nullable:true})
    AND?: Array<playersWhereInput>;

    @Field(() => [playersWhereInput], {nullable:true})
    OR?: Array<playersWhereInput>;

    @Field(() => [playersWhereInput], {nullable:true})
    NOT?: Array<playersWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    player_id?: UuidFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    tg_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    tg_first_name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    tg_last_name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    tg_username?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    tg_photo_url?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    user_language?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    registration_ip?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    agent_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    registration_date?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    fundist_password?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    udate?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    enabled?: BoolFilter;

    @Field(() => AgentsRelationFilter, {nullable:true})
    agent?: AgentsRelationFilter;

    @Field(() => Deposit_transactionsListRelationFilter, {nullable:true})
    deposit_transactions?: Deposit_transactionsListRelationFilter;

    @Field(() => Withdrawal_transactionsListRelationFilter, {nullable:true})
    withdrawal_transactions?: Withdrawal_transactionsListRelationFilter;
}