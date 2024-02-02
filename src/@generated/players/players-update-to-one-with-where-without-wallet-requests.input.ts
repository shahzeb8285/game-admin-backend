import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereInput } from './players-where.input';
import { Type } from 'class-transformer';
import { playersUpdateWithoutWallet_requestsInput } from './players-update-without-wallet-requests.input';

@InputType()
export class playersUpdateToOneWithWhereWithoutWallet_requestsInput {

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;

    @Field(() => playersUpdateWithoutWallet_requestsInput, {nullable:false})
    @Type(() => playersUpdateWithoutWallet_requestsInput)
    data!: playersUpdateWithoutWallet_requestsInput;
}
