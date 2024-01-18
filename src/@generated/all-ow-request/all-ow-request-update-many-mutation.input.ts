import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AllOwRequestUpdateManyMutationInput {

    @Field(() => String, {nullable:true})
    allow_request_id?: string;

    @Field(() => String, {nullable:true})
    request?: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;
}
