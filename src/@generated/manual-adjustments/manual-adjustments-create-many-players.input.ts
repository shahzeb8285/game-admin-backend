import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class manual_adjustmentsCreateManyPlayersInput {

    @Field(() => String, {nullable:true})
    manual_adjustment_id?: string;

    @Field(() => String, {nullable:false})
    reason!: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;
}
