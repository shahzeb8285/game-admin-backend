import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminBankAccountWhereInput } from './admin-bank-account-where.input';
import { Type } from 'class-transformer';
import { AdminBankAccountOrderByWithAggregationInput } from './admin-bank-account-order-by-with-aggregation.input';
import { AdminBankAccountScalarFieldEnum } from './admin-bank-account-scalar-field.enum';
import { AdminBankAccountScalarWhereWithAggregatesInput } from './admin-bank-account-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AdminBankAccountCountAggregateInput } from './admin-bank-account-count-aggregate.input';
import { AdminBankAccountMinAggregateInput } from './admin-bank-account-min-aggregate.input';
import { AdminBankAccountMaxAggregateInput } from './admin-bank-account-max-aggregate.input';

@ArgsType()
export class AdminBankAccountGroupByArgs {

    @Field(() => AdminBankAccountWhereInput, {nullable:true})
    @Type(() => AdminBankAccountWhereInput)
    where?: AdminBankAccountWhereInput;

    @Field(() => [AdminBankAccountOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AdminBankAccountOrderByWithAggregationInput>;

    @Field(() => [AdminBankAccountScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AdminBankAccountScalarFieldEnum>;

    @Field(() => AdminBankAccountScalarWhereWithAggregatesInput, {nullable:true})
    having?: AdminBankAccountScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AdminBankAccountCountAggregateInput, {nullable:true})
    _count?: AdminBankAccountCountAggregateInput;

    @Field(() => AdminBankAccountMinAggregateInput, {nullable:true})
    _min?: AdminBankAccountMinAggregateInput;

    @Field(() => AdminBankAccountMaxAggregateInput, {nullable:true})
    _max?: AdminBankAccountMaxAggregateInput;
}
