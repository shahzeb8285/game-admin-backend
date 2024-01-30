import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class all_ow_requestsUncheckedUpdateInput {

    @Field(() => String, {nullable:true})
    all_ow_request_id?: string;

    @Field(() => String, {nullable:true})
    request?: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;
}
