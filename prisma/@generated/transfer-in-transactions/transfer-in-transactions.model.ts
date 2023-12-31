import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { TransactionType } from '../prisma/transaction-type.enum';
import { players } from '../players/players.model';

@ObjectType()
export class transfer_in_transactions {

    @Field(() => ID, {nullable:false})
    transfer_in_Transaction_id!: string;

    @Field(() => String, {nullable:false})
    player_id_r!: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => String, {nullable:false})
    currency!: string;

    @Field(() => Date, {nullable:false})
    request_time!: Date;

    @Field(() => Date, {nullable:false})
    process_time!: Date;

    @Field(() => String, {nullable:false})
    processed_by!: string;

    @Field(() => String, {nullable:false})
    transaction_date!: string;

    @Field(() => TransactionType, {nullable:false,defaultValue:'PENDING'})
    status!: keyof typeof TransactionType;

    @Field(() => String, {nullable:false})
    counterpart_platform!: string;

    @Field(() => String, {nullable:false})
    counterpart_username!: string;

    @Field(() => players, {nullable:false})
    players?: players;
}
