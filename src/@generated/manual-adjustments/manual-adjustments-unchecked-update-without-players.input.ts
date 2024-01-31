import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class manual_adjustmentsUncheckedUpdateWithoutPlayersInput {

    @Field(() => String, {nullable:true})
    manual_adjustment_id?: string;

    @Field(() => String, {nullable:true})
    reason?: string;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;
}
