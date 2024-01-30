import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { agentsCreateNestedOneWithoutPlayersInput } from '../agents/agents-create-nested-one-without-players.input';
import { deposit_transactionsCreateNestedManyWithoutPlayersInput } from '../deposit-transactions/deposit-transactions-create-nested-many-without-players.input';

@InputType()
export class playersCreateWithoutWithdrawal_transactionsInput {

    @Field(() => String, {nullable:true})
    player_id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    tg_id!: string;

    @Field(() => String, {nullable:false})
    tg_first_name!: string;

    @Field(() => String, {nullable:false})
    tg_last_name!: string;

    @Field(() => String, {nullable:false})
    tg_username!: string;

    @Field(() => String, {nullable:false})
    tg_photo_url!: string;

    @Field(() => String, {nullable:false})
    user_language!: string;

    @Field(() => String, {nullable:false})
    registration_ip!: string;

    @Field(() => String, {nullable:false})
    registration_date!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    fundist_password!: string;

    @Field(() => Date, {nullable:true})
    cdate?: Date | string;

    @Field(() => Date, {nullable:true})
    udate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => agentsCreateNestedOneWithoutPlayersInput, {nullable:false})
    agent!: agentsCreateNestedOneWithoutPlayersInput;

    @Field(() => deposit_transactionsCreateNestedManyWithoutPlayersInput, {nullable:true})
    deposit_transactions?: deposit_transactionsCreateNestedManyWithoutPlayersInput;
}
