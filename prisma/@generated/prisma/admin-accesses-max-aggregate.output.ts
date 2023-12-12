import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Admin_accessesMaxAggregate {

    @Field(() => String, {nullable:true})
    admin_access_id?: string;

    @Field(() => String, {nullable:true})
    access_name?: string;
}
