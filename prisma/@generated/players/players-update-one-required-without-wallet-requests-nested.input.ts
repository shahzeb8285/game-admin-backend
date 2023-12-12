import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateWithoutWallet_requestsInput } from './players-create-without-wallet-requests.input';
import { Type } from 'class-transformer';
import { playersCreateOrConnectWithoutWallet_requestsInput } from './players-create-or-connect-without-wallet-requests.input';
import { playersUpsertWithoutWallet_requestsInput } from './players-upsert-without-wallet-requests.input';
import { Prisma } from '@prisma/client';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { playersUpdateToOneWithWhereWithoutWallet_requestsInput } from './players-update-to-one-with-where-without-wallet-requests.input';

@InputType()
export class playersUpdateOneRequiredWithoutWallet_requestsNestedInput {

    @Field(() => playersCreateWithoutWallet_requestsInput, {nullable:true})
    @Type(() => playersCreateWithoutWallet_requestsInput)
    create?: playersCreateWithoutWallet_requestsInput;

    @Field(() => playersCreateOrConnectWithoutWallet_requestsInput, {nullable:true})
    @Type(() => playersCreateOrConnectWithoutWallet_requestsInput)
    connectOrCreate?: playersCreateOrConnectWithoutWallet_requestsInput;

    @Field(() => playersUpsertWithoutWallet_requestsInput, {nullable:true})
    @Type(() => playersUpsertWithoutWallet_requestsInput)
    upsert?: playersUpsertWithoutWallet_requestsInput;

    @Field(() => playersWhereUniqueInput, {nullable:true})
    @Type(() => playersWhereUniqueInput)
    connect?: Prisma.AtLeast<playersWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>;

    @Field(() => playersUpdateToOneWithWhereWithoutWallet_requestsInput, {nullable:true})
    @Type(() => playersUpdateToOneWithWhereWithoutWallet_requestsInput)
    update?: playersUpdateToOneWithWhereWithoutWallet_requestsInput;
}
