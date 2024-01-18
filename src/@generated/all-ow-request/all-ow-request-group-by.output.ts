import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AllOwRequestCountAggregate } from './all-ow-request-count-aggregate.output';
import { AllOwRequestMinAggregate } from './all-ow-request-min-aggregate.output';
import { AllOwRequestMaxAggregate } from './all-ow-request-max-aggregate.output';

@ObjectType()
export class AllOwRequestGroupBy {

    @Field(() => String, {nullable:false})
    allow_request_id!: string;

    @Field(() => String, {nullable:false})
    request!: string;

    @Field(() => Date, {nullable:false})
    cdate!: Date | string;

    @Field(() => AllOwRequestCountAggregate, {nullable:true})
    _count?: AllOwRequestCountAggregate;

    @Field(() => AllOwRequestMinAggregate, {nullable:true})
    _min?: AllOwRequestMinAggregate;

    @Field(() => AllOwRequestMaxAggregate, {nullable:true})
    _max?: AllOwRequestMaxAggregate;
}
