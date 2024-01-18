import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AllOwRequestUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    allow_request_id?: string;

    @Field(() => String, {nullable:false})
    request!: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;
}