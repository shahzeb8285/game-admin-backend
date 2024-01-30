import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { bank_method } from './bank-method.enum';
import { Player_bank_accountsCountAggregate } from './player-bank-accounts-count-aggregate.output';
import { Player_bank_accountsMinAggregate } from './player-bank-accounts-min-aggregate.output';
import { Player_bank_accountsMaxAggregate } from './player-bank-accounts-max-aggregate.output';

@ObjectType()
export class Player_bank_accountsGroupBy {

    @Field(() => String, {nullable:false})
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
    cdate!: Date | string;

    @Field(() => Date, {nullable:false})
    udate!: Date | string;

    @Field(() => Boolean, {nullable:false})
    enabled!: boolean;

    @Field(() => Player_bank_accountsCountAggregate, {nullable:true})
    _count?: Player_bank_accountsCountAggregate;

    @Field(() => Player_bank_accountsMinAggregate, {nullable:true})
    _min?: Player_bank_accountsMinAggregate;

    @Field(() => Player_bank_accountsMaxAggregate, {nullable:true})
    _max?: Player_bank_accountsMaxAggregate;
}
