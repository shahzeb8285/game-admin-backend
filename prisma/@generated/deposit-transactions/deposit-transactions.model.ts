import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { TransactionType } from '../prisma/transaction-type.enum';
import { players } from '../players/players.model';
import { admin_bank_accounts } from '../admin-bank-accounts/admin-bank-accounts.model';

@ObjectType()
export class deposit_transactions {

    @Field(() => ID, {nullable:false})
    deposit_transaction_id!: string;

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
    admin_bank_account_id_r!: string;

    @Field(() => players, {nullable:false})
    players?: players;

    @Field(() => admin_bank_accounts, {nullable:false})
    admin_bank_accounts?: admin_bank_accounts;
}
