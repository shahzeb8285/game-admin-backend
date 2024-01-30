import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { All_ow_requestsCountAggregate } from './all-ow-requests-count-aggregate.output';
import { All_ow_requestsMinAggregate } from './all-ow-requests-min-aggregate.output';
import { All_ow_requestsMaxAggregate } from './all-ow-requests-max-aggregate.output';

@ObjectType()
export class AggregateAll_ow_requests {

    @Field(() => All_ow_requestsCountAggregate, {nullable:true})
    _count?: All_ow_requestsCountAggregate;

    @Field(() => All_ow_requestsMinAggregate, {nullable:true})
    _min?: All_ow_requestsMinAggregate;

    @Field(() => All_ow_requestsMaxAggregate, {nullable:true})
    _max?: All_ow_requestsMaxAggregate;
}
