import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class banksUpdateManyMutationInput {

    @Field(() => String, {nullable:true})
    bank_id?: string;

    @Field(() => String, {nullable:true})
    bank_name?: string;

    @Field(() => String, {nullable:true})
    bank_code?: string;
}
