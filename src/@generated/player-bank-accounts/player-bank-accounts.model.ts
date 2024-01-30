import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { bank_method } from '../prisma/bank-method.enum';
import { withdrawal_transactions } from '../withdrawal-transactions/withdrawal-transactions.model';
import { Player_bank_accountsCount } from '../prisma/player-bank-accounts-count.output';

@ObjectType()
export class player_bank_accounts {

    @Field(() => ID, {nullable:false})
    player_bank_account_id!: string;

    @Field(() => String, {nullable:false})
    player_id!: string;

    @Field(() => String, {nullable:false})
    bank_name!: string;

    @Field(() => String, {nullable:false})
    account_number!: string;

    @Field(() => String, {nullable:false})
    holder_name!: string;

    @Field(() => bank_method, {nullable:false})
    method!: keyof typeof bank_method;

    @Field(() => Date, {nullable:false})
    cdate!: Date;

    @Field(() => Date, {nullable:false})
    udate!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    enabled!: boolean;

    @Field(() => [withdrawal_transactions], {nullable:true})
    withdrawal_transactions?: Array<withdrawal_transactions>;

    @Field(() => Player_bank_accountsCount, {nullable:false})
    _count?: Player_bank_accountsCount;
}
