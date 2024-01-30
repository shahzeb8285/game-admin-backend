import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AdminsCountAggregate } from './admins-count-aggregate.output';
import { AdminsMinAggregate } from './admins-min-aggregate.output';
import { AdminsMaxAggregate } from './admins-max-aggregate.output';

@ObjectType()
export class AdminsGroupBy {

    @Field(() => String, {nullable:false})
    admin_id!: string;

    @Field(() => String, {nullable:false})
    admin_name!: string;

    @Field(() => String, {nullable:false})
    admin_password!: string;

    @Field(() => String, {nullable:false})
    admin_role_id!: string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => Date, {nullable:false})
    cdate!: Date | string;

    @Field(() => Date, {nullable:false})
    udate!: Date | string;

    @Field(() => Boolean, {nullable:false})
    enabled!: boolean;

    @Field(() => AdminsCountAggregate, {nullable:true})
    _count?: AdminsCountAggregate;

    @Field(() => AdminsMinAggregate, {nullable:true})
    _min?: AdminsMinAggregate;

    @Field(() => AdminsMaxAggregate, {nullable:true})
    _max?: AdminsMaxAggregate;
}
