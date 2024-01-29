import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { TransactionType } from '../prisma/transaction-type.enum';
import { Player } from '../player/player.model';
import { AdminBankAccount } from '../admin-bank-account/admin-bank-account.model';

@ObjectType()
export class WithdrawalTransaction {

    @Field(() => ID, {nullable:false})
    withdrawal_transaction_id!: string;

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
    admin_bank_account_id!: string;

    @Field(() => Player, {nullable:false})
    players?: Player;

    @Field(() => AdminBankAccount, {nullable:false})
    admin_bank_accounts?: AdminBankAccount;
}
