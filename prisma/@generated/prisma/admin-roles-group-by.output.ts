import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Admin_rolesCountAggregate } from './admin-roles-count-aggregate.output';
import { Admin_rolesMinAggregate } from './admin-roles-min-aggregate.output';
import { Admin_rolesMaxAggregate } from './admin-roles-max-aggregate.output';

@ObjectType()
export class Admin_rolesGroupBy {

    @Field(() => String, {nullable:false})
    admin_role_id!: string;

    @Field(() => String, {nullable:false})
    admin_role_name!: string;

    @Field(() => Boolean, {nullable:false})
    enabled!: boolean;

    @Field(() => Admin_rolesCountAggregate, {nullable:true})
    _count?: Admin_rolesCountAggregate;

    @Field(() => Admin_rolesMinAggregate, {nullable:true})
    _min?: Admin_rolesMinAggregate;

    @Field(() => Admin_rolesMaxAggregate, {nullable:true})
    _max?: Admin_rolesMaxAggregate;
}
