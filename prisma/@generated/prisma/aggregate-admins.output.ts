import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AdminsCountAggregate } from './admins-count-aggregate.output';
import { AdminsMinAggregate } from './admins-min-aggregate.output';
import { AdminsMaxAggregate } from './admins-max-aggregate.output';

@ObjectType()
export class AggregateAdmins {

    @Field(() => AdminsCountAggregate, {nullable:true})
    _count?: AdminsCountAggregate;

    @Field(() => AdminsMinAggregate, {nullable:true})
    _min?: AdminsMinAggregate;

    @Field(() => AdminsMaxAggregate, {nullable:true})
    _max?: AdminsMaxAggregate;
}
