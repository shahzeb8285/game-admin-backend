import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { real_currency } from '../prisma/real-currency.enum';
import { Float } from '@nestjs/graphql';
import { game_currency } from '../prisma/game-currency.enum';
import { wallet_transaction_status } from '../prisma/wallet-transaction-status.enum';
import { players } from '../players/players.model';

@ObjectType()
export class transfer_in_transactions {

    @Field(() => ID, {nullable:false})
    transfer_in_transaction_id!: string;

    @Field(() => String, {nullable:false})
    player_id!: string;

    @Field(() => real_currency, {nullable:false})
    transaction_currency!: keyof typeof real_currency;

    @Field(() => Float, {nullable:false})
    transaction_amount!: number;

    @Field(() => game_currency, {nullable:false})
    game_currency!: keyof typeof game_currency;

    @Field(() => Float, {nullable:false})
    game_amount!: number;

    @Field(() => String, {nullable:false})
    counterpart_platform!: string;

    @Field(() => String, {nullable:false})
    counterpart_username!: string;

    @Field(() => String, {nullable:false})
    transaction_date!: string;

    @Field(() => String, {nullable:false})
    player_remarks!: string;

    @Field(() => String, {nullable:true})
    comment!: string | null;

    @Field(() => String, {nullable:true})
    processed_by!: string | null;

    @Field(() => Date, {nullable:true})
    process_time!: Date | null;

    @Field(() => wallet_transaction_status, {nullable:false,defaultValue:'PENDING'})
    status!: keyof typeof wallet_transaction_status;

    @Field(() => Date, {nullable:false})
    cdate!: Date;

    @Field(() => Date, {nullable:false})
    udate!: Date;

    @Field(() => players, {nullable:false})
    players?: players;
}
