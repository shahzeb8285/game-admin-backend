import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class banksCreateInput {

    @Field(() => String, {nullable:true})
    bank_id?: string;

    @Field(() => String, {nullable:false})
    bank_name!: string;

    @Field(() => String, {nullable:false})
    bank_code!: string;
}
