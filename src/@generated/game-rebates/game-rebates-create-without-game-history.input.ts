import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class game_rebatesCreateWithoutGame_historyInput {

    @Field(() => String, {nullable:true})
    game_rebates_id?: string;

    @Field(() => String, {nullable:false})
    merchant_id!: string;

    @Field(() => String, {nullable:false})
    game_id!: string;

    @Field(() => String, {nullable:false})
    category!: string;

    @Field(() => Float, {nullable:false})
    effective_bet_amount!: number;

    @Field(() => Float, {nullable:false})
    rebate_amount!: number;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;
}
