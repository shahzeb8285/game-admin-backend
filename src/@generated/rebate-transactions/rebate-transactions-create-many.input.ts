import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class rebate_transactionsCreateManyInput {

    @Field(() => String, {nullable:true})
    rebate_transaction_id?: string;

    @Field(() => String, {nullable:false})
    player_id!: string;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => String, {nullable:true})
    bonus_type?: string;

    @Field(() => String, {nullable:true})
    description?: string;
}
