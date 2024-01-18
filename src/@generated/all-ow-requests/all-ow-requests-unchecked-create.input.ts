import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class all_ow_requestsUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    allow_request_id?: string;

    @Field(() => String, {nullable:false})
    request!: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;
}
