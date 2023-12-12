import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutWallet_requestsInput } from './players-create-without-wallet-requests.input';

@InputType()
export class playersCreateOrConnectWithoutWallet_requestsInput {

    @Field(() => playersWhereUniqueInput, {nullable:false})
    @Type(() => playersWhereUniqueInput)
    where!: Prisma.AtLeast<playersWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>;

    @Field(() => playersCreateWithoutWallet_requestsInput, {nullable:false})
    @Type(() => playersCreateWithoutWallet_requestsInput)
    create!: playersCreateWithoutWallet_requestsInput;
}
