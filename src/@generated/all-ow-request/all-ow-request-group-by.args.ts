import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AllOwRequestWhereInput } from './all-ow-request-where.input';
import { Type } from 'class-transformer';
import { AllOwRequestOrderByWithAggregationInput } from './all-ow-request-order-by-with-aggregation.input';
import { AllOwRequestScalarFieldEnum } from './all-ow-request-scalar-field.enum';
import { AllOwRequestScalarWhereWithAggregatesInput } from './all-ow-request-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AllOwRequestCountAggregateInput } from './all-ow-request-count-aggregate.input';
import { AllOwRequestMinAggregateInput } from './all-ow-request-min-aggregate.input';
import { AllOwRequestMaxAggregateInput } from './all-ow-request-max-aggregate.input';

@ArgsType()
export class AllOwRequestGroupByArgs {

    @Field(() => AllOwRequestWhereInput, {nullable:true})
    @Type(() => AllOwRequestWhereInput)
    where?: AllOwRequestWhereInput;

    @Field(() => [AllOwRequestOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AllOwRequestOrderByWithAggregationInput>;

    @Field(() => [AllOwRequestScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AllOwRequestScalarFieldEnum>;

    @Field(() => AllOwRequestScalarWhereWithAggregatesInput, {nullable:true})
    having?: AllOwRequestScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AllOwRequestCountAggregateInput, {nullable:true})
    _count?: AllOwRequestCountAggregateInput;

    @Field(() => AllOwRequestMinAggregateInput, {nullable:true})
    _min?: AllOwRequestMinAggregateInput;

    @Field(() => AllOwRequestMaxAggregateInput, {nullable:true})
    _max?: AllOwRequestMaxAggregateInput;
}
