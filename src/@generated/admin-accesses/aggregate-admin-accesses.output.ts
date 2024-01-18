import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AdminAccessesCountAggregate } from './admin-accesses-count-aggregate.output';
import { AdminAccessesMinAggregate } from './admin-accesses-min-aggregate.output';
import { AdminAccessesMaxAggregate } from './admin-accesses-max-aggregate.output';

@ObjectType()
export class AggregateAdminAccesses {

    @Field(() => AdminAccessesCountAggregate, {nullable:true})
    _count?: AdminAccessesCountAggregate;

    @Field(() => AdminAccessesMinAggregate, {nullable:true})
    _min?: AdminAccessesMinAggregate;

    @Field(() => AdminAccessesMaxAggregate, {nullable:true})
    _max?: AdminAccessesMaxAggregate;
}
