import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { rebate_transactionsWhereInput } from './rebate-transactions-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { PlayersRelationFilter } from '../prisma/players-relation-filter.input';

@InputType()
export class rebate_transactionsWhereUniqueInput {

    @Field(() => String, {nullable:true})
    rebate_transaction_id?: string;

    @Field(() => [rebate_transactionsWhereInput], {nullable:true})
    AND?: Array<rebate_transactionsWhereInput>;

    @Field(() => [rebate_transactionsWhereInput], {nullable:true})
    OR?: Array<rebate_transactionsWhereInput>;

    @Field(() => [rebate_transactionsWhereInput], {nullable:true})
    NOT?: Array<rebate_transactionsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    player_id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    amount?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    bonus_type?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    trans_date?: DateTimeFilter;

    @Field(() => PlayersRelationFilter, {nullable:true})
    player?: PlayersRelationFilter;
}
