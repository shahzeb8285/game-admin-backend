import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class All_ow_requestsMaxAggregate {

    @Field(() => String, {nullable:true})
    all_ow_request_id?: string;

    @Field(() => String, {nullable:true})
    request?: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;
}
