import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AllOwRequestCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    allow_request_id?: true;

    @Field(() => Boolean, {nullable:true})
    request?: true;

    @Field(() => Boolean, {nullable:true})
    cdate?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
