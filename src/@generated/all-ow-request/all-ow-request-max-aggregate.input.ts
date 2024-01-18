import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AllOwRequestMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    allow_request_id?: true;

    @Field(() => Boolean, {nullable:true})
    request?: true;

    @Field(() => Boolean, {nullable:true})
    cdate?: true;
}
