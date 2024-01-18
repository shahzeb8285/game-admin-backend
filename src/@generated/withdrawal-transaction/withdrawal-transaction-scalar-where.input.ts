import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumTransactionTypeFilter } from '../prisma/enum-transaction-type-filter.input';

@InputType()
export class WithdrawalTransactionScalarWhereInput {

    @Field(() => [WithdrawalTransactionScalarWhereInput], {nullable:true})
    AND?: Array<WithdrawalTransactionScalarWhereInput>;

    @Field(() => [WithdrawalTransactionScalarWhereInput], {nullable:true})
    OR?: Array<WithdrawalTransactionScalarWhereInput>;

    @Field(() => [WithdrawalTransactionScalarWhereInput], {nullable:true})
    NOT?: Array<WithdrawalTransactionScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    withdrawal_transaction_id?: StringFilter;

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
}
