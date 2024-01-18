import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AllOwRequestWhereInput } from './all-ow-request-where.input';
import { Type } from 'class-transformer';
import { AllOwRequestOrderByWithRelationInput } from './all-ow-request-order-by-with-relation.input';
import { AllOwRequestWhereUniqueInput } from './all-ow-request-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AllOwRequestCountAggregateInput } from './all-ow-request-count-aggregate.input';
import { AllOwRequestMinAggregateInput } from './all-ow-request-min-aggregate.input';
import { AllOwRequestMaxAggregateInput } from './all-ow-request-max-aggregate.input';

@ArgsType()
export class AllOwRequestAggregateArgs {

    @Field(() => AllOwRequestWhereInput, {nullable:true})
    @Type(() => AllOwRequestWhereInput)
    where?: AllOwRequestWhereInput;

    @Field(() => [AllOwRequestOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AllOwRequestOrderByWithRelationInput>;

    @Field(() => AllOwRequestWhereUniqueInput, {nullable:true})
    cursor?: AllOwRequestWhereUniqueInput;

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
