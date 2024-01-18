import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersUpdateWithoutWallet_requestsInput } from './players-update-without-wallet-requests.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutWallet_requestsInput } from './players-create-without-wallet-requests.input';
import { playersWhereInput } from './players-where.input';

@InputType()
export class playersUpsertWithoutWallet_requestsInput {

    @Field(() => playersUpdateWithoutWallet_requestsInput, {nullable:false})
    @Type(() => playersUpdateWithoutWallet_requestsInput)
    update!: playersUpdateWithoutWallet_requestsInput;

    @Field(() => playersCreateWithoutWallet_requestsInput, {nullable:false})
    @Type(() => playersCreateWithoutWallet_requestsInput)
    create!: playersCreateWithoutWallet_requestsInput;

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;
}
