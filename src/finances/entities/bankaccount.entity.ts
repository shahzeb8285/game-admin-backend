import { ObjectType, Field, Int, Float, ID } from '@nestjs/graphql';
import { DepositEntity, WithdrawalEntity } from './finance.entity';

@ObjectType()
export class BankAccountEntity {

   
    @Field(() => ID, {nullable:false})
    admin_bank_account_id!: string;

    @Field(() => String, {nullable:false})
    bank_name!: string;

    @Field(() => String, {nullable:false})
    account_number!: string;

    @Field(() => String, {nullable:false})
    holder_name!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    enabled!: boolean;

    @Field(() => String, {nullable:false})
    method!: string;

    @Field(() => [DepositEntity], {nullable:true})
    deposit_transactions?: Array<DepositEntity>;

    @Field(() => [WithdrawalEntity], {nullable:true})
    withdrawal_transactions?: Array<WithdrawalEntity>;



}