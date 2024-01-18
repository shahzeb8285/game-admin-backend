import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class All_ow_requestsMinAggregate {

    @Field(() => String, {nullable:true})
    allow_request_id?: string;

    @Field(() => String, {nullable:true})
    request?: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;
}
