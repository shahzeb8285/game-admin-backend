import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AdminAccessesMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    admin_access_id?: true;

    @Field(() => Boolean, {nullable:true})
    access_name?: true;
}
