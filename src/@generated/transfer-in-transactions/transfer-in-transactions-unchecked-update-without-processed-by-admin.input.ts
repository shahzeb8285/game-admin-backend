import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { real_currency } from '../prisma/real-currency.enum';
import { Float } from '@nestjs/graphql';
import { game_currency } from '../prisma/game-currency.enum';
import { wallet_transaction_status } from '../prisma/wallet-transaction-status.enum';

@InputType()
export class transfer_in_transactionsUncheckedUpdateWithoutProcessed_by_adminInput {

    @Field(() => String, {nullable:true})
    transfer_in_transaction_id?: string;

    @Field(() => String, {nullable:true})
    player_id?: string;

    @Field(() => real_currency, {nullable:true})
    transaction_currency?: keyof typeof real_currency;

    @Field(() => Float, {nullable:true})
    transaction_amount?: number;

    @Field(() => game_currency, {nullable:true})
    game_currency?: keyof typeof game_currency;

    @Field(() => Float, {nullable:true})
    game_amount?: number;

    @Field(() => String, {nullable:true})
    counterpart_platform?: string;

    @Field(() => String, {nullable:true})
    counterpart_username?: string;

    @Field(() => Date, {nullable:true})
    trans_date?: Date | string;

    @Field(() => String, {nullable:true})
    player_remarks?: string;

    @Field(() => String, {nullable:true})
    comment?: string;

    @Field(() => Date, {nullable:true})
    process_time?: Date | string;

    @Field(() => wallet_transaction_status, {nullable:true})
    status?: keyof typeof wallet_transaction_status;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;
}
